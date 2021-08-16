self.addEventListener('install', (e)=>{
    console.log('[service worker] installing service worker...', e)
})
self.addEventListener('activate', (e)=>{
    console.log('[service worker] Activating service worker...', e)
    return self.clients.claim()
})
self.addEventListener('fetch', (e)=>{
    console.log('[service worker] Fetching service worker...', e)
    e.respondWith(fetch(e.request))
})
