'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "330308a0ce482d16ade46873258d7d56",
"version.json": "aa854396476a29677f28121de6253fda",
"index.html": "f0ad2c1889257fcb5beb74c36e94cb08",
"/": "f0ad2c1889257fcb5beb74c36e94cb08",
"main.dart.js": "6d283879aabe29f1dffe72ae7bb5b564",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "556e0fac23bf125b98ec7bf22fb6858f",
"icons/Icon-192.png": "54e8901eb5945bb47f91bdb7db524944",
"icons/Icon-maskable-192.png": "54e8901eb5945bb47f91bdb7db524944",
"icons/Icon-maskable-512.png": "33585a63abbf382b51f3f84cef49dc8f",
"icons/Icon-512.png": "33585a63abbf382b51f3f84cef49dc8f",
"manifest.json": "7de031776802ec953b52e70724b1881e",
".git/config": "3c49de070e7fd99fc62d5b8d3a6fc0cc",
".git/objects/0d/b779169e5a6f59558767d735ee64b77ea9a541": "22430cba8fa4578fd361cfefed40bef9",
".git/objects/92/cf49de28456aa73481f2c448a4447d510e0fd5": "c0226139a774bb7a2612dbc74f051ed1",
".git/objects/0c/69dc654794b6d2b1dc6e2aea31643b94cb6110": "cd01af8058ee9c4f9648d9288a2b34b8",
".git/objects/50/d746b7d052f35bc2ab3d0333ed82442d66f8c2": "1a1904842d399a7941ef55efd9dc84db",
".git/objects/68/e9115ee2933ec3e7b6ff9bb004124be4af44b0": "c65531f4b286acc3028687d23d1f9c25",
".git/objects/9b/08efeac75481932c4e99f03d0afcc0671dfce2": "a195c09f7cc60a61bce9f1189f6df2c0",
".git/objects/04/198ca1615e8bb433d6973914bf893fddc56031": "618f3690a32ba72f435f26682aef9777",
".git/objects/6a/27b14b4def62fc791cd7edaede8f0e9d4ac59c": "780ce91d32ae14b0f53cbdeb15079238",
".git/objects/3d/62318ab991a55b2eddf82c94e28542fd8d4d9b": "9e16e1167c9f16acd96188f766c3c637",
".git/objects/0e/9db51eb81ec888d72b22ba122f3549405a2e37": "7b89025ac7b8d97050d371de30dc4573",
".git/objects/60/f167301598f6e3e13e147293af2ffa7f925bba": "8a387118b11b18fe6706dc9782a1d033",
".git/objects/a3/ee0f1a05844feeb6e0567e8f4a4b63b3c569bc": "b30ce56cd7e6b00a16ed6ca917c021ca",
".git/objects/b5/f9dfe6ce835db06ff55a4e9670be4a9f139407": "131c1e7b309c503b6396857d84c3ae9e",
".git/objects/d9/2a9a583a9b9c94608d32ee7186547596199c70": "2ba7802b61e4a4572b6167828a79fe42",
".git/objects/bb/1ca453706ab3ce30d3849589cdf4c744310c5c": "365795546532fbd5d9bd4523adb0f453",
".git/objects/bb/430e47d8503bf16a6aabdf82397fa800f6aed9": "1bb9d1a71c326184ff54bab907266817",
".git/objects/d0/4bebd804f5bf90976b97159cab460497a73806": "cd07e418a6d99ab4ea5a23612e347630",
".git/objects/be/4b1bf2854b7bbef81706b207a77f5c1c908114": "1270848a2f90d342c766873c9278092a",
".git/objects/be/8f00a24310eb5050bf8d44d52d671a78aa657a": "1fbee2c00358aca04612e640661ad580",
".git/objects/d1/f94f56409c8d91c0fada935df98641621705d9": "d861b72f0e6cbedf58340ef680c26eb8",
".git/objects/d6/c2b317df19ddb094523ff1225ada698b4689ee": "d809990cacf626019a663c969991b815",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/bc3d51ca600631ab8d5200411d88fc8f15b541": "3a8f10d58c9ed2f02cdcadde351ca790",
".git/objects/d8/e4aa6a2e2d026cc1cc87384afc7ea072ee5431": "b1cc4a6ecc4cd2fe584a10ba833b233c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/ca23ff420663407d665889bdc47d4d5b185a93": "cfee231760b5172a732506516f37b9c1",
".git/objects/c9/65ce07c293df369fe23a2cef84f3d350ccf0a8": "9e510731a5e9d4ee3674724057002ff8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/285599e297dc18caa4ea6a965e6417fbe4d51d": "0bb927dba09d01392aecb1be836fc9b7",
".git/objects/e3/43d46f12b924c7eca83b666038504f262247a2": "656bb414b3cb10dbf4a2d668591ebd28",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/e4/1de5dcc3d85477c6736b99618b2786242e2b2e": "18a66a87b74b2c08647c49f9eb9b5295",
".git/objects/c6/716e170a815e9e8bdca7ee6737d68a23c968c0": "a2a8f3d834cc97da028f0438c5722226",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/20/d177eae839ea3263e1533cb62b40d2baee4626": "0bf8940a27a8d7cac912d21a4b4fb2b0",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/89/7512079cc9b23ca2860b2666666cfbcf50c9a1": "38ad78408da00bca945138c3d1f88eeb",
".git/objects/1f/981b27366bc6fbe97cc275ce773e88a060cf81": "51e437c75e42f80cbb2349e328395e09",
".git/objects/1f/d576ff612e8cdd67d62bbf99712155c21df203": "ad22df084a6cdc02aa8d1e72852f33e2",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/80/8b16de615f9e9c6de0ff44cc3fa67f0bc36e32": "dee42e5d8366473409d7d178f017f170",
".git/objects/1a/55db3cbc2f2fdfcb4a093cb26618255e20470c": "59410fab57e776e32acf3774ed9ccdfe",
".git/objects/8a/cb321fb4957f3083aa20bf27f94686e7e8f5a3": "8e706e3441702e46a2d066a97a39f255",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/d3e63bccacb27351a73d30c05c2bdaa1214a22": "5bf6ab71238348739ee8683f661dd924",
".git/objects/75/11294f5f1ef9650c1e53630096fab417139a4c": "c3762e249a59bef38366dde5d8f7f1af",
".git/objects/86/d10fbc100842da3395e4bbb04393d2e020eb41": "0dd8a1564971dd86829ca00748b48644",
".git/objects/72/bd2321a449e7da89fea2d5d690f4a67045d1da": "982e7b5817b0fd269197fa03eb288ce6",
".git/objects/88/d8254ad7590702db1d5369d6d2e7c0c63cbe2e": "8738ad4a463ea46e6b8bd9e7f3b96f63",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/629a9286d8cb68a21d9f91afe706dd6adcdef5": "ea237583e3982d850a674891ebf01055",
".git/objects/6b/a875a215f3bbca3707a2243ff4c08968e76f18": "45d17315178bba2cf4391c71a361de92",
".git/objects/6b/be168d35886fec51a805350da7fe71ec1a1351": "6c155d4eecf75640b4e23d357bb39f9e",
".git/objects/9a/9b363e2ad9212fbd2bd459abad4309dab16fcc": "7643875cd2555fc75d798e24b1c0874a",
".git/objects/31/b58fc4b782536602645fb4e812cba1c0cee5e0": "43d4d1298b7bbe069280930a966e2bfa",
".git/objects/3a/f874e038d15e33a9afdb55852f6ec5df03c3b5": "258a4f27f3f8a9f0299490b003bdf481",
".git/objects/5e/00428fd2af4c6438af7a3eeb42f9cdeb53b9a3": "166711cf9f267478f4e2ddbf6d99baf2",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5b/fb5afd6030cfc08e15a9ce532aba45f61fb1ad": "4b9092bcc69cfcea2085a766116279d1",
".git/objects/08/cd96d402f3d9ae51c1fc44476b880028fe25f4": "466a6d18983fc2344e21945df3263d75",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/01/25adcc383dd4e5f424a7b01dfa388e799265fe": "2da056be736d04caa05e9e9b12c3402f",
".git/objects/39/8eca0085c88279e92d50bd082e0c742f0a9ec8": "9e04bacd71ccd07bbd11bca009279aec",
".git/objects/55/90f4853743531508207254ca718e7d371ed661": "a7134e5e933a8718d4bfbf87702fb6e6",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/0a/89c6d5d7b6613d83f719652a359f1584a069f7": "0df7653dab5d49a4514bc9d443e37c0f",
".git/objects/64/7458a609b2f2a17da13b1c2d9e0644ed98f023": "4b7aab0282c63b4042c6240f43ffeb6d",
".git/objects/d3/288df7fcfb6c4891cf174b31c61efe1a2d29cf": "47a8f09093c8bf63b8382f74e8772732",
".git/objects/d3/b93f59f226d64e45e6533680c0445ae9efd2f6": "148ae18844a2720e4c3e0a58a4f5239f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/c2209b69dce56c0fb073f64468e0661dba63dd": "88f5013bb99367ffbcc8f87880f0b1c4",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b6/878274376328b865a000792eab6c89fc75d453": "35861f8e48aa00a129d7fadf300bc484",
".git/objects/a9/13b223e2625500a5a0c1c6552705bdc6f18da3": "c47c4ca076a50a84fe97e3bfce215f0b",
".git/objects/aa/553643a3b1c1939f791b2eb00e89e5f9998cfa": "70083c061c62f991f492edd84c380339",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/dd13f2b51398db9da145006b4d38c7f40aad97": "6b1c56b7035fd807894b24026f2ffb66",
".git/objects/db/84aceabc1d27aad9dd476976b88e8af4f12fe1": "480d5e7b8252b15bdf1a57761e4ceb5a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/f123d214c47ff9a5ef672f02b987fb991c82db": "d828ef86dccd4a178d499b1b556a919d",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/ea/9c16128be459efbbb0a37b05ce598cc69dc4fc": "521e40b99dedeb34fcf47009b44893c4",
".git/objects/cc/b69de40a1ec320d6d8bb8d4a83dbb52ef51264": "46786797866293c3886aa1ef3f59a42d",
".git/objects/f9/28b993346b57075c3e3d5fe3afab53eecbe686": "65e6ab3c6361f089c5705f0fb1413971",
".git/objects/f9/f2642346558f68c4c28547553caf0d122bcfdf": "a2de22838e90601b2fe1b0cd410c5bb3",
".git/objects/f9/18e4a10b9cc8b4c16ed3ec46af41ba03e78cd6": "c50f998213d3b3b20136eb4f0d97d3ea",
".git/objects/f7/1fa905c6449318c3a701319854cbcd376f2197": "bb2bf10390d64b791674bd73da8f7e6c",
".git/objects/f7/2edfae245ca1714d00ef0da2c481a08e512ff8": "1aadfd752d96d74cf4ac2d9697282bf9",
".git/objects/fa/d2a0e19728da1880a455015d5ec20f0ad4eea5": "0067a9d91afffe595dba1f3ba3c8201b",
".git/objects/fa/37cb079be3d95c2d6d2ef19865be1e6e94a6f6": "d548e9d329e3155fe34322759607e5ef",
".git/objects/c2/34af97a15b3bfc63e8e164ac52468f57ad91a3": "9e8c77b3ebc0d51829c22c2ac8985dcc",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/e0/56267429044ce87ab48eea5b5d89aee5212091": "057b12a3137bf402f93646f1ce61357b",
".git/objects/46/6b9208117f62610aa5ccd19f010c9f003a2d06": "a618a34026cd538f5a928456b04b4b6e",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/97a13d312ecf6db07433ead31d1187e82fe944": "9dc9cf772d4c4ab1aff59c7b947a3cc6",
".git/objects/83/0d5858b46e6cbf7f9490c7c61463390cd8f4a5": "0184f6db81de31726c3d5da102287daa",
".git/objects/48/988695729a533c42c8fe91238f15b3d3490b15": "d916082ca6437f1e162a46e93a94bdb6",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8c/8440cbe0c77d563032bf58bad54c5366e21e94": "81dab419a9cfb3d09e22ebf2c8f5b5c1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/66982e1b3972ef01489fa6f1a072fbe5ea205c": "5169a2b59b40b743b3d663c1899320a2",
".git/objects/82/564887f87ce8deb037bfbe4d3abcf0ceaf9305": "bc289324382a0d029c7efdb1b9ac0049",
".git/objects/2b/5600523adfd345ea91b0927c6bcd18aad0e5aa": "921f29eb877dfa849d9f481689c1f4e5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "763f541fc674f7d76ed89fd5c6fb91a0",
".git/logs/refs/heads/main": "763f541fc674f7d76ed89fd5c6fb91a0",
".git/logs/refs/remotes/origin/main": "cd43fe77c102f4db280318dfc642b91c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2d0ba89b6459b205d017d791a58d6955",
".git/refs/remotes/origin/main": "2d0ba89b6459b205d017d791a58d6955",
".git/index": "8ddb278a3e91dbfe2aa0937b82a79244",
".git/COMMIT_EDITMSG": "68bc1b0caaaf7755d4660e1742ea76d3",
"assets/AssetManifest.json": "917fa3f15ea1c66958cc10aa9a04eae2",
"assets/NOTICES": "0ceb038419b7f5195301842df26ea57f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "e7c3cf8023708d3b63e7ddfa77251dc1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "89c69df4fa816c2bfbeefa2cb9628088",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6bd1992e940749e5084f5a29f962cada",
"assets/fonts/MaterialIcons-Regular.otf": "dd6ff7e8292e86b6a03b856bad9cd50e",
"assets/assets/images/app_ico.png": "1c753e0efafe74941571fac048c976b1",
"assets/assets/images/ringing.png": "dc2ea373635e94264c818435eb64a35d",
"assets/assets/images/app_logo.png": "e50d8b03dd4e72618cb83de948ec13e8",
"assets/assets/svg_icons/open-eye-svgrepo-com.svg": "0ea44c3ab5bf4751dee81bb84a057b9f",
"assets/assets/svg_icons/prescription.svg": "4714610a0cef3c63cf229e2168016a0e",
"assets/assets/svg_icons/site-svgrepo-com.svg": "081c3ae0caee7a33abf04fa1143503d2",
"assets/assets/svg_icons/comment-dots-svgrepo-com.svg": "ddad9df50e5230eb2dacf34f350087ae",
"assets/assets/svg_icons/tube_icon.svg": "4aa5d846f80f63eb3cd7abe1368d6f9a",
"assets/assets/svg_icons/test_tube.svg": "892614711f75bf0c6b4ea4fe0e17e3e8",
"assets/assets/svg_icons/twitter-3-svgrepo-com.svg": "1a865e3a4352346064fc5183f3333adc",
"assets/assets/svg_icons/whatsapp-svgrepo-com.svg": "87836551468921531b904bfa6e9a5f23",
"assets/assets/svg_icons/close-square-svgrepo-com.svg": "7df018034f301459e66126ac23d5ca93",
"assets/assets/svg_icons/upload_doc.svg": "f14475c352ef5c461651a47839243688",
"assets/assets/svg_icons/whatsapp.svg": "afd827ab4873518fed0e74b66535a53e",
"assets/assets/svg_icons/heart-svgrepo-com.svg": "92bf3dba790d92afaa00d4eb17d63d98",
"assets/assets/svg_icons/general-group-office-svgrepo-com.svg": "abb78307f7d062cad54f7b115c65d1a4",
"assets/assets/svg_icons/lab_icon.svg": "3385cb3f6585a0df9fb9e07b9f51a608",
"assets/assets/svg_icons/group-filled-persons-svgrepo-com.svg": "0eee1089ac7d78ecff974448055912f6",
"assets/assets/svg_icons/service-contract-svgrepo-com.svg": "d2184e55dca8a32bd079a4da75ef5ab6",
"assets/assets/svg_icons/wallet_icon.svg": "0562974bdcec733ec7838b4a5ea7d628",
"assets/assets/svg_icons/menu.svg": "54acde9f316c9a337f6be624bc836002",
"assets/assets/svg_icons/knee-svgrepo-com.svg": "392e5273aa4bf442da5858cd4a898e97",
"assets/assets/svg_icons/instagram-logo-fill-svgrepo-com.svg": "cc56bae86e9ead050baeeb892f1cbe02",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
