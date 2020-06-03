'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "8807e72bc3b8c92cbc8e53b0ba4012a9",
"/": "8807e72bc3b8c92cbc8e53b0ba4012a9",
"main.dart.js": "e064c6bdc6461f76dcabbb7497e4fc13",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c6458a39c07cd2631bf36b8678ba8202",
"assets/LICENSE": "68b191d61f5387b36897e40675d19366",
"assets/images/welcome_screen_image.png": "8836d555a05da193e511e138fb392ab5",
"assets/images/logo.png": "837c4288713dbe56af119bf799ccedee",
"assets/AssetManifest.json": "5a48efd65674d96bd9fc046b9f534439",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
