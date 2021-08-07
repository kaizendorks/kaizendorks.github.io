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
    "revision": "ccffa29876c2f99b7d324d62c2a27ea7"
  },
  {
    "url": "2019/02/28/vue-cli-plugin-vuedock/index.html",
    "revision": "2137a91a18c2e337438236c308e3074b"
  },
  {
    "url": "2019/04/03/vue-autowire/index.html",
    "revision": "ebc60de52acf6eefd5add95b02e86b5a"
  },
  {
    "url": "2019/04/13/vue-cli-plugin-auth0/index.html",
    "revision": "1b084f9aef7cb26cfdf23fb5a083df4e"
  },
  {
    "url": "2019/06/05/vue-cli-plugin-jest-puppeteer/index.html",
    "revision": "014ba3af1b96d8dd9064d4dc0e679703"
  },
  {
    "url": "2019/07/26/pymongo-inmemory/index.html",
    "revision": "142485801575b83d67a9b7957186ecfb"
  },
  {
    "url": "2019/11/23/vuecli-in-docker/index.html",
    "revision": "ef949c2aaaf8737127b15fd93826aa99"
  },
  {
    "url": "2020/03/22/nexus-operator/index.html",
    "revision": "9f9afcbf9a5ddf6ceab488a4c9e1d1ad"
  },
  {
    "url": "2020/04/11/new-website/index.html",
    "revision": "7bf7511b47ec0bac94b3db626815ed35"
  },
  {
    "url": "2020/04/16/vuepress-github-actions/index.html",
    "revision": "9c2ce65cd35632991bab34cc1c1f8609"
  },
  {
    "url": "2020/07/10/nexus-go-client/index.html",
    "revision": "e4e608071f430d431d2387191ab4e8ea"
  },
  {
    "url": "2020/11/13/kubernetes-dns-issues-cheatsheet/index.html",
    "revision": "d93bbd87e2b160f936911b04f6e7a045"
  },
  {
    "url": "2021/08/07/dexa/index.html",
    "revision": "9b57518cf744e86478d8d9feb5ba5e3e"
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
    "url": "assets/js/11.0fe77024.js",
    "revision": "cfa195d48a47e4f15f68f86b75fad630"
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
    "url": "assets/js/21.9ef09179.js",
    "revision": "0612fb77f9c84b2f2903b41dbf5228b1"
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
    "url": "assets/js/25.7f52a9f1.js",
    "revision": "416d2578b625b0437d1422aa0a647e59"
  },
  {
    "url": "assets/js/26.8fe185d3.js",
    "revision": "1901dd8e79f7ddc0b44c12e3b62cca99"
  },
  {
    "url": "assets/js/27.96056a33.js",
    "revision": "94c90b6694924001ceb425cea156a167"
  },
  {
    "url": "assets/js/28.8dd96cb3.js",
    "revision": "d6b0b4d98c0ad83c790a4704f7133234"
  },
  {
    "url": "assets/js/29.650c5b83.js",
    "revision": "1411f5a1bdbd8a9473ba300d86a81e31"
  },
  {
    "url": "assets/js/30.57e121e1.js",
    "revision": "c5825d59f3dc4a1c8790e2e4ccb2c8d9"
  },
  {
    "url": "assets/js/31.ad56927b.js",
    "revision": "2d8293ebb73983816f012ad7ed80d39a"
  },
  {
    "url": "assets/js/32.b6abad72.js",
    "revision": "97f5296b97c770eceac113bb41bc8460"
  },
  {
    "url": "assets/js/33.6553d10b.js",
    "revision": "9a1c7d6887a05dc1abd283f16a14bc4d"
  },
  {
    "url": "assets/js/34.1d5f7c94.js",
    "revision": "36c9a8cf0c5514f73a6e1896a9d5a2c8"
  },
  {
    "url": "assets/js/35.251a8b5f.js",
    "revision": "5ecd5650a579e6b22e861aac5a77a9f3"
  },
  {
    "url": "assets/js/36.2be6f6c8.js",
    "revision": "e2d9cec6c2caf0f6aab56069c5cf06d6"
  },
  {
    "url": "assets/js/37.ea445df9.js",
    "revision": "c861deefa9ea3a0faebdc67235800ea5"
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
    "url": "assets/js/6.bcec5d77.js",
    "revision": "3a9afe21b0cd3e02a943a1e476b319b9"
  },
  {
    "url": "assets/js/7.efacf8bb.js",
    "revision": "5e9dc55404f4e0e9e2054dd1873274ea"
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
    "url": "assets/js/app.51834fbc.js",
    "revision": "82f821a99d72ebddf4c5292181c249b6"
  },
  {
    "url": "assets/js/vuejs-paginate.5d7b866c.js",
    "revision": "be4172505ca6dafa297f25066ce47120"
  },
  {
    "url": "blog/index.html",
    "revision": "e9244df0218121b24ce5d3a1bfd09cb9"
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
    "revision": "2a953a7d3ef41f76d92b47bfaad10b4e"
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
    "revision": "b9b68a3119bf74a53499cae88c02ca64"
  },
  {
    "url": "projects/index.html",
    "revision": "53dc441c27051c0e94e35be962c43394"
  },
  {
    "url": "projects/page/2/index.html",
    "revision": "3aa38c08db30751b6aca8e1f42c1fdd7"
  },
  {
    "url": "tag/Auth0/index.html",
    "revision": "a928c9dd176ec11f08631bbef5161e69"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "27ef696390744056f17320147f9d5383"
  },
  {
    "url": "tag/cli/index.html",
    "revision": "cf5e54526ed75e74f5168239ada74906"
  },
  {
    "url": "tag/DNS/index.html",
    "revision": "8876270a27b7ffd485102a6054dbf23a"
  },
  {
    "url": "tag/Docker Hub/index.html",
    "revision": "1f7d363439ab186b3cfa48da2d1208e1"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "9cc58078b2b272acc9db34f93f9d5094"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "3d34aa2862bcb96d4d7f1d04b8ba8056"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "424ff8abb8ce88507d675e688e5312b3"
  },
  {
    "url": "tag/Golang/index.html",
    "revision": "3830f9bd32210a0c88188437576a0bdf"
  },
  {
    "url": "tag/index.html",
    "revision": "8eeb1c97646847c2496f3cf4f530beb1"
  },
  {
    "url": "tag/Jekyll/index.html",
    "revision": "70bf553712a488a0b93058bdaa07c62d"
  },
  {
    "url": "tag/Jest/index.html",
    "revision": "96804c73b62ebd4493e4221231e3ba2e"
  },
  {
    "url": "tag/kubernetes/index.html",
    "revision": "6a56e35afa4b27015702f321ce0737e0"
  },
  {
    "url": "tag/Kubernetes/index.html",
    "revision": "00eee563876e8e18e1b06ae9d861ce82"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "d40e5de4ce2ced3a655f8aab8d0600ac"
  },
  {
    "url": "tag/Nexus/index.html",
    "revision": "e4bb335b75666e38881213970ff39977"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "a209d650e390fa3d463f37f475a94d95"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "07a0771c086002dd4c655e1d21f8943b"
  },
  {
    "url": "tag/npm/page/2/index.html",
    "revision": "473be59d537d6877ab3a603519371a26"
  },
  {
    "url": "tag/Puppeteer/index.html",
    "revision": "7f404a25c06534bc1383ddb1eecef95b"
  },
  {
    "url": "tag/PyPI/index.html",
    "revision": "84d7badc3af35c40a073ff78b5aa3bd2"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "aa77b02aa95f21be2e9a68bd1ff92505"
  },
  {
    "url": "tag/scaffolding/index.html",
    "revision": "5d99aeb37857ad0092ce9ccccd491428"
  },
  {
    "url": "tag/templating/index.html",
    "revision": "91e433b9ecac5becf6595724785d577e"
  },
  {
    "url": "tag/tutorial/index.html",
    "revision": "d459d95ca765cd6aa6b010b5a757ed79"
  },
  {
    "url": "tag/Vue CLI/index.html",
    "revision": "506f0ffd60521923c4cc777617242755"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "a701a84d8b026790e01c79eb6436fc0d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "30152da37e66c94aa3c84f1d2527edd2"
  },
  {
    "url": "tutorials/index.html",
    "revision": "f75b5ceb11677730980596faaf497bee"
  },
  {
    "url": "tutorials/kubernetes/1-clusters-nodes.html",
    "revision": "6cf78eef3139f817eaa71b47683fba94"
  },
  {
    "url": "tutorials/kubernetes/2-basic-kubernetes-objects.html",
    "revision": "ba6075a6c0ac578ec2f493bbe776b5b4"
  },
  {
    "url": "tutorials/kubernetes/3-basic-networking.html",
    "revision": "aa42b9b022621f6ca569e8d933387f9a"
  },
  {
    "url": "tutorials/kubernetes/index.html",
    "revision": "c579ba22bf13a735378ee3654227670a"
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
