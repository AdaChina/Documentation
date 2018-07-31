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
    "revision": "dd1a79345bcf7604f077b90c476334b4"
  },
  {
    "url": "arithmetic/index.html",
    "revision": "d9c334c448046df2fb3f6589c39f9929"
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
    "url": "assets/js/11.b55cd5e4.js",
    "revision": "63e73b2380a37a5085427578367d76bb"
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
    "url": "assets/js/8.2a03b3e8.js",
    "revision": "ba4eaa2b2e29e5d2783aef5c289e3930"
  },
  {
    "url": "assets/js/9.25078652.js",
    "revision": "7556dcb5084c3ef37223d73ecca0c89a"
  },
  {
    "url": "assets/js/app.fa53399d.js",
    "revision": "aa58abe46892b74240b7c15a1ddb0077"
  },
  {
    "url": "central/index.html",
    "revision": "25bd549066e7e3a0974f9c31ba17fcc1"
  },
  {
    "url": "class_brand/error_code.html",
    "revision": "e125c7322ad7ec0dc29a85da8ff430c2"
  },
  {
    "url": "class_brand/index.html",
    "revision": "52118573ac7238f35df1e7c85313e54c"
  },
  {
    "url": "class_brand/mgmt_readme.html",
    "revision": "128f3e1a54e863622fde9bc05d078d0f"
  },
  {
    "url": "class_brand/mgmt_session.html",
    "revision": "5283a22a35a966f9b54ce4e64d629c25"
  },
  {
    "url": "class_brand/school_mgmt_school.html",
    "revision": "f011543ee5c06d3ef8ca4830d1bcdebd"
  },
  {
    "url": "class_brand/system_mgmt_school.html",
    "revision": "99ff8fabce11aa22d068112a320b43f8"
  },
  {
    "url": "class_brand/system_mgmt_system_admin.html",
    "revision": "e3dca9cee4c11a6ecb54fea896154291"
  },
  {
    "url": "index.html",
    "revision": "5904f6c8cec268fb226c277c187946f2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
