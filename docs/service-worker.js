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
    "revision": "4a2226b8ecec10b1014b0f6fa934ea3f"
  },
  {
    "url": "arithmetic/index.html",
    "revision": "03e3c0e84306b35dd566f1689c8f759a"
  },
  {
    "url": "assets/css/0.styles.021a0155.css",
    "revision": "b89a4e11259620fdaef1d30152920816"
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
    "url": "assets/js/app.0cfbb44b.js",
    "revision": "4e31826e4a1c8fda5c611a47ca713932"
  },
  {
    "url": "central/index.html",
    "revision": "1794f481df6e09339e286549b06206fb"
  },
  {
    "url": "class_brand/index.html",
    "revision": "ffca06e598ddaf71db9c98112f45ce7c"
  },
  {
    "url": "class_brand/session.html",
    "revision": "0ecac3248b0fe5b31fdd1fe6ccc5b6a1"
  },
  {
    "url": "index.html",
    "revision": "5a62c37016de25143b3b1c0ab7402709"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
