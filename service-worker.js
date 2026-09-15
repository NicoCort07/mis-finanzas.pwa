const CACHE = "mis-finanzas-v1";
const ARCHIVOS = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg"];
self.addEventListener("install", evento => evento.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ARCHIVOS))));
self.addEventListener("activate", evento => evento.waitUntil(self.clients.claim()));
self.addEventListener("fetch", evento => evento.respondWith(caches.match(evento.request).then(respuesta => respuesta || fetch(evento.request))));

