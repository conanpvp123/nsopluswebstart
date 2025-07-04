"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1749],
  {
    1749: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let r = n(6921),
        i = n(1884),
        o = n(3827),
        a = i._(n(4090)),
        l = r._(n(9542)),
        s = r._(n(2251)),
        u = n(8630),
        d = n(6906),
        c = n(337);
      n(6184);
      let f = n(6993),
        p = r._(n(536)),
        g = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function m(e, t, n, r, i, o) {
        let a = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== a &&
          ((e["data-loaded-src"] = a),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && i(!0), null == n ? void 0 : n.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    i = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function h(e) {
        let [t, n] = a.version.split(".", 2),
          r = parseInt(t, 10),
          i = parseInt(n, 10);
        return r > 18 || (18 === r && i >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      let y = (0, a.forwardRef)((e, t) => {
        let {
          src: n,
          srcSet: r,
          sizes: i,
          height: l,
          width: s,
          decoding: u,
          className: d,
          style: c,
          fetchPriority: f,
          placeholder: p,
          loading: g,
          unoptimized: y,
          fill: b,
          onLoadRef: v,
          onLoadingCompleteRef: _,
          setBlurComplete: w,
          setShowAltText: S,
          onLoad: j,
          onError: x,
          ...C
        } = e;
        return (0, o.jsx)("img", {
          ...C,
          ...h(f),
          loading: g,
          width: s,
          height: l,
          decoding: u,
          "data-nimg": b ? "fill" : "1",
          className: d,
          style: c,
          sizes: i,
          srcSet: r,
          src: n,
          ref: (0, a.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e && (x && (e.src = e.src), e.complete && m(e, p, v, _, w, y));
            },
            [n, p, v, _, w, x, y, t]
          ),
          onLoad: (e) => {
            m(e.currentTarget, p, v, _, w, y);
          },
          onError: (e) => {
            S(!0), "empty" !== p && w(!0), x && x(e);
          },
        });
      });
      function b(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...h(n.fetchPriority),
          };
        return t && l.default.preload
          ? (l.default.preload(n.src, r), null)
          : (0, o.jsx)(s.default, {
              children: (0, o.jsx)(
                "link",
                { rel: "preload", href: n.srcSet ? void 0 : n.src, ...r },
                "__nimg-" + n.src + n.srcSet + n.sizes
              ),
            });
      }
      let v = (0, a.forwardRef)((e, t) => {
        let n = (0, a.useContext)(f.RouterContext),
          r = (0, a.useContext)(c.ImageConfigContext),
          i = (0, a.useMemo)(() => {
            let e = g || r || d.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: n };
          }, [r]),
          { onLoad: l, onLoadingComplete: s } = e,
          m = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
          m.current = l;
        }, [l]);
        let h = (0, a.useRef)(s);
        (0, a.useEffect)(() => {
          h.current = s;
        }, [s]);
        let [v, _] = (0, a.useState)(!1),
          [w, S] = (0, a.useState)(!1),
          { props: j, meta: x } = (0, u.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: i,
            blurComplete: v,
            showAltText: w,
          });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(y, {
              ...j,
              unoptimized: x.unoptimized,
              placeholder: x.placeholder,
              fill: x.fill,
              onLoadRef: m,
              onLoadingCompleteRef: h,
              setBlurComplete: _,
              setShowAltText: S,
              ref: t,
            }),
            x.priority
              ? (0, o.jsx)(b, { isAppRouter: !n, imgAttributes: j })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5827: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(6921)._(n(4090)).default.createContext({});
    },
    3044: function (e, t) {
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    8630: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }),
        n(6184);
      let r = n(7160),
        i = n(6906);
      function o(e) {
        return void 0 !== e.default;
      }
      function a(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function l(e, t) {
        var n;
        let l,
          s,
          u,
          {
            src: d,
            sizes: c,
            unoptimized: f = !1,
            priority: p = !1,
            loading: g,
            className: m,
            quality: h,
            width: y,
            height: b,
            fill: v = !1,
            style: _,
            onLoad: w,
            onLoadingComplete: S,
            placeholder: j = "empty",
            blurDataURL: x,
            fetchPriority: C,
            layout: P,
            objectFit: O,
            objectPosition: z,
            lazyBoundary: E,
            lazyRoot: M,
            ...k
          } = e,
          { imgConf: I, showAltText: A, blurComplete: R, defaultLoader: D } = t,
          U = I || i.imageConfigDefault;
        if ("allSizes" in U) l = U;
        else {
          let e = [...U.deviceSizes, ...U.imageSizes].sort((e, t) => e - t),
            t = U.deviceSizes.sort((e, t) => e - t);
          l = { ...U, allSizes: e, deviceSizes: t };
        }
        let L = k.loader || D;
        delete k.loader, delete k.srcSet;
        let N = "__next_img_default" in L;
        if (N) {
          if ("custom" === l.loader)
            throw Error(
              'Image with src "' +
                d +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = L;
          L = (t) => {
            let { config: n, ...r } = t;
            return e(r);
          };
        }
        if (P) {
          "fill" === P && (v = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[P];
          e && (_ = { ..._, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[P];
          t && !c && (c = t);
        }
        let B = "",
          F = a(y),
          G = a(b);
        if ("object" == typeof (n = d) && (o(n) || void 0 !== n.src)) {
          let e = o(d) ? d.default : d;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((s = e.blurWidth),
            (u = e.blurHeight),
            (x = x || e.blurDataURL),
            (B = e.src),
            !v)
          ) {
            if (F || G) {
              if (F && !G) {
                let t = F / e.width;
                G = Math.round(e.height * t);
              } else if (!F && G) {
                let t = G / e.height;
                F = Math.round(e.width * t);
              }
            } else (F = e.width), (G = e.height);
          }
        }
        let T = !p && ("lazy" === g || void 0 === g);
        (!(d = "string" == typeof d ? d : B) ||
          d.startsWith("data:") ||
          d.startsWith("blob:")) &&
          ((f = !0), (T = !1)),
          l.unoptimized && (f = !0),
          N && d.endsWith(".svg") && !l.dangerouslyAllowSVG && (f = !0),
          p && (C = "high");
        let W = a(h),
          H = Object.assign(
            v
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: O,
                  objectPosition: z,
                }
              : {},
            A ? {} : { color: "transparent" },
            _
          ),
          V =
            R || "empty" === j
              ? null
              : "blur" === j
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: F,
                  heightInt: G,
                  blurWidth: s,
                  blurHeight: u,
                  blurDataURL: x || "",
                  objectFit: H.objectFit,
                }) +
                '")'
              : 'url("' + j + '")',
          q = V
            ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: V,
              }
            : {},
          $ = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: r,
              width: i,
              quality: o,
              sizes: a,
              loader: l,
            } = e;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: s, kind: u } = (function (e, t, n) {
                let { deviceSizes: r, allSizes: i } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: i.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => i.find((t) => t >= e) || i[i.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, i, a),
              d = s.length - 1;
            return {
              sizes: a || "w" !== u ? a : "100vw",
              srcSet: s
                .map(
                  (e, r) =>
                    l({ config: t, src: n, quality: o, width: e }) +
                    " " +
                    ("w" === u ? e : r + 1) +
                    u
                )
                .join(", "),
              src: l({ config: t, src: n, quality: o, width: s[d] }),
            };
          })({
            config: l,
            src: d,
            unoptimized: f,
            width: F,
            quality: W,
            sizes: c,
            loader: L,
          });
        return {
          props: {
            ...k,
            loading: T ? "lazy" : g,
            fetchPriority: C,
            width: F,
            height: G,
            decoding: "async",
            className: m,
            style: { ...H, ...q },
            sizes: $.sizes,
            srcSet: $.srcSet,
            src: $.src,
          },
          meta: { unoptimized: f, priority: p, placeholder: j, fill: v },
        };
      }
    },
    2251: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          defaultHead: function () {
            return c;
          },
          default: function () {
            return m;
          },
        });
      let r = n(6921),
        i = n(1884),
        o = n(3827),
        a = i._(n(4090)),
        l = r._(n(7392)),
        s = n(5827),
        u = n(7484),
        d = n(3044);
      function c(e) {
        void 0 === e && (e = !1);
        let t = [(0, o.jsx)("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              (0, o.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function f(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      n(6184);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function g(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(f, [])
          .reverse()
          .concat(c(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (i) => {
                let o = !0,
                  a = !1;
                if (
                  i.key &&
                  "number" != typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  a = !0;
                  let t = i.key.slice(i.key.indexOf("$") + 1);
                  e.has(t) ? (o = !1) : e.add(t);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    t.has(i.type) ? (o = !1) : t.add(i.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (i.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (o = !1) : n.add(t);
                        else {
                          let e = i.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !a) && n.has(e)
                            ? (o = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let r = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                a.default.cloneElement(e, t)
              );
            }
            return a.default.cloneElement(e, { key: r });
          });
      }
      let m = function (e) {
        let { children: t } = e,
          n = (0, a.useContext)(s.AmpStateContext),
          r = (0, a.useContext)(u.HeadManagerContext);
        return (0, o.jsx)(l.default, {
          reduceComponentsToState: g,
          headManager: r,
          inAmpMode: (0, d.isInAmpMode)(n),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7160: function (e, t) {
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: r,
            blurHeight: i,
            blurDataURL: o,
            objectFit: a,
          } = e,
          l = r ? 40 * r : t,
          s = i ? 40 * i : n,
          u = l && s ? "viewBox='0 0 " + l + " " + s + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    337: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(6921)._(n(4090)),
        i = n(6906),
        o = r.default.createContext(i.imageConfigDefault);
    },
    6906: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    536: function (e, t) {
      function n(e) {
        let { config: t, src: n, width: r, quality: i } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(n) +
          "&w=" +
          r +
          "&q=" +
          (i || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    7392: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(4090),
        i = r.useLayoutEffect,
        o = r.useEffect;
      function a(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function a() {
          if (t && t.mountedInstances) {
            let i = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(n(i, e));
          }
        }
        return (
          i(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          i(
            () => (
              t && (t._pendingUpdate = a),
              () => {
                t && (t._pendingUpdate = a);
              }
            )
          ),
          o(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
  },
]);
