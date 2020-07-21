/*
 * @Author: your name
 * @Date: 2020-07-05 10:25:41
 * @LastEditTime: 2020-07-21 11:50:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \CITZ-IMB-Capstone2020\public\serviceworker.js
 */ 
// const CACHE_NAME = "version-1";
// const urlsToCache = [ 'index.html', 'offline.html' ];

// //this represent serviice worker!!
// const self = this;

// // Install SW
// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         //open site with cache..
//         caches.open(CACHE_NAME)
//             .then((cache) => {
//                 console.log('Opened cache');
//                 return cache.addAll(urlsToCache);
//             })
//     )
// });

// // Listen for requests
// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         caches.match(event.request)
//             .then(() => {
//                 return fetch(event.request) 
//                     .catch(() => caches.match('offline.html'))
//             })
//     )
// });

// Activate the SW
// self.addEventListener('activate', (event) => {
//     const cacheWhitelist = [];
//     cacheWhitelist.push(CACHE_NAME);

//     event.waitUntil(
//         caches.keys().then((cacheNames) => Promise.all(
//             cacheNames.map((cacheName) => {
//                 if(!cacheWhitelist.includes(cacheName)) {
//                     return caches.delete(cacheName);
//                 }
//             })
//         ))
            
//     )
// });