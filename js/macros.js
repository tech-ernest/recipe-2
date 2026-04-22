/* =====================
   MACROS.JS — weekly macro tracker
   ===================== */

const Macros = (() => {

  const KEYS      = ['calories', 'protein', 'carbs', 'fat']
  const LABELS    = { calories: 'Calories', protein: 'Protein', carbs: 'Carbs', fat: 'Fat' }
  const UNITS     = { calories: 'kcal', protein: 'g', carbs: 'g', fat: 'g' }
  const STEPS     = { calories: 50, protein: 5, carbs: 10, fat: 5 }
  const DAYS      = ['mon','tue','wed','thu','fri','sat','sun']
  const DAY_NAMES = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

  function aggregateDay(dayKey, meals) {
    const t = { calories: 0, protein: 0, carbs: 0, fat: 0 }
    ;['breakfast','lunch','dinner','snack'].forEach(mt => {
      const meal = meals[`${dayKey}-${mt}`]
      if (!meal) return
      const r = recipes.find(r => r.id === meal.recipeId)
      if (!r) return
      const ratio = meal.serves / r.serves
      t.calories += Math.round(r.nutrition.calories * ratio)
      t.protein  += Math.round(r.nutrition.protein  * ratio)
      t.carbs    += Math.round(r.nutrition.carbs    * ratio)
      t.fat      += Math.round(r.nutrition.fat      * ratio)
    })
    return t
  }

  function changeTarget(macro, delta) {
    Settings.changeMacroTarget(macro, delta)
    render()
  }

  function render() {
    const targets = Settings.getMacroTargets()
    const meals   = Planner.getMealsForWeek()

    const targetsEl = document.getElementById('macros-targets')
    if (targetsEl) {
      targetsEl.innerHTML = KEYS.map((macro, i) => `
        ${i > 0 ? '<div class="card-divider"></div>' : ''}
        <div class="settings-row">
          <div>
            <div class="settings-row-label">${LABELS[macro]}</div>
            <div class="settings-row-sub">${UNITS[macro]} · daily target</div>
          </div>
          <div class="settings-stepper">
            <button onclick="Macros.changeTarget('${macro}', ${-STEPS[macro]})">−</button>
            <span id="macro-target-${macro}">${targets[macro]}</span>
            <button onclick="Macros.changeTarget('${macro}', ${STEPS[macro]})">+</button>
          </div>
        </div>
      `).join('')
    }

    const weekEl = document.getElementById('macros-week')
    if (!weekEl) return

    const now   = new Date()
    const dow   = now.getDay()
    const mondayOffset = dow === 0 ? -6 : 1 - dow
    const monday = new Date(now)
    monday.setDate(now.getDate() + mondayOffset)
    const todayIdx = dow === 0 ? 6 : dow - 1

    weekEl.innerHTML = DAYS.map((d, i) => {
      const date    = new Date(monday)
      date.setDate(monday.getDate() + i)
      const dateStr = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
      const totals  = aggregateDay(d, meals)
      const isToday = i === todayIdx
      const isEmpty = totals.calories === 0

      const barsHtml = KEYS.map(macro => {
        const val    = totals[macro]
        const target = targets[macro]
        const pct    = Math.min(100, Math.round((val / target) * 100))
        const over   = val > target
        return `<div class="macro-row">
          <div class="macro-row-label">${LABELS[macro]}</div>
          <div class="macro-bar-wrap">
            <div class="macro-bar${over ? ' over' : ''}" style="width:${pct}%"></div>
          </div>
          <div class="macro-row-val${over ? ' over' : ''}">${val}<span class="macro-row-target"> / ${target}</span></div>
        </div>`
      }).join('')

      return `<div class="macro-day-card${isToday ? ' today' : ''}${isEmpty ? ' empty' : ''}">
        <div class="macro-day-header">
          <span class="macro-day-name">${DAY_NAMES[i]}</span>
          <span class="macro-day-date">${dateStr}</span>
          ${isToday ? '<span class="macro-today-badge">Today</span>' : ''}
        </div>
        ${isEmpty ? '<div class="macro-empty-msg">No meals planned</div>' : barsHtml}
      </div>`
    }).join('')
  }

  return { render, changeTarget }

})()
