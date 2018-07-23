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
    "revision": "dc83bffb476da1562a7f7707c5e6c053"
  },
  {
    "url": "arithmetic/index.html",
    "revision": "7a2f6fac1198b69a011f57450b4a7494"
  },
  {
    "url": "assets/css/0.styles.43a527db.css",
    "revision": "a26ba8bccef9ed108a194342bd3959b8"
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
    "url": "assets/js/app.7817eda0.js",
    "revision": "5ba2e9986f6360bd28a97c0382dfee17"
  },
  {
    "url": "central/index.html",
    "revision": "21bdb935c8be3e6259e829b0b7aae815"
  },
  {
    "url": "class_brand/index.html",
    "revision": "482a75986700e43f932135ffc1219ca7"
  },
  {
    "url": "class_brand/session.html",
    "revision": "b4f6c2153b9c6d5f3406f02e9f65113f"
  },
  {
    "url": "index.html",
    "revision": "769e2ef615206648e5f7043eb0f0aa6b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
