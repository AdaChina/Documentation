/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6af0950901f2ebaba0c537425471f2ba"
  },
  {
    "url": "arithmetic/index.html",
    "revision": "c761cb41b1a8e83f81de6d7e93aeaebb"
  },
  {
    "url": "assets/css/0.styles.15ef48ad.css",
    "revision": "314afb47960e0bbb79669d422c45fd22"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.ea010887.js",
    "revision": "2402e7b40bef5a6de37856d3c0eb6223"
  },
  {
    "url": "assets/js/3.bc2267c9.js",
    "revision": "56a94f61b23197c09257c576a9200c07"
  },
  {
    "url": "assets/js/4.d54161aa.js",
    "revision": "2cd6fda4f7fcf8261948818f1e4d1994"
  },
  {
    "url": "assets/js/5.bc582c5c.js",
    "revision": "09641a7933fba141d393ae174c7a6060"
  },
  {
    "url": "assets/js/6.285b7993.js",
    "revision": "2b31b6e13ed54c1a4fd254356b36c860"
  },
  {
    "url": "assets/js/7.f9df70ee.js",
    "revision": "2495f4d02b3efa2915079edfa4353875"
  },
  {
    "url": "assets/js/app.a281558f.js",
    "revision": "64ebbe9e1f8e134bfc8a354137af7bb1"
  },
  {
    "url": "central/index.html",
    "revision": "f469e5975d12a61a0d3f11f74c74496b"
  },
  {
    "url": "class_brand/index.html",
    "revision": "e297ff8aa77a3203d08b81ed8302ca95"
  },
  {
    "url": "class_brand/session.html",
    "revision": "3b9dad5996e05baddf41c58234ffd01d"
  },
  {
    "url": "index.html",
    "revision": "fa37ec741600ba0c89124a998d77a1d6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
