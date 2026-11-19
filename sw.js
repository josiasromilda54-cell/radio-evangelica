// Service Worker para Rádio Vida Nova (PWA)
const CACHE_NAME = 'radio-vida-nova-v1';
const urlsToCache = [
  '/radio-evangelica/',
  '/radio-evangelica/index.html',
  '/radio-evangelica/style.css',
  '/radio-evangelica/script.js',
  '/radio-evangelica/manifest.json',
];

// Instalação: cacheia os arquivos essenciais
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Cache aberto');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Ativação: remove caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch: serve do cache quando offline, busca da rede quando online
self.addEventListener('fetch', (event) => {
  // Não cacheia requisições de áudio (streaming)
  if (event.request.url.includes('.mp3') || event.request.url.includes('archive.org')) {
    return; // deixa passar normalmente
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Retorna do cache se disponível
      if (response) {
        return response;
      }
      // Senão, busca da rede
      return fetch(event.request).then((response) => {
        // Não cacheia respostas inválidas
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        // Clona a resposta e adiciona ao cache
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      }).catch(() => {
        // Offline: retorna página principal se disponível
        return caches.match('/radio-evangelica/index.html');
      });
    })
  );
});