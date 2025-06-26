"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2370],
  {
    703: function (e, t, n) {
      n.d(t, {
        default: function () {
          return o.a;
        },
      });
      var r = n(7447),
        o = n.n(r);
    },
    7447: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getImageProps: function () {
            return i;
          },
          default: function () {
            return a;
          },
        });
      let r = n(6921),
        o = n(8630),
        l = n(1749),
        u = r._(n(536)),
        i = (e) => {
          let { props: t } = (0, o.getImgProps)(e, {
            defaultLoader: u.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
          return { props: t };
        },
        a = l.Image;
    },
    5961: function (e, t, n) {
      let r, o;
      n.d(t, {
        V: function () {
          return es;
        },
      });
      var l,
        u,
        i,
        a,
        c,
        s = n(4090),
        d = n.t(s, 2),
        f = n(44),
        p = n(641),
        m = n(5740),
        v = n(2219),
        g = n(5966),
        h = n(7273),
        E = n(2144),
        w = n(6601),
        b = n(3839);
      function y(e, t) {
        let n = (0, s.useRef)([]),
          r = (0, p.z)(e);
        (0, s.useEffect)(() => {
          let e = [...n.current];
          for (let [o, l] of t.entries())
            if (n.current[o] !== l) {
              let o = r(t, e);
              return (n.current = t), o;
            }
        }, [r, ...t]);
      }
      var T = n(7700);
      let P = [];
      !(function (e) {
        function t() {
          "loading" !== document.readyState &&
            (e(), document.removeEventListener("DOMContentLoaded", t));
        }
        "undefined" != typeof document &&
          (document.addEventListener("DOMContentLoaded", t), t());
      })(() => {
        function e(e) {
          e.target instanceof HTMLElement &&
            e.target !== document.body &&
            P[0] !== e.target &&
            (P.unshift(e.target),
            (P = P.filter((e) => null != e && e.isConnected)).splice(10));
        }
        window.addEventListener("click", e, { capture: !0 }),
          window.addEventListener("mousedown", e, { capture: !0 }),
          window.addEventListener("focus", e, { capture: !0 }),
          document.body.addEventListener("click", e, { capture: !0 }),
          document.body.addEventListener("mousedown", e, { capture: !0 }),
          document.body.addEventListener("focus", e, { capture: !0 });
      });
      var L = n(8803),
        O = n(2640),
        A = n(1210),
        M = n(8318);
      function S(e) {
        if (!e) return new Set();
        if ("function" == typeof e) return new Set(e());
        let t = new Set();
        for (let n of e.current)
          n.current instanceof HTMLElement && t.add(n.current);
        return t;
      }
      var C =
        (((l = C || {})[(l.None = 1)] = "None"),
        (l[(l.InitialFocus = 2)] = "InitialFocus"),
        (l[(l.TabLock = 4)] = "TabLock"),
        (l[(l.FocusLock = 8)] = "FocusLock"),
        (l[(l.RestoreFocus = 16)] = "RestoreFocus"),
        (l[(l.All = 30)] = "All"),
        l);
      let D = Object.assign(
        (0, M.yV)(function (e, t) {
          let n = (0, s.useRef)(null),
            r = (0, w.T)(n, t),
            { initialFocus: o, containers: l, features: u = 30, ...i } = e;
          (0, E.H)() || (u = 1);
          let a = (0, h.i)(n);
          !(function (e, t) {
            let { ownerDocument: n } = e,
              r = (function () {
                let e =
                    !(arguments.length > 0) ||
                    void 0 === arguments[0] ||
                    arguments[0],
                  t = (0, s.useRef)(P.slice());
                return (
                  y(
                    (e, n) => {
                      let [r] = e,
                        [o] = n;
                      !0 === o &&
                        !1 === r &&
                        (0, A.Y)(() => {
                          t.current.splice(0);
                        }),
                        !1 === o && !0 === r && (t.current = P.slice());
                    },
                    [e, P, t]
                  ),
                  (0, p.z)(() => {
                    var e;
                    return null !=
                      (e = t.current.find((e) => null != e && e.isConnected))
                      ? e
                      : null;
                  })
                );
              })(t);
            y(() => {
              t ||
                ((null == n ? void 0 : n.activeElement) ===
                  (null == n ? void 0 : n.body) &&
                  (0, L.C5)(r()));
            }, [t]),
              (0, g.L)(() => {
                t && (0, L.C5)(r());
              });
          })({ ownerDocument: a }, !!(16 & u));
          let c = (function (e, t) {
            let { ownerDocument: n, container: r, initialFocus: o } = e,
              l = (0, s.useRef)(null),
              u = (0, v.t)();
            return (
              y(() => {
                if (!t) return;
                let e = r.current;
                e &&
                  (0, A.Y)(() => {
                    if (!u.current) return;
                    let t = null == n ? void 0 : n.activeElement;
                    if (null != o && o.current) {
                      if ((null == o ? void 0 : o.current) === t) {
                        l.current = t;
                        return;
                      }
                    } else if (e.contains(t)) {
                      l.current = t;
                      return;
                    }
                    null != o && o.current
                      ? (0, L.C5)(o.current)
                      : (0, L.jA)(e, L.TO.First) === L.fE.Error &&
                        console.warn(
                          "There are no focusable elements inside the <FocusTrap />"
                        ),
                      (l.current = null == n ? void 0 : n.activeElement);
                  });
              }, [t]),
              l
            );
          })({ ownerDocument: a, container: n, initialFocus: o }, !!(2 & u));
          !(function (e, t) {
            let {
                ownerDocument: n,
                container: r,
                containers: o,
                previousActiveElement: l,
              } = e,
              u = (0, v.t)();
            (0, m.O)(
              null == n ? void 0 : n.defaultView,
              "focus",
              (e) => {
                if (!t || !u.current) return;
                let n = S(o);
                r.current instanceof HTMLElement && n.add(r.current);
                let i = l.current;
                if (!i) return;
                let a = e.target;
                a && a instanceof HTMLElement
                  ? R(n, a)
                    ? ((l.current = a), (0, L.C5)(a))
                    : (e.preventDefault(), e.stopPropagation(), (0, L.C5)(i))
                  : (0, L.C5)(l.current);
              },
              !0
            );
          })(
            {
              ownerDocument: a,
              container: n,
              containers: l,
              previousActiveElement: c,
            },
            !!(8 & u)
          );
          let d = (0, b.l)(),
            C = (0, p.z)((e) => {
              let t = n.current;
              t &&
                (0, O.E)(d.current, {
                  [b.N.Forwards]: () => {
                    (0, L.jA)(t, L.TO.First, {
                      skipElements: [e.relatedTarget],
                    });
                  },
                  [b.N.Backwards]: () => {
                    (0, L.jA)(t, L.TO.Last, {
                      skipElements: [e.relatedTarget],
                    });
                  },
                });
            }),
            D = (0, f.G)(),
            F = (0, s.useRef)(!1);
          return s.createElement(
            s.Fragment,
            null,
            !!(4 & u) &&
              s.createElement(T._, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: C,
                features: T.A.Focusable,
              }),
            (0, M.sY)({
              ourProps: {
                ref: r,
                onKeyDown(e) {
                  "Tab" == e.key &&
                    ((F.current = !0),
                    D.requestAnimationFrame(() => {
                      F.current = !1;
                    }));
                },
                onBlur(e) {
                  let t = S(l);
                  n.current instanceof HTMLElement && t.add(n.current);
                  let r = e.relatedTarget;
                  r instanceof HTMLElement &&
                    "true" !== r.dataset.headlessuiFocusGuard &&
                    (R(t, r) ||
                      (F.current
                        ? (0, L.jA)(
                            n.current,
                            (0, O.E)(d.current, {
                              [b.N.Forwards]: () => L.TO.Next,
                              [b.N.Backwards]: () => L.TO.Previous,
                            }) | L.TO.WrapAround,
                            { relativeTo: e.target }
                          )
                        : e.target instanceof HTMLElement &&
                          (0, L.C5)(e.target)));
                },
              },
              theirProps: i,
              defaultTag: "div",
              name: "FocusTrap",
            }),
            !!(4 & u) &&
              s.createElement(T._, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: C,
                features: T.A.Focusable,
              })
          );
        }),
        { features: C }
      );
      function R(e, t) {
        for (let n of e) if (n.contains(t)) return !0;
        return !1;
      }
      var F = n(3832);
      let {
        useState: N,
        useEffect: k,
        useLayoutEffect: x,
        useDebugValue: H,
      } = d;
      void 0 !== window.document && window.document.createElement;
      let I = d.useSyncExternalStore;
      var _ = n(9790),
        Y = n(5205),
        V = n(5256);
      let z =
        ((u = {
          PUSH(e, t) {
            var n;
            let r =
              null != (n = this.get(e))
                ? n
                : { doc: e, count: 0, d: (0, Y.k)(), meta: new Set() };
            return r.count++, r.meta.add(t), this.set(e, r), this;
          },
          POP(e, t) {
            let n = this.get(e);
            return n && (n.count--, n.meta.delete(t)), this;
          },
          SCROLL_PREVENT(e) {
            let t,
              { doc: n, d: r, meta: o } = e,
              l = {
                doc: n,
                d: r,
                meta: (function (e) {
                  let t = {};
                  for (let n of e) Object.assign(t, n(t));
                  return t;
                })(o),
              },
              u = [
                (0, V.gn)()
                  ? {
                      before(e) {
                        let { doc: t, d: n, meta: r } = e;
                        function o(e) {
                          return r.containers
                            .flatMap((e) => e())
                            .some((t) => t.contains(e));
                        }
                        n.microTask(() => {
                          var e;
                          if (
                            "auto" !==
                            window.getComputedStyle(t.documentElement)
                              .scrollBehavior
                          ) {
                            let e = (0, Y.k)();
                            e.style(
                              t.documentElement,
                              "scrollBehavior",
                              "auto"
                            ),
                              n.add(() => n.microTask(() => e.dispose()));
                          }
                          let r =
                              null != (e = window.scrollY)
                                ? e
                                : window.pageYOffset,
                            l = null;
                          n.addEventListener(
                            t,
                            "click",
                            (e) => {
                              if (e.target instanceof HTMLElement)
                                try {
                                  let n = e.target.closest("a");
                                  if (!n) return;
                                  let { hash: r } = new URL(n.href),
                                    u = t.querySelector(r);
                                  u && !o(u) && (l = u);
                                } catch (e) {}
                            },
                            !0
                          ),
                            n.addEventListener(t, "touchstart", (e) => {
                              if (e.target instanceof HTMLElement) {
                                if (o(e.target)) {
                                  let t = e.target;
                                  for (
                                    ;
                                    t.parentElement && o(t.parentElement);

                                  )
                                    t = t.parentElement;
                                  n.style(t, "overscrollBehavior", "contain");
                                } else n.style(e.target, "touchAction", "none");
                              }
                            }),
                            n.addEventListener(
                              t,
                              "touchmove",
                              (e) => {
                                if (e.target instanceof HTMLElement) {
                                  if (o(e.target)) {
                                    let t = e.target;
                                    for (
                                      ;
                                      t.parentElement &&
                                      "" !== t.dataset.headlessuiPortal &&
                                      !(
                                        t.scrollHeight > t.clientHeight ||
                                        t.scrollWidth > t.clientWidth
                                      );

                                    )
                                      t = t.parentElement;
                                    "" === t.dataset.headlessuiPortal &&
                                      e.preventDefault();
                                  } else e.preventDefault();
                                }
                              },
                              { passive: !1 }
                            ),
                            n.add(() => {
                              var e;
                              r !==
                                (null != (e = window.scrollY)
                                  ? e
                                  : window.pageYOffset) &&
                                window.scrollTo(0, r),
                                l &&
                                  l.isConnected &&
                                  (l.scrollIntoView({ block: "nearest" }),
                                  (l = null));
                            });
                        });
                      },
                    }
                  : {},
                {
                  before(e) {
                    var n;
                    let { doc: r } = e,
                      o = r.documentElement;
                    t =
                      (null != (n = r.defaultView) ? n : window).innerWidth -
                      o.clientWidth;
                  },
                  after(e) {
                    let { doc: n, d: r } = e,
                      o = n.documentElement,
                      l = o.clientWidth - o.offsetWidth,
                      u = t - l;
                    r.style(o, "paddingRight", "".concat(u, "px"));
                  },
                },
                {
                  before(e) {
                    let { doc: t, d: n } = e;
                    n.style(t.documentElement, "overflow", "hidden");
                  },
                },
              ];
            u.forEach((e) => {
              let { before: t } = e;
              return null == t ? void 0 : t(l);
            }),
              u.forEach((e) => {
                let { after: t } = e;
                return null == t ? void 0 : t(l);
              });
          },
          SCROLL_ALLOW(e) {
            let { d: t } = e;
            t.dispose();
          },
          TEARDOWN(e) {
            let { doc: t } = e;
            this.delete(t);
          },
        }),
        (r = new Map()),
        (o = new Set()),
        {
          getSnapshot: () => r,
          subscribe: (e) => (o.add(e), () => o.delete(e)),
          dispatch(e) {
            for (
              var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), l = 1;
              l < t;
              l++
            )
              n[l - 1] = arguments[l];
            let i = u[e].call(r, ...n);
            i && ((r = i), o.forEach((e) => e()));
          },
        });
      z.subscribe(() => {
        let e = z.getSnapshot(),
          t = new Map();
        for (let [n] of e) t.set(n, n.documentElement.style.overflow);
        for (let n of e.values()) {
          let e = "hidden" === t.get(n.doc),
            r = 0 !== n.count;
          ((r && !e) || (!r && e)) &&
            z.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
            0 === n.count && z.dispatch("TEARDOWN", n);
        }
      });
      var B = n(2381);
      let j = new Map(),
        W = new Map();
      function U(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        (0, _.e)(() => {
          var n;
          if (!t) return;
          let r = "function" == typeof e ? e() : e.current;
          if (!r) return;
          let o = null != (n = W.get(r)) ? n : 0;
          return (
            W.set(r, o + 1),
            0 !== o ||
              (j.set(r, {
                "aria-hidden": r.getAttribute("aria-hidden"),
                inert: r.inert,
              }),
              r.setAttribute("aria-hidden", "true"),
              (r.inert = !0)),
            function () {
              var e;
              if (!r) return;
              let t = null != (e = W.get(r)) ? e : 1;
              if ((1 === t ? W.delete(r) : W.set(r, t - 1), 1 !== t)) return;
              let n = j.get(r);
              n &&
                (null === n["aria-hidden"]
                  ? r.removeAttribute("aria-hidden")
                  : r.setAttribute("aria-hidden", n["aria-hidden"]),
                (r.inert = n.inert),
                j.delete(r));
            }
          );
        }, [e, t]);
      }
      var G = n(1679),
        q = n(1820),
        K = n(8358),
        Z = n(9166);
      let J = (0, s.createContext)(() => {});
      J.displayName = "StackContext";
      var X =
        (((i = X || {})[(i.Add = 0)] = "Add"),
        (i[(i.Remove = 1)] = "Remove"),
        i);
      function Q(e) {
        let { children: t, onUpdate: n, type: r, element: o, enabled: l } = e,
          u = (0, s.useContext)(J),
          i = (0, p.z)(function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            null == n || n(...t), u(...t);
          });
        return (
          (0, _.e)(() => {
            let e = void 0 === l || !0 === l;
            return (
              e && i(0, r, o),
              () => {
                e && i(1, r, o);
              }
            );
          }, [i, r, o, l]),
          s.createElement(J.Provider, { value: i }, t)
        );
      }
      var $ = n(4152);
      let ee = (0, s.createContext)(null),
        et = Object.assign(
          (0, M.yV)(function (e, t) {
            let n = (0, B.M)(),
              { id: r = "headlessui-description-".concat(n), ...o } = e,
              l = (function e() {
                let t = (0, s.useContext)(ee);
                if (null === t) {
                  let t = Error(
                    "You used a <Description /> component, but it is not inside a relevant parent."
                  );
                  throw (
                    (Error.captureStackTrace && Error.captureStackTrace(t, e),
                    t)
                  );
                }
                return t;
              })(),
              u = (0, w.T)(t);
            (0, _.e)(() => l.register(r), [r, l.register]);
            let i = { ref: u, ...l.props, id: r };
            return (0,
            M.sY)({ ourProps: i, theirProps: o, slot: l.slot || {}, defaultTag: "p", name: l.name || "Description" });
          }),
          {}
        );
      var en = n(7409),
        er =
          (((a = er || {})[(a.Open = 0)] = "Open"),
          (a[(a.Closed = 1)] = "Closed"),
          a),
        eo = (((c = eo || {})[(c.SetTitleId = 0)] = "SetTitleId"), c);
      let el = {
          0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id }),
        },
        eu = (0, s.createContext)(null);
      function ei(e) {
        let t = (0, s.useContext)(eu);
        if (null === t) {
          let t = Error(
            "<".concat(e, " /> is missing a parent <Dialog /> component.")
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, ei), t);
        }
        return t;
      }
      function ea(e, t) {
        return (0, O.E)(t.type, el, e, t);
      }
      eu.displayName = "DialogContext";
      let ec = M.AN.RenderStrategy | M.AN.Static,
        es = Object.assign(
          (0, M.yV)(function (e, t) {
            let n = (0, B.M)(),
              {
                id: r = "headlessui-dialog-".concat(n),
                open: o,
                onClose: l,
                initialFocus: u,
                role: i = "dialog",
                __demoMode: a = !1,
                ...c
              } = e,
              [d, f] = (0, s.useState)(0),
              v = (0, s.useRef)(!1);
            i =
              "dialog" === i || "alertdialog" === i
                ? i
                : (v.current ||
                    ((v.current = !0),
                    console.warn(
                      "Invalid role [".concat(
                        i,
                        "] passed to <Dialog />. Only `dialog` and and `alertdialog` are supported. Using `dialog` instead."
                      )
                    )),
                  "dialog");
            let g = (0, K.oJ)();
            void 0 === o && null !== g && (o = (g & K.ZM.Open) === K.ZM.Open);
            let b = (0, s.useRef)(null),
              y = (0, w.T)(b, t),
              T = (0, h.i)(b),
              P = e.hasOwnProperty("open") || null !== g,
              L = e.hasOwnProperty("onClose");
            if (!P && !L)
              throw Error(
                "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
              );
            if (!P)
              throw Error(
                "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
              );
            if (!L)
              throw Error(
                "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
              );
            if ("boolean" != typeof o)
              throw Error(
                "You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: ".concat(
                  o
                )
              );
            if ("function" != typeof l)
              throw Error(
                "You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: ".concat(
                  l
                )
              );
            let A = o ? 0 : 1,
              [S, C] = (0, s.useReducer)(ea, {
                titleId: null,
                descriptionId: null,
                panelRef: (0, s.createRef)(),
              }),
              R = (0, p.z)(() => l(!1)),
              N = (0, p.z)((e) => C({ type: 0, id: e })),
              k = !!(0, E.H)() && !a && 0 === A,
              x = d > 1,
              H = null !== (0, s.useContext)(eu),
              [Y, V] = (0, F.k)(),
              {
                resolveContainers: j,
                mainTreeNodeRef: W,
                MainTreeNode: J,
              } = (0, q.v)({
                portals: Y,
                defaultContainers: [
                  {
                    get current() {
                      var $;
                      return null != ($ = S.panelRef.current) ? $ : b.current;
                    },
                  },
                ],
              }),
              et = null !== g && (g & K.ZM.Closing) === K.ZM.Closing,
              er = !H && !et && k;
            U(
              (0, s.useCallback)(() => {
                var e, t;
                return null !=
                  (t = Array.from(
                    null !=
                      (e = null == T ? void 0 : T.querySelectorAll("body > *"))
                      ? e
                      : []
                  ).find(
                    (e) =>
                      "headlessui-portal-root" !== e.id &&
                      e.contains(W.current) &&
                      e instanceof HTMLElement
                  ))
                  ? t
                  : null;
              }, [W]),
              er
            );
            let eo = !!x || k;
            U(
              (0, s.useCallback)(() => {
                var e, t;
                return null !=
                  (t = Array.from(
                    null !=
                      (e =
                        null == T
                          ? void 0
                          : T.querySelectorAll("[data-headlessui-portal]"))
                      ? e
                      : []
                  ).find(
                    (e) => e.contains(W.current) && e instanceof HTMLElement
                  ))
                  ? t
                  : null;
              }, [W]),
              eo
            );
            let el = !(!k || x);
            (0, G.O)(j, R, el);
            let ei = !(x || 0 !== A);
            (0, m.O)(null == T ? void 0 : T.defaultView, "keydown", (e) => {
              ei &&
                (e.defaultPrevented ||
                  (e.key === en.R.Escape &&
                    (e.preventDefault(), e.stopPropagation(), R())));
            }),
              (function (e, t) {
                var n;
                let r,
                  o,
                  l =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : () => [document.body];
                (n = (e) => {
                  var t;
                  return {
                    containers: [...(null != (t = e.containers) ? t : []), l],
                  };
                }),
                  (r = I(z.subscribe, z.getSnapshot, z.getSnapshot)),
                  (o = e ? r.get(e) : void 0) && o.count,
                  (0, _.e)(() => {
                    if (!(!e || !t))
                      return (
                        z.dispatch("PUSH", e, n), () => z.dispatch("POP", e, n)
                      );
                  }, [t, e]);
              })(T, !(et || 0 !== A || H), j),
              (0, s.useEffect)(() => {
                if (0 !== A || !b.current) return;
                let e = new ResizeObserver((e) => {
                  for (let t of e) {
                    let e = t.target.getBoundingClientRect();
                    0 === e.x &&
                      0 === e.y &&
                      0 === e.width &&
                      0 === e.height &&
                      R();
                  }
                });
                return e.observe(b.current), () => e.disconnect();
              }, [A, b, R]);
            let [es, ed] = (function () {
                let [e, t] = (0, s.useState)([]);
                return [
                  e.length > 0 ? e.join(" ") : void 0,
                  (0, s.useMemo)(
                    () =>
                      function (e) {
                        let n = (0, p.z)(
                            (e) => (
                              t((t) => [...t, e]),
                              () =>
                                t((t) => {
                                  let n = t.slice(),
                                    r = n.indexOf(e);
                                  return -1 !== r && n.splice(r, 1), n;
                                })
                            )
                          ),
                          r = (0, s.useMemo)(
                            () => ({
                              register: n,
                              slot: e.slot,
                              name: e.name,
                              props: e.props,
                            }),
                            [n, e.slot, e.name, e.props]
                          );
                        return s.createElement(
                          ee.Provider,
                          { value: r },
                          e.children
                        );
                      },
                    [t]
                  ),
                ];
              })(),
              ef = (0, s.useMemo)(
                () => [{ dialogState: A, close: R, setTitleId: N }, S],
                [A, S, R, N]
              ),
              ep = (0, s.useMemo)(() => ({ open: 0 === A }), [A]),
              em = {
                ref: y,
                id: r,
                role: i,
                "aria-modal": 0 === A || void 0,
                "aria-labelledby": S.titleId,
                "aria-describedby": es,
              };
            return s.createElement(
              Q,
              {
                type: "Dialog",
                enabled: 0 === A,
                element: b,
                onUpdate: (0, p.z)((e, t) => {
                  "Dialog" === t &&
                    (0, O.E)(e, {
                      [X.Add]: () => f((e) => e + 1),
                      [X.Remove]: () => f((e) => e - 1),
                    });
                }),
              },
              s.createElement(
                Z.O,
                { force: !0 },
                s.createElement(
                  F.h,
                  null,
                  s.createElement(
                    eu.Provider,
                    { value: ef },
                    s.createElement(
                      F.h.Group,
                      { target: b },
                      s.createElement(
                        Z.O,
                        { force: !1 },
                        s.createElement(
                          ed,
                          { slot: ep, name: "Dialog.Description" },
                          s.createElement(
                            D,
                            {
                              initialFocus: u,
                              containers: j,
                              features: k
                                ? (0, O.E)(x ? "parent" : "leaf", {
                                    parent: D.features.RestoreFocus,
                                    leaf:
                                      D.features.All & ~D.features.FocusLock,
                                  })
                                : D.features.None,
                            },
                            s.createElement(
                              V,
                              null,
                              (0, M.sY)({
                                ourProps: em,
                                theirProps: c,
                                slot: ep,
                                defaultTag: "div",
                                features: ec,
                                visible: 0 === A,
                                name: "Dialog",
                              })
                            )
                          )
                        )
                      )
                    )
                  )
                )
              ),
              s.createElement(J, null)
            );
          }),
          {
            Backdrop: (0, M.yV)(function (e, t) {
              let n = (0, B.M)(),
                { id: r = "headlessui-dialog-backdrop-".concat(n), ...o } = e,
                [{ dialogState: l }, u] = ei("Dialog.Backdrop"),
                i = (0, w.T)(t);
              (0, s.useEffect)(() => {
                if (null === u.panelRef.current)
                  throw Error(
                    "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
                  );
              }, [u.panelRef]);
              let a = (0, s.useMemo)(() => ({ open: 0 === l }), [l]);
              return s.createElement(
                Z.O,
                { force: !0 },
                s.createElement(
                  F.h,
                  null,
                  (0, M.sY)({
                    ourProps: { ref: i, id: r, "aria-hidden": !0 },
                    theirProps: o,
                    slot: a,
                    defaultTag: "div",
                    name: "Dialog.Backdrop",
                  })
                )
              );
            }),
            Panel: (0, M.yV)(function (e, t) {
              let n = (0, B.M)(),
                { id: r = "headlessui-dialog-panel-".concat(n), ...o } = e,
                [{ dialogState: l }, u] = ei("Dialog.Panel"),
                i = (0, w.T)(t, u.panelRef),
                a = (0, s.useMemo)(() => ({ open: 0 === l }), [l]),
                c = (0, p.z)((e) => {
                  e.stopPropagation();
                });
              return (0,
              M.sY)({ ourProps: { ref: i, id: r, onClick: c }, theirProps: o, slot: a, defaultTag: "div", name: "Dialog.Panel" });
            }),
            Overlay: (0, M.yV)(function (e, t) {
              let n = (0, B.M)(),
                { id: r = "headlessui-dialog-overlay-".concat(n), ...o } = e,
                [{ dialogState: l, close: u }] = ei("Dialog.Overlay"),
                i = (0, w.T)(t),
                a = (0, p.z)((e) => {
                  if (e.target === e.currentTarget) {
                    if ((0, $.P)(e.currentTarget)) return e.preventDefault();
                    e.preventDefault(), e.stopPropagation(), u();
                  }
                }),
                c = (0, s.useMemo)(() => ({ open: 0 === l }), [l]);
              return (0,
              M.sY)({ ourProps: { ref: i, id: r, "aria-hidden": !0, onClick: a }, theirProps: o, slot: c, defaultTag: "div", name: "Dialog.Overlay" });
            }),
            Title: (0, M.yV)(function (e, t) {
              let n = (0, B.M)(),
                { id: r = "headlessui-dialog-title-".concat(n), ...o } = e,
                [{ dialogState: l, setTitleId: u }] = ei("Dialog.Title"),
                i = (0, w.T)(t);
              (0, s.useEffect)(() => (u(r), () => u(null)), [r, u]);
              let a = (0, s.useMemo)(() => ({ open: 0 === l }), [l]);
              return (0,
              M.sY)({ ourProps: { ref: i, id: r }, theirProps: o, slot: a, defaultTag: "h2", name: "Dialog.Title" });
            }),
            Description: et,
          }
        );
    },
    7409: function (e, t, n) {
      n.d(t, {
        R: function () {
          return o;
        },
      });
      var r,
        o =
          (((r = o || {}).Space = " "),
          (r.Enter = "Enter"),
          (r.Escape = "Escape"),
          (r.Backspace = "Backspace"),
          (r.Delete = "Delete"),
          (r.ArrowLeft = "ArrowLeft"),
          (r.ArrowUp = "ArrowUp"),
          (r.ArrowRight = "ArrowRight"),
          (r.ArrowDown = "ArrowDown"),
          (r.Home = "Home"),
          (r.End = "End"),
          (r.PageUp = "PageUp"),
          (r.PageDown = "PageDown"),
          (r.Tab = "Tab"),
          r);
    },
    3832: function (e, t, n) {
      n.d(t, {
        h: function () {
          return w;
        },
        k: function () {
          return E;
        },
      });
      var r = n(4090),
        o = n(9542),
        l = n(641),
        u = n(9790),
        i = n(5966),
        a = n(7273),
        c = n(2144),
        s = n(6601),
        d = n(9166),
        f = n(1879),
        p = n(8318);
      let m = r.Fragment,
        v = r.Fragment,
        g = (0, r.createContext)(null),
        h = (0, r.createContext)(null);
      function E() {
        let e = (0, r.useContext)(h),
          t = (0, r.useRef)([]),
          n = (0, l.z)(
            (n) => (t.current.push(n), e && e.register(n), () => o(n))
          ),
          o = (0, l.z)((n) => {
            let r = t.current.indexOf(n);
            -1 !== r && t.current.splice(r, 1), e && e.unregister(n);
          }),
          u = (0, r.useMemo)(
            () => ({ register: n, unregister: o, portals: t }),
            [n, o, t]
          );
        return [
          t,
          (0, r.useMemo)(
            () =>
              function (e) {
                let { children: t } = e;
                return r.createElement(h.Provider, { value: u }, t);
              },
            [u]
          ),
        ];
      }
      let w = Object.assign(
        (0, p.yV)(function (e, t) {
          let n = (0, r.useRef)(null),
            l = (0, s.T)(
              (0, s.h)((e) => {
                n.current = e;
              }),
              t
            ),
            v = (0, a.i)(n),
            E = (function (e) {
              let t = (0, d.n)(),
                n = (0, r.useContext)(g),
                o = (0, a.i)(e),
                [l, u] = (0, r.useState)(() => {
                  if ((!t && null !== n) || f.O.isServer) return null;
                  let e =
                    null == o
                      ? void 0
                      : o.getElementById("headlessui-portal-root");
                  if (e) return e;
                  if (null === o) return null;
                  let r = o.createElement("div");
                  return (
                    r.setAttribute("id", "headlessui-portal-root"),
                    o.body.appendChild(r)
                  );
                });
              return (
                (0, r.useEffect)(() => {
                  null !== l &&
                    ((null != o && o.body.contains(l)) ||
                      null == o ||
                      o.body.appendChild(l));
                }, [l, o]),
                (0, r.useEffect)(() => {
                  t || (null !== n && u(n.current));
                }, [n, u, t]),
                l
              );
            })(n),
            [w] = (0, r.useState)(() => {
              var e;
              return f.O.isServer
                ? null
                : null != (e = null == v ? void 0 : v.createElement("div"))
                ? e
                : null;
            }),
            b = (0, r.useContext)(h),
            y = (0, c.H)();
          return (
            (0, u.e)(() => {
              !E ||
                !w ||
                E.contains(w) ||
                (w.setAttribute("data-headlessui-portal", ""),
                E.appendChild(w));
            }, [E, w]),
            (0, u.e)(() => {
              if (w && b) return b.register(w);
            }, [b, w]),
            (0, i.L)(() => {
              var e;
              E &&
                w &&
                (w instanceof Node && E.contains(w) && E.removeChild(w),
                E.childNodes.length <= 0 &&
                  (null == (e = E.parentElement) || e.removeChild(E)));
            }),
            y && E && w
              ? (0, o.createPortal)(
                  (0, p.sY)({
                    ourProps: { ref: l },
                    theirProps: e,
                    defaultTag: m,
                    name: "Portal",
                  }),
                  w
                )
              : null
          );
        }),
        {
          Group: (0, p.yV)(function (e, t) {
            let { target: n, ...o } = e,
              l = { ref: (0, s.T)(t) };
            return r.createElement(
              g.Provider,
              { value: n },
              (0, p.sY)({
                ourProps: l,
                theirProps: o,
                defaultTag: v,
                name: "Popover.Group",
              })
            );
          }),
        }
      );
    },
    5740: function (e, t, n) {
      n.d(t, {
        O: function () {
          return l;
        },
      });
      var r = n(4090),
        o = n(5235);
      function l(e, t, n, l) {
        let u = (0, o.E)(n);
        (0, r.useEffect)(() => {
          function n(e) {
            u.current(e);
          }
          return (
            (e = null != e ? e : window).addEventListener(t, n, l),
            () => e.removeEventListener(t, n, l)
          );
        }, [e, t, l]);
      }
    },
    2381: function (e, t, n) {
      n.d(t, {
        M: function () {
          return a;
        },
      });
      var r,
        o = n(4090),
        l = n(1879),
        u = n(9790),
        i = n(2144);
      let a =
        null != (r = o.useId)
          ? r
          : function () {
              let e = (0, i.H)(),
                [t, n] = o.useState(e ? () => l.O.nextId() : null);
              return (
                (0, u.e)(() => {
                  null === t && n(l.O.nextId());
                }, [t]),
                null != t ? "" + t : void 0
              );
            };
    },
    5966: function (e, t, n) {
      n.d(t, {
        L: function () {
          return u;
        },
      });
      var r = n(4090),
        o = n(1210),
        l = n(641);
      function u(e) {
        let t = (0, l.z)(e),
          n = (0, r.useRef)(!1);
        (0, r.useEffect)(
          () => (
            (n.current = !1),
            () => {
              (n.current = !0),
                (0, o.Y)(() => {
                  n.current && t();
                });
            }
          ),
          [t]
        );
      }
    },
    1679: function (e, t, n) {
      n.d(t, {
        O: function () {
          return c;
        },
      });
      var r = n(4090),
        o = n(8803),
        l = n(5256),
        u = n(5235);
      function i(e, t, n) {
        let o = (0, u.E)(t);
        (0, r.useEffect)(() => {
          function t(e) {
            o.current(e);
          }
          return (
            document.addEventListener(e, t, n),
            () => document.removeEventListener(e, t, n)
          );
        }, [e, n]);
      }
      var a = n(1372);
      function c(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          u = (0, r.useRef)(!1);
        function c(n, r) {
          if (!u.current || n.defaultPrevented) return;
          let l = r(n);
          if (null !== l && l.getRootNode().contains(l) && l.isConnected) {
            for (let t of (function e(t) {
              return "function" == typeof t
                ? e(t())
                : Array.isArray(t) || t instanceof Set
                ? t
                : [t];
            })(e)) {
              if (null === t) continue;
              let e = t instanceof HTMLElement ? t : t.current;
              if (
                (null != e && e.contains(l)) ||
                (n.composed && n.composedPath().includes(e))
              )
                return;
            }
            return (
              (0, o.sP)(l, o.tJ.Loose) ||
                -1 === l.tabIndex ||
                n.preventDefault(),
              t(n, l)
            );
          }
        }
        (0, r.useEffect)(() => {
          requestAnimationFrame(() => {
            u.current = n;
          });
        }, [n]);
        let s = (0, r.useRef)(null);
        i(
          "pointerdown",
          (e) => {
            var t, n;
            u.current &&
              (s.current =
                (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                  ? void 0
                  : n[0]) || e.target);
          },
          !0
        ),
          i(
            "mousedown",
            (e) => {
              var t, n;
              u.current &&
                (s.current =
                  (null ==
                  (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                    ? void 0
                    : n[0]) || e.target);
            },
            !0
          ),
          i(
            "click",
            (e) => {
              (0, l.tq)() ||
                (s.current && (c(e, () => s.current), (s.current = null)));
            },
            !0
          ),
          i(
            "touchend",
            (e) =>
              c(e, () => (e.target instanceof HTMLElement ? e.target : null)),
            !0
          ),
          (0, a.s)(
            "blur",
            (e) =>
              c(e, () =>
                window.document.activeElement instanceof HTMLIFrameElement
                  ? window.document.activeElement
                  : null
              ),
            !0
          );
      }
    },
    7273: function (e, t, n) {
      n.d(t, {
        i: function () {
          return l;
        },
      });
      var r = n(4090),
        o = n(4819);
      function l() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, r.useMemo)(() => (0, o.r)(...t), [...t]);
      }
    },
    1820: function (e, t, n) {
      n.d(t, {
        H: function () {
          return a;
        },
        v: function () {
          return i;
        },
      });
      var r = n(4090),
        o = n(7700),
        l = n(641),
        u = n(7273);
      function i() {
        var e;
        let {
            defaultContainers: t = [],
            portals: n,
            mainTreeNodeRef: i,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          a = (0, r.useRef)(
            null != (e = null == i ? void 0 : i.current) ? e : null
          ),
          c = (0, u.i)(a),
          s = (0, l.z)(() => {
            var e, r, o;
            let l = [];
            for (let e of t)
              null !== e &&
                (e instanceof HTMLElement
                  ? l.push(e)
                  : "current" in e &&
                    e.current instanceof HTMLElement &&
                    l.push(e.current));
            if (null != n && n.current) for (let e of n.current) l.push(e);
            for (let t of null !=
            (e = null == c ? void 0 : c.querySelectorAll("html > *, body > *"))
              ? e
              : [])
              t !== document.body &&
                t !== document.head &&
                t instanceof HTMLElement &&
                "headlessui-portal-root" !== t.id &&
                (t.contains(a.current) ||
                  t.contains(
                    null ==
                      (o = null == (r = a.current) ? void 0 : r.getRootNode())
                      ? void 0
                      : o.host
                  ) ||
                  l.some((e) => t.contains(e)) ||
                  l.push(t));
            return l;
          });
        return {
          resolveContainers: s,
          contains: (0, l.z)((e) => s().some((t) => t.contains(e))),
          mainTreeNodeRef: a,
          MainTreeNode: (0, r.useMemo)(
            () =>
              function () {
                return null != i
                  ? null
                  : r.createElement(o._, { features: o.A.Hidden, ref: a });
              },
            [a, i]
          ),
        };
      }
      function a() {
        let e = (0, r.useRef)(null);
        return {
          mainTreeNodeRef: e,
          MainTreeNode: (0, r.useMemo)(
            () =>
              function () {
                return r.createElement(o._, { features: o.A.Hidden, ref: e });
              },
            [e]
          ),
        };
      }
    },
    3839: function (e, t, n) {
      n.d(t, {
        N: function () {
          return u;
        },
        l: function () {
          return i;
        },
      });
      var r,
        o = n(4090),
        l = n(1372),
        u =
          (((r = u || {})[(r.Forwards = 0)] = "Forwards"),
          (r[(r.Backwards = 1)] = "Backwards"),
          r);
      function i() {
        let e = (0, o.useRef)(0);
        return (
          (0, l.s)(
            "keydown",
            (t) => {
              "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0);
            },
            !0
          ),
          e
        );
      }
    },
    1372: function (e, t, n) {
      n.d(t, {
        s: function () {
          return l;
        },
      });
      var r = n(4090),
        o = n(5235);
      function l(e, t, n) {
        let l = (0, o.E)(t);
        (0, r.useEffect)(() => {
          function t(e) {
            l.current(e);
          }
          return (
            window.addEventListener(e, t, n),
            () => window.removeEventListener(e, t, n)
          );
        }, [e, n]);
      }
    },
    7700: function (e, t, n) {
      n.d(t, {
        A: function () {
          return l;
        },
        _: function () {
          return u;
        },
      });
      var r,
        o = n(8318),
        l =
          (((r = l || {})[(r.None = 1)] = "None"),
          (r[(r.Focusable = 2)] = "Focusable"),
          (r[(r.Hidden = 4)] = "Hidden"),
          r);
      let u = (0, o.yV)(function (e, t) {
        var n;
        let { features: r = 1, ...l } = e,
          u = {
            ref: t,
            "aria-hidden":
              (2 & r) == 2 || (null != (n = l["aria-hidden"]) ? n : void 0),
            style: {
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              ...((4 & r) == 4 && (2 & r) != 2 && { display: "none" }),
            },
          };
        return (0,
        o.sY)({ ourProps: u, theirProps: l, slot: {}, defaultTag: "div", name: "Hidden" });
      });
    },
    9166: function (e, t, n) {
      n.d(t, {
        O: function () {
          return u;
        },
        n: function () {
          return l;
        },
      });
      var r = n(4090);
      let o = (0, r.createContext)(!1);
      function l() {
        return (0, r.useContext)(o);
      }
      function u(e) {
        return r.createElement(o.Provider, { value: e.force }, e.children);
      }
    },
    4152: function (e, t, n) {
      function r(e) {
        let t = e.parentElement,
          n = null;
        for (; t && !(t instanceof HTMLFieldSetElement); )
          t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
        let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
        return (
          !(
            r &&
            (function (e) {
              if (!e) return !1;
              let t = e.previousElementSibling;
              for (; null !== t; ) {
                if (t instanceof HTMLLegendElement) return !1;
                t = t.previousElementSibling;
              }
              return !0;
            })(n)
          ) && r
        );
      }
      n.d(t, {
        P: function () {
          return r;
        },
      });
    },
    8803: function (e, t, n) {
      n.d(t, {
        C5: function () {
          return b;
        },
        EO: function () {
          return T;
        },
        GO: function () {
          return v;
        },
        TO: function () {
          return f;
        },
        fE: function () {
          return p;
        },
        jA: function () {
          return P;
        },
        sP: function () {
          return h;
        },
        tJ: function () {
          return g;
        },
        wI: function () {
          return E;
        },
        z2: function () {
          return y;
        },
      });
      var r,
        o,
        l,
        u,
        i,
        a = n(5205),
        c = n(2640),
        s = n(4819);
      let d = [
        "[contentEditable=true]",
        "[tabindex]",
        "a[href]",
        "area[href]",
        "button:not([disabled])",
        "iframe",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
      ]
        .map((e) => "".concat(e, ":not([tabindex='-1'])"))
        .join(",");
      var f =
          (((r = f || {})[(r.First = 1)] = "First"),
          (r[(r.Previous = 2)] = "Previous"),
          (r[(r.Next = 4)] = "Next"),
          (r[(r.Last = 8)] = "Last"),
          (r[(r.WrapAround = 16)] = "WrapAround"),
          (r[(r.NoScroll = 32)] = "NoScroll"),
          r),
        p =
          (((o = p || {})[(o.Error = 0)] = "Error"),
          (o[(o.Overflow = 1)] = "Overflow"),
          (o[(o.Success = 2)] = "Success"),
          (o[(o.Underflow = 3)] = "Underflow"),
          o),
        m =
          (((l = m || {})[(l.Previous = -1)] = "Previous"),
          (l[(l.Next = 1)] = "Next"),
          l);
      function v() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : document.body;
        return null == e
          ? []
          : Array.from(e.querySelectorAll(d)).sort((e, t) =>
              Math.sign(
                (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                  (t.tabIndex || Number.MAX_SAFE_INTEGER)
              )
            );
      }
      var g =
        (((u = g || {})[(u.Strict = 0)] = "Strict"),
        (u[(u.Loose = 1)] = "Loose"),
        u);
      function h(e) {
        var t;
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (
          e !== (null == (t = (0, s.r)(e)) ? void 0 : t.body) &&
          (0, c.E)(n, {
            0: () => e.matches(d),
            1() {
              let t = e;
              for (; null !== t; ) {
                if (t.matches(d)) return !0;
                t = t.parentElement;
              }
              return !1;
            },
          })
        );
      }
      function E(e) {
        let t = (0, s.r)(e);
        (0, a.k)().nextFrame(() => {
          t && !h(t.activeElement, 0) && b(e);
        });
      }
      var w =
        (((i = w || {})[(i.Keyboard = 0)] = "Keyboard"),
        (i[(i.Mouse = 1)] = "Mouse"),
        i);
      function b(e) {
        null == e || e.focus({ preventScroll: !0 });
      }
      function y(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (e) => e;
        return e.slice().sort((e, n) => {
          let r = t(e),
            o = t(n);
          if (null === r || null === o) return 0;
          let l = r.compareDocumentPosition(o);
          return l & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : l & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
        });
      }
      function T(e, t) {
        return P(v(), t, { relativeTo: e });
      }
      function P(e, t) {
        var n, r, o;
        let {
            sorted: l = !0,
            relativeTo: u = null,
            skipElements: i = [],
          } = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {},
          a = Array.isArray(e)
            ? e.length > 0
              ? e[0].ownerDocument
              : document
            : e.ownerDocument,
          c = Array.isArray(e) ? (l ? y(e) : e) : v(e);
        i.length > 0 && c.length > 1 && (c = c.filter((e) => !i.includes(e))),
          (u = null != u ? u : a.activeElement);
        let s = (() => {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          d = (() => {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, c.indexOf(u)) - 1;
            if (4 & t) return Math.max(0, c.indexOf(u)) + 1;
            if (8 & t) return c.length - 1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          f = 32 & t ? { preventScroll: !0 } : {},
          p = 0,
          m = c.length,
          g;
        do {
          if (p >= m || p + m <= 0) return 0;
          let e = d + p;
          if (16 & t) e = (e + m) % m;
          else {
            if (e < 0) return 3;
            if (e >= m) return 1;
          }
          null == (g = c[e]) || g.focus(f), (p += s);
        } while (g !== a.activeElement);
        return (
          6 & t &&
            null !=
              (o =
                null == (r = null == (n = g) ? void 0 : n.matches)
                  ? void 0
                  : r.call(n, "textarea,input")) &&
            o &&
            g.select(),
          2
        );
      }
      "undefined" != typeof document &&
        (document.addEventListener(
          "keydown",
          (e) => {
            e.metaKey ||
              e.altKey ||
              e.ctrlKey ||
              (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ),
        document.addEventListener(
          "click",
          (e) => {
            1 === e.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === e.detail &&
                (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ));
    },
    4819: function (e, t, n) {
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(1879);
      function o(e) {
        return r.O.isServer
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e &&
            e.hasOwnProperty("current") &&
            e.current instanceof Node
          ? e.current.ownerDocument
          : document;
      }
    },
    5256: function (e, t, n) {
      function r() {
        return (
          /iPhone/gi.test(window.navigator.platform) ||
          (/Mac/gi.test(window.navigator.platform) &&
            window.navigator.maxTouchPoints > 0)
        );
      }
      function o() {
        return r() || /Android/gi.test(window.navigator.userAgent);
      }
      n.d(t, {
        gn: function () {
          return r;
        },
        tq: function () {
          return o;
        },
      });
    },
  },
]);
