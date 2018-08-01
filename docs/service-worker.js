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
    "revision": "dbea8cb45be0706f5640ef03957a152b"
  },
  {
    "url": "arithmetic/index.html",
    "revision": "9fa9eef4002571e76f3c2a68f5ff7158"
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
    "url": "assets/js/10.4d3af838.js",
    "revision": "7c3004f899efeeb581416300ddcd5cf2"
  },
  {
    "url": "assets/js/11.54473e37.js",
    "revision": "882275aea638431c4d9bb7deb044e641"
  },
  {
    "url": "assets/js/12.264ecff5.js",
    "revision": "57c1e5ae121a9725074006b0ecf88f07"
  },
  {
    "url": "assets/js/13.dacaccdc.js",
    "revision": "3e09c22da137c333dd2bd53723a87516"
  },
  {
    "url": "assets/js/14.12e5eb30.js",
    "revision": "ea7eaf63552c3b0e481d723e7710a695"
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
    "url": "assets/js/4.ac322227.js",
    "revision": "ef8022ade1fe90bd77453a1985f5e61b"
  },
  {
    "url": "assets/js/5.2eb24bbf.js",
    "revision": "33423f84b182bc260ad844161b376df6"
  },
  {
    "url": "assets/js/6.e96257d3.js",
    "revision": "84e3aaf8d499d1ec5085f194888ed330"
  },
  {
    "url": "assets/js/7.221cac60.js",
    "revision": "cf46f26d31747a8328418716549b45aa"
  },
  {
    "url": "assets/js/8.12c746f9.js",
    "revision": "5e8e45aa83c70376879dd189d80815e2"
  },
  {
    "url": "assets/js/9.02cebe91.js",
    "revision": "15cf3b0ceeb7dc37488d6f280013102b"
  },
  {
    "url": "assets/js/app.8527afd4.js",
    "revision": "90e0e9a79bca5a6c2482e3c5f16c5572"
  },
  {
    "url": "central/index.html",
    "revision": "5d3172a0d2c3c86d052c3e82fce6b351"
  },
  {
    "url": "class_brand/error_code.html",
    "revision": "f5e580db594160804c6984a186a52451"
  },
  {
    "url": "class_brand/index.html",
    "revision": "5dc905efe779f50615d8ec08a2dab4dc"
  },
  {
    "url": "class_brand/mgmt_readme.html",
    "revision": "ac25e385349046ac0f4a3b5934e3ceb5"
  },
  {
    "url": "class_brand/mgmt_session.html",
    "revision": "7dacc686870d090e5656bba7ce98e6d1"
  },
  {
    "url": "class_brand/school_mgmt_school.html",
    "revision": "66609ae9ddc18a01e09133d15bc52c25"
  },
  {
    "url": "class_brand/school_mgmt_student.html",
    "revision": "102a0ccf8964703ba0cfccd41937bbb7"
  },
  {
    "url": "class_brand/school_mgmt_teacher.html",
    "revision": "c272824cfe304a477c642815981f4a80"
  },
  {
    "url": "class_brand/system_mgmt_school.html",
    "revision": "4baf101d5bb0f25d4da7d59822ed763a"
  },
  {
    "url": "class_brand/system_mgmt_system_admin.html",
    "revision": "6b53a65c7520a55c73cb6802965d74ba"
  },
  {
    "url": "index.html",
    "revision": "084345a707df5e6d270a5e596ab5eca0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
