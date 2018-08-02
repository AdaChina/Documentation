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
    "revision": "d21efdf4651d157eb8a45e193938b1b0"
  },
  {
    "url": "arithmetic/index.html",
    "revision": "f15d8e0b7346e2575deddcc0212b323e"
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
    "url": "assets/js/12.0cf75215.js",
    "revision": "11e89aae4f2b47756cb4848358dd4bb7"
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
    "url": "assets/js/app.0ca2242d.js",
    "revision": "b65c47e8683a8ccb6c921d34079ac5a1"
  },
  {
    "url": "central/index.html",
    "revision": "e9f331d3d428d0b7aae66e5dddfa3d1f"
  },
  {
    "url": "class_brand/error_code.html",
    "revision": "3165dc79a4aaa069d4829db0387a4aaf"
  },
  {
    "url": "class_brand/index.html",
    "revision": "3a4d2ff3c8af831c8700f2216a579477"
  },
  {
    "url": "class_brand/mgmt_readme.html",
    "revision": "f0bc6f218ee7aa9c2bc96008659b3bd4"
  },
  {
    "url": "class_brand/mgmt_session.html",
    "revision": "2acb0b317069445f433dff08963464e2"
  },
  {
    "url": "class_brand/school_mgmt_homeroom.html",
    "revision": "0516fc20d383c7c1ce5b88ce5c7b4594"
  },
  {
    "url": "class_brand/school_mgmt_parent.html",
    "revision": "3f76f86d80ab04e62eee868711fe996f"
  },
  {
    "url": "class_brand/school_mgmt_school.html",
    "revision": "c4b183c1b743dd8ba31c29021bf6ee36"
  },
  {
    "url": "class_brand/school_mgmt_student.html",
    "revision": "3d4bad4115066e96a4d71144c51f1da9"
  },
  {
    "url": "class_brand/school_mgmt_teacher.html",
    "revision": "87e7115251bf092ad339eec4e405a168"
  },
  {
    "url": "class_brand/system_mgmt_school.html",
    "revision": "16ed485495b6994c433c503b3ae851f6"
  },
  {
    "url": "class_brand/system_mgmt_system_admin.html",
    "revision": "c51cb025554ac4f7c31f197c8bfc8cd2"
  },
  {
    "url": "index.html",
    "revision": "eb95503672d63097dd495920dc5d0396"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
