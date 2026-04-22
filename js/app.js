/* =====================
   APP.JS — routing, navigation, recipe detail
   ===================== */

const App = (() => {

  let currentPage = 'recipes'
  let currentRecipe = null
  let detailServings = 1
  let detailCheckedIng = new Set()
  let detailCheckedSteps = new Set()
  let detailWakeLock = null
  let currentFilter = 'all'

  /* ---------- INIT ---------- */
  function init() {
    renderNav()
    showPage('recipes')
    renderRecipeGrid('all')
  }

  /* ---------- NAVIGATION ---------- */
  function renderNav() {
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const page = btn.dataset.page
        showPage(page)
      })
    })
  }

  function showPage(page) {
    currentPage = page
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'))
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'))
    const pageEl = document.getElementById('page-' + page)
    if (pageEl) pageEl.classList.add('active')
    const navEl = document.querySelector(`.nav-item[data-page="${page}"]`)
    if (navEl) navEl.classList.add('active')

    if (page === 'planner') Planner.render()
    if (page === 'grocery') Grocery.render()
    if (page === 'settings') Settings.render()
  }

  /* ---------- RECIPE GRID ---------- */
  function renderRecipeGrid(filter) {
    currentFilter = filter
    const grid = document.getElementById('recipe-grid')
    const filtered = filter === 'all' ? recipes : recipes.filter(r => r.category === filter)

    document.querySelectorAll('.filter-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.filter === filter)
    })

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
        <div class="empty-state-icon">🍽️</div>
        <div class="empty-state-title">No recipes yet</div>
        <div class="empty-state-sub">More coming soon.</div>
      </div>`
      return
    }

    grid.innerHTML = filtered.map(r => {
      const totalTime = r.prepTime + r.cookTime
      const tagHtml = r.tags.map(t => {
        const map = { 'gluten-free': ['gf', 'GF'], 'dairy-free': ['df', 'DF'], 'vegetarian': ['vg', 'VG'] }
        const [cls, label] = map[t] || ['gf', t]
        return `<span class="tag tag-${cls}">${label}</span>`
      }).join('')
      return `
        <div class="recipe-card" onclick="App.openRecipe('${r.id}')">
          <img class="recipe-card-img" src="${r.image}" alt="${r.title}" onerror="this.style.background='#222'">
          <div class="recipe-card-body">
            <div class="recipe-card-title">${r.title}</div>
            <div class="recipe-card-meta">
              <span class="recipe-card-time">${totalTime} min</span>
              ${tagHtml}
            </div>
          </div>
        </div>`
    }).join('')
  }

  /* ---------- RECIPE DETAIL ---------- */
  function openRecipe(id) {
    const recipe = recipes.find(r => r.id === id)
    if (!recipe) return
    currentRecipe = recipe
    detailServings = recipe.serves
    detailCheckedIng = new Set()
    detailCheckedSteps = new Set()

    const view = document.getElementById('detail-view')
    view.classList.add('open')

    renderDetailHero(recipe)
    renderDetailMeta(recipe)
    switchDetailTab('ingredients')
  }

  function closeRecipe() {
    const view = document.getElementById('detail-view')
    view.classList.remove('open')
    currentRecipe = null
    if (detailWakeLock) { detailWakeLock.release().catch(() => {}); detailWakeLock = null }
  }

  function renderDetailHero(recipe) {
    document.getElementById('detail-img').src = recipe.image
    document.getElementById('detail-img').onerror = function() { this.parentElement.style.background = '#1a1a1a' }
    document.getElementById('detail-title').textContent = recipe.title
    const badgeMap = {
      'gluten-free': ['badge-green', 'Gluten free'],
      'dairy-free': ['badge-teal', 'Dairy free'],
      'vegetarian': ['badge-amber', 'Vegetarian'],
    }
    document.getElementById('detail-badges').innerHTML = recipe.tags.map(t => {
      const [cls, label] = badgeMap[t] || ['badge-green', t]
      return `<span class="badge ${cls}">${label}</span>`
    }).join('')
  }

  function renderDetailMeta(recipe) {
    document.getElementById('detail-prep').textContent = recipe.prepTime
    document.getElementById('detail-cook').textContent = recipe.cookTime
    document.getElementById('detail-serves-display').textContent = detailServings
    document.getElementById('detail-cal').textContent = recipe.nutrition.calories
  }

  function switchDetailTab(tab) {
    document.querySelectorAll('.detail-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab))
    document.querySelectorAll('.detail-panel').forEach(p => p.classList.toggle('active', p.id === 'dtab-' + tab))

    if (tab === 'ingredients') renderDetailIngredients()
    if (tab === 'method') renderDetailMethod()
    if (tab === 'nutrition') renderDetailNutrition()
    if (tab === 'subs') renderDetailSubs()
  }

  function changeDetailServings(delta) {
    detailServings = Math.max(1, Math.min(20, detailServings + delta))
    document.getElementById('detail-serves-display').textContent = detailServings
    document.getElementById('detail-servings-num').textContent = detailServings
    renderDetailIngredients()
  }

  function fmtAmount(amount, base, current) {
    if (!amount) return ''
    const s = (amount / base) * current
    if (s % 1 === 0) return String(s)
    if (Math.abs(s - 0.5) < 0.01) return '½'
    if (Math.abs(s - 0.25) < 0.01) return '¼'
    if (Math.abs(s - 0.75) < 0.01) return '¾'
    if (Math.abs(s - 1.5) < 0.01) return '1½'
    if (Math.abs(s - 2.5) < 0.01) return '2½'
    return parseFloat(s.toFixed(1)).toString()
  }

  function renderDetailIngredients() {
    const recipe = currentRecipe
    const panel = document.getElementById('dtab-ingredients')
    document.getElementById('detail-servings-num').textContent = detailServings

    let html = ''
    recipe.ingredients.forEach((group, gi) => {
      if (gi > 0) html += '<div class="card-divider"></div>'
      html += `<div class="ingredient-group">`
      if (group.group) html += `<div class="ig-title">${group.group}</div>`
      group.items.forEach((item, ii) => {
        const key = `${gi}-${ii}`
        const checked = detailCheckedIng.has(key)
        const a = fmtAmount(item.amount, recipe.serves, detailServings)
        const amtStr = a ? `<span class="ing-amount">${a}${item.unit ? ' ' + item.unit : ''}</span> ` : ''
        html += `<div class="ing-item ${checked ? 'checked' : ''}" onclick="App.toggleIng('${key}')">
          <div class="checkbox ${checked ? 'ticked' : ''}"></div>
          <div class="ing-body">
            <div class="ing-name">${amtStr}${item.name}</div>
            ${item.note ? `<div class="ing-note">${item.note}</div>` : ''}
          </div>
        </div>`
      })
      html += '</div>'
    })

    const card = panel.querySelector('.card')
    card.innerHTML = html
  }

  function toggleIng(key) {
    detailCheckedIng.has(key) ? detailCheckedIng.delete(key) : detailCheckedIng.add(key)
    renderDetailIngredients()
  }

  function renderDetailMethod() {
    const recipe = currentRecipe
    const stepList = document.getElementById('detail-step-list')
    const total = recipe.steps.length
    const done = detailCheckedSteps.size

    stepList.innerHTML = recipe.steps.map((step, i) => {
      const checked = detailCheckedSteps.has(i)
      return `<div class="step-item ${checked ? 'done' : ''}" onclick="App.toggleStep(${i})">
        <div class="step-num">${checked ? '✓' : i + 1}</div>
        <div class="step-text">${step}</div>
      </div>`
    }).join('')

    document.getElementById('detail-progress').style.width = Math.round((done / total) * 100) + '%'
  }

  function toggleStep(i) {
    detailCheckedSteps.has(i) ? detailCheckedSteps.delete(i) : detailCheckedSteps.add(i)
    renderDetailMethod()
  }

  async function toggleCookMode() {
    const toggle = document.getElementById('detail-cook-toggle')
    if (toggle.classList.contains('on')) {
      toggle.classList.remove('on')
      if (detailWakeLock) { try { await detailWakeLock.release() } catch(e){} detailWakeLock = null }
    } else {
      toggle.classList.add('on')
      if ('wakeLock' in navigator) { try { detailWakeLock = await navigator.wakeLock.request('screen') } catch(e){} }
    }
  }

  function renderDetailNutrition() {
    const n = currentRecipe.nutrition
    const fields = [
      { val: n.calories, label: 'Calories', unit: 'kcal' },
      { val: n.protein, label: 'Protein', unit: 'g' },
      { val: n.carbs, label: 'Carbs', unit: 'g' },
      { val: n.fat, label: 'Fat', unit: 'g' },
      { val: n.fibre, label: 'Fibre', unit: 'g' },
      { val: n.sugar, label: 'Sugar', unit: 'g' },
      { val: n.satFat, label: 'Sat fat', unit: 'g' },
      { val: n.sodium, label: 'Sodium', unit: 'mg' },
    ]
    document.getElementById('detail-nut-grid').innerHTML = fields.map(f =>
      `<div class="nut-item"><div class="nut-val">${f.val}</div><div class="nut-label">${f.label}</div><div class="nut-unit">${f.unit}</div></div>`
    ).join('')
  }

  function renderDetailSubs() {
    const panel = document.getElementById('dtab-subs')
    const card = panel.querySelector('.card')
    let html = ''
    currentRecipe.subs.forEach((group, gi) => {
      if (gi > 0) html += '<div class="card-divider"></div>'
      html += `<div class="sub-group">`
      if (group.group) html += `<div class="sub-group-title">${group.group}</div>`
      group.items.forEach(item => {
        if (group.extras) {
          html += `<div class="extra-item"><div class="dot"></div><div class="extra-text">${item.text}</div></div>`
        } else {
          html += `<div class="sub-item"><div class="sub-ingredient">${item.name}</div><div class="sub-swap">${item.swap}</div></div>`
        }
      })
      html += '</div>'
    })
    card.innerHTML = html
  }

  /* ---------- PUBLIC API ---------- */
  return {
    init,
    showPage,
    renderRecipeGrid,
    openRecipe,
    closeRecipe,
    switchDetailTab,
    changeDetailServings,
    toggleIng,
    toggleStep,
    toggleCookMode,
  }

})()
