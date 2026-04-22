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

  function getMacroTargets() {
    const s = load()
    return {
      calories: s.macroCalories !== undefined ? s.macroCalories : 2000,
      protein:  s.macroProtein  !== undefined ? s.macroProtein  : 150,
      carbs:    s.macroCarbs    !== undefined ? s.macroCarbs    : 250,
      fat:      s.macroFat      !== undefined ? s.macroFat      : 65,
    }
  }

  function changeMacroTarget(macro, delta) {
    const s = load()
    const keyMap   = { calories: 'macroCalories', protein: 'macroProtein', carbs: 'macroCarbs', fat: 'macroFat' }
    const defaults = { calories: 2000, protein: 150, carbs: 250, fat: 65 }
    const mins     = { calories: 500,  protein: 10,  carbs: 20,  fat: 10  }
    const maxs     = { calories: 5000, protein: 400, carbs: 700, fat: 200 }
    const key      = keyMap[macro]
    const current  = s[key] !== undefined ? s[key] : defaults[macro]
    s[key] = Math.max(mins[macro], Math.min(maxs[macro], current + delta))
    save(s)
  }

  function render() {
    const s = load()
    const el = document.getElementById('settings-default-serves')
    if (el) el.textContent = s.defaultServes
    const recipeCount = document.getElementById('settings-recipe-count')
    if (recipeCount) recipeCount.textContent = recipes.length
  }

  return { render, getDefaultServes, changeDefaultServes, getMacroTargets, changeMacroTarget }

})()
