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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2019/01/30/sinon-mongo/index.html",
    "revision": "59ff332c2b1a3dc75011af23489e42ba"
  },
  {
    "url": "2019/02/28/vue-cli-plugin-vuedock/index.html",
    "revision": "61cb55a73d26479dab945bd37cbb13f4"
  },
  {
    "url": "2019/04/03/vue-autowire/index.html",
    "revision": "5723a8f2e15e5136a50bf3170b60ad36"
  },
  {
    "url": "2019/04/13/vue-cli-plugin-auth0/index.html",
    "revision": "387adf76d4de49565aaeb0541ddc97aa"
  },
  {
    "url": "2019/06/05/vue-cli-plugin-jest-puppeteer/index.html",
    "revision": "2ba19cd62e0512d2e1384be1dab24cf1"
  },
  {
    "url": "2019/07/26/pymongo-inmemory/index.html",
    "revision": "652a1bfa0224673c9dc215c48b8c49a6"
  },
  {
    "url": "2019/11/23/vuecli-in-docker/index.html",
    "revision": "81349146a3c6a66a263fb83340f6e0af"
  },
  {
    "url": "2020/03/22/nexus-operator/index.html",
    "revision": "e4e8b58f463d7480b32d92a2db70c50f"
  },
  {
    "url": "2020/04/11/new-website/index.html",
    "revision": "b6bf737f8a21a100ef999ac76bac11f0"
  },
  {
    "url": "2020/04/16/vuepress-github-actions/index.html",
    "revision": "04ac2656a0eff42c620bb61efd15a6ae"
  },
  {
    "url": "2020/07/10/nexus-go-client/index.html",
    "revision": "804b3d678ac580a28517ab0821d20ab6"
  },
  {
    "url": "2020/11/13/kubernetes-dns-issues-cheatsheet/index.html",
    "revision": "e8696bd10de3e4de5d2cef3c657a52ac"
  },
  {
    "url": "assets/css/0.styles.5d050517.css",
    "revision": "377393eeb680508068fbe58043bf5aa3"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/curl-service.d9dcf6f8.png",
    "revision": "d9dcf6f854ff206f2ee91731c8432ac1"
  },
  {
    "url": "assets/img/dashboard-echo-deployment.4dfa734c.png",
    "revision": "4dfa734cc315dd30e6894530e2c97228"
  },
  {
    "url": "assets/img/dashboard-hello-world-logs.0c0ebfb6.png",
    "revision": "0c0ebfb61284590cdd6b0b6e37e0e2bf"
  },
  {
    "url": "assets/img/dashboard-hello-world-status.cf5c6d54.png",
    "revision": "cf5c6d54d6fdad2fa100c10926f5bf3b"
  },
  {
    "url": "assets/img/dashboard-pods.38b7db02.png",
    "revision": "38b7db02903a3942f20c906b8ae02df2"
  },
  {
    "url": "assets/img/first-workflow.e19960a5.png",
    "revision": "e19960a5d6583cae82db4ff11144b3e5"
  },
  {
    "url": "assets/img/getting-started-actions.5a19fd66.png",
    "revision": "5a19fd66a29b3f9e6530219b430aab7e"
  },
  {
    "url": "assets/img/ingress-website-in-browser.a2eeeda5.png",
    "revision": "a2eeeda54695c4a416e48f44789d3034"
  },
  {
    "url": "assets/img/ingress.9f524cee.png",
    "revision": "9f524cee577f8e4daa9d823fe3e7f6e3"
  },
  {
    "url": "assets/img/kibana-browser.7264a352.png",
    "revision": "7264a352c44c9d2846506c050df83097"
  },
  {
    "url": "assets/img/kubernetes-dashboard.7748ab40.png",
    "revision": "7748ab40e0e75ee3b03e185f7ceb6288"
  },
  {
    "url": "assets/img/minikube-cluster.d0c76028.png",
    "revision": "d0c7602874035ee63f48aa77b164ade1"
  },
  {
    "url": "assets/img/nodeport-service.f6bd3383.png",
    "revision": "f6bd3383aeb54182435a1d88fc82bde0"
  },
  {
    "url": "assets/img/old-website.154038a0.png",
    "revision": "154038a03fa973c162580bd40984e1e1"
  },
  {
    "url": "assets/img/running-the-workflow.f2bea496.png",
    "revision": "f2bea496976d810a7103e04685e1de1b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/typical-cluster.5ce3daf2.png",
    "revision": "5ce3daf2fe43c0346c467079c598ef5a"
  },
  {
    "url": "assets/img/vuepress-blog-theme.c8251546.png",
    "revision": "c82515467a061482cb2451980fd36447"
  },
  {
    "url": "assets/img/vuepress-default-theme.5b7c158f.png",
    "revision": "5b7c158fb743d6d090f0b4d9d3533631"
  },
  {
    "url": "assets/js/1.df001f69.js",
    "revision": "a5b83de786c5fbd8e5d94ffa21a05c7b"
  },
  {
    "url": "assets/js/10.5f0d0529.js",
    "revision": "29f70f7670d6f9a77ae13ce46a855019"
  },
  {
    "url": "assets/js/11.7befcfea.js",
    "revision": "250ddb0c423740c489852c7b52de9c52"
  },
  {
    "url": "assets/js/12.4a26a5d9.js",
    "revision": "7b5c4b621fd09a05b4edc2571378e946"
  },
  {
    "url": "assets/js/13.06889bf8.js",
    "revision": "694646b3c05b657d122387c4a27788cf"
  },
  {
    "url": "assets/js/14.65846497.js",
    "revision": "3ad9aec3ae17b7186b0ebb2f92e99ef5"
  },
  {
    "url": "assets/js/15.9031139f.js",
    "revision": "f7d40f66d0a336d7cb0b92b3f3f77f56"
  },
  {
    "url": "assets/js/16.54c3dc31.js",
    "revision": "fe44bd174eb8d286bdc38fae0ffc1bba"
  },
  {
    "url": "assets/js/17.3f43ca11.js",
    "revision": "ff08ef1c40c283d61432e9ca5c19a3a0"
  },
  {
    "url": "assets/js/18.de809f45.js",
    "revision": "47e6ed219dbcfb38a1229557ee1c2d9f"
  },
  {
    "url": "assets/js/19.12c9dc31.js",
    "revision": "38717d348b21f15c767f5c23023aafcf"
  },
  {
    "url": "assets/js/20.2bf64c63.js",
    "revision": "a5beddda386701966b7ebfeb33edc4ca"
  },
  {
    "url": "assets/js/21.ee9097a0.js",
    "revision": "dd67696291179ea8c914e87620c1cfc9"
  },
  {
    "url": "assets/js/22.b80cd01c.js",
    "revision": "670ad85121cb0c7034dd4523cedd4230"
  },
  {
    "url": "assets/js/23.820e1359.js",
    "revision": "e4d9e0e69ae25669935a92128f3a2d1e"
  },
  {
    "url": "assets/js/24.d71037af.js",
    "revision": "f7713ebc730629eb45d004c239ac410f"
  },
  {
    "url": "assets/js/25.0859dadd.js",
    "revision": "b9ea12000942e60f9f00ceff0182bb2c"
  },
  {
    "url": "assets/js/26.3a8d1af5.js",
    "revision": "5f6ca5e88d7d5c1ad83c00802e24cd59"
  },
  {
    "url": "assets/js/27.4186f830.js",
    "revision": "345762a8f6bc4873b6cf6ba8ee47373a"
  },
  {
    "url": "assets/js/28.a96309af.js",
    "revision": "7cd400125a87c4c00a926ac98b9ca9d0"
  },
  {
    "url": "assets/js/29.6d5844df.js",
    "revision": "5951f36a1621e1df85e3b78e98994e24"
  },
  {
    "url": "assets/js/30.297f3cae.js",
    "revision": "8fde4d26651fcdcb3d301897f3067f4b"
  },
  {
    "url": "assets/js/31.c974e903.js",
    "revision": "ec25172c4f2cf9ee467c0440b221ba47"
  },
  {
    "url": "assets/js/32.64ae406d.js",
    "revision": "8959a69a2e627410544d2c2d2c330100"
  },
  {
    "url": "assets/js/33.d773a7a3.js",
    "revision": "144ffdee6ef1561418ecf5ac1fa5647a"
  },
  {
    "url": "assets/js/34.5a8741f1.js",
    "revision": "a64197c850481333913ea80d5919b27d"
  },
  {
    "url": "assets/js/35.47743611.js",
    "revision": "e706a8ae7e5093ffbfe0b533f5f76a2f"
  },
  {
    "url": "assets/js/36.1402f393.js",
    "revision": "721c58d5eada3cfb91967f4450412ff1"
  },
  {
    "url": "assets/js/4.58bda7f2.js",
    "revision": "2966ef834a53b413b2da82a3b229029f"
  },
  {
    "url": "assets/js/5.a1551c5c.js",
    "revision": "a8b12a9a3a93740648a6c4bc0e4085d6"
  },
  {
    "url": "assets/js/6.1434302a.js",
    "revision": "19e50851b1880acb87caaf93e5819db2"
  },
  {
    "url": "assets/js/7.400e442a.js",
    "revision": "67ddd66be33bc653b71fa17d00351697"
  },
  {
    "url": "assets/js/8.247014cf.js",
    "revision": "84d424290f43803067653a20a1b3d2ea"
  },
  {
    "url": "assets/js/9.021d0380.js",
    "revision": "d33342d835f1f54c3345ad5564e8d0e3"
  },
  {
    "url": "assets/js/app.ab8c3d7b.js",
    "revision": "912ad1a46c428137b94fca239a4b5bea"
  },
  {
    "url": "assets/js/vuejs-paginate.5d7b866c.js",
    "revision": "be4172505ca6dafa297f25066ce47120"
  },
  {
    "url": "blog/index.html",
    "revision": "a859b9890695214dc41a1ae5ee799f1d"
  },
  {
    "url": "icons/android-icon-144x144.png",
    "revision": "28910dff5341992aac363d1a61ebfffd"
  },
  {
    "url": "icons/android-icon-192x192.png",
    "revision": "bdd34071dbfe3c8d1cfa940153c7306f"
  },
  {
    "url": "icons/android-icon-36x36.png",
    "revision": "b9d04f9bf91ad69ddf9b8090103dd31b"
  },
  {
    "url": "icons/android-icon-48x48.png",
    "revision": "0316ef3713d3944b9c45f110eb834c2a"
  },
  {
    "url": "icons/android-icon-72x72.png",
    "revision": "f466c7c84faa4221b907597dee1d7dd9"
  },
  {
    "url": "icons/android-icon-96x96.png",
    "revision": "f94f94c3a00fe6185ace160c1aacc3d1"
  },
  {
    "url": "icons/apple-icon-114x114.png",
    "revision": "c99ef18e4f6f7eda17847cdd5cc2c5fc"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "b54d7175d195f3168e0f1f6cac8542bb"
  },
  {
    "url": "icons/apple-icon-144x144.png",
    "revision": "9dc0aea057bffe8ebc0e5118c55d830c"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "f0d62d7ba0305216c971284af62ae4db"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "5fa0a867448e62ddf7e0fd325f0099cb"
  },
  {
    "url": "icons/apple-icon-57x57.png",
    "revision": "538f752117573fba45e6ee5892eb3dbf"
  },
  {
    "url": "icons/apple-icon-60x60.png",
    "revision": "9c499ea03a7b23d538112e3d5ce80bdd"
  },
  {
    "url": "icons/apple-icon-72x72.png",
    "revision": "d54c1da879bb840ceaae91d35eac8ae5"
  },
  {
    "url": "icons/apple-icon-76x76.png",
    "revision": "2a7022416225419ff47000c0e4f68571"
  },
  {
    "url": "icons/apple-icon-precomposed.png",
    "revision": "6ac7fee23db8d7e355b9d71fe2d866d8"
  },
  {
    "url": "icons/apple-icon.png",
    "revision": "6ac7fee23db8d7e355b9d71fe2d866d8"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "bcff290b0aa52ea41fe6124868b0e192"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "52f5730d34479787c72e56d5bd10cdf7"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "f94f94c3a00fe6185ace160c1aacc3d1"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "28910dff5341992aac363d1a61ebfffd"
  },
  {
    "url": "icons/ms-icon-150x150.png",
    "revision": "7887e2b8282755bd44fed1b39023d912"
  },
  {
    "url": "icons/ms-icon-310x310.png",
    "revision": "823f16825481e6c8d8cf21553602ca2e"
  },
  {
    "url": "icons/ms-icon-70x70.png",
    "revision": "8e8aac435d2079ed846a4d70fc3a193d"
  },
  {
    "url": "index.html",
    "revision": "70449e7cb3bcbf9d4d8386d4b005a7a7"
  },
  {
    "url": "logo_home.png",
    "revision": "6884a994dcaf1695f6d4598597dd6937"
  },
  {
    "url": "logo_navbar.png",
    "revision": "edfbc650277811f09463f59c15ef9f23"
  },
  {
    "url": "members.html",
    "revision": "243c76c5e0ad0a6ed5d8d5474c132dba"
  },
  {
    "url": "projects/index.html",
    "revision": "e68f1a0949e295d46115e23cc2cebbb0"
  },
  {
    "url": "projects/page/2/index.html",
    "revision": "db9b59c8b36fcdcecc6c9a0a2859722a"
  },
  {
    "url": "tag/Auth0/index.html",
    "revision": "24661392351a615c7f3f359608c4349c"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "5cf2d85a29c888f737d13e950890a5e1"
  },
  {
    "url": "tag/DNS/index.html",
    "revision": "6796553f3c4c5f9ac25f22d458b424ee"
  },
  {
    "url": "tag/Docker Hub/index.html",
    "revision": "609a66c7b2d09c4c7596167fc5e43f9c"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "3299c6d987132d9af328c1f793015a15"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "eb90e2675f294ee6ed71739cc0527c0e"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "8a9f6d8a8fd92ed0045560eb9700e90d"
  },
  {
    "url": "tag/Golang/index.html",
    "revision": "0b401235985c33ff564cc27114b8ffd0"
  },
  {
    "url": "tag/index.html",
    "revision": "d246f0ad7526923671aa46318eb668f9"
  },
  {
    "url": "tag/Jekyll/index.html",
    "revision": "c8f168358cc6a93fc99214a33c686984"
  },
  {
    "url": "tag/Jest/index.html",
    "revision": "66675377d68fc9dd6275ea9d2cf877a7"
  },
  {
    "url": "tag/kubernetes/index.html",
    "revision": "eacfde026983371da0b40d7b0b824e7d"
  },
  {
    "url": "tag/Kubernetes/index.html",
    "revision": "5bdd1d1b2f6c107b404acccdfc698cc9"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "78e20366e970f827cd8a1422a2be5918"
  },
  {
    "url": "tag/Nexus/index.html",
    "revision": "ae82385c5c30e5490cac683cc2ef573d"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "816b5f1c946ac905483c81184c63bd1a"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "044571d9f7678e5d060c38402b57a789"
  },
  {
    "url": "tag/npm/page/2/index.html",
    "revision": "6c3e5bf37c55b74dc6771e760dd37399"
  },
  {
    "url": "tag/Puppeteer/index.html",
    "revision": "983275c5066641d8313494606bf6febf"
  },
  {
    "url": "tag/PyPI/index.html",
    "revision": "0a8a09c219dffe724944f719519f62ec"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "061ee7295d861d7f60c27728f47939c0"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "18158c193fb658405dc8d958a29c5a89"
  },
  {
    "url": "tag/Vue CLI/index.html",
    "revision": "25d6bdc8fed6eb2360b133b00f4faea8"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "ff9c67b08ef115802cfd567966c2af2b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "454690ec1ead60ce805d7555ae4f7bfa"
  },
  {
    "url": "tutorials/index.html",
    "revision": "bc24249dc4910bc1f9f368448f882fa1"
  },
  {
    "url": "tutorials/kubernetes/1-clusters-nodes.html",
    "revision": "98585ba6bfc8f005494d11d7dab34242"
  },
  {
    "url": "tutorials/kubernetes/2-basic-kubernetes-objects.html",
    "revision": "ea01ee4c9e3243d93d54779b23576f7d"
  },
  {
    "url": "tutorials/kubernetes/3-basic-networking.html",
    "revision": "50b36d011bd18cbe2efd3c426ccb02e1"
  },
  {
    "url": "tutorials/kubernetes/index.html",
    "revision": "aef1591d993e1e1b7ee1fecbe091bf9c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
