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
    "revision": "12aac208703a44311e2f818f8b2a85c7"
  },
  {
    "url": "arithmetic/index.html",
    "revision": "0c3cd096e9057d24a6aff6675d53fe82"
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
    "url": "assets/js/3.c3df40e9.js",
    "revision": "d2539c1c0d86767fb7dde4e18d4786cc"
  },
  {
    "url": "assets/js/4.5783ddbf.js",
    "revision": "66b074b179d44035035a1a48fcaea3bf"
  },
  {
    "url": "assets/js/5.bc582c5c.js",
    "revision": "09641a7933fba141d393ae174c7a6060"
  },
  {
    "url": "assets/js/6.721db351.js",
    "revision": "7a88d78f4e3e3463871edbbf074bfff0"
  },
  {
    "url": "assets/js/7.bf3db4e8.js",
    "revision": "39011cb6b42625524eccc7280477239f"
  },
  {
    "url": "assets/js/8.62e5b0e4.js",
    "revision": "be52c83015738583744bde7ac07d00c8"
  },
  {
    "url": "assets/js/9.49415ee5.js",
    "revision": "4c5cbe56d40e918f645c12316a8376bd"
  },
  {
    "url": "assets/js/app.3a32b20e.js",
    "revision": "9f37f2370f1e7c54a68dd3880d7d4d36"
  },
  {
    "url": "central/index.html",
    "revision": "13ad0b34bfa3a8af18cee9686339b78e"
  },
  {
    "url": "class_brand/index.html",
    "revision": "1952a1a59e433f0de6020d3792991fd1"
  },
  {
    "url": "class_brand/system_mgmt_readme.html",
    "revision": "b0f74391d967902c1c851174bf71b90a"
  },
  {
    "url": "class_brand/system_mgmt_school.html",
    "revision": "70b429aef2c8cfcb087f393a3d12f973"
  },
  {
    "url": "class_brand/system_mgmt_session.html",
    "revision": "89c47ab3a5ee80cb2f2e34dfa748c87e"
  },
  {
    "url": "index.html",
    "revision": "41987b454ab15ffb8551d191e5c5b227"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
