const CACHE_NAME = 'static-cache';
const FILES_TO_CACHE = [
  'offline.html',
  'index.html',
  'zoneclient.html',
  'aproposnous.html',
  'confrmation.html',
  'css/styles.css',
  'script/install.js',
  'script/script.js',
  'manifest.json',
  'style/tailwind.config.js',
  'images/icons/icon-144x144.png',
  'images/icons/icon-192x192.png',
  'images/icons/icon-512x512.png',
  'images/batisses-2.jpg',
  'images/batisses.jpg',
  'images/bottes_de_travail.jpg',
  'images/BotteTimberlandPro.png',
  'images/BotteTimberlandPro6pouce.png',
  'images/CentreTS_Slogan_CMYK.jpg',
  'images/image-extraits-defi.jpg',
  'images/logo.png',
  'images/shutterstock_397846903.jpg',
  'images/shutterstock_1647660442.jpg',
  'images/shutterstock_1732967150.jpg',
  'images/Soulier_de_travail.jpg',
  'images/store.jpg',
  'images/vesteColumbia.png',
  'images/vet_de_travail.jpg',
  'images/vet_perso.jpg',
  'images/vetCat.png',
];

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');

  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'installPWA') {
    event.source.postMessage({ type: 'installPWAConfirmed' });
  }
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');

  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );

  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  console.log('[ServiceWorker] Fetch', evt.request.url);

  if (evt.request.mode === 'navigate') {
    evt.respondWith(
      fetch(evt.request).catch(() => {
        return caches.open(CACHE_NAME).then((cache) => {
          return cache.match('offline.html');
        });
      })
    );
  }
});
