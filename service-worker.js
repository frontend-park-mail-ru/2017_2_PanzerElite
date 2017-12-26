this.addEventListener('fetch', function(event) {
    var response;
    event.respondWith(caches.match(event.request).then(function() {
        return fetch(event.request);
    }).then(function(r) {
        response = r;
        caches.open('v1').then(function(cache) {
            cache.put(event.request, response);
        });
        return response.clone();
    }).catch(function() {

        console.log("its sade sw doestn work");
        return null;
    }));
});


this.addEventListener('activate', function(event) {
    var cacheWhitelist = ['v1'];

    event.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (cacheWhitelist.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});


this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/service-worker.js',
                '/index.html',
                '/dist/bundle.js',
                '/dist/bundle.css',
                '/images/wallpaper.jpg',
            ]);
        })
    );
});