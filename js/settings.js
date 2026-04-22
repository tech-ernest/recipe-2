/* =====================
   SETTINGS.JS
   ===================== */

const Settings = (() => {

  function load() {
    try { return JSON.parse(localStorage.getItem('ep_settings') || '{"defaultServes":2}') }
    catch(e) { return { defaultServes: 2 } }
  }

  function save(data) {
    localStorage.setItem('ep_settings', JSON.stringify(data))
  }

  function getDefaultServes() {
    return load().defaultServes || 2
  }

  function changeDefaultServes(delta) {
    const s = load()
    s.defaultServes = Math.max(1, Math.min(10, (s.defaultServes || 2) + delta))
    save(s)
    render()
  }

  function render() {
    const s = load()
    const el = document.getElementById('settings-default-serves')
    if (el) el.textContent = s.defaultServes
    const recipeCount = document.getElementById('settings-recipe-count')
    if (recipeCount) recipeCount.textContent = recipes.length
  }

  return { render, getDefaultServes, changeDefaultServes }

})()
