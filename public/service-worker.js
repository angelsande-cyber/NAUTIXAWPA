
const CACHE_NAME = 'nautixa-cache-v2'; // Versión de caché actualizada
const urlsToCache = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/icon-192x192.png',
  '/icon-256x256.png',
  '/icon-384x384.png',
  '/icon-512x512.png',
  '/globals.css'
];

self.addEventListener('install', event => {
  // Obliga al nuevo service worker a tomar el control inmediatamente
  self.skipWaiting(); 
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Borra las cachés antiguas
            return caches.delete(cacheName);
          }
        })
      );
    })
    // Le dice al service worker que empiece a controlar la página inmediatamente
    .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si el recurso está en la caché, lo devuelve. Si no, lo busca en la red.
        return response || fetch(event.request);
      }
    )
  );
});

