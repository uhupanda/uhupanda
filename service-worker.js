const CACHE_NAME = "kakao-chat-pwa-v1";
const urlsToCache = [
  "/kakao_chat_pwa.html",
  "/manifest.json",
  "/service-worker.js",
  "/icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
