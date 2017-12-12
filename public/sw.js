// const CACHE_VERSION = 'v1';

// const cacheUrls = [
//     '/dist/bundle.js',
//     '/dist/bundle.css',
//     '/images/',
//     '/game/3dModels/',
//     '/sw.js',
//     'index.html',
// ];

// this.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(CACHE_VERSION)
//         .then((cache) => {
//             return cache.addAll(cacheUrls);
//         })
//         .catch((e) => {
//             console.log(e);
//         })
//     );
// });

// this.addEventListener('fetch', (event) => {
//     event.respondWith(
//         caches.match(event.request).then((cachedResponse) => {
//             if (cachedResponse) {
//                 console.log("ive founded in cache");
//                 return cachedResponse;
//             }
//             console.log("BAD founded in cache");
//             return fetch(event.request);
//         })
//     );
// });

const CACHE_NAME = "panzer_elite_v_1";
const MAX_AGE = 86400000;

const CACHE_URLS = [
    "/dist/bundle.js",
    "/dist/bundle.css",
    "/images/",
    "/game/3dModels/",
    "/index.html",
    "/login",
    "/register",
    "/menu",
    "/",
    "/changepass",
    "/play",
    "/game"
];

self.addEventListener("install", (event) => {
    console.log(event);
    // задержим обработку события
    // если произойдёт ошибка, serviceWorker не установится
    event.waitUntil(
        // находим в глобальном хранилище Cache-объект с нашим именем
        // если такого не существует, то он будет создан
        caches.open(CACHE_NAME).then((cache) => {
            // загружаем в наш cache необходимые файлы
            console.warn("install!!");
            return cache.addAll(CACHE_URLS);
        }).then(self.skipWaiting())
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        // ищем запрашиваемый ресурс в хранилище кэша
        caches.match(event.request).then(function(cachedResponse) {
            let lastModified, fetchRequest;
            // выдаём кэш, если он есть
            if (cachedResponse) {
                lastModified = new Date(cachedResponse.headers.get("last-modified"));
                if (lastModified && (Date.now() - lastModified.getTime()) > MAX_AGE) {

                    fetchRequest = event.request.clone();
                    // создаём новый запрос
                    return fetch(fetchRequest).then(function(response) {
                        // при неудаче всегда можно выдать ресурс из кэша
                        if (!response || response.status !== 200) {
                            return cachedResponse;
                        }
                        // обновляем кэш
                        caches.open(CACHE_NAME).then(function(cache) {
                            cache.put(event.request, response.clone());
                        });
                        // возвращаем свежий ресурс
                        return response;
                    }).catch(function() {
                        return cachedResponse;
                    });
                }
                return cachedResponse;
            }

            // иначе запрашиваем из сети как обычно
            return fetch(event.request);
        })
    );
});

// const cssjs = [
//     '/dist/bundle.js',
//     '/dist/bundle.css',
//     '/images/',
//     '/game/3dModels/',
//     '/index.html',
// ];

// const paths = [
//     '/login',
//     '/register',
//     '/menu',
//     '/',
//     '/changepass',
//     '/play',
//     '/game',
// ];

// const dataToCache = cssjs.concat(paths);

// const cacheName = 'v1';

// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(cacheName).then(cache => cache.addAll(dataToCache)),
//     );
// });

// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         caches.match(event.request).then((response) => {
//             const isInCache = !!response;
//             if (!isInCache) {
//                 return fetch(event.request);
//             }
//             return _tryInvalidateCacheRedownload(event).catch(() => {
//                 return response;
//             });
//         }),
//     );
// });

// function _tryInvalidateCacheRedownload(event) {
//     return fetch(event.request).then(response => {
//         caches.open(cacheName).then(cache => {
//             if (response.bodyUsed) {
//                 return;
//             }
//             cache.put(event.request, response.clone());
//         });
//         return response;
//     });
// }