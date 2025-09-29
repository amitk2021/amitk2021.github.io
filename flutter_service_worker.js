'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d25a875d9bd12bdc9dccbe8ef3d4f850",
"assets/AssetManifest.bin.json": "4cdcf03d24d13a3b987f762d08474906",
"assets/AssetManifest.json": "4de468a71815b1d9b40eacb4d0e3f118",
"assets/assets/images/bg.jpg": "f6bda5bac029d6ccb001f3797277df22",
"assets/assets/images/header-pattern.png": "807717702758100a46b1612a881bc76e",
"assets/assets/images/icon_add_crn.png": "2b754e55ea082e658ba4156e729102c7",
"assets/assets/images/icon_all_applications.png": "f83eaae2efd77595e8f994ade4666f08",
"assets/assets/images/icon_arrow_back.png": "2aaec9d6def11f0d4770a4bc45a9a8a6",
"assets/assets/images/icon_calculator.png": "b412564cdfcea560c1ce1f648d05883a",
"assets/assets/images/icon_calendar.png": "ced66b385d3c571553424daf851b1fda",
"assets/assets/images/icon_call.png": "d92e30d08965fde106b893cbaee728d1",
"assets/assets/images/icon_download.png": "11153e64dfae93645eb31667dd6e5731",
"assets/assets/images/icon_email.png": "8d5abef7d6dace254f8d1e3a44c6993b",
"assets/assets/images/icon_face_id.png": "088424cbbecf8cf33b7eee0e270a795b",
"assets/assets/images/icon_fingerprint.png": "8c2ec0ff7cdc6c36f7e75ee352d90e69",
"assets/assets/images/icon_help.png": "9d29809da8c341164afe11f7ba4ed4ce",
"assets/assets/images/icon_home.png": "b21e4586541d3c504aa6640bbb101720",
"assets/assets/images/icon_kyc.png": "2edd3379a55481ac03ac7b81accc4cae",
"assets/assets/images/icon_lang.png": "6bcb3f57e6d017f128248101ea2dba78",
"assets/assets/images/icon_loans.png": "c92c08900dc1cbc32eef8abaec3e4c73",
"assets/assets/images/icon_logout.png": "c1ee987f8889cbac9b409c7c8d1f1a56",
"assets/assets/images/icon_more.png": "33323345a12677c7326453eee6b24369",
"assets/assets/images/icon_mpin.png": "2cf0adbb2b44917f3ee2a2c744ded308",
"assets/assets/images/icon_profile.png": "3efe3741bbaaf6abc84198734142cab9",
"assets/assets/images/icon_relation_manager.png": "c418aaaa7e91fed4cfc15aedb11a2269",
"assets/assets/images/icon_security.png": "224afafea6f9f09cabab9b9a919025e5",
"assets/assets/images/icon_setting.png": "b66be35dd7e1db3239a318d2204a004d",
"assets/assets/images/icon_shield.png": "339908d0ea3eb29702a7ef43c6ce7093",
"assets/assets/images/icon_statement.png": "0d3bf049dac3cee682705f4838b78f2c",
"assets/assets/images/logo.png": "33f7195376d2a88cd39fcb2866c0fc5b",
"assets/assets/images/real_estate.jpg": "bd80c9e36a6f88578496c2c076706b19",
"assets/assets/images/user_profile.png": "34aea4ae46098ce4400340839b53f110",
"assets/assets/images/user_square.png": "7461d7ddbf7c9f907038bb157061403d",
"assets/assets/images/veefin_logo.jpg": "ee138b157b2c0b8144cac622757dbdf7",
"assets/assets/images/veefin_logo_large.png": "ef3258100636cde75f91fefc9114a289",
"assets/assets/languages/en.json": "e41f408d2bb83601751fdc29e745a506",
"assets/assets/lotties/success.json": "dc9b18d21dda4ddc864342a2383073f8",
"assets/assets/lotties/success.lottie": "7f8a289f4178bd8aefc493379fd8eb6d",
"assets/assets/svgs/alarm.svg": "b471971e2e4cf8f440fcf40e39720c41",
"assets/assets/svgs/arrow-left.svg": "bb5cf0e1adbcbd59e8ecb85a340bf746",
"assets/assets/svgs/arrow_right_up.svg": "edba60038bd52eb496370e78a38b615b",
"assets/assets/svgs/bell.svg": "90ef78b77e198639c6d1d57ca3468463",
"assets/assets/svgs/bill.svg": "413b36d1594d33cdfa6e242af2aeca21",
"assets/assets/svgs/business.svg": "0937f40608d4b692b2d8dba3fbcf13cf",
"assets/assets/svgs/business_toggle.svg": "01012f991e97cbea5596ccebc97d83ee",
"assets/assets/svgs/calculator.svg": "907108ce54673b4cb23b378705234f81",
"assets/assets/svgs/calendar.svg": "0a24755a063389f5724fe0a42bd24a95",
"assets/assets/svgs/camera-minimalistic.svg": "a362d0a71d65d01009828938749c315d",
"assets/assets/svgs/camera.svg": "9449bfe9603a28210fde372195f5e7a8",
"assets/assets/svgs/card_pattern.svg": "47ecf3b40be0233589cbd0a4843aca84",
"assets/assets/svgs/card_receive.svg": "beb407a8e0be43c9c4df5f6b8b5cbd4f",
"assets/assets/svgs/card_transfer.svg": "3873d435844bbbd21a98fd80518befa2",
"assets/assets/svgs/cash-out.svg": "10bc84f30f2020f50dcd6bcde648a4b7",
"assets/assets/svgs/check-filled.svg": "d42be2067375f4fe8cb881a81e0021f5",
"assets/assets/svgs/check-rounded.svg": "112707e11308584e1adc24dd62864f05",
"assets/assets/svgs/chevron-down.svg": "08e553839a36f80904e9f2a6efc11429",
"assets/assets/svgs/chevron-left.svg": "57d5bcc2c6a125e62a4b339319c4b5da",
"assets/assets/svgs/chevron-right.svg": "f2caed1a7329ef659abbb2fdfb327f0d",
"assets/assets/svgs/chevron-up.svg": "3af68217579a9650daabf646347abed8",
"assets/assets/svgs/close-filled.svg": "27f372e17595ea4d5162edda2bf1e8c7",
"assets/assets/svgs/close-rounded.svg": "330b5b71736374b95428e9bc8955435b",
"assets/assets/svgs/close.svg": "e82233535916df0f9364756ec6508cef",
"assets/assets/svgs/contact.svg": "eae0e983d437e5eb7d3ac8448d56ad56",
"assets/assets/svgs/csv.svg": "1f2b2acd82fa49c1627ecc85b6b418c3",
"assets/assets/svgs/delete.svg": "ef238c13f0df829fe6811f7e0e514ed7",
"assets/assets/svgs/disbursement.svg": "97f692fb2accf9ea065b78d428b62a0b",
"assets/assets/svgs/dislike.svg": "141918a11468d2bed0efc52b35491bd0",
"assets/assets/svgs/document.svg": "29af901ef786d7cbcadf01f5e50f07ab",
"assets/assets/svgs/documents.svg": "a0b8d7e4728a07523559235069a3e096",
"assets/assets/svgs/dollar.svg": "e0cacdc068f626116891b6d922d85199",
"assets/assets/svgs/download.svg": "57ee5f03f5e5e86830d4b5cbdf626772",
"assets/assets/svgs/edit.svg": "9b8b73190336813246f96486561324d8",
"assets/assets/svgs/education.svg": "0e7f718ef65204d11a9e7b8295250e94",
"assets/assets/svgs/empty-box.svg": "9b33634cf36d30c4d4ff853460c87713",
"assets/assets/svgs/error.svg": "185d3ae19dc23e72e023c3c0fd8dc389",
"assets/assets/svgs/excel.svg": "d157411857f40937cab70943da8df17c",
"assets/assets/svgs/eye-closed.svg": "2ac6fa380a76af8642bc526adedda2b9",
"assets/assets/svgs/eye-opened.svg": "d9e3a24c2953a359ff6bc576472e2b55",
"assets/assets/svgs/face-scan.svg": "90e8b3838575fc9f0f4d01ea53fae089",
"assets/assets/svgs/filter.svg": "1f08812de48e0e171e8b0df371b1624c",
"assets/assets/svgs/flash-off.svg": "68ef087f59ad5fc605fabadf4c64fc27",
"assets/assets/svgs/flash-on.svg": "a0c9558e8375849e4b17f0e50b1354f9",
"assets/assets/svgs/france.svg": "856812ac049b2e12cde9fc3c39a8c9dc",
"assets/assets/svgs/germany.svg": "004ca3c01bfa76c5af3eb54c78518225",
"assets/assets/svgs/get-started.svg": "934fae4e52e50efd1dc39986411d04d7",
"assets/assets/svgs/handshake.png": "0b4808df4202fe657ed4ee04511dd404",
"assets/assets/svgs/help.svg": "1dd2f4cb69dab5d7eee63a525e53df18",
"assets/assets/svgs/home-angle.svg": "200331833639adae1d3999236ae2e668",
"assets/assets/svgs/home.svg": "81edebdb344241ad29c8ef70efec1aab",
"assets/assets/svgs/icon_disbursment.svg": "3424da8716a4a18cd5d3502f3835cd20",
"assets/assets/svgs/info-filled.svg": "fbadf6047fb3eadc4368704e516decd5",
"assets/assets/svgs/info-outlined.svg": "25694067ed0740cf54159faa1aa64705",
"assets/assets/svgs/jpg.svg": "12983f2a3b794ab6fb7ca158569b7d4a",
"assets/assets/svgs/key.svg": "1f8fcb4623bc3e4f6ae4b867a2bd49f3",
"assets/assets/svgs/letter.svg": "f1f09756ba6efa44c7a489cc7bc5112d",
"assets/assets/svgs/like.svg": "8db6324055e284fba32412bf9ac3fa33",
"assets/assets/svgs/lms_applications.svg": "f120cb1231f75a8839dc7244c8f35fb2",
"assets/assets/svgs/lms_calculator.svg": "547afc50ad370b9324a7f63eea56e316",
"assets/assets/svgs/logo.svg": "f1269e66c283db80f4bb0f1413a6fca9",
"assets/assets/svgs/magnifier.svg": "0e376442014cc245713f1cdfaea318a9",
"assets/assets/svgs/main-logo-white.svg": "ff839fe0c8dfa348114f5f4c80be4716",
"assets/assets/svgs/main-logo.svg": "a33aadd5d59449ceecfac497bea3419c",
"assets/assets/svgs/medal-ribbon-star.svg": "0b204aae7e6d5738a3022417cd656d07",
"assets/assets/svgs/menu-dots-square.svg": "16dcda1e4e4fbe1ed54ebefc8f023634",
"assets/assets/svgs/money-on-hand.svg": "7368d400d216be2a4c999639fd495e1f",
"assets/assets/svgs/more-horizontal.svg": "b2dec0849e5b6318ea1a8041f9c57486",
"assets/assets/svgs/nav_home.svg": "62bb8fdc90a24a8424bb91391cf36e69",
"assets/assets/svgs/nav_home_select.svg": "ccc6f4927ba211fadfca2c9145346dab",
"assets/assets/svgs/nav_loan.svg": "85d04c1483a6788d31d47f985b30f605",
"assets/assets/svgs/nav_loan_select.svg": "78fc4c8fd8d1d942f898431b73212ae4",
"assets/assets/svgs/nav_more.svg": "7da1191d37c92fd4d6ba35591ac0fd7a",
"assets/assets/svgs/nav_statement.svg": "222007b7bf93aab8ca832a4fa729b774",
"assets/assets/svgs/payment.svg": "fc0699de3cb31f00b362bba9c133f867",
"assets/assets/svgs/pdf.svg": "45c2ece7244680bc095924250e7b3095",
"assets/assets/svgs/personal_toggle.svg": "d9023411cbfc12a17a0f79d9aa151bb9",
"assets/assets/svgs/plus.svg": "9db2a996d2cc648e6d6a4b620299a245",
"assets/assets/svgs/png.svg": "3706b93080c95d99eaa0d01d7966c573",
"assets/assets/svgs/power.svg": "fba3bd2d1a176240e34f10a6b3a683bd",
"assets/assets/svgs/printer.svg": "4706beb4c80265edc2f5b37880af773a",
"assets/assets/svgs/scanner.svg": "268488167cac80ef67186b9fc1500ebf",
"assets/assets/svgs/shop.svg": "b13b747b2fcba9c8aa61b0c5c9ed2999",
"assets/assets/svgs/spain.svg": "835b9d01c693cdb21f82018b6c0723ce",
"assets/assets/svgs/statement.svg": "d13a040bef833550e385ef0a85cc9b87",
"assets/assets/svgs/track.svg": "d13b27019715c4cfca869a064edf341b",
"assets/assets/svgs/united-kingdom.svg": "c41a99a09a92eabf335155d051936233",
"assets/assets/svgs/united-states.svg": "b94284a27addcfdf66fe11fb80a8c963",
"assets/assets/svgs/upload.svg": "63e3b8e1088048dcd0560525b196fe30",
"assets/assets/svgs/vehicle.svg": "f941a1c2c91e94bcc8b646c315d8f2cc",
"assets/assets/svgs/wad-of-money.svg": "3014cb6e9b8bd2d5c4b3d75b787b46d5",
"assets/assets/svgs/warning.svg": "6965feffa716171078ecc75c8be6f12a",
"assets/assets/svgs/widgets.svg": "43c1c75c4dc71fbd9e734f3309f70109",
"assets/assets/svgs/word.svg": "58657485ccbbe42d67e5bc0864255b5f",
"assets/assets/svgs/world-wide-web.svg": "5a9e5d77d9931c9fb065ebaed4be2de1",
"assets/assets/svgs/zip.svg": "bf2d0978725c638b431633f4dd9ff504",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3c120c1824b7d4d583450ffcfeb83642",
"assets/NOTICES": "8cd6929576652bf075876e2525818397",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "2b36f0ebb1100ec3f2c41cb0c09150d5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d0aed86c7000b6ca2d6022f578408890",
"/": "d0aed86c7000b6ca2d6022f578408890",
"main.dart.js": "d4236ea2923348788fa994d97c89b899",
"manifest.json": "cbf77e75873d805c8a3ddd181adf12fa",
"version.json": "fccf694ec7798676e5355ef5e4623f9e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
