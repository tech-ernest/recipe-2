const CACHE = 'ep-v13'
const ASSETS = [
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/app.js',
  './js/planner.js',
  './js/grocery.js',
  './js/settings.js',
  './js/macros.js',
  './data/recipes.js',
]

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)))
  self.skipWaiting()
})

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ))
  self.clients.claim()
})

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)))
})
