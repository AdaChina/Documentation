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
    "revision": "86c5fa17399519b0f070b1563afce651"
  },
  {
    "url": "arithmetic/index.html",
    "revision": "c1374f78cdda3ae49278af13433afd6f"
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
    "url": "assets/js/11.9f46915b.js",
    "revision": "69293aca6e52c89a6d08dde288217f2d"
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
    "url": "assets/js/8.73c3ee40.js",
    "revision": "4b329181374a2d124b005a75427cd730"
  },
  {
    "url": "assets/js/9.1938462b.js",
    "revision": "251e419467e8495445a18b26bddbd81b"
  },
  {
    "url": "assets/js/app.07378b0c.js",
    "revision": "fab968dab286ded91faaa23ce95bd0d2"
  },
  {
    "url": "central/index.html",
    "revision": "e44231ab6132f26671f59877ed21c710"
  },
  {
    "url": "class_brand/error_code.html",
    "revision": "8d09dbb0f7613c231a8d0a55e1a334f1"
  },
  {
    "url": "class_brand/index.html",
    "revision": "2de3eb51ec4fd709a4b3205933abd465"
  },
  {
    "url": "class_brand/mgmt_readme.html",
    "revision": "a4a35b75a169f144c933ea5930f80c0a"
  },
  {
    "url": "class_brand/mgmt_session.html",
    "revision": "592bf66b50d9ce91e8081633a1bcf503"
  },
  {
    "url": "class_brand/school_mgmt_school.html",
    "revision": "626ad145f9ea6c1738dd094be23f8995"
  },
  {
    "url": "class_brand/school_mgmt_teacher.html",
    "revision": "e3779f27ddeb1ceafb72339fe7c91a4d"
  },
  {
    "url": "class_brand/system_mgmt_school.html",
    "revision": "057d085767be3b4a6decb5d548a12cf2"
  },
  {
    "url": "class_brand/system_mgmt_system_admin.html",
    "revision": "476a2a0990c8f2c5222cf9bdc571e523"
  },
  {
    "url": "index.html",
    "revision": "356e6526f553a529e298ebad48428574"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
