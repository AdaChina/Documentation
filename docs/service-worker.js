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
    "revision": "b00061ed75780ac39c08b737f4565bea"
  },
  {
    "url": "arithmetic/index.html",
    "revision": "feae7074116150e53c5eebc8f568f60a"
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
    "url": "assets/js/10.d62c542d.js",
    "revision": "f1643c0649f355929a146f91161b08dc"
  },
  {
    "url": "assets/js/11.c429e625.js",
    "revision": "9c4d8fd6f2adfc61849e71b3c9319e1e"
  },
  {
    "url": "assets/js/12.fe45e380.js",
    "revision": "b11d9980d83f9821a98066d88ea4b5fd"
  },
  {
    "url": "assets/js/13.d49aa4e9.js",
    "revision": "907f2b1ffe721dd39d3da030e5cad611"
  },
  {
    "url": "assets/js/14.8c5427b5.js",
    "revision": "30bc83173288bcf9909ad33be42f9b74"
  },
  {
    "url": "assets/js/15.499ac7cf.js",
    "revision": "c62fda802e9428641279c2f6b7cccc2f"
  },
  {
    "url": "assets/js/2.ea010887.js",
    "revision": "2402e7b40bef5a6de37856d3c0eb6223"
  },
  {
    "url": "assets/js/3.a46dad4a.js",
    "revision": "316361b76be2350a70e9c38bc1e120f9"
  },
  {
    "url": "assets/js/4.6f516505.js",
    "revision": "c895c1bf78cb37450af52ac737e3098d"
  },
  {
    "url": "assets/js/5.4e780df2.js",
    "revision": "5a920e988a5a0ee0ff5bd031057d4875"
  },
  {
    "url": "assets/js/6.425602aa.js",
    "revision": "f71bbda191e16cc077e8b7c2d7cfd4b3"
  },
  {
    "url": "assets/js/7.38536667.js",
    "revision": "d05585bb60178bd14dd5ea877b6aef91"
  },
  {
    "url": "assets/js/8.345c5e00.js",
    "revision": "1cae768c7f6f30c0159388e37d2eed38"
  },
  {
    "url": "assets/js/9.68db4e95.js",
    "revision": "b4479a3b941f86f7010bb2b925b29926"
  },
  {
    "url": "assets/js/app.e535635e.js",
    "revision": "19f3d58e9b1c9c25409e77bf526a4ef3"
  },
  {
    "url": "central/index.html",
    "revision": "c0a712f91030b723ce1401aefd2576ae"
  },
  {
    "url": "class_brand/error_code.html",
    "revision": "7d1b3d7a40ea87d64c8dcb216849b452"
  },
  {
    "url": "class_brand/index.html",
    "revision": "ab105522a0d7a0899f1f55922e1ef82d"
  },
  {
    "url": "class_brand/mgmt_readme.html",
    "revision": "05760ae7b80dec175e91527370832c68"
  },
  {
    "url": "class_brand/mgmt_session.html",
    "revision": "ffc108466c4eb8acd44642ee59c33b90"
  },
  {
    "url": "class_brand/school_mgmt_parent.html",
    "revision": "360059cfdfe08b2c0f106babd86f616f"
  },
  {
    "url": "class_brand/school_mgmt_school.html",
    "revision": "3a8972579a88ed2f786f5989a0cca6e4"
  },
  {
    "url": "class_brand/school_mgmt_student.html",
    "revision": "e11590e5017e500dc82ad4af0a1bcab7"
  },
  {
    "url": "class_brand/school_mgmt_teacher.html",
    "revision": "656c7cdc5502aac7633b75583e3ff9a4"
  },
  {
    "url": "class_brand/system_mgmt_school.html",
    "revision": "1c292384c7e43254f65da42ce9e369d0"
  },
  {
    "url": "class_brand/system_mgmt_system_admin.html",
    "revision": "8d35eda2eb218412226abdd26fd0bab8"
  },
  {
    "url": "index.html",
    "revision": "cb8b05dd1ca07a3740e1ee3fda7d8827"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
