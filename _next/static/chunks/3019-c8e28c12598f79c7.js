"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3019],
  {
    3019: function (i, e, o) {
      var a,
        r,
        n,
        t,
        s,
        b,
        w = o(4090);
      w && "object" == typeof w && "default" in w && w.default;
      var l = o(5466),
        d = new l(),
        u = d.getBrowser(),
        c = d.getCPU(),
        m = d.getDevice(),
        p = d.getEngine(),
        f = d.getOS(),
        h = d.getUA(),
        v = {
          Mobile: "mobile",
          Tablet: "tablet",
          SmartTv: "smarttv",
          Console: "console",
          Wearable: "wearable",
          Embedded: "embedded",
          Browser: void 0,
        },
        g = {
          Chrome: "Chrome",
          Firefox: "Firefox",
          Opera: "Opera",
          Yandex: "Yandex",
          Safari: "Safari",
          InternetExplorer: "Internet Explorer",
          Edge: "Edge",
          Chromium: "Chromium",
          Ie: "IE",
          MobileSafari: "Mobile Safari",
          MIUI: "MIUI Browser",
          SamsungBrowser: "Samsung Browser",
        },
        x = function (i) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "none";
          return i || e;
        },
        k = function () {
          return (
            !!(window.navigator || navigator) && (window.navigator || navigator)
          );
        },
        y = function (i) {
          var e = k();
          return (
            e &&
            e.platform &&
            (-1 !== e.platform.indexOf(i) ||
              ("MacIntel" === e.platform &&
                e.maxTouchPoints > 1 &&
                !window.MSStream))
          );
        },
        S = function (i) {
          return i.type === v.Browser;
        },
        _ = function (i) {
          return i.name === g.Edge;
        },
        T = function (i) {
          return "string" == typeof i && -1 !== i.indexOf("Edg/");
        },
        E = function () {
          return y("iPad");
        };
      m.type,
        v.SmartTv,
        m.type,
        v.Console,
        m.type,
        v.Wearable,
        m.type,
        v.Embedded,
        u.name === g.MobileSafari || E(),
        u.name,
        g.Chromium,
        (a = m.type) === v.Mobile || a === v.Tablet || E(),
        m.type,
        v.Mobile,
        m.type === v.Tablet || E(),
        S(m);
      var C = S(m),
        M = "Android" === f.name;
      f.name,
        "iOS" === f.name || E(),
        u.name,
        g.Chrome,
        u.name,
        g.Firefox,
        (r = u.name) === g.Safari || g.MobileSafari,
        u.name,
        g.Opera,
        (n = u.name) === g.InternetExplorer || g.Ie,
        x(f.version),
        x(f.name),
        x(u.version),
        x(u.major),
        x(u.name),
        x(m.vendor),
        x(m.model),
        x(p.name),
        x(p.version),
        x(h),
        _(u) || T(h),
        u.name,
        g.Yandex,
        x(m.type, "browser"),
        (t = k()) &&
          (/iPad|iPhone|iPod/.test(t.platform) ||
            ("MacIntel" === t.platform && t.maxTouchPoints > 1)) &&
          window.MSStream,
        E(),
        y("iPhone"),
        y("iPod"),
        "string" ==
          typeof (b = (s = k()) && s.userAgent && s.userAgent.toLowerCase()) &&
          /electron/.test(b),
        T(h),
        _(u) && T(h),
        f.name,
        f.name,
        u.name,
        g.MIUI,
        u.name,
        g.SamsungBrowser,
        (e.Dt = M),
        (e.nI = C);
    },
    5466: function (i, e, o) {
      var a;
      !(function (r, n) {
        var t = "function",
          s = "undefined",
          b = "object",
          w = "string",
          l = "major",
          d = "model",
          u = "name",
          c = "type",
          m = "vendor",
          p = "version",
          f = "architecture",
          h = "console",
          v = "mobile",
          g = "tablet",
          x = "smarttv",
          k = "wearable",
          y = "embedded",
          S = "Amazon",
          _ = "Apple",
          T = "ASUS",
          E = "BlackBerry",
          C = "Browser",
          M = "Chrome",
          A = "Firefox",
          q = "Google",
          N = "Huawei",
          z = "Microsoft",
          O = "Motorola",
          I = "Opera",
          P = "Samsung",
          U = "Sharp",
          B = "Sony",
          j = "Xiaomi",
          R = "Zebra",
          D = "Facebook",
          V = "Chromium OS",
          L = "Mac OS",
          F = function (i, e) {
            var o = {};
            for (var a in i)
              e[a] && e[a].length % 2 == 0
                ? (o[a] = e[a].concat(i[a]))
                : (o[a] = i[a]);
            return o;
          },
          G = function (i) {
            for (var e = {}, o = 0; o < i.length; o++)
              e[i[o].toUpperCase()] = i[o];
            return e;
          },
          W = function (i, e) {
            return typeof i === w && -1 !== H(e).indexOf(H(i));
          },
          H = function (i) {
            return i.toLowerCase();
          },
          Z = function (i, e) {
            if (typeof i === w)
              return (
                (i = i.replace(/^\s\s*/, "")),
                typeof e === s ? i : i.substring(0, 500)
              );
          },
          Y = function (i, e) {
            for (var o, a, r, s, w, l, d = 0; d < e.length && !w; ) {
              var u = e[d],
                c = e[d + 1];
              for (o = a = 0; o < u.length && !w && u[o]; )
                if ((w = u[o++].exec(i)))
                  for (r = 0; r < c.length; r++)
                    (l = w[++a]),
                      typeof (s = c[r]) === b && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == t
                            ? (this[s[0]] = s[1].call(this, l))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                          ? typeof s[1] !== t || (s[1].exec && s[1].test)
                            ? (this[s[0]] = l ? l.replace(s[1], s[2]) : n)
                            : (this[s[0]] = l ? s[1].call(this, l, s[2]) : n)
                          : 4 === s.length &&
                            (this[s[0]] = l
                              ? s[3].call(this, l.replace(s[1], s[2]))
                              : n)
                        : (this[s] = l || n);
              d += 2;
            }
          },
          $ = function (i, e) {
            for (var o in e)
              if (typeof e[o] === b && e[o].length > 0) {
                for (var a = 0; a < e[o].length; a++)
                  if (W(e[o][a], i)) return "?" === o ? n : o;
              } else if (W(e[o], i)) return "?" === o ? n : o;
            return i;
          },
          X = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          K = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [p, [u, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [p, [u, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [u, p],
              [/opios[\/ ]+([\w\.]+)/i],
              [p, [u, I + " Mini"]],
              [/\bopr\/([\w\.]+)/i],
              [p, [u, I]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [p, [u, "Baidu"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                /(heytap|ovi)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [u, p],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [p, [u, "UC" + C]],
              [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i,
              ],
              [p, [u, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [p, [u, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [p, [u, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [p, [u, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [p, [u, "Smart Lenovo " + C]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[u, /(.+)/, "$1 Secure " + C], p],
              [/\bfocus\/([\w\.]+)/i],
              [p, [u, A + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [p, [u, I + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [p, [u, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [p, [u, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [p, [u, I + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [p, [u, "MIUI " + C]],
              [/fxios\/([-\w\.]+)/i],
              [p, [u, A]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[u, "360 " + C]],
              [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
              [[u, /(.+)/, "$1 " + C], p],
              [/samsungbrowser\/([\w\.]+)/i],
              [p, [u, P + " Internet"]],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[u, /_/g, " "], p],
              [/metasr[\/ ]?([\d\.]+)/i],
              [p, [u, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[u, "Sogou Mobile"], p],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [u, p],
              [/(lbbrowser)/i, /\[(linkedin)app\]/i],
              [u],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[u, D], p],
              [
                /(Klarna)\/([\w\.]+)/i,
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
              ],
              [u, p],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [p, [u, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [p, [u, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [p, [u, M + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[u, M + " WebView"], p],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [p, [u, "Android " + C]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [u, p],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [p, [u, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [p, u],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                u,
                [
                  p,
                  $,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [u, p],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[u, "Netscape"], p],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [p, [u, A + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
                /panasonic;(viera)/i,
              ],
              [u, p],
              [/(cobalt)\/([\w\.]+)/i],
              [u, [p, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[f, "amd64"]],
              [/(ia32(?=;))/i],
              [[f, H]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[f, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[f, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[f, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[f, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[f, /ower/, "", H]],
              [/(sun4\w)[;\)]/i],
              [[f, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[f, H]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [d, [m, P], [c, g]],
              [
                /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [d, [m, P], [c, v]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [d, [m, _], [c, v]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [d, [m, _], [c, g]],
              [/(macintosh);/i],
              [d, [m, _]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [d, [m, U], [c, v]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [d, [m, N], [c, g]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [d, [m, N], [c, v]],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
              ],
              [
                [d, /_/g, " "],
                [m, j],
                [c, v],
              ],
              [
                /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
              ],
              [
                [d, /_/g, " "],
                [m, j],
                [c, g],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [d, [m, "OPPO"], [c, v]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [d, [m, "Vivo"], [c, v]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [d, [m, "Realme"], [c, v]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [d, [m, O], [c, v]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [d, [m, O], [c, g]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [d, [m, "LG"], [c, g]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [d, [m, "LG"], [c, v]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [d, [m, "Lenovo"], [c, g]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [d, /_/g, " "],
                [m, "Nokia"],
                [c, v],
              ],
              [/(pixel c)\b/i],
              [d, [m, q], [c, g]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [d, [m, q], [c, v]],
              [
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [d, [m, B], [c, v]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [d, "Xperia Tablet"],
                [m, B],
                [c, g],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [d, [m, "OnePlus"], [c, v]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [d, [m, S], [c, g]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [d, /(.+)/g, "Fire Phone $1"],
                [m, S],
                [c, v],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [d, m, [c, g]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [d, [m, E], [c, v]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [d, [m, T], [c, g]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [d, [m, T], [c, v]],
              [/(nexus 9)/i],
              [d, [m, "HTC"], [c, g]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [m, [d, /_/g, " "], [c, v]],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [d, [m, "Acer"], [c, g]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [d, [m, "Meizu"], [c, v]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [d, [m, "Ulefone"], [c, v]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [m, d, [c, v]],
              [
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [m, d, [c, g]],
              [/(surface duo)/i],
              [d, [m, z], [c, g]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [d, [m, "Fairphone"], [c, v]],
              [/(u304aa)/i],
              [d, [m, "AT&T"], [c, v]],
              [/\bsie-(\w*)/i],
              [d, [m, "Siemens"], [c, v]],
              [/\b(rct\w+) b/i],
              [d, [m, "RCA"], [c, g]],
              [/\b(venue[\d ]{2,7}) b/i],
              [d, [m, "Dell"], [c, g]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [d, [m, "Verizon"], [c, g]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [d, [m, "Barnes & Noble"], [c, g]],
              [/\b(tm\d{3}\w+) b/i],
              [d, [m, "NuVision"], [c, g]],
              [/\b(k88) b/i],
              [d, [m, "ZTE"], [c, g]],
              [/\b(nx\d{3}j) b/i],
              [d, [m, "ZTE"], [c, v]],
              [/\b(gen\d{3}) b.+49h/i],
              [d, [m, "Swiss"], [c, v]],
              [/\b(zur\d{3}) b/i],
              [d, [m, "Swiss"], [c, g]],
              [/\b((zeki)?tb.*\b) b/i],
              [d, [m, "Zeki"], [c, g]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[m, "Dragon Touch"], d, [c, g]],
              [/\b(ns-?\w{0,9}) b/i],
              [d, [m, "Insignia"], [c, g]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [d, [m, "NextBook"], [c, g]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[m, "Voice"], d, [c, v]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[m, "LvTel"], d, [c, v]],
              [/\b(ph-1) /i],
              [d, [m, "Essential"], [c, v]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [d, [m, "Envizen"], [c, g]],
              [/\b(trio[-\w\. ]+) b/i],
              [d, [m, "MachSpeed"], [c, g]],
              [/\btu_(1491) b/i],
              [d, [m, "Rotor"], [c, g]],
              [/(shield[\w ]+) b/i],
              [d, [m, "Nvidia"], [c, g]],
              [/(sprint) (\w+)/i],
              [m, d, [c, v]],
              [/(kin\.[onetw]{3})/i],
              [
                [d, /\./g, " "],
                [m, z],
                [c, v],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [d, [m, R], [c, g]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [d, [m, R], [c, v]],
              [/smart-tv.+(samsung)/i],
              [m, [c, x]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [d, /^/, "SmartTV"],
                [m, P],
                [c, x],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [m, "LG"],
                [c, x],
              ],
              [/(apple) ?tv/i],
              [m, [d, _ + " TV"], [c, x]],
              [/crkey/i],
              [
                [d, M + "cast"],
                [m, q],
                [c, x],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [d, [m, S], [c, x]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [d, [m, U], [c, x]],
              [/(bravia[\w ]+)( bui|\))/i],
              [d, [m, B], [c, x]],
              [/(mitv-\w{5}) bui/i],
              [d, [m, j], [c, x]],
              [/Hbbtv.*(technisat) (.*);/i],
              [m, d, [c, x]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [m, Z],
                [d, Z],
                [c, x],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[c, x]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [m, d, [c, h]],
              [/droid.+; (shield) bui/i],
              [d, [m, "Nvidia"], [c, h]],
              [/(playstation [345portablevi]+)/i],
              [d, [m, B], [c, h]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [d, [m, z], [c, h]],
              [/((pebble))app/i],
              [m, d, [c, k]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [d, [m, _], [c, k]],
              [/droid.+; (glass) \d/i],
              [d, [m, q], [c, k]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [d, [m, R], [c, k]],
              [/(quest( 2| pro)?)/i],
              [d, [m, D], [c, k]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [m, [c, y]],
              [/(aeobc)\b/i],
              [d, [m, S], [c, y]],
              [
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
              ],
              [d, [c, v]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [d, [c, g]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[c, g]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[c, v]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [d, [m, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [p, [u, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [p, [u, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [u, p],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [p, u],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [u, p],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [u, [p, $, X]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [p, $, X],
                [u, "Windows"],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [p, /_/g, "."],
                [u, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [u, L],
                [p, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [p, u],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [u, p],
              [/\(bb(10);/i],
              [p, [u, E]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [p, [u, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [p, [u, A + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [p, [u, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [p, [u, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [p, [u, M + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[u, V], p],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [u, p],
              [/(sunos) ?([\w\.\d]*)/i],
              [[u, "Solaris"], p],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [u, p],
            ],
          },
          Q = function (i, e) {
            if ((typeof i === b && ((e = i), (i = n)), !(this instanceof Q)))
              return new Q(i, e).getResult();
            var o = typeof r !== s && r.navigator ? r.navigator : n,
              a = i || (o && o.userAgent ? o.userAgent : ""),
              h = o && o.userAgentData ? o.userAgentData : n,
              x = e ? F(K, e) : K,
              k = o && o.userAgent == a;
            return (
              (this.getBrowser = function () {
                var i,
                  e = {};
                return (
                  (e[u] = n),
                  (e[p] = n),
                  Y.call(e, a, x.browser),
                  (e[l] =
                    typeof (i = e[p]) === w
                      ? i.replace(/[^\d\.]/g, "").split(".")[0]
                      : n),
                  k &&
                    o &&
                    o.brave &&
                    typeof o.brave.isBrave == t &&
                    (e[u] = "Brave"),
                  e
                );
              }),
              (this.getCPU = function () {
                var i = {};
                return (i[f] = n), Y.call(i, a, x.cpu), i;
              }),
              (this.getDevice = function () {
                var i = {};
                return (
                  (i[m] = n),
                  (i[d] = n),
                  (i[c] = n),
                  Y.call(i, a, x.device),
                  k && !i[c] && h && h.mobile && (i[c] = v),
                  k &&
                    "Macintosh" == i[d] &&
                    o &&
                    typeof o.standalone !== s &&
                    o.maxTouchPoints &&
                    o.maxTouchPoints > 2 &&
                    ((i[d] = "iPad"), (i[c] = g)),
                  i
                );
              }),
              (this.getEngine = function () {
                var i = {};
                return (i[u] = n), (i[p] = n), Y.call(i, a, x.engine), i;
              }),
              (this.getOS = function () {
                var i = {};
                return (
                  (i[u] = n),
                  (i[p] = n),
                  Y.call(i, a, x.os),
                  k &&
                    !i[u] &&
                    h &&
                    "Unknown" != h.platform &&
                    (i[u] = h.platform
                      .replace(/chrome os/i, V)
                      .replace(/macos/i, L)),
                  i
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return a;
              }),
              (this.setUA = function (i) {
                return (
                  (a = typeof i === w && i.length > 500 ? Z(i, 500) : i), this
                );
              }),
              this.setUA(a),
              this
            );
          };
        (Q.VERSION = "1.0.37"),
          (Q.BROWSER = G([u, p, l])),
          (Q.CPU = G([f])),
          (Q.DEVICE = G([d, m, c, h, v, x, g, k, y])),
          (Q.ENGINE = Q.OS = G([u, p])),
          typeof e !== s
            ? (i.exports && (e = i.exports = Q), (e.UAParser = Q))
            : o.amdO
            ? n !==
                (a = function () {
                  return Q;
                }.call(e, o, e, i)) && (i.exports = a)
            : typeof r !== s && (r.UAParser = Q);
        var J = typeof r !== s && (r.jQuery || r.Zepto);
        if (J && !J.ua) {
          var ii = new Q();
          (J.ua = ii.getResult()),
            (J.ua.get = function () {
              return ii.getUA();
            }),
            (J.ua.set = function (i) {
              ii.setUA(i);
              var e = ii.getResult();
              for (var o in e) J.ua[o] = e[o];
            });
        }
      })(window);
    },
  },
]);
