'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b1e9ca8500487fa90a2f0fedd8cd4791",
"assets/assets/foto/foto2_1.jpg": "d48db035b2fa7f8d16d01a0627a7d78b",
"assets/assets/foto/foto2_2.jpg": "b8ef33a4a15dc00e70dda675263b316b",
"assets/assets/foto/foto2_3.jpg": "62576b6936ae2f7af1c4321b01279f0d",
"assets/assets/foto/foto2_4.jpg": "2ba57ef33f96820cf20509629821e4ef",
"assets/assets/foto/foto2_5.jpg": "e13dc0bfb7a8782b512ce9f20d849263",
"assets/assets/foto/fotoo2_1.jpg": "a722a5393468248e1f8be606bbb4b710",
"assets/assets/foto/fotoo2_2.jpg": "13e59e4dccfa232899ad166e84684886",
"assets/assets/foto/fotoo2_3.jpg": "8f9d03414c95f5050a0a3b8e51afbee0",
"assets/assets/foto/fotoo2_4.jpg": "2268fc2ca9494e0389ebf6c6b57c3f74",
"assets/assets/foto/fotoo2_5.jpg": "04622644ee56f3c540c23cd29d062d61",
"assets/assets/foto/fotooo2_1.jpg": "ee8e940de4eb051440ce4707d95c06bf",
"assets/assets/foto/fotooo2_2.jpg": "f80363bf0223631e9b7bd139edbf31a1",
"assets/assets/foto/fotooo2_3.jpg": "ab7df76f9538bc93d39c9a5ae3f3dbb3",
"assets/assets/foto/fotooo2_4.jpg": "b3b4c419854ea9b8315c2878827063b0",
"assets/assets/foto/fotooo2_5.jpg": "7b5cd4818238c38e70485e6a0ae46335",
"assets/assets/foto/fotooo_1.jpg": "ab9f31d435e7481c187ee09f20c47989",
"assets/assets/foto/fotooo_2.jpg": "9a91aa0abe71fb09e0a2f819fe60940e",
"assets/assets/foto/fotooo_3.jpg": "5e951dc217fa6c5223a634826f84772e",
"assets/assets/foto/fotooo_4.jpg": "fd9cfcc9af4471d63ad3ad111bcf7e5e",
"assets/assets/foto/fotooo_5.jpg": "d82591a8cf8206027aa121b71013270b",
"assets/assets/foto/fotoo_1.jpg": "3cae2f7ae270eeffb82ff41b3a3d11b7",
"assets/assets/foto/fotoo_2.jpg": "8487d7ab67aff34cf87310356d932497",
"assets/assets/foto/fotoo_3.jpg": "80c1c1b767552bf766f27508d1647f79",
"assets/assets/foto/fotoo_4.jpg": "2a75cf88f04a478c030a6e5cb2cf0e5f",
"assets/assets/foto/fotoo_5.jpg": "a3341afb41e66a65d639997353090a5d",
"assets/assets/foto/foto_1.jpg": "55d8602fdde86889688886eefee3a971",
"assets/assets/foto/foto_2.jpg": "601a0e8a73d3e478415f9e344049ecf6",
"assets/assets/foto/foto_3.jpg": "898ee0337f0e3fc0334f69dd9c7ea661",
"assets/assets/foto/foto_4.jpg": "90b9eed503a4fd94825bb26361621064",
"assets/assets/foto/foto_5.jpg": "e6fe51b3f542365168ecf523ff8ad1df",
"assets/assets/foto/text.txt": "f17f6afee2a9af24b314e1df356ff98f",
"assets/assets/images/bilbakalim.png": "602fe3497a7d8e5392b17d413ff47097",
"assets/assets/yemek/corba_1.jpg": "83e5e51ce2f6a783b19375867eaa1bd0",
"assets/assets/yemek/corba_2.jpg": "fd4dcc07b332f58a2e7c7f10ce8a8c9b",
"assets/assets/yemek/corba_3.jpg": "86d2ef8747e1a9871cd9079a07c0c7e3",
"assets/assets/yemek/corba_4.jpg": "934cf9e011b88a1db7028fd6dcece830",
"assets/assets/yemek/corba_5.jpg": "21ad954e5bd490ba6889c543bf6dd4ba",
"assets/assets/yemek/tatli_1.jpg": "a5c7e94127448d1d336b202d866043af",
"assets/assets/yemek/tatli_2.jpg": "b5da8b2486a731442a97ebe35020dbd4",
"assets/assets/yemek/tatli_3.jpg": "652d9da7f06da7c7a69a2b148fb554f2",
"assets/assets/yemek/tatli_4.jpg": "aca2a402acb73ec1cb5517ac4a2a652b",
"assets/assets/yemek/tatli_5.jpg": "abc4d6238cd32e0f766e2ffee190e98c",
"assets/assets/yemek/yemek_1.jpg": "e0fc1e8ad21882c3e65baecb4d8ba1c0",
"assets/assets/yemek/yemek_2.jpg": "ff9b14f950ad8a0c2ebf1d07f665701b",
"assets/assets/yemek/yemek_3.jpg": "9150ee7b0addc864ad4e4873de908808",
"assets/assets/yemek/yemek_4.jpg": "f7162a73558b8f5b0f0453ba613252aa",
"assets/assets/yemek/yemek_5.jpg": "cb2440c3831e94672042e9c9d4b8781e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "6020c4890f0694729c4eda4a6e5b2347",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "24924332518a155ffbc110741f861ef3",
"/": "24924332518a155ffbc110741f861ef3",
"main.dart.js": "d00de03e78471d4334599120c1501fe9",
"manifest.json": "cc08a7b4b0021022fb82689a94ee3001",
"version.json": "ab6c361ee5a362d4daf1ab638a459a1c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
