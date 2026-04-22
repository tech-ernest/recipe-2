/* =====================
   PLANNER.JS — weekly meal planner
   ===================== */

const Planner = (() => {

  const DAYS = ['mon','tue','wed','thu','fri','sat','sun']
  const DAY_NAMES = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  const MEAL_TYPES = ['breakfast','lunch','dinner','snack']

  let activeSlot = null  // { day, mealType }

  /* ---------- STORAGE ---------- */
  function getWeekKey() {
    const now = new Date()
    const day = now.getDay()
    const diff = now.getDate() - day + (day === 0 ? -6 : 1)
    const monday = new Date(now.setDate(diff))
    return monday.toISOString().split('T')[0]
  }

  function loadPlan() {
    try {
      const raw = localStorage.getItem('ep_planner')
      if (!raw) return {}
      const data = JSON.parse(raw)
      if (data.week !== getWeekKey()) return {}
      return data.meals || {}
    } catch(e) { return {} }
  }

  function savePlan(meals) {
    localStorage.setItem('ep_planner', JSON.stringify({ week: getWeekKey(), meals }))
  }

  /* ---------- RENDER ---------- */
  function render() {
    const meals = loadPlan()
    const container = document.getElementById('planner-week')
    const now = new Date()
    const day = now.getDay()
    const mondayOffset = day === 0 ? -6 : 1 - day
    const monday = new Date(now)
    monday.setDate(now.getDate() + mondayOffset)

    container.innerHTML = DAYS.map((d, i) => {
      const date = new Date(monday)
      date.setDate(monday.getDate() + i)
      const dateStr = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })

      const slotsHtml = MEAL_TYPES.map(mt => {
        const key = `${d}-${mt}`
        const meal = meals[key]
        const recipe = meal ? recipes.find(r => r.id === meal.recipeId) : null
        return `
          <div class="planner-meal-slot" onclick="Planner.openPicker('${d}', '${mt}')">
            <span class="meal-type-label">${mt}</span>
            <div class="meal-slot-content">
              ${recipe
                ? `<div class="meal-slot-title">${recipe.title}</div>
                   <div class="meal-slot-serves">${meal.serves} serving${meal.serves > 1 ? 's' : ''}</div>`
                : `<div class="meal-slot-empty">Tap to add</div>`
              }
            </div>
            ${recipe ? `<div class="meal-slot-remove" onclick="Planner.removeMeal(event,'${d}','${mt}')">×</div>` : ''}
          </div>`
      }).join('')

      return `
        <div class="planner-day">
          <div class="planner-day-header">
            <div class="planner-day-name">${DAY_NAMES[i]}</div>
            <div class="planner-day-date">${dateStr}</div>
          </div>
          ${slotsHtml}
        </div>`
    }).join('')
  }

  /* ---------- PICKER ---------- */
  function openPicker(day, mealType) {
    activeSlot = { day, mealType }
    const overlay = document.getElementById('sheet-overlay')
    const sheet = document.getElementById('bottom-sheet')
    const list = document.getElementById('sheet-list')
    const title = document.getElementById('sheet-title')

    title.textContent = `Add ${mealType}`

    const filtered = recipes.filter(r => r.category === mealType)
    if (filtered.length === 0) {
      list.innerHTML = `<div class="sheet-none">No ${mealType} recipes yet.</div>`
    } else {
      list.innerHTML = filtered.map(r => `
        <div class="sheet-recipe-item" onclick="Planner.selectRecipe('${r.id}')">
          <img class="sheet-recipe-thumb" src="${r.image}" alt="${r.title}" onerror="this.style.background='#333'">
          <div>
            <div class="sheet-recipe-title">${r.title}</div>
            <div class="sheet-recipe-time">${r.prepTime + r.cookTime} min · serves ${r.serves}</div>
          </div>
        </div>`).join('')
    }

    overlay.classList.add('open')
    sheet.classList.add('open')
  }

  function closePicker() {
    document.getElementById('sheet-overlay').classList.remove('open')
    document.getElementById('bottom-sheet').classList.remove('open')
    activeSlot = null
  }

  function selectRecipe(recipeId) {
    if (!activeSlot) return
    const { day, mealType } = activeSlot
    const recipe = recipes.find(r => r.id === recipeId)
    const defaultServes = Settings.getDefaultServes()
    const meals = loadPlan()
    meals[`${day}-${mealType}`] = { recipeId, serves: defaultServes }
    savePlan(meals)
    closePicker()
    render()
  }

  function removeMeal(event, day, mealType) {
    event.stopPropagation()
    const meals = loadPlan()
    delete meals[`${day}-${mealType}`]
    savePlan(meals)
    render()
  }

  function getMealsForWeek() {
    return loadPlan()
  }

  return { render, openPicker, closePicker, selectRecipe, removeMeal, getMealsForWeek }

})()
