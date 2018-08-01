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
    "revision": "57de465d2c996c4087b2a43a9824c554"
  },
  {
    "url": "arithmetic/index.html",
    "revision": "354b62f4cec133264f0dd4cf5282acf7"
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
    "url": "assets/js/10.73857009.js",
    "revision": "5a74c449d83ded51a2804af9cb565692"
  },
  {
    "url": "assets/js/11.c38dd4f9.js",
    "revision": "435f83c0e2c1f390ea77de144fee1c28"
  },
  {
    "url": "assets/js/12.203d30ea.js",
    "revision": "628f22d00a5aa5753f79aa4ea80f9210"
  },
  {
    "url": "assets/js/13.ec2995e9.js",
    "revision": "94ea0f2ccf5acb008e12c02bed51d25a"
  },
  {
    "url": "assets/js/2.ea010887.js",
    "revision": "2402e7b40bef5a6de37856d3c0eb6223"
  },
  {
    "url": "assets/js/3.a2e02c1c.js",
    "revision": "18782fbae0a7ea6c7332889507b48b39"
  },
  {
    "url": "assets/js/4.fe96f954.js",
    "revision": "f370ce63926392196b8432c41a0f54d1"
  },
  {
    "url": "assets/js/5.c2383141.js",
    "revision": "e967d4154e35d2dd97e8d788bb9e935e"
  },
  {
    "url": "assets/js/6.2b8d3b75.js",
    "revision": "4ebc62c4eefd71c00447740e4bf48c3c"
  },
  {
    "url": "assets/js/7.3e62b21a.js",
    "revision": "a14b9f76396c5a90ab99316459e38dbe"
  },
  {
    "url": "assets/js/8.29613c4b.js",
    "revision": "7aabf96d40d0bac39a0d6f7e12bfc699"
  },
  {
    "url": "assets/js/9.1938462b.js",
    "revision": "251e419467e8495445a18b26bddbd81b"
  },
  {
    "url": "assets/js/app.4f2108a8.js",
    "revision": "f9e13ea5cba8cc4739a32e0fbd4ea5b2"
  },
  {
    "url": "central/index.html",
    "revision": "8e0a2566fdabd418aa0aa25d9e9be735"
  },
  {
    "url": "class_brand/error_code.html",
    "revision": "eb6ee076620e2fc2fe8aed873879d73a"
  },
  {
    "url": "class_brand/index.html",
    "revision": "0503909e7edc915212cc09387b8ce853"
  },
  {
    "url": "class_brand/mgmt_readme.html",
    "revision": "2bd6be744876a25ea1bf09967cea0d2e"
  },
  {
    "url": "class_brand/mgmt_session.html",
    "revision": "abe0aac48b79277648b0be7785f093b2"
  },
  {
    "url": "class_brand/school_mgmt_school.html",
    "revision": "1e836dbf8bdf91470e29e234330c63c8"
  },
  {
    "url": "class_brand/school_mgmt_teacher.html",
    "revision": "2e13758dc4f687552da12b08f4c80c8d"
  },
  {
    "url": "class_brand/system_mgmt_school.html",
    "revision": "e44a0d2aaa741611114fe3e2e6640741"
  },
  {
    "url": "class_brand/system_mgmt_system_admin.html",
    "revision": "80a6b1dcdee5cb12796ae39a8f5b0455"
  },
  {
    "url": "index.html",
    "revision": "fa9661ada9cbdef691c1763eb27f23c1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
