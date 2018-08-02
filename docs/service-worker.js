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
    "revision": "306d63fbb4c694bc63775d64f31fcc17"
  },
  {
    "url": "arithmetic/index.html",
    "revision": "c47033ec09d39dee2ddb6e50f2f611c2"
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
    "url": "assets/js/10.bc84d4e4.js",
    "revision": "32727b3659067c1de8b2f90ac95c4bec"
  },
  {
    "url": "assets/js/11.92cc8a3d.js",
    "revision": "48c525c934e3564362a8de4b5efafe0e"
  },
  {
    "url": "assets/js/12.64c7a42b.js",
    "revision": "5dbfa15d07a719d9b7ee12e1925fd80d"
  },
  {
    "url": "assets/js/13.b44068cc.js",
    "revision": "a5f4f13271669a059137e04f036aa8be"
  },
  {
    "url": "assets/js/14.59f129fe.js",
    "revision": "a958a353bc0fb6ad0bc094cf80027546"
  },
  {
    "url": "assets/js/15.d3f2ce7a.js",
    "revision": "7005184fd38671d949c59e395012c4e5"
  },
  {
    "url": "assets/js/16.9c215953.js",
    "revision": "a53b47ac894e4b2acc086dad2b4d0bbc"
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
    "url": "assets/js/4.96328e71.js",
    "revision": "85bc3d57a3d3d2675bd88bbc5ed32453"
  },
  {
    "url": "assets/js/5.9c4c0cb3.js",
    "revision": "4b301f775d4cbc0deab86384323f8c50"
  },
  {
    "url": "assets/js/6.3475196f.js",
    "revision": "fd1c61ae65fbe14f3e7909ea70d4c1f7"
  },
  {
    "url": "assets/js/7.8699e505.js",
    "revision": "368b3f38b761105eb6ed629e614afb7c"
  },
  {
    "url": "assets/js/8.12c746f9.js",
    "revision": "5e8e45aa83c70376879dd189d80815e2"
  },
  {
    "url": "assets/js/9.1c86bd5a.js",
    "revision": "3146365223c610835e36e1495b41cb94"
  },
  {
    "url": "assets/js/app.13a4b376.js",
    "revision": "732feed74034336e3adde3f051be699f"
  },
  {
    "url": "central/index.html",
    "revision": "f4e47f9d71bc90f2e7f0081dfe1da853"
  },
  {
    "url": "class_brand/error_code.html",
    "revision": "d80c3d13c563ba72ecad3d9ebe26b2a4"
  },
  {
    "url": "class_brand/index.html",
    "revision": "ac6804a9ce9c6d74193519c3ea0ccfb2"
  },
  {
    "url": "class_brand/mgmt_readme.html",
    "revision": "3ca381edbcb487c3b962b6f331885c5c"
  },
  {
    "url": "class_brand/mgmt_session.html",
    "revision": "1b87b44547d9670273b1f8d1c0c1f10b"
  },
  {
    "url": "class_brand/school_mgmt_homeroom.html",
    "revision": "326f2622636ba535be7f1153302dc9e2"
  },
  {
    "url": "class_brand/school_mgmt_parent.html",
    "revision": "80d7e6eaff1b303e0b97f0d20db0cdda"
  },
  {
    "url": "class_brand/school_mgmt_school.html",
    "revision": "da347d9341adf2b85f9c5ffbe66b68b3"
  },
  {
    "url": "class_brand/school_mgmt_student.html",
    "revision": "dac3d87a9264f5f3c5e0eacf09cd17dd"
  },
  {
    "url": "class_brand/school_mgmt_teacher.html",
    "revision": "512b606eb888e4212dd0b81208ab757f"
  },
  {
    "url": "class_brand/system_mgmt_school.html",
    "revision": "067378862880fe6f957a903020ebaf11"
  },
  {
    "url": "class_brand/system_mgmt_system_admin.html",
    "revision": "f577cba9c57d55a1b832c32a5d880126"
  },
  {
    "url": "index.html",
    "revision": "e2ebebf4b6846bdc36d0f13a4d9f6857"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
