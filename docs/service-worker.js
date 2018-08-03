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
    "revision": "259b779cb8782cf9e9efa0b4c41c7c8b"
  },
  {
    "url": "arithmetic/index.html",
    "revision": "0d210f6dec10fa949da0f423dac1d49c"
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
    "url": "assets/js/10.2d69d26b.js",
    "revision": "50a07badb2d9633d93f348f2e68bb676"
  },
  {
    "url": "assets/js/11.b6401a92.js",
    "revision": "f2be06360230041adba6f72eda754137"
  },
  {
    "url": "assets/js/12.9d672c25.js",
    "revision": "afe7ff660b5970581570167ffde5eb3f"
  },
  {
    "url": "assets/js/13.2c878e3c.js",
    "revision": "5d1f0675808fa8d11f13940d66750421"
  },
  {
    "url": "assets/js/14.744c8e32.js",
    "revision": "b89fe537119e7c7c054c0527536b4c3b"
  },
  {
    "url": "assets/js/15.ea017ffd.js",
    "revision": "bb0d8a3546aade49339e836b8444dd4c"
  },
  {
    "url": "assets/js/16.b3d75874.js",
    "revision": "4dd4e8cb322b9ce21eec3eeb158a8f8d"
  },
  {
    "url": "assets/js/17.481c312a.js",
    "revision": "68513c3413d404c33e75b42166ab3584"
  },
  {
    "url": "assets/js/18.8d673459.js",
    "revision": "8982d7247859becd74a711d01b223210"
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
    "url": "assets/js/5.c2383141.js",
    "revision": "e967d4154e35d2dd97e8d788bb9e935e"
  },
  {
    "url": "assets/js/6.285b7993.js",
    "revision": "2b31b6e13ed54c1a4fd254356b36c860"
  },
  {
    "url": "assets/js/7.76efbaff.js",
    "revision": "1462fbecd9021da6ad954ed48df1c7c7"
  },
  {
    "url": "assets/js/8.b23a5056.js",
    "revision": "b4ee7ec268ebd19b63d20115201a5598"
  },
  {
    "url": "assets/js/9.9437b1b1.js",
    "revision": "522bc0f59e89ce1094b8e092ddf217ee"
  },
  {
    "url": "assets/js/app.9a462f94.js",
    "revision": "141d261bbc8d546772043e4644150b72"
  },
  {
    "url": "central/index.html",
    "revision": "b054d5accb4a644e5d0f6585f4344c39"
  },
  {
    "url": "class_brand/error_code.html",
    "revision": "4cd91bb6609f49e5166fc496bc68bfa9"
  },
  {
    "url": "class_brand/index.html",
    "revision": "de0fcd059b02367a108503d37152ab7c"
  },
  {
    "url": "class_brand/mgmt_readme.html",
    "revision": "147ec99d2d70a0971199367523de8149"
  },
  {
    "url": "class_brand/mgmt_session.html",
    "revision": "727b121f246e37dea3fdd160a04b1176"
  },
  {
    "url": "class_brand/school_mgmt/homeroom.html",
    "revision": "9bc27d76648897d0ab7cea8a3f76ab69"
  },
  {
    "url": "class_brand/school_mgmt/index.html",
    "revision": "548ba5bf360a09b4fe796604825916a6"
  },
  {
    "url": "class_brand/school_mgmt/parent.html",
    "revision": "ae5a8f8d314a803cee678d7b2c384815"
  },
  {
    "url": "class_brand/school_mgmt/school.html",
    "revision": "a64a78ca34025de33807b2906dcd409c"
  },
  {
    "url": "class_brand/school_mgmt/student.html",
    "revision": "3dd559b127f09cedd7232f95f5d75e4c"
  },
  {
    "url": "class_brand/school_mgmt/teacher.html",
    "revision": "0612755d889b8b4e7f780c3b24d72b0d"
  },
  {
    "url": "class_brand/system_mgmt/index.html",
    "revision": "f7bbc48c459b5d40f6fe3d2f4526b38e"
  },
  {
    "url": "class_brand/system_mgmt/school.html",
    "revision": "3e9dff12e4a5963c8ba8e397ef6ec5ea"
  },
  {
    "url": "class_brand/system_mgmt/system_admin.html",
    "revision": "0c03683722722df476fb6bdc229d7bf5"
  },
  {
    "url": "index.html",
    "revision": "adea3cd222c82d8b82556c9207def7aa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
