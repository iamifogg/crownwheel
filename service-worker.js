const CACHE = 'crownwheel-v2';
const ASSETS = ["./", "./index.html", "./styles.css", "./manifest.webmanifest", "./icons/icon.svg", "./app-loader.js", "./packed/app-01.b64", "./packed/app-02.b64", "./packed/app-03.b64", "./packed/app-04.b64"];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (event.request.mode === 'navigate') {\n    event.respondWith(fetch(event.request).then(response => { const copy=response.clone(); caches.open(CACHE).then(cache=>cache.put('./index.html',copy)); return response; }).catch(()=>caches.match('./index.html')));\n    return;\n  }\n  event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./index.html'))));
});
