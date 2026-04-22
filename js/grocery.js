/* =====================
   GROCERY.JS — grocery list generation and management
   ===================== */

const Grocery = (() => {

  /* ---------- STORAGE ---------- */
  function loadList() {
    try { return JSON.parse(localStorage.getItem('ep_grocery') || '{"items":[],"manualItems":[]}') }
    catch(e) { return { items: [], manualItems: [] } }
  }

  function saveList(data) {
    localStorage.setItem('ep_grocery', JSON.stringify(data))
  }

  /* ---------- GENERATE FROM PLANNER ---------- */
  function generate() {
    const meals = Planner.getMealsForWeek()
    const aggregated = {}  // keyed by ingredient id

    Object.values(meals).forEach(meal => {
      const recipe = recipes.find(r => r.id === meal.recipeId)
      if (!recipe) return
      const scale = meal.serves / recipe.serves

      recipe.ingredients.forEach(group => {
        group.items.forEach(item => {
          if (item.id === 'water' || item.id === 'salt' || item.id === 'black-pepper') return  // skip basics

          const scaledAmount = item.amount ? parseFloat((item.amount * scale).toFixed(2)) : 0

          if (aggregated[item.id]) {
            // same unit — add amounts
            if (aggregated[item.id].unit === item.unit) {
              aggregated[item.id].amount += scaledAmount
            }
            // different unit — just note it's needed again
          } else {
            aggregated[item.id] = {
              id: item.id,
              name: item.name,
              amount: scaledAmount,
              unit: item.unit,
              type: item.type,
              checked: false,
            }
          }
        })
      })
    })

    const items = Object.values(aggregated).map(item => ({
      ...item,
      amount: cleanAmount(item.amount),
    }))

    const existing = loadList()
    saveList({ items, manualItems: existing.manualItems || [] })
    render()
  }

  function cleanAmount(amount) {
    if (!amount) return 0
    const rounded = Math.round(amount * 10) / 10
    return rounded % 1 === 0 ? Math.round(rounded) : rounded
  }

  function fmtQty(item) {
    if (!item.amount || item.type === 'fresh') return ''
    return `${item.amount}${item.unit ? ' ' + item.unit : ''}`
  }

  /* ---------- RENDER ---------- */
  function render() {
    const data = loadList()
    const all = [...data.items, ...data.manualItems]

    const container = document.getElementById('grocery-list')
    const summary = document.getElementById('grocery-summary')

    if (all.length === 0) {
      summary.textContent = ''
      container.innerHTML = `
        <div class="grocery-empty">
          <div class="empty-state-icon">🛒</div>
          <div class="empty-state-title">Your list is empty</div>
          <div class="empty-state-sub">Plan your meals for the week and tap "Regenerate" to build your shopping list automatically.</div>
        </div>`
      return
    }

    const unchecked = all.filter(i => !i.checked).length
    summary.textContent = `${unchecked} item${unchecked !== 1 ? 's' : ''} remaining`

    const fresh = data.items.filter(i => i.type === 'fresh')
    const pantry = data.items.filter(i => i.type === 'pantry')
    const manual = data.manualItems

    let html = ''

    if (fresh.length) {
      html += `<div><div class="grocery-section-title">Fresh</div><div class="card">`
      fresh.forEach((item, i) => { html += groceryItemHtml(item, 'items', i) })
      html += '</div></div>'
    }

    if (pantry.length) {
      html += `<div><div class="grocery-section-title">Pantry & dry goods</div><div class="card">`
      pantry.forEach((item, i) => { html += groceryItemHtml(item, 'items', data.items.indexOf(item)) })
      html += '</div></div>'
    }

    if (manual.length) {
      html += `<div><div class="grocery-section-title">Added manually</div><div class="card">`
      manual.forEach((item, i) => { html += groceryItemHtml(item, 'manualItems', i) })
      html += '</div></div>'
    }

    container.innerHTML = html
  }

  function groceryItemHtml(item, listKey, index) {
    const qty = fmtQty(item)
    return `
      <div class="grocery-item ${item.checked ? 'checked' : ''}" onclick="Grocery.toggle('${listKey}', ${index})">
        <div class="checkbox ${item.checked ? 'ticked' : ''}"></div>
        <div class="grocery-item-name">${item.name}</div>
        ${qty ? `<div class="grocery-item-qty">${qty}</div>` : ''}
      </div>`
  }

  /* ---------- INTERACTIONS ---------- */
  function toggle(listKey, index) {
    const data = loadList()
    data[listKey][index].checked = !data[listKey][index].checked
    saveList(data)
    render()
  }

  function addManualItem() {
    const input = document.getElementById('grocery-add-input')
    const name = input.value.trim()
    if (!name) return
    const data = loadList()
    data.manualItems = data.manualItems || []
    data.manualItems.push({ id: 'custom-' + Date.now(), name, type: 'fresh', amount: 0, unit: '', checked: false })
    saveList(data)
    input.value = ''
    render()
  }

  function clearChecked() {
    const data = loadList()
    data.items = data.items.filter(i => !i.checked)
    data.manualItems = data.manualItems.filter(i => !i.checked)
    saveList(data)
    render()
  }

  function clearAll() {
    if (!confirm('Clear the entire grocery list?')) return
    saveList({ items: [], manualItems: [] })
    render()
  }

  return { render, generate, toggle, addManualItem, clearChecked, clearAll }

})()
