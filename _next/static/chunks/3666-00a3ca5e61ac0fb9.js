(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3666],
  {
    6016: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let r = n(3827),
        a = n(4090);
      t.default = function (e) {
        let {
          html: t,
          height: n = null,
          width: l = null,
          children: o,
          dataNtpc: u = "",
        } = e;
        return (
          (0, a.useEffect)(() => {
            u &&
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-".concat(u) },
              });
          }, [u]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              o,
              t
                ? (0, r.jsx)("div", {
                    style: {
                      height: null != n ? "".concat(n, "px") : "auto",
                      width: null != l ? "".concat(l, "px") : "auto",
                    },
                    "data-ntpc": u,
                    dangerouslySetInnerHTML: { __html: t },
                  })
                : null,
            ],
          })
        );
      };
    },
    1845: function (e, t, n) {
      "use strict";
      var r;
      let a;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGAEvent = t.GoogleAnalytics = void 0);
      let l = n(3827),
        o = n(4090),
        u = (r = n(4983)) && r.__esModule ? r : { default: r };
      (t.GoogleAnalytics = function (e) {
        let { gaId: t, dataLayerName: n = "dataLayer" } = e;
        return (
          void 0 === a && (a = n),
          (0, o.useEffect)(() => {
            performance.mark("mark_feature_usage", {
              detail: { feature: "next-third-parties-ga" },
            });
          }, []),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(u.default, {
                id: "_next-ga-init",
                dangerouslySetInnerHTML: {
                  __html: "\n          window['"
                    .concat(n, "'] = window['")
                    .concat(n, "'] || [];\n          function gtag(){window['")
                    .concat(
                      n,
                      "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '"
                    )
                    .concat(t, "');"),
                },
              }),
              (0, l.jsx)(u.default, {
                id: "_next-ga",
                src: "https://www.googletagmanager.com/gtag/js?id=".concat(t),
              }),
            ],
          })
        );
      }),
        (t.sendGAEvent = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          if (void 0 === a) {
            console.warn("@next/third-parties: GA has not been initialized");
            return;
          }
          window[a]
            ? window[a].push(arguments)
            : console.warn(
                "@next/third-parties: GA dataLayer ".concat(
                  a,
                  " does not exist"
                )
              );
        });
    },
    7388: function (e, t, n) {
      "use strict";
      var r;
      let a;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGTMEvent = t.GoogleTagManager = void 0);
      let l = n(3827),
        o = n(4090),
        u = (r = n(4983)) && r.__esModule ? r : { default: r };
      (t.GoogleTagManager = function (e) {
        let {
          gtmId: t,
          dataLayerName: n = "dataLayer",
          auth: r,
          preview: s,
          dataLayer: i,
        } = e;
        void 0 === a && (a = n);
        let c = "dataLayer" !== n ? "&l=".concat(n) : "";
        return (
          (0, o.useEffect)(() => {
            performance.mark("mark_feature_usage", {
              detail: { feature: "next-third-parties-gtm" },
            });
          }, []),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(u.default, {
                id: "_next-gtm-init",
                dangerouslySetInnerHTML: {
                  __html:
                    "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        "
                      .concat(
                        i ? "w[l].push(".concat(JSON.stringify(i), ")") : "",
                        "\n      })(window,'"
                      )
                      .concat(n, "');"),
                },
              }),
              (0, l.jsx)(u.default, {
                id: "_next-gtm",
                "data-ntpc": "GTM",
                src: "https://www.googletagmanager.com/gtm.js?id="
                  .concat(t)
                  .concat(c)
                  .concat(r ? "&gtm_auth=".concat(r) : "")
                  .concat(
                    s ? "&gtm_preview=".concat(s, "&gtm_cookies_win=x") : ""
                  ),
              }),
            ],
          })
        );
      }),
        (t.sendGTMEvent = (e) => {
          if (void 0 === a) {
            console.warn("@next/third-parties: GTM has not been initialized");
            return;
          }
          window[a]
            ? window[a].push(e)
            : console.warn(
                "@next/third-parties: GTM dataLayer ".concat(
                  a,
                  " does not exist"
                )
              );
        });
    },
    4232: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return a.a;
        },
      });
      var r = n(4930),
        a = n.n(r);
    },
    7907: function (e, t, n) {
      "use strict";
      var r = n(5313);
      n.o(r, "redirect") &&
        n.d(t, {
          redirect: function () {
            return r.redirect;
          },
        }),
        n.o(r, "useParams") &&
          n.d(t, {
            useParams: function () {
              return r.useParams;
            },
          }),
        n.o(r, "usePathname") &&
          n.d(t, {
            usePathname: function () {
              return r.usePathname;
            },
          }),
        n.o(r, "useRouter") &&
          n.d(t, {
            useRouter: function () {
              return r.useRouter;
            },
          });
    },
    4983: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a.a;
          },
        });
      var r = n(5935),
        a = n.n(r),
        l = {};
      for (var o in r)
        "default" !== o &&
          (l[o] = function (e) {
            return r[e];
          }.bind(0, o));
      n.d(t, l);
    },
    3313: function (e, t) {
      "use strict";
      let n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          DOMAttributeNames: function () {
            return r;
          },
          isEqualNode: function () {
            return l;
          },
          default: function () {
            return o;
          },
        });
      let r = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv",
        noModule: "noModule",
      };
      function a(e) {
        let { type: t, props: n } = e,
          a = document.createElement(t);
        for (let e in n) {
          if (
            !n.hasOwnProperty(e) ||
            "children" === e ||
            "dangerouslySetInnerHTML" === e ||
            void 0 === n[e]
          )
            continue;
          let l = r[e] || e.toLowerCase();
          "script" === t && ("async" === l || "defer" === l || "noModule" === l)
            ? (a[l] = !!n[e])
            : a.setAttribute(l, n[e]);
        }
        let { children: l, dangerouslySetInnerHTML: o } = n;
        return (
          o
            ? (a.innerHTML = o.__html || "")
            : l &&
              (a.textContent =
                "string" == typeof l ? l : Array.isArray(l) ? l.join("") : ""),
          a
        );
      }
      function l(e, t) {
        if (e instanceof HTMLElement && t instanceof HTMLElement) {
          let n = t.getAttribute("nonce");
          if (n && !e.getAttribute("nonce")) {
            let r = t.cloneNode(!0);
            return (
              r.setAttribute("nonce", ""),
              (r.nonce = n),
              n === e.nonce && e.isEqualNode(r)
            );
          }
        }
        return e.isEqualNode(t);
      }
      function o() {
        return {
          mountedInstances: new Set(),
          updateHead: (e) => {
            let t = {};
            e.forEach((e) => {
              if ("link" === e.type && e.props["data-optimized-fonts"]) {
                if (
                  document.querySelector(
                    'style[data-href="' + e.props["data-href"] + '"]'
                  )
                )
                  return;
                (e.props.href = e.props["data-href"]),
                  (e.props["data-href"] = void 0);
              }
              let n = t[e.type] || [];
              n.push(e), (t[e.type] = n);
            });
            let r = t.title ? t.title[0] : null,
              a = "";
            if (r) {
              let { children: e } = r.props;
              a = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : "";
            }
            a !== document.title && (document.title = a),
              ["meta", "base", "link", "style", "script"].forEach((e) => {
                n(e, t[e] || []);
              });
          },
        };
      }
      (n = (e, t) => {
        let n = document.getElementsByTagName("head")[0],
          r = n.querySelector("meta[name=next-head-count]"),
          o = Number(r.content),
          u = [];
        for (
          let t = 0, n = r.previousElementSibling;
          t < o;
          t++, n = (null == n ? void 0 : n.previousElementSibling) || null
        ) {
          var s;
          (null == n
            ? void 0
            : null == (s = n.tagName)
            ? void 0
            : s.toLowerCase()) === e && u.push(n);
        }
        let i = t.map(a).filter((e) => {
          for (let t = 0, n = u.length; t < n; t++)
            if (l(u[t], e)) return u.splice(t, 1), !1;
          return !0;
        });
        u.forEach((e) => {
          var t;
          return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
        }),
          i.forEach((e) => n.insertBefore(e, r)),
          (r.content = (o - u.length + i.length).toString());
      }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    5935: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          handleClientScriptLoad: function () {
            return h;
          },
          initScriptLoader: function () {
            return y;
          },
          default: function () {
            return v;
          },
        });
      let r = n(6921),
        a = n(1884),
        l = n(3827),
        o = r._(n(9542)),
        u = a._(n(4090)),
        s = n(7484),
        i = n(3313),
        c = n(2185),
        d = new Map(),
        f = new Set(),
        p = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ],
        m = (e) => {
          if (o.default.preinit) {
            e.forEach((e) => {
              o.default.preinit(e, { as: "style" });
            });
            return;
          }
          {
            let t = document.head;
            e.forEach((e) => {
              let n = document.createElement("link");
              (n.type = "text/css"),
                (n.rel = "stylesheet"),
                (n.href = e),
                t.appendChild(n);
            });
          }
        },
        g = (e) => {
          let {
              src: t,
              id: n,
              onLoad: r = () => {},
              onReady: a = null,
              dangerouslySetInnerHTML: l,
              children: o = "",
              strategy: u = "afterInteractive",
              onError: s,
              stylesheets: c,
            } = e,
            g = n || t;
          if (g && f.has(g)) return;
          if (d.has(t)) {
            f.add(g), d.get(t).then(r, s);
            return;
          }
          let h = () => {
              a && a(), f.add(g);
            },
            y = document.createElement("script"),
            b = new Promise((e, t) => {
              y.addEventListener("load", function (t) {
                e(), r && r.call(this, t), h();
              }),
                y.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              s && s(e);
            });
          for (let [n, r] of (l
            ? ((y.innerHTML = l.__html || ""), h())
            : o
            ? ((y.textContent =
                "string" == typeof o ? o : Array.isArray(o) ? o.join("") : ""),
              h())
            : t && ((y.src = t), d.set(t, b)),
          Object.entries(e))) {
            if (void 0 === r || p.includes(n)) continue;
            let e = i.DOMAttributeNames[n] || n.toLowerCase();
            y.setAttribute(e, r);
          }
          "worker" === u && y.setAttribute("type", "text/partytown"),
            y.setAttribute("data-nscript", u),
            c && m(c),
            document.body.appendChild(y);
        };
      function h(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, c.requestIdleCallback)(() => g(e));
            })
          : g(e);
      }
      function y(e) {
        e.forEach(h),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            f.add(t);
          });
      }
      function b(e) {
        let {
            id: t,
            src: n = "",
            onLoad: r = () => {},
            onReady: a = null,
            strategy: i = "afterInteractive",
            onError: d,
            stylesheets: p,
            ...m
          } = e,
          {
            updateScripts: h,
            scripts: y,
            getIsSsr: b,
            appDir: v,
            nonce: x,
          } = (0, u.useContext)(s.HeadManagerContext),
          E = (0, u.useRef)(!1);
        (0, u.useEffect)(() => {
          let e = t || n;
          E.current || (a && e && f.has(e) && a(), (E.current = !0));
        }, [a, t, n]);
        let T = (0, u.useRef)(!1);
        if (
          ((0, u.useEffect)(() => {
            !T.current &&
              ("afterInteractive" === i
                ? g(e)
                : "lazyOnload" === i &&
                  ("complete" === document.readyState
                    ? (0, c.requestIdleCallback)(() => g(e))
                    : window.addEventListener("load", () => {
                        (0, c.requestIdleCallback)(() => g(e));
                      })),
              (T.current = !0));
          }, [e, i]),
          ("beforeInteractive" === i || "worker" === i) &&
            (h
              ? ((y[i] = (y[i] || []).concat([
                  { id: t, src: n, onLoad: r, onReady: a, onError: d, ...m },
                ])),
                h(y))
              : b && b()
              ? f.add(t || n)
              : b && !b() && g(e)),
          v)
        ) {
          if (
            (p &&
              p.forEach((e) => {
                o.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === i)
          )
            return n
              ? (o.default.preload(
                  n,
                  m.integrity
                    ? { as: "script", integrity: m.integrity }
                    : { as: "script" }
                ),
                (0, l.jsx)("script", {
                  nonce: x,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([n, { ...m, id: t }]) +
                      ")",
                  },
                }))
              : (m.dangerouslySetInnerHTML &&
                  ((m.children = m.dangerouslySetInnerHTML.__html),
                  delete m.dangerouslySetInnerHTML),
                (0, l.jsx)("script", {
                  nonce: x,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...m, id: t }]) +
                      ")",
                  },
                }));
          "afterInteractive" === i &&
            n &&
            o.default.preload(
              n,
              m.integrity
                ? { as: "script", integrity: m.integrity }
                : { as: "script" }
            );
        }
        return null;
      }
      Object.defineProperty(b, "__nextScript", { value: !0 });
      let v = b;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4930: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(6921);
      n(3827), n(4090);
      let a = r._(n(4795));
      function l(e, t) {
        let n = {
          loading: (e) => {
            let { error: t, isLoading: n, pastDelay: r } = e;
            return null;
          },
        };
        return (
          "function" == typeof e && (n.loader = e),
          (0, a.default)({ ...n, ...t })
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9721: function (e, t, n) {
      "use strict";
      function r(e) {
        let { reason: t, children: n } = e;
        return n;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(9775);
    },
    4795: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = n(3827),
        a = n(4090),
        l = n(9721);
      function o(e) {
        var t;
        return {
          default: null != (t = null == e ? void 0 : e.default) ? t : e,
        };
      }
      let u = {
          loader: () => Promise.resolve(o(() => null)),
          loading: null,
          ssr: !0,
        },
        s = function (e) {
          let t = { ...u, ...e },
            n = (0, a.lazy)(() => t.loader().then(o)),
            s = t.loading;
          function i(e) {
            let o = s
                ? (0, r.jsx)(s, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              u = t.ssr
                ? (0, r.jsx)(n, { ...e })
                : (0, r.jsx)(l.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, r.jsx)(n, { ...e }),
                  });
            return (0, r.jsx)(a.Suspense, { fallback: o, children: u });
          }
          return (i.displayName = "LoadableComponent"), i;
        };
    },
    7276: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Montserrat_f7d226', '__Montserrat_Fallback_f7d226'",
          fontStyle: "normal",
        },
        className: "__className_f7d226",
      };
    },
    1754: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return M;
        },
      });
      var r,
        a,
        l,
        o = n(4090),
        u = n(641),
        s = n(2381),
        i = n(1454),
        c = n(6601),
        d = n(8358),
        f = n(4152),
        p = n(2640),
        m = n(4819),
        g = n(8318);
      let h =
        null != (l = o.startTransition)
          ? l
          : function (e) {
              e();
            };
      var y = n(7409),
        b =
          (((r = b || {})[(r.Open = 0)] = "Open"),
          (r[(r.Closed = 1)] = "Closed"),
          r),
        v =
          (((a = v || {})[(a.ToggleDisclosure = 0)] = "ToggleDisclosure"),
          (a[(a.CloseDisclosure = 1)] = "CloseDisclosure"),
          (a[(a.SetButtonId = 2)] = "SetButtonId"),
          (a[(a.SetPanelId = 3)] = "SetPanelId"),
          (a[(a.LinkPanel = 4)] = "LinkPanel"),
          (a[(a.UnlinkPanel = 5)] = "UnlinkPanel"),
          a);
      let x = {
          0: (e) => ({
            ...e,
            disclosureState: (0, p.E)(e.disclosureState, { 0: 1, 1: 0 }),
          }),
          1: (e) =>
            1 === e.disclosureState ? e : { ...e, disclosureState: 1 },
          4: (e) => (!0 === e.linkedPanel ? e : { ...e, linkedPanel: !0 }),
          5: (e) => (!1 === e.linkedPanel ? e : { ...e, linkedPanel: !1 }),
          2: (e, t) =>
            e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId },
          3: (e, t) =>
            e.panelId === t.panelId ? e : { ...e, panelId: t.panelId },
        },
        E = (0, o.createContext)(null);
      function T(e) {
        let t = (0, o.useContext)(E);
        if (null === t) {
          let t = Error(
            "<".concat(e, " /> is missing a parent <Disclosure /> component.")
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, T), t);
        }
        return t;
      }
      E.displayName = "DisclosureContext";
      let _ = (0, o.createContext)(null);
      _.displayName = "DisclosureAPIContext";
      let S = (0, o.createContext)(null);
      function w(e, t) {
        return (0, p.E)(t.type, x, e, t);
      }
      S.displayName = "DisclosurePanelContext";
      let P = o.Fragment,
        I = g.AN.RenderStrategy | g.AN.Static,
        M = Object.assign(
          (0, g.yV)(function (e, t) {
            let { defaultOpen: n = !1, ...r } = e,
              a = (0, o.useRef)(null),
              l = (0, c.T)(
                t,
                (0, c.h)((e) => {
                  a.current = e;
                }, void 0 === e.as || e.as === o.Fragment)
              ),
              s = (0, o.useRef)(null),
              i = (0, o.useRef)(null),
              f = (0, o.useReducer)(w, {
                disclosureState: n ? 0 : 1,
                linkedPanel: !1,
                buttonRef: i,
                panelRef: s,
                buttonId: null,
                panelId: null,
              }),
              [{ disclosureState: h, buttonId: y }, b] = f,
              v = (0, u.z)((e) => {
                b({ type: 1 });
                let t = (0, m.r)(a);
                if (!t || !y) return;
                let n = e
                  ? e instanceof HTMLElement
                    ? e
                    : e.current instanceof HTMLElement
                    ? e.current
                    : t.getElementById(y)
                  : t.getElementById(y);
                null == n || n.focus();
              }),
              x = (0, o.useMemo)(() => ({ close: v }), [v]),
              T = (0, o.useMemo)(() => ({ open: 0 === h, close: v }), [h, v]);
            return o.createElement(
              E.Provider,
              { value: f },
              o.createElement(
                _.Provider,
                { value: x },
                o.createElement(
                  d.up,
                  { value: (0, p.E)(h, { 0: d.ZM.Open, 1: d.ZM.Closed }) },
                  (0, g.sY)({
                    ourProps: { ref: l },
                    theirProps: r,
                    slot: T,
                    defaultTag: P,
                    name: "Disclosure",
                  })
                )
              )
            );
          }),
          {
            Button: (0, g.yV)(function (e, t) {
              let n = (0, s.M)(),
                { id: r = "headlessui-disclosure-button-".concat(n), ...a } = e,
                [l, d] = T("Disclosure.Button"),
                p = (0, o.useContext)(S),
                m = null !== p && p === l.panelId,
                h = (0, o.useRef)(null),
                b = (0, c.T)(h, t, m ? null : l.buttonRef),
                v = (0, g.Y2)();
              (0, o.useEffect)(() => {
                if (!m)
                  return (
                    d({ type: 2, buttonId: r }),
                    () => {
                      d({ type: 2, buttonId: null });
                    }
                  );
              }, [r, d, m]);
              let x = (0, u.z)((e) => {
                  var t;
                  if (m) {
                    if (1 === l.disclosureState) return;
                    switch (e.key) {
                      case y.R.Space:
                      case y.R.Enter:
                        e.preventDefault(),
                          e.stopPropagation(),
                          d({ type: 0 }),
                          null == (t = l.buttonRef.current) || t.focus();
                    }
                  } else
                    switch (e.key) {
                      case y.R.Space:
                      case y.R.Enter:
                        e.preventDefault(), e.stopPropagation(), d({ type: 0 });
                    }
                }),
                E = (0, u.z)((e) => {
                  e.key === y.R.Space && e.preventDefault();
                }),
                _ = (0, u.z)((t) => {
                  var n;
                  (0, f.P)(t.currentTarget) ||
                    e.disabled ||
                    (m
                      ? (d({ type: 0 }),
                        null == (n = l.buttonRef.current) || n.focus())
                      : d({ type: 0 }));
                }),
                w = (0, o.useMemo)(
                  () => ({ open: 0 === l.disclosureState }),
                  [l]
                ),
                P = (0, i.f)(e, h),
                I = m
                  ? { ref: b, type: P, onKeyDown: x, onClick: _ }
                  : {
                      ref: b,
                      id: r,
                      type: P,
                      "aria-expanded": 0 === l.disclosureState,
                      "aria-controls": l.linkedPanel ? l.panelId : void 0,
                      onKeyDown: x,
                      onKeyUp: E,
                      onClick: _,
                    };
              return (0,
              g.sY)({ mergeRefs: v, ourProps: I, theirProps: a, slot: w, defaultTag: "button", name: "Disclosure.Button" });
            }),
            Panel: (0, g.yV)(function (e, t) {
              let n = (0, s.M)(),
                { id: r = "headlessui-disclosure-panel-".concat(n), ...a } = e,
                [l, u] = T("Disclosure.Panel"),
                { close: i } = (function e(t) {
                  let n = (0, o.useContext)(_);
                  if (null === n) {
                    let n = Error(
                      "<".concat(
                        t,
                        " /> is missing a parent <Disclosure /> component."
                      )
                    );
                    throw (
                      (Error.captureStackTrace && Error.captureStackTrace(n, e),
                      n)
                    );
                  }
                  return n;
                })("Disclosure.Panel"),
                f = (0, g.Y2)(),
                p = (0, c.T)(t, l.panelRef, (e) => {
                  h(() => u({ type: e ? 4 : 5 }));
                });
              (0, o.useEffect)(
                () => (
                  u({ type: 3, panelId: r }),
                  () => {
                    u({ type: 3, panelId: null });
                  }
                ),
                [r, u]
              );
              let m = (0, d.oJ)(),
                y =
                  null !== m
                    ? (m & d.ZM.Open) === d.ZM.Open
                    : 0 === l.disclosureState,
                b = (0, o.useMemo)(
                  () => ({ open: 0 === l.disclosureState, close: i }),
                  [l, i]
                );
              return o.createElement(
                S.Provider,
                { value: l.panelId },
                (0, g.sY)({
                  mergeRefs: f,
                  ourProps: { ref: p, id: r },
                  theirProps: a,
                  slot: b,
                  defaultTag: "div",
                  features: I,
                  visible: y,
                  name: "Disclosure.Panel",
                })
              );
            }),
          }
        );
    },
    991: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return D;
        },
      });
      var r,
        a,
        l,
        o = n(4090),
        u = n(7409),
        s = n(641),
        i = n(2381),
        c = n(9790),
        d = n(5235),
        f = n(1454),
        p = n(6601),
        m = n(2219),
        g = n(7700);
      function h(e) {
        let { onFocus: t } = e,
          [n, r] = (0, o.useState)(!0),
          a = (0, m.t)();
        return n
          ? o.createElement(g._, {
              as: "button",
              type: "button",
              features: g.A.Focusable,
              onFocus: (e) => {
                e.preventDefault();
                let n,
                  l = 50;
                n = requestAnimationFrame(function e() {
                  if (l-- <= 0) {
                    n && cancelAnimationFrame(n);
                    return;
                  }
                  if (t()) {
                    if ((cancelAnimationFrame(n), !a.current)) return;
                    r(!1);
                    return;
                  }
                  n = requestAnimationFrame(e);
                });
              },
            })
          : null;
      }
      var y = n(8803),
        b = n(2640),
        v = n(1210),
        x = n(4819),
        E = n(8318);
      let T = o.createContext(null);
      function _(e) {
        let { children: t } = e,
          n = o.useRef({
            groups: new Map(),
            get(e, t) {
              var n;
              let r = this.groups.get(e);
              r || ((r = new Map()), this.groups.set(e, r));
              let a = null != (n = r.get(t)) ? n : 0;
              return (
                r.set(t, a + 1),
                [
                  Array.from(r.keys()).indexOf(t),
                  function () {
                    let e = r.get(t);
                    e > 1 ? r.set(t, e - 1) : r.delete(t);
                  },
                ]
              );
            },
          });
        return o.createElement(T.Provider, { value: n }, t);
      }
      function S(e) {
        let t = o.useContext(T);
        if (!t)
          throw Error("You must wrap your component in a <StableCollection>");
        let n = (function () {
            var e, t, n;
            let r =
              null !=
              (n =
                null ==
                (t =
                  null ==
                  (e = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)
                    ? void 0
                    : e.ReactCurrentOwner)
                  ? void 0
                  : t.current)
                ? n
                : null;
            if (!r) return Symbol();
            let a = [],
              l = r;
            for (; l; ) a.push(l.index), (l = l.return);
            return "$." + a.join(".");
          })(),
          [r, a] = t.current.get(e, n);
        return o.useEffect(() => a, []), r;
      }
      var w =
          (((r = w || {})[(r.Forwards = 0)] = "Forwards"),
          (r[(r.Backwards = 1)] = "Backwards"),
          r),
        P =
          (((a = P || {})[(a.Less = -1)] = "Less"),
          (a[(a.Equal = 0)] = "Equal"),
          (a[(a.Greater = 1)] = "Greater"),
          a),
        I =
          (((l = I || {})[(l.SetSelectedIndex = 0)] = "SetSelectedIndex"),
          (l[(l.RegisterTab = 1)] = "RegisterTab"),
          (l[(l.UnregisterTab = 2)] = "UnregisterTab"),
          (l[(l.RegisterPanel = 3)] = "RegisterPanel"),
          (l[(l.UnregisterPanel = 4)] = "UnregisterPanel"),
          l);
      let M = {
          0(e, t) {
            var n;
            let r = (0, y.z2)(e.tabs, (e) => e.current),
              a = (0, y.z2)(e.panels, (e) => e.current),
              l = r.filter((e) => {
                var t;
                return !(null != (t = e.current) && t.hasAttribute("disabled"));
              }),
              o = { ...e, tabs: r, panels: a };
            if (t.index < 0 || t.index > r.length - 1) {
              let n = (0, b.E)(Math.sign(t.index - e.selectedIndex), {
                [-1]: () => 1,
                0: () =>
                  (0, b.E)(Math.sign(t.index), {
                    [-1]: () => 0,
                    0: () => 0,
                    1: () => 1,
                  }),
                1: () => 0,
              });
              if (0 === l.length) return o;
              let a = (0, b.E)(n, {
                0: () => r.indexOf(l[0]),
                1: () => r.indexOf(l[l.length - 1]),
              });
              return { ...o, selectedIndex: -1 === a ? e.selectedIndex : a };
            }
            let u = r.slice(0, t.index),
              s = [...r.slice(t.index), ...u].find((e) => l.includes(e));
            if (!s) return o;
            let i = null != (n = r.indexOf(s)) ? n : e.selectedIndex;
            return (
              -1 === i && (i = e.selectedIndex), { ...o, selectedIndex: i }
            );
          },
          1(e, t) {
            var n;
            if (e.tabs.includes(t.tab)) return e;
            let r = e.tabs[e.selectedIndex],
              a = (0, y.z2)([...e.tabs, t.tab], (e) => e.current),
              l = null != (n = a.indexOf(r)) ? n : e.selectedIndex;
            return (
              -1 === l && (l = e.selectedIndex),
              { ...e, tabs: a, selectedIndex: l }
            );
          },
          2: (e, t) => ({ ...e, tabs: e.tabs.filter((e) => e !== t.tab) }),
          3: (e, t) =>
            e.panels.includes(t.panel)
              ? e
              : {
                  ...e,
                  panels: (0, y.z2)([...e.panels, t.panel], (e) => e.current),
                },
          4: (e, t) => ({
            ...e,
            panels: e.panels.filter((e) => e !== t.panel),
          }),
        },
        k = (0, o.createContext)(null);
      function O(e) {
        let t = (0, o.useContext)(k);
        if (null === t) {
          let t = Error(
            "<".concat(e, " /> is missing a parent <Tab.Group /> component.")
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, O), t);
        }
        return t;
      }
      k.displayName = "TabsDataContext";
      let C = (0, o.createContext)(null);
      function j(e) {
        let t = (0, o.useContext)(C);
        if (null === t) {
          let t = Error(
            "<".concat(e, " /> is missing a parent <Tab.Group /> component.")
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, j), t);
        }
        return t;
      }
      function A(e, t) {
        return (0, b.E)(t.type, M, e, t);
      }
      C.displayName = "TabsActionsContext";
      let L = o.Fragment,
        R = E.AN.RenderStrategy | E.AN.Static,
        D = Object.assign(
          (0, E.yV)(function (e, t) {
            var n, r;
            let a = (0, i.M)(),
              { id: l = "headlessui-tabs-tab-".concat(a), ...d } = e,
              {
                orientation: m,
                activation: g,
                selectedIndex: h,
                tabs: T,
                panels: _,
              } = O("Tab"),
              w = j("Tab"),
              P = O("Tab"),
              I = (0, o.useRef)(null),
              M = (0, p.T)(I, t);
            (0, c.e)(() => w.registerTab(I), [w, I]);
            let k = S("tabs"),
              C = T.indexOf(I);
            -1 === C && (C = k);
            let A = C === h,
              L = (0, s.z)((e) => {
                var t;
                let n = e();
                if (n === y.fE.Success && "auto" === g) {
                  let e = null == (t = (0, x.r)(I)) ? void 0 : t.activeElement,
                    n = P.tabs.findIndex((t) => t.current === e);
                  -1 !== n && w.change(n);
                }
                return n;
              }),
              R = (0, s.z)((e) => {
                let t = T.map((e) => e.current).filter(Boolean);
                if (e.key === u.R.Space || e.key === u.R.Enter) {
                  e.preventDefault(), e.stopPropagation(), w.change(C);
                  return;
                }
                switch (e.key) {
                  case u.R.Home:
                  case u.R.PageUp:
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      L(() => (0, y.jA)(t, y.TO.First))
                    );
                  case u.R.End:
                  case u.R.PageDown:
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      L(() => (0, y.jA)(t, y.TO.Last))
                    );
                }
                if (
                  L(() =>
                    (0, b.E)(m, {
                      vertical: () =>
                        e.key === u.R.ArrowUp
                          ? (0, y.jA)(t, y.TO.Previous | y.TO.WrapAround)
                          : e.key === u.R.ArrowDown
                          ? (0, y.jA)(t, y.TO.Next | y.TO.WrapAround)
                          : y.fE.Error,
                      horizontal: () =>
                        e.key === u.R.ArrowLeft
                          ? (0, y.jA)(t, y.TO.Previous | y.TO.WrapAround)
                          : e.key === u.R.ArrowRight
                          ? (0, y.jA)(t, y.TO.Next | y.TO.WrapAround)
                          : y.fE.Error,
                    })
                  ) === y.fE.Success
                )
                  return e.preventDefault();
              }),
              D = (0, o.useRef)(!1),
              N = (0, s.z)(() => {
                var e;
                D.current ||
                  ((D.current = !0),
                  null == (e = I.current) || e.focus({ preventScroll: !0 }),
                  w.change(C),
                  (0, v.Y)(() => {
                    D.current = !1;
                  }));
              }),
              z = (0, s.z)((e) => {
                e.preventDefault();
              }),
              F = (0, o.useMemo)(() => ({ selected: A }), [A]),
              H = {
                ref: M,
                onKeyDown: R,
                onMouseDown: z,
                onClick: N,
                id: l,
                role: "tab",
                type: (0, f.f)(e, I),
                "aria-controls":
                  null == (r = null == (n = _[C]) ? void 0 : n.current)
                    ? void 0
                    : r.id,
                "aria-selected": A,
                tabIndex: A ? 0 : -1,
              };
            return (0,
            E.sY)({ ourProps: H, theirProps: d, slot: F, defaultTag: "button", name: "Tabs.Tab" });
          }),
          {
            Group: (0, E.yV)(function (e, t) {
              let {
                  defaultIndex: n = 0,
                  vertical: r = !1,
                  manual: a = !1,
                  onChange: l,
                  selectedIndex: u = null,
                  ...i
                } = e,
                f = r ? "vertical" : "horizontal",
                m = a ? "manual" : "auto",
                g = null !== u,
                b = (0, p.T)(t),
                [v, x] = (0, o.useReducer)(A, {
                  selectedIndex: null != u ? u : n,
                  tabs: [],
                  panels: [],
                }),
                T = (0, o.useMemo)(
                  () => ({ selectedIndex: v.selectedIndex }),
                  [v.selectedIndex]
                ),
                S = (0, d.E)(l || (() => {})),
                w = (0, d.E)(v.tabs),
                P = (0, o.useMemo)(
                  () => ({ orientation: f, activation: m, ...v }),
                  [f, m, v]
                ),
                I = (0, s.z)(
                  (e) => (x({ type: 1, tab: e }), () => x({ type: 2, tab: e }))
                ),
                M = (0, s.z)(
                  (e) => (
                    x({ type: 3, panel: e }), () => x({ type: 4, panel: e })
                  )
                ),
                O = (0, s.z)((e) => {
                  j.current !== e && S.current(e),
                    g || x({ type: 0, index: e });
                }),
                j = (0, d.E)(g ? e.selectedIndex : v.selectedIndex),
                R = (0, o.useMemo)(
                  () => ({ registerTab: I, registerPanel: M, change: O }),
                  []
                );
              return (
                (0, c.e)(() => {
                  x({ type: 0, index: null != u ? u : n });
                }, [u]),
                (0, c.e)(() => {
                  if (void 0 === j.current || v.tabs.length <= 0) return;
                  let e = (0, y.z2)(v.tabs, (e) => e.current);
                  e.some((e, t) => v.tabs[t] !== e) &&
                    O(e.indexOf(v.tabs[j.current]));
                }),
                o.createElement(
                  _,
                  null,
                  o.createElement(
                    C.Provider,
                    { value: R },
                    o.createElement(
                      k.Provider,
                      { value: P },
                      P.tabs.length <= 0 &&
                        o.createElement(h, {
                          onFocus: () => {
                            var e, t;
                            for (let n of w.current)
                              if (
                                (null == (e = n.current)
                                  ? void 0
                                  : e.tabIndex) === 0
                              )
                                return null == (t = n.current) || t.focus(), !0;
                            return !1;
                          },
                        }),
                      (0, E.sY)({
                        ourProps: { ref: b },
                        theirProps: i,
                        slot: T,
                        defaultTag: L,
                        name: "Tabs",
                      })
                    )
                  )
                )
              );
            }),
            List: (0, E.yV)(function (e, t) {
              let { orientation: n, selectedIndex: r } = O("Tab.List"),
                a = (0, p.T)(t);
              return (0,
              E.sY)({ ourProps: { ref: a, role: "tablist", "aria-orientation": n }, theirProps: e, slot: { selectedIndex: r }, defaultTag: "div", name: "Tabs.List" });
            }),
            Panels: (0, E.yV)(function (e, t) {
              let { selectedIndex: n } = O("Tab.Panels"),
                r = (0, p.T)(t),
                a = (0, o.useMemo)(() => ({ selectedIndex: n }), [n]);
              return (0,
              E.sY)({ ourProps: { ref: r }, theirProps: e, slot: a, defaultTag: "div", name: "Tabs.Panels" });
            }),
            Panel: (0, E.yV)(function (e, t) {
              var n, r, a, l;
              let u = (0, i.M)(),
                {
                  id: s = "headlessui-tabs-panel-".concat(u),
                  tabIndex: d = 0,
                  ...f
                } = e,
                { selectedIndex: m, tabs: h, panels: y } = O("Tab.Panel"),
                b = j("Tab.Panel"),
                v = (0, o.useRef)(null),
                x = (0, p.T)(v, t);
              (0, c.e)(() => b.registerPanel(v), [b, v]);
              let T = S("panels"),
                _ = y.indexOf(v);
              -1 === _ && (_ = T);
              let w = _ === m,
                P = (0, o.useMemo)(() => ({ selected: w }), [w]),
                I = {
                  ref: x,
                  id: s,
                  role: "tabpanel",
                  "aria-labelledby":
                    null == (r = null == (n = h[_]) ? void 0 : n.current)
                      ? void 0
                      : r.id,
                  tabIndex: w ? d : -1,
                };
              return w ||
                (null != (a = f.unmount) && !a) ||
                (null != (l = f.static) && l)
                ? (0, E.sY)({
                    ourProps: I,
                    theirProps: f,
                    slot: P,
                    defaultTag: "div",
                    features: R,
                    visible: w,
                    name: "Tabs.Panel",
                  })
                : o.createElement(g._, {
                    as: "span",
                    "aria-hidden": "true",
                    ...I,
                  });
            }),
          }
        );
    },
    1454: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return o;
        },
      });
      var r = n(4090),
        a = n(9790);
      function l(e) {
        var t;
        if (e.type) return e.type;
        let n = null != (t = e.as) ? t : "button";
        if ("string" == typeof n && "button" === n.toLowerCase())
          return "button";
      }
      function o(e, t) {
        let [n, o] = (0, r.useState)(() => l(e));
        return (
          (0, a.e)(() => {
            o(l(e));
          }, [e.type, e.as]),
          (0, a.e)(() => {
            n ||
              (t.current &&
                t.current instanceof HTMLButtonElement &&
                !t.current.hasAttribute("type") &&
                o("button"));
          }, [n, t]),
          n
        );
      }
    },
    4848: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ThemeProvider: function () {
            return i;
          },
          useTheme: function () {
            return s;
          },
        });
      var r = n(4090),
        a = ["light", "dark"],
        l = "(prefers-color-scheme: dark)",
        o = r.createContext(void 0),
        u = { setTheme: (e) => {}, themes: [] },
        s = () => {
          var e;
          return null != (e = r.useContext(o)) ? e : u;
        },
        i = (e) =>
          r.useContext(o) ? e.children : r.createElement(d, { ...e }),
        c = ["light", "dark"],
        d = (e) => {
          let {
              forcedTheme: t,
              disableTransitionOnChange: n = !1,
              enableSystem: u = !0,
              enableColorScheme: s = !0,
              storageKey: i = "theme",
              themes: d = c,
              defaultTheme: h = u ? "system" : "light",
              attribute: y = "data-theme",
              value: b,
              children: v,
              nonce: x,
            } = e,
            [E, T] = r.useState(() => p(i, h)),
            [_, S] = r.useState(() => p(i)),
            w = b ? Object.values(b) : d,
            P = r.useCallback((e) => {
              let t = e;
              if (!t) return;
              "system" === e && u && (t = g());
              let r = b ? b[t] : t,
                l = n ? m() : null,
                o = document.documentElement;
              if (
                ("class" === y
                  ? (o.classList.remove(...w), r && o.classList.add(r))
                  : r
                  ? o.setAttribute(y, r)
                  : o.removeAttribute(y),
                s)
              ) {
                let e = a.includes(h) ? h : null,
                  n = a.includes(t) ? t : e;
                o.style.colorScheme = n;
              }
              null == l || l();
            }, []),
            I = r.useCallback(
              (e) => {
                let t = "function" == typeof e ? e(e) : e;
                T(t);
                try {
                  localStorage.setItem(i, t);
                } catch (e) {}
              },
              [t]
            ),
            M = r.useCallback(
              (e) => {
                S(g(e)), "system" === E && u && !t && P("system");
              },
              [E, t]
            );
          r.useEffect(() => {
            let e = window.matchMedia(l);
            return e.addListener(M), M(e), () => e.removeListener(M);
          }, [M]),
            r.useEffect(() => {
              let e = (e) => {
                e.key === i && I(e.newValue || h);
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [I]),
            r.useEffect(() => {
              P(null != t ? t : E);
            }, [t, E]);
          let k = r.useMemo(
            () => ({
              theme: E,
              setTheme: I,
              forcedTheme: t,
              resolvedTheme: "system" === E ? _ : E,
              themes: u ? [...d, "system"] : d,
              systemTheme: u ? _ : void 0,
            }),
            [E, I, t, _, u, d]
          );
          return r.createElement(
            o.Provider,
            { value: k },
            r.createElement(f, {
              forcedTheme: t,
              disableTransitionOnChange: n,
              enableSystem: u,
              enableColorScheme: s,
              storageKey: i,
              themes: d,
              defaultTheme: h,
              attribute: y,
              value: b,
              children: v,
              attrs: w,
              nonce: x,
            }),
            v
          );
        },
        f = r.memo((e) => {
          let {
              forcedTheme: t,
              storageKey: n,
              attribute: o,
              enableSystem: u,
              enableColorScheme: s,
              defaultTheme: i,
              value: c,
              attrs: d,
              nonce: f,
            } = e,
            p = "system" === i,
            m =
              "class" === o
                ? "var d=document.documentElement,c=d.classList;".concat(
                    "c.remove(".concat(
                      d.map((e) => "'".concat(e, "'")).join(","),
                      ")"
                    ),
                    ";"
                  )
                : "var d=document.documentElement,n='".concat(
                    o,
                    "',s='setAttribute';"
                  ),
            g = s
              ? (a.includes(i) ? i : null)
                ? "if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(
                    i,
                    "'"
                  )
                : "if(e==='light'||e==='dark')d.style.colorScheme=e"
              : "",
            h = function (e) {
              let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n =
                  !(arguments.length > 2) ||
                  void 0 === arguments[2] ||
                  arguments[2],
                r = c ? c[e] : e,
                l = t ? e + "|| ''" : "'".concat(r, "'"),
                u = "";
              return (
                s &&
                  n &&
                  !t &&
                  a.includes(e) &&
                  (u += "d.style.colorScheme = '".concat(e, "';")),
                "class" === o
                  ? t || r
                    ? (u += "c.add(".concat(l, ")"))
                    : (u += "null")
                  : r && (u += "d[s](n,".concat(l, ")")),
                u
              );
            },
            y = t
              ? "!function(){".concat(m).concat(h(t), "}()")
              : u
              ? "!function(){try{"
                  .concat(m, "var e=localStorage.getItem('")
                  .concat(n, "');if('system'===e||(!e&&")
                  .concat(p, ")){var t='")
                  .concat(
                    l,
                    "',m=window.matchMedia(t);if(m.media!==t||m.matches){"
                  )
                  .concat(h("dark"), "}else{")
                  .concat(h("light"), "}}else if(e){")
                  .concat(c ? "var x=".concat(JSON.stringify(c), ";") : "")
                  .concat(h(c ? "x[e]" : "e", !0), "}")
                  .concat(p ? "" : "else{" + h(i, !1, !1) + "}")
                  .concat(g, "}catch(e){}}()")
              : "!function(){try{"
                  .concat(m, "var e=localStorage.getItem('")
                  .concat(n, "');if(e){")
                  .concat(c ? "var x=".concat(JSON.stringify(c), ";") : "")
                  .concat(h(c ? "x[e]" : "e", !0), "}else{")
                  .concat(h(i, !1, !1), ";}")
                  .concat(g, "}catch(t){}}();");
          return r.createElement("script", {
            nonce: f,
            dangerouslySetInnerHTML: { __html: y },
          });
        }),
        p = (e, t) => {
          let n;
          try {
            n = localStorage.getItem(e) || void 0;
          } catch (e) {}
          return n || t;
        },
        m = () => {
          let e = document.createElement("style");
          return (
            e.appendChild(
              document.createTextNode(
                "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(e),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(e);
                }, 1);
            }
          );
        },
        g = (e) => (
          e || (e = window.matchMedia(l)), e.matches ? "dark" : "light"
        );
    },
  },
]);
