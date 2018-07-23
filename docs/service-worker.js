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
    "revision": "0d632cb7b246e9a7505d83376ffb7bee"
  },
  {
    "url": "arithmetic/index.html",
    "revision": "134d0b8adff722f7ecc03ade71888c77"
  },
  {
    "url": "assets/css/0.styles.f4e33b6c.css",
    "revision": "05eff1a18e19d7d4541c09ba277631b3"
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
    "url": "assets/js/app.893c190b.js",
    "revision": "7a0164491b061db9aaf8af431cc79e7b"
  },
  {
    "url": "central/index.html",
    "revision": "0749c188972ab0ad9cafd6840583b3bb"
  },
  {
    "url": "class_brand/index.html",
    "revision": "4743c00614a82ea564f0aac8ef39d925"
  },
  {
    "url": "class_brand/session.html",
    "revision": "b98d526118dbde883446af671e69b5b9"
  },
  {
    "url": "index.html",
    "revision": "51938d391bb98ceec80d8f3efc5f5063"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
