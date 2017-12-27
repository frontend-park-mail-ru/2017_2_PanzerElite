// this.addEventListener('fetch', function(event) {
//     var response;
//     event.respondWith(caches.match(event.request).then(function() {
//         return fetch(event.request);
//     }).then(function(r) {
//         response = r;
//         caches.open('v1').then(function(cache) {
//             cache.put(event.request, response);
//         });
//         return response.clone();
//     }).catch(function() {

//         console.log("its sade sw doestn work");
//         return null;
//     }));
// });

const URLS = ['/login/', '/', '/menu/', '/register/'];
const CacheURLS = ['', 'index.html',
    'dist/bundle.js',
    'dist/bundle.css',
    'images/wallpaper.jpg',
    'three.min.js',
    'collada.js',
    'images/logo_tanks.png',
    'sounds/fire.mp3',
    'sounds/move.mp3',
    'sounds/reload.mp3',
    'sounds/fire+reload.mp3',
    'game/3dModels/terrain/www.jpg',
    'game/3dModels/expl/model.dae',
    'game/3dModels/flagBlue/model.dae',
    'game/3dModels/flagRed/model.dae ',
    'game/3dModels/road/model.dae ',
    'game/3dModels/T90/model.dae ',
    'game/3dModels/T90/Gun.png',
    'game/3dModels/T90/Turret.png',
    'game/3dModels/T90/Main%20Body.png ',
    'game/3dModels/T90/Main%20Body%202.png',
    'game/staticScene/man.jpg',
    'game/3dModels/road/model/__Asphalt_New_.jpg ',
    'game/3dModels/road/model/__Concrete_Block_8x8_Gray_.jpg',
    'game/3dModels/road/model/__Concrete_Aggregate_Smoke_.jpg',
    'game/3dModels/expl/model/rope.png',
    'game/3dModels/flagRed/model/material_2.png',
    'game/3dModels/flagBlue/model/material_2.png',
];
const FinalArr = [];
URLS.forEach(element => {
    CacheURLS.forEach(el => {
        FinalArr.push(element + el);
    })
});

// const MAX_AGE = 86400000;
// this.addEventListener('fetch', (event) => {
//     event.respondWith(
//         // ищем запрашиваемый ресурс в хранилище кэша
//         caches.match(event.request).then(function(cachedResponse) {
//             let lastModified, fetchRequest;
//             // выдаём кэш, если он есть
//             if (cachedResponse) {
//                 lastModified = new Date(cachedResponse.headers.get('last-modified'));
//                 if (lastModified && (Date.now() - lastModified.getTime()) > MAX_AGE) {

//                     fetchRequest = event.request.clone();
//                     // создаём новый запрос
//                     return fetch(fetchRequest).then(function(response) {
//                         // при неудаче всегда можно выдать ресурс из кэша
//                         if (!response || response.status !== 200) {
//                             return cachedResponse;
//                         }
//                         // обновляем кэш
//                         caches.open("v1").then(function(cache) {
//                             cache.put(event.request, response.clone());
//                         });
//                         // возвращаем свежий ресурс
//                         return response;
//                     }).catch(function() {
//                         return cachedResponse;
//                     });
//                 }
//                 return cachedResponse;
//             }

//             // иначе запрашиваем из сети как обычно
//             return fetch(event.request);
//         })
//     );
// });

this.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            // ресурс есть в кеше
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});


// this.addEventListener('activate', function(event) {
//     var cacheWhitelist = ['v1'];

//     event.waitUntil(
//         caches.keys().then(function(keyList) {
//             return Promise.all(keyList.map(function(key) {
//                 if (cacheWhitelist.indexOf(key) === -1) {
//                     return caches.delete(key);
//                 }
//             }));
//         })
//     );
// });


this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            URLS.forEach(element => {
                CacheURLS.forEach(el => {
                    FinalArr.push(element + el);
                })
            });
            console.log(FinalArr)
            return cache.addAll(
                FinalArr
                // [
                //     '/',
                //     '/login/',
                //     '/service-worker.js',
                //     '/index.html',
                //     '/dist/bundle.js',
                //     '/dist/bundle.css',
                //     '/images/wallpaper.jpg',
                // ]
            );
        })
    );
});