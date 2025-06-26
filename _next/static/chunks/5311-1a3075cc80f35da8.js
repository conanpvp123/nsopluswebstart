(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5311],
  {
    2480: function () {},
    70: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return u;
        },
      });
      var n = t(5950),
        o = t(5617);
      let a = {
        iuahwe: function (e, r) {
          return o.AES.encrypt(JSON.stringify(e), r, { format: a }).toString();
        },
        io8asdk12: function (e, r) {
          return JSON.parse(
            o.AES.decrypt(e, r, { format: a }).toString(o.enc.Utf8)
          );
        },
        stringify: function (e) {
          let r = { ct: e.ciphertext.toString(o.enc.Base64), iv: "", s: "" };
          return (
            e.iv && (r.iv = e.iv.toString()),
            e.salt && (r.s = e.salt.toString()),
            JSON.stringify(r).replace(/\s/g, "")
          );
        },
        parse: function (e) {
          let r = JSON.parse(e),
            t = o.lib.CipherParams.create({
              ciphertext: o.enc.Base64.parse(r.ct),
            });
          return (
            r.iv && (t.iv = o.enc.Hex.parse(r.iv)),
            r.s && (t.salt = o.enc.Hex.parse(r.s)),
            t
          );
        },
      };
      var i = t(7794),
        c = t(7908),
        s = t(2550);
      let l = c.Z.create({
        baseURL: "https://api.nsoplus.com/api",
        headers: { "Content-Type": "application/json" },
      });
      (l.defaults.headers.Accept = "application/json"),
        l.interceptors.request.use(
          (e) => {
            let r = (0, n.hP)();
            if (
              (r &&
                r.access_token &&
                (e.headers.Authorization = "Bearer ".concat(r.access_token)),
              "post" === e.method)
            ) {
              let r = e.data || {};
              (e.headers[(0, n.zH)("447370736473643b5565")] = (0, n.DT)(r)),
                (e.headers[(0, n.zH)("447370736473643b4265")] = (0, n.ny)()),
                r && (e.data = a.iuahwe(JSON.stringify(r), n.SA));
            }
            return e;
          },
          (e) => Promise.reject(e)
        ),
        l.interceptors.response.use(
          function (e) {
            if (e && e.data) {
              var r, t, o;
              try {
                let o = a.io8asdk12(JSON.stringify(e.data), n.SA);
                return (
                  null != o &&
                    o.message &&
                    (o.report &&
                      i.y.success(
                        null !== (r = o.message) && void 0 !== r
                          ? r
                          : "Thực hiện th\xe0nh c\xf4ng"
                      ),
                    o.notify &&
                      s.Notify.success(
                        null !== (t = o.message) && void 0 !== t
                          ? t
                          : "Thực hiện th\xe0nh c\xf4ng"
                      )),
                  Promise.resolve(o)
                );
              } catch (r) {
                return (
                  console.log(r),
                  i.y.failure(
                    null !== (o = e.data.message) && void 0 !== o
                      ? o
                      : "C\xf3 lỗi xảy ra, vui l\xf2ng chụp ảnh m\xe0n h\xecnh v\xe0 gửi cho ADMIN = " +
                          r
                  ),
                  Promise.reject({})
                );
              }
            }
            return Promise.resolve(e);
          },
          function (e) {
            if (e.response && e.response.data) {
              var r, t, o;
              if (429 === e.response.status)
                return (
                  i.y.failure(
                    "Thao t\xe1c qu\xe1 nhanh, vui l\xf2ng thử lại sau 1 ph\xfat"
                  ),
                  Promise.reject({
                    message:
                      "Thao t\xe1c qu\xe1 nhanh, vui l\xf2ng thử lại sau 1 ph\xfat",
                  })
                );
              try {
                let o = a.io8asdk12(JSON.stringify(e.response.data), n.SA);
                return (
                  o.message &&
                    (o.report &&
                      i.y.failure(
                        null !== (r = o.message) && void 0 !== r
                          ? r
                          : "C\xf3 lỗi xảy ra, vui l\xf2ng thử lại"
                      ),
                    o.notify &&
                      s.Notify.failure(
                        null !== (t = o.message) && void 0 !== t
                          ? t
                          : "C\xf3 lỗi xảy ra, vui l\xf2ng thử lại"
                      )),
                  Promise.reject(o)
                );
              } catch (r) {
                return (
                  console.log(r),
                  i.y.failure(
                    null !== (o = e.response.data.message) && void 0 !== o
                      ? o
                      : "C\xf3 lỗi xảy ra, vui l\xf2ng chụp ảnh m\xe0n h\xecnh v\xe0 gửi cho ADMIN - " +
                          r
                  ),
                  Promise.reject({ message: "Vui l\xf2ng tải lại trang" })
                );
              }
            }
            return Promise.reject(e.response);
          }
        );
      var u = l;
    },
    1413: function (e, r, t) {
      "use strict";
      var n,
        o = t(9079);
      let a = {
        API_URL: "https://api.nsoplus.com/api",
        HOME_PAGE: "https://nsoplus.com",
        AUTH_LOCAL_STORAGE_KEY: "access_token",
        PUBLIC_KEY: o.env.NEXT_PUBLIC_KEY,
        ENCRYPTED:
          null !== (n = o.env.NEXT_PUBLIC_ENCRYPTED) &&
          void 0 !== n &&
          !!n.includes("true"),
        ENCRYPT_PREFIX: "next-secure-v1",
        ATTENDANCE_LIMIT: 10,
      };
      r.Z = a;
    },
    3046: function (e, r, t) {
      "use strict";
      var n = t(7157),
        o = t(4090);
      r.Z = function (e) {
        let {
          storedData: r,
          saveData: t,
          removeData: a,
        } = (0, n.useGlobalLocalStorage)();
        return [
          r[e],
          (0, o.useCallback)(
            (r) => {
              r ? t(e, r) : t(e, void 0);
            },
            [e, t]
          ),
          (0, o.useCallback)(() => {
            a(e);
          }, [e, a]),
        ];
      };
    },
    7157: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          LocalStorageProvider: function () {
            return s;
          },
          useGlobalLocalStorage: function () {
            return l;
          },
        });
      var n = t(3827),
        o = t(1413),
        a = t(4090),
        i = t(5551);
      let c = (0, a.createContext)(void 0),
        s = (e) => {
          let { children: r } = e,
            [t, s] = (0, a.useState)({});
          return (
            (0, a.useEffect)(() => {
              let e = {},
                r = new RegExp("".concat(o.Z.ENCRYPT_PREFIX, "\\.[a-zA-Z]\\."));
              for (let t of Object.keys(localStorage).map((e) =>
                e.replace(r, "")
              ))
                try {
                  let r = i.Z.getItem(t);
                  null !== r && (e[t] = r);
                } catch (e) {}
              s(e);
            }, []),
            (0, n.jsx)(c.Provider, {
              value: {
                storedData: t,
                saveData: (e, r) => {
                  let n = { ...t, [e]: r };
                  i.Z.setItem(e, r), s(n);
                },
                removeData: (e) => {
                  let { [e]: r, ...n } = t;
                  i.Z.removeItem(e), s(n);
                },
              },
              children: r,
            })
          );
        },
        l = () => {
          let e = (0, a.useContext)(c);
          if (void 0 === e)
            throw Error(
              "useLocalStorage must be used within a LocalStorageProvider"
            );
          return e;
        };
    },
    5950: function (e, r, t) {
      "use strict";
      t.d(r, {
        Aq: function () {
          return h;
        },
        DT: function () {
          return O;
        },
        J: function () {
          return p;
        },
        SA: function () {
          return d;
        },
        _T: function () {
          return C;
        },
        hP: function () {
          return c;
        },
        iH: function () {
          return i;
        },
        j1: function () {
          return s;
        },
        kB: function () {
          return b;
        },
        ny: function () {
          return k;
        },
        uf: function () {
          return g;
        },
        vQ: function () {
          return v;
        },
        xG: function () {
          return u;
        },
        yL: function () {
          return l;
        },
        yU: function () {
          return f;
        },
        zH: function () {
          return S;
        },
        zM: function () {
          return y;
        },
        zk: function () {
          return m;
        },
      });
      var n = t(1413),
        o = t(4870),
        a = t(5617);
      let i = () => (0, o.h2)(n.Z.AUTH_LOCAL_STORAGE_KEY),
        c = () => {
          let e = (0, o.ej)(n.Z.AUTH_LOCAL_STORAGE_KEY);
          return { access_token: null != e ? e : "" };
        },
        s = (e) => {
          try {
            (0, o.d8)(n.Z.AUTH_LOCAL_STORAGE_KEY, e.access_token, {
              maxAge: 129600,
              secure: !0,
            });
          } catch (e) {
            console.error("AUTH COOKIE SAVE ERROR", e);
          }
        },
        l = () => {
          try {
            (0, o.kT)(n.Z.AUTH_LOCAL_STORAGE_KEY);
          } catch (e) {
            console.error("AUTH COOKIE REMOVE ERROR", e);
          }
        },
        u = (e) => {
          try {
            return (
              "number" == typeof e && (e = e.toString()),
              e.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            );
          } catch (e) {}
          return 0;
        },
        g = (e) => {
          "string" == typeof e && (e = parseInt(e));
          let r = "",
            t = "";
          if (e >= 1e9) {
            t = "tỉ";
            let n = Math.floor((e % 1e9) / 1e7);
            (r = (e = Math.floor(e / 1e9)).toString()),
              n >= 10
                ? (n % 10 == 0 && (n = Math.floor(n / 10)),
                  (r = r + "," + n.toString() + t))
                : n > 0
                ? (r = r + ",0" + n.toString() + t)
                : (r += t);
          } else if (e >= 1e6) {
            t = "tr";
            let n = Math.floor((e % 1e6) / 1e4);
            (r = (e = Math.floor(e / 1e6)).toString()),
              n >= 10
                ? (n % 10 == 0 && (n = Math.floor(n / 10)),
                  (r = r + "," + n.toString() + t))
                : n > 0
                ? (r = r + ",0" + n.toString() + t)
                : (r += t);
          } else if (e >= 1e4) {
            t = "k";
            let n = Math.floor((e % 1e3) / 10);
            (r = (e = Math.floor(e / 1e3)).toString()),
              n >= 10
                ? (n % 10 == 0 && (n = Math.floor(n / 10)),
                  (r = r + "," + n.toString() + t))
                : n > 0
                ? (r = r + ",0" + n.toString() + t)
                : (r += t);
          } else r = e.toString();
          return r;
        },
        f = (e, r) => {
          if (e.errors) {
            for (let t in e.errors)
              if (e.errors.hasOwnProperty(t)) {
                let n = e.errors[t];
                r(t, n[0]);
              }
          }
        },
        h = (e) => {
          let r = e % 60;
          return ""
            .concat(Math.floor(e / 60), ":")
            .concat(r < 10 ? "0" : "")
            .concat(r);
        };
      async function v(e) {
        if (e)
          return ("number" == typeof e && (e = e.toString()),
          "clipboard" in navigator)
            ? await navigator.clipboard.writeText(e)
            : document.execCommand("copy", !0, e);
      }
      function p(e) {
        return e;
      }
      function b(e) {
        if (!e) return new Date().toISOString();
        var r = e.split(" "),
          t = r[0],
          n = r[1].split("/");
        return ""
          .concat(n[2], "-")
          .concat(n[1], "-")
          .concat(n[0], "T")
          .concat(t);
      }
      function y(e) {
        let r = new Date(e),
          t = Math.floor((new Date().getTime() - r.getTime()) / 1e3),
          n = Math.floor(t / 60),
          o = Math.floor(n / 60),
          a = Math.floor(o / 24);
        return a > 0
          ? "".concat(a, " ng\xe0y trước")
          : o > 0
          ? "".concat(o, " giờ trước")
          : n > 0
          ? "".concat(n, " ph\xfat trước")
          : 0 === t
          ? "Vừa xong"
          : "".concat(t, " gi\xe2y trước");
      }
      function C() {
        let e = window.navigator.userAgent || window.navigator.vendor;
        return /FBAV|FB_IAB|FB4A|FBDV|FBSN|FBCR|FBOP|FBSV|FBIOS|ZALO|ZL/.test(
          e
        );
      }
      function O(e) {
        let r = Object.keys(e)
          .sort()
          .map((r) => e[r])
          .join("|");
        return (0, a.MD5)(r).toString();
      }
      function k() {
        return new Date().getTime();
      }
      let m = (e) => {
          let r = new Date();
          return (
            e.getDate() === r.getDate() &&
            e.getMonth() === r.getMonth() &&
            e.getFullYear() === r.getFullYear()
          );
        },
        S = ((e) => {
          let r = (e) => e.split("").map((e) => e.charCodeAt(0)),
            t = (t) => r(e).reduce((e, r) => e ^ r, t);
          return (e) =>
            e
              .match(/.{1,2}/g)
              .map((e) => parseInt(e, 16))
              .map(t)
              .map((e) => String.fromCharCode(e))
              .join("");
        })("aoquiw1928"),
        d = "8BHjWKjQvzjkm6k9";
    },
    7794: function (e, r, t) {
      "use strict";
      t.d(r, {
        y: function () {
          return a;
        },
      });
      var n = t(2550),
        o = t.n(n);
      class a {
        static failure(e) {
          o().Report.failure("Thất bại", e, "X\xe1c nhận", {
            backOverlayClickToClose: !0,
            svgSize: "50px",
            cssAnimationDuration: 100,
            success: { backOverlayColor: "rgb(93 93 93 / 20%)" },
            failure: { backOverlayColor: "rgb(93 93 93 / 20%)" },
            warning: { backOverlayColor: "rgb(93 93 93 / 20%)" },
            info: { backOverlayColor: "rgb(93 93 93 / 20%)" },
          });
        }
        static success(e) {
          o().Report.success("Th\xe0nh c\xf4ng", e, "X\xe1c nhận", {
            backOverlayClickToClose: !0,
            svgSize: "50px",
            cssAnimationDuration: 100,
            success: { backOverlayColor: "rgb(93 93 93 / 20%)" },
            failure: { backOverlayColor: "rgb(93 93 93 / 20%)" },
            warning: { backOverlayColor: "rgb(93 93 93 / 20%)" },
            info: { backOverlayColor: "rgb(93 93 93 / 20%)" },
          });
        }
        static successCallback(e, r) {
          o().Report.success("Th\xe0nh c\xf4ng", e, "X\xe1c nhận", r, {
            backOverlayClickToClose: !0,
            svgSize: "50px",
            cssAnimationDuration: 100,
            success: { backOverlayColor: "rgb(93 93 93 / 20%)" },
            failure: { backOverlayColor: "rgb(93 93 93 / 20%)" },
            warning: { backOverlayColor: "rgb(93 93 93 / 20%)" },
            info: { backOverlayColor: "rgb(93 93 93 / 20%)" },
          });
        }
        static warning(e) {
          o().Report.warning("Cảnh b\xe1o", e, "X\xe1c nhận", {
            backOverlayClickToClose: !0,
            svgSize: "50px",
            cssAnimationDuration: 100,
            success: { backOverlayColor: "rgb(93 93 93 / 20%)" },
            failure: { backOverlayColor: "rgb(93 93 93 / 20%)" },
            warning: { backOverlayColor: "rgb(93 93 93 / 20%)" },
            info: { backOverlayColor: "rgb(93 93 93 / 20%)" },
          });
        }
        static info(e, r) {
          o().Report.info(e, r, "X\xe1c nhận", {
            backOverlayClickToClose: !0,
            svgSize: "50px",
            cssAnimationDuration: 100,
            success: { backOverlayColor: "rgb(93 93 93 / 20%)" },
            failure: { backOverlayColor: "rgb(93 93 93 / 20%)" },
            warning: { backOverlayColor: "rgb(93 93 93 / 20%)" },
            info: { backOverlayColor: "rgb(93 93 93 / 20%)" },
          });
        }
        static infoCallBack(e, r, t) {
          o().Report.info(e, r, "X\xe1c nhận", t, {
            backOverlayClickToClose: !0,
            svgSize: "50px",
            cssAnimationDuration: 100,
            success: { backOverlayColor: "rgb(93 93 93 / 20%)" },
            failure: { backOverlayColor: "rgb(93 93 93 / 20%)" },
            warning: { backOverlayColor: "rgb(93 93 93 / 20%)" },
            info: { backOverlayColor: "rgb(93 93 93 / 20%)" },
          });
        }
      }
    },
  },
]);
