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
    "revision": "75c29b550deec0a2fb1ac3eb3b49f86c"
  },
  {
    "url": "arithmetic/index.html",
    "revision": "d20eeaab1bddcf8deb6dd74a87a94f0c"
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
    "url": "assets/js/10.c14aea78.js",
    "revision": "a47a3b339ec02429587fdb38067df0c7"
  },
  {
    "url": "assets/js/11.64826305.js",
    "revision": "c5f54b645cece2f6a41e1ad4ca7b1993"
  },
  {
    "url": "assets/js/12.167c359f.js",
    "revision": "f7ec67f2ba6ee8d65f506b97fe6caf10"
  },
  {
    "url": "assets/js/2.ea010887.js",
    "revision": "2402e7b40bef5a6de37856d3c0eb6223"
  },
  {
    "url": "assets/js/3.a3885e43.js",
    "revision": "b6b1332f836f16660fe5c83f88f074df"
  },
  {
    "url": "assets/js/4.fd0d6194.js",
    "revision": "97d6190cfb9ad5aed50916afd19dc2ba"
  },
  {
    "url": "assets/js/5.16cf0d2a.js",
    "revision": "d7e0053e1a256cb548d90766b1b5b52b"
  },
  {
    "url": "assets/js/6.285b7993.js",
    "revision": "2b31b6e13ed54c1a4fd254356b36c860"
  },
  {
    "url": "assets/js/7.d2dd04e3.js",
    "revision": "e305a6ebb966103de655538b159d1e00"
  },
  {
    "url": "assets/js/8.8b297c8c.js",
    "revision": "4f3a5b82e60b3311c86253f06090e64b"
  },
  {
    "url": "assets/js/9.25078652.js",
    "revision": "7556dcb5084c3ef37223d73ecca0c89a"
  },
  {
    "url": "assets/js/app.f739017c.js",
    "revision": "7fdf26754369cf018e9f6bc66defb0a6"
  },
  {
    "url": "central/index.html",
    "revision": "c6b68ccc1fa49bf2c8f32a48c5a26a06"
  },
  {
    "url": "class_brand/error_code.html",
    "revision": "d6b85693b43cc46c1eaf0a1f36449683"
  },
  {
    "url": "class_brand/index.html",
    "revision": "1ebaecb045bcdba0193d628ee5008781"
  },
  {
    "url": "class_brand/mgmt_readme.html",
    "revision": "20652d09e7bc78f42f37c294c82a9efb"
  },
  {
    "url": "class_brand/mgmt_session.html",
    "revision": "113a7942a276310aacd3a1085a86b0dd"
  },
  {
    "url": "class_brand/school_mgmt_school.html",
    "revision": "6324de0b9fbac9b5340999e9a22855d0"
  },
  {
    "url": "class_brand/system_mgmt_school.html",
    "revision": "8cd61fd8c39932fd12400a0288f464d4"
  },
  {
    "url": "class_brand/system_mgmt_system_admin.html",
    "revision": "0daf6d83042d419043eede39bd47d74e"
  },
  {
    "url": "index.html",
    "revision": "5a315143227a0c944ab4ca8245603209"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
