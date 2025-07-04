"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [129],
  {
    129: function (e, t, n) {
      n.d(t, {
        u: function () {
          return P;
        },
      });
      var r,
        i = n(4090),
        l = n(44),
        a = n(641),
        u = n(2219),
        o = n(9790),
        s = n(5235),
        c = n(2144),
        f = n(6601),
        d = n(5205),
        v = n(2640);
      function h(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        e && n.length > 0 && e.classList.add(...n);
      }
      function m(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        e && n.length > 0 && e.classList.remove(...n);
      }
      var p = n(8358),
        g = n(2466),
        b = n(8318);
      function y() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e.split(/\s+/).filter((e) => e.length > 1);
      }
      let E = (0, i.createContext)(null);
      E.displayName = "TransitionContext";
      var A = (((r = A || {}).Visible = "visible"), (r.Hidden = "hidden"), r);
      let T = (0, i.createContext)(null);
      function C(e) {
        return "children" in e
          ? C(e.children)
          : e.current
              .filter((e) => {
                let { el: t } = e;
                return null !== t.current;
              })
              .filter((e) => {
                let { state: t } = e;
                return "visible" === t;
              }).length > 0;
      }
      function O(e, t) {
        let n = (0, s.E)(e),
          r = (0, i.useRef)([]),
          o = (0, u.t)(),
          c = (0, l.G)(),
          f = (0, a.z)(function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : b.l4.Hidden,
              i = r.current.findIndex((t) => {
                let { el: n } = t;
                return n === e;
              });
            -1 !== i &&
              ((0, v.E)(t, {
                [b.l4.Unmount]() {
                  r.current.splice(i, 1);
                },
                [b.l4.Hidden]() {
                  r.current[i].state = "hidden";
                },
              }),
              c.microTask(() => {
                var e;
                !C(r) && o.current && (null == (e = n.current) || e.call(n));
              }));
          }),
          d = (0, a.z)((e) => {
            let t = r.current.find((t) => {
              let { el: n } = t;
              return n === e;
            });
            return (
              t
                ? "visible" !== t.state && (t.state = "visible")
                : r.current.push({ el: e, state: "visible" }),
              () => f(e, b.l4.Unmount)
            );
          }),
          h = (0, i.useRef)([]),
          m = (0, i.useRef)(Promise.resolve()),
          p = (0, i.useRef)({ enter: [], leave: [], idle: [] }),
          g = (0, a.z)((e, n, r) => {
            h.current.splice(0),
              t &&
                (t.chains.current[n] = t.chains.current[n].filter((t) => {
                  let [n] = t;
                  return n !== e;
                })),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    h.current.push(e);
                  }),
                ]),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    Promise.all(
                      p.current[n].map((e) => {
                        let [t, n] = e;
                        return n;
                      })
                    ).then(() => e());
                  }),
                ]),
              "enter" === n
                ? (m.current = m.current
                    .then(() => (null == t ? void 0 : t.wait.current))
                    .then(() => r(n)))
                : r(n);
          }),
          y = (0, a.z)((e, t, n) => {
            Promise.all(
              p.current[t].splice(0).map((e) => {
                let [t, n] = e;
                return n;
              })
            )
              .then(() => {
                var e;
                null == (e = h.current.shift()) || e();
              })
              .then(() => n(t));
          });
        return (0, i.useMemo)(
          () => ({
            children: r,
            register: d,
            unregister: f,
            onStart: g,
            onStop: y,
            wait: m,
            chains: p,
          }),
          [d, f, r, g, y, p, m]
        );
      }
      function F() {}
      T.displayName = "NestingContext";
      let S = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
      function N(e) {
        var t;
        let n = {};
        for (let r of S) n[r] = null != (t = e[r]) ? t : F;
        return n;
      }
      let w = b.AN.RenderStrategy,
        k = (0, b.yV)(function (e, t) {
          let { show: n, appear: r = !1, unmount: l = !0, ...u } = e,
            s = (0, i.useRef)(null),
            d = (0, f.T)(s, t);
          (0, c.H)();
          let v = (0, p.oJ)();
          if (
            (void 0 === n && null !== v && (n = (v & p.ZM.Open) === p.ZM.Open),
            ![!0, !1].includes(n))
          )
            throw Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop."
            );
          let [h, m] = (0, i.useState)(n ? "visible" : "hidden"),
            g = O(() => {
              m("hidden");
            }),
            [y, A] = (0, i.useState)(!0),
            F = (0, i.useRef)([n]);
          (0, o.e)(() => {
            !1 !== y &&
              F.current[F.current.length - 1] !== n &&
              (F.current.push(n), A(!1));
          }, [F, n]);
          let S = (0, i.useMemo)(
            () => ({ show: n, appear: r, initial: y }),
            [n, r, y]
          );
          (0, i.useEffect)(() => {
            if (n) m("visible");
            else if (C(g)) {
              let e = s.current;
              if (!e) return;
              let t = e.getBoundingClientRect();
              0 === t.x &&
                0 === t.y &&
                0 === t.width &&
                0 === t.height &&
                m("hidden");
            } else m("hidden");
          }, [n, g]);
          let N = { unmount: l },
            k = (0, a.z)(() => {
              var t;
              y && A(!1), null == (t = e.beforeEnter) || t.call(e);
            }),
            R = (0, a.z)(() => {
              var t;
              y && A(!1), null == (t = e.beforeLeave) || t.call(e);
            });
          return i.createElement(
            T.Provider,
            { value: g },
            i.createElement(
              E.Provider,
              { value: S },
              (0, b.sY)({
                ourProps: {
                  ...N,
                  as: i.Fragment,
                  children: i.createElement(j, {
                    ref: d,
                    ...N,
                    ...u,
                    beforeEnter: k,
                    beforeLeave: R,
                  }),
                },
                theirProps: {},
                defaultTag: i.Fragment,
                features: w,
                visible: "visible" === h,
                name: "Transition",
              })
            )
          );
        }),
        j = (0, b.yV)(function (e, t) {
          var n, r, A;
          let F;
          let {
              beforeEnter: S,
              afterEnter: k,
              beforeLeave: j,
              afterLeave: R,
              enter: P,
              enterFrom: L,
              enterTo: x,
              entered: M,
              leave: H,
              leaveFrom: z,
              leaveTo: Z,
              ...V
            } = e,
            Y = (0, i.useRef)(null),
            q = (0, f.T)(Y, t),
            I = null == (n = V.unmount) || n ? b.l4.Unmount : b.l4.Hidden,
            {
              show: U,
              appear: D,
              initial: _,
            } = (function () {
              let e = (0, i.useContext)(E);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            [B, G] = (0, i.useState)(U ? "visible" : "hidden"),
            J = (function () {
              let e = (0, i.useContext)(T);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            { register: W, unregister: K } = J;
          (0, i.useEffect)(() => W(Y), [W, Y]),
            (0, i.useEffect)(() => {
              if (I === b.l4.Hidden && Y.current) {
                if (U && "visible" !== B) {
                  G("visible");
                  return;
                }
                return (0, v.E)(B, { hidden: () => K(Y), visible: () => W(Y) });
              }
            }, [B, Y, W, K, U, I]);
          let Q = (0, s.E)({
              base: y(V.className),
              enter: y(P),
              enterFrom: y(L),
              enterTo: y(x),
              entered: y(M),
              leave: y(H),
              leaveFrom: y(z),
              leaveTo: y(Z),
            }),
            X =
              ((A = {
                beforeEnter: S,
                afterEnter: k,
                beforeLeave: j,
                afterLeave: R,
              }),
              (F = (0, i.useRef)(N(A))),
              (0, i.useEffect)(() => {
                F.current = N(A);
              }, [A]),
              F),
            $ = (0, c.H)();
          (0, i.useEffect)(() => {
            if ($ && "visible" === B && null === Y.current)
              throw Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?"
              );
          }, [Y, B, $]);
          let ee = D && U && _,
            et = $ && (!_ || D) ? (U ? "enter" : "leave") : "idle",
            en = (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                [t, n] = (0, i.useState)(e),
                r = (0, u.t)(),
                l = (0, i.useCallback)(
                  (e) => {
                    r.current && n((t) => t | e);
                  },
                  [t, r]
                ),
                a = (0, i.useCallback)((e) => !!(t & e), [t]);
              return {
                flags: t,
                addFlag: l,
                hasFlag: a,
                removeFlag: (0, i.useCallback)(
                  (e) => {
                    r.current && n((t) => t & ~e);
                  },
                  [n, r]
                ),
                toggleFlag: (0, i.useCallback)(
                  (e) => {
                    r.current && n((t) => t ^ e);
                  },
                  [n]
                ),
              };
            })(0),
            er = (0, a.z)((e) =>
              (0, v.E)(e, {
                enter: () => {
                  en.addFlag(p.ZM.Opening), X.current.beforeEnter();
                },
                leave: () => {
                  en.addFlag(p.ZM.Closing), X.current.beforeLeave();
                },
                idle: () => {},
              })
            ),
            ei = (0, a.z)((e) =>
              (0, v.E)(e, {
                enter: () => {
                  en.removeFlag(p.ZM.Opening), X.current.afterEnter();
                },
                leave: () => {
                  en.removeFlag(p.ZM.Closing), X.current.afterLeave();
                },
                idle: () => {},
              })
            ),
            el = O(() => {
              G("hidden"), K(Y);
            }, J),
            ea = (0, i.useRef)(!1);
          !(function (e) {
            let {
                immediate: t,
                container: n,
                direction: r,
                classes: i,
                onStart: a,
                onStop: c,
              } = e,
              f = (0, u.t)(),
              p = (0, l.G)(),
              g = (0, s.E)(r);
            (0, o.e)(() => {
              t && (g.current = "enter");
            }, [t]),
              (0, o.e)(() => {
                let e = (0, d.k)();
                p.add(e.dispose);
                let t = n.current;
                if (t && "idle" !== g.current && f.current) {
                  var r, l, u;
                  let n, o, s, f, p, b, y;
                  return (
                    e.dispose(),
                    a.current(g.current),
                    e.add(
                      ((r = i.current),
                      (l = "enter" === g.current),
                      (u = () => {
                        e.dispose(), c.current(g.current);
                      }),
                      (o = l ? "enter" : "leave"),
                      (s = (0, d.k)()),
                      (f =
                        void 0 !== u
                          ? ((n = { called: !1 }),
                            function () {
                              for (
                                var e = arguments.length, t = Array(e), r = 0;
                                r < e;
                                r++
                              )
                                t[r] = arguments[r];
                              if (!n.called) return (n.called = !0), u(...t);
                            })
                          : () => {}),
                      "enter" === o &&
                        (t.removeAttribute("hidden"), (t.style.display = "")),
                      (p = (0, v.E)(o, {
                        enter: () => r.enter,
                        leave: () => r.leave,
                      })),
                      (b = (0, v.E)(o, {
                        enter: () => r.enterTo,
                        leave: () => r.leaveTo,
                      })),
                      (y = (0, v.E)(o, {
                        enter: () => r.enterFrom,
                        leave: () => r.leaveFrom,
                      })),
                      m(
                        t,
                        ...r.base,
                        ...r.enter,
                        ...r.enterTo,
                        ...r.enterFrom,
                        ...r.leave,
                        ...r.leaveFrom,
                        ...r.leaveTo,
                        ...r.entered
                      ),
                      h(t, ...r.base, ...p, ...y),
                      s.nextFrame(() => {
                        m(t, ...r.base, ...p, ...y),
                          h(t, ...r.base, ...p, ...b),
                          (function (e, t) {
                            let n = (0, d.k)();
                            if (!e) return n.dispose;
                            let { transitionDuration: r, transitionDelay: i } =
                                getComputedStyle(e),
                              [l, a] = [r, i].map((e) => {
                                let [t = 0] = e
                                  .split(",")
                                  .filter(Boolean)
                                  .map((e) =>
                                    e.includes("ms")
                                      ? parseFloat(e)
                                      : 1e3 * parseFloat(e)
                                  )
                                  .sort((e, t) => t - e);
                                return t;
                              }),
                              u = l + a;
                            if (0 !== u) {
                              n.group((n) => {
                                n.setTimeout(() => {
                                  t(), n.dispose();
                                }, u),
                                  n.addEventListener(
                                    e,
                                    "transitionrun",
                                    (e) => {
                                      e.target === e.currentTarget &&
                                        n.dispose();
                                    }
                                  );
                              });
                              let r = n.addEventListener(
                                e,
                                "transitionend",
                                (e) => {
                                  e.target === e.currentTarget && (t(), r());
                                }
                              );
                            } else t();
                            n.add(() => t()), n.dispose;
                          })(
                            t,
                            () => (
                              m(t, ...r.base, ...p),
                              h(t, ...r.base, ...r.entered),
                              f()
                            )
                          );
                      }),
                      s.dispose)
                    ),
                    e.dispose
                  );
                }
              }, [r]);
          })({
            immediate: ee,
            container: Y,
            classes: Q,
            direction: et,
            onStart: (0, s.E)((e) => {
              (ea.current = !0), el.onStart(Y, e, er);
            }),
            onStop: (0, s.E)((e) => {
              (ea.current = !1),
                el.onStop(Y, e, ei),
                "leave" !== e || C(el) || (G("hidden"), K(Y));
            }),
          });
          let eu = V;
          return (
            ee
              ? (eu = {
                  ...eu,
                  className: (0, g.A)(
                    V.className,
                    ...Q.current.enter,
                    ...Q.current.enterFrom
                  ),
                })
              : ea.current &&
                ((eu.className = (0, g.A)(
                  V.className,
                  null == (r = Y.current) ? void 0 : r.className
                )),
                "" === eu.className && delete eu.className),
            i.createElement(
              T.Provider,
              { value: el },
              i.createElement(
                p.up,
                {
                  value:
                    (0, v.E)(B, { visible: p.ZM.Open, hidden: p.ZM.Closed }) |
                    en.flags,
                },
                (0, b.sY)({
                  ourProps: { ref: q },
                  theirProps: eu,
                  defaultTag: "div",
                  features: w,
                  visible: "visible" === B,
                  name: "Transition.Child",
                })
              )
            )
          );
        }),
        R = (0, b.yV)(function (e, t) {
          let n = null !== (0, i.useContext)(E),
            r = null !== (0, p.oJ)();
          return i.createElement(
            i.Fragment,
            null,
            !n && r
              ? i.createElement(k, { ref: t, ...e })
              : i.createElement(j, { ref: t, ...e })
          );
        }),
        P = Object.assign(k, { Child: R, Root: k });
    },
    44: function (e, t, n) {
      n.d(t, {
        G: function () {
          return l;
        },
      });
      var r = n(4090),
        i = n(5205);
      function l() {
        let [e] = (0, r.useState)(i.k);
        return (0, r.useEffect)(() => () => e.dispose(), [e]), e;
      }
    },
    641: function (e, t, n) {
      n.d(t, {
        z: function () {
          return l;
        },
      });
      var r = n(4090),
        i = n(5235);
      let l = function (e) {
        let t = (0, i.E)(e);
        return r.useCallback(
          function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return t.current(...n);
          },
          [t]
        );
      };
    },
    2219: function (e, t, n) {
      n.d(t, {
        t: function () {
          return l;
        },
      });
      var r = n(4090),
        i = n(9790);
      function l() {
        let e = (0, r.useRef)(!1);
        return (
          (0, i.e)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
    },
    9790: function (e, t, n) {
      n.d(t, {
        e: function () {
          return l;
        },
      });
      var r = n(4090),
        i = n(1879);
      let l = (e, t) => {
        i.O.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t);
      };
    },
    5235: function (e, t, n) {
      n.d(t, {
        E: function () {
          return l;
        },
      });
      var r = n(4090),
        i = n(9790);
      function l(e) {
        let t = (0, r.useRef)(e);
        return (
          (0, i.e)(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
    },
    2144: function (e, t, n) {
      n.d(t, {
        H: function () {
          return a;
        },
      });
      var r,
        i = n(4090),
        l = n(1879);
      function a() {
        let e;
        let t =
            ((e = "undefined" == typeof document),
            (0, (r || (r = n.t(i, 2))).useSyncExternalStore)(
              () => () => {},
              () => !1,
              () => !e
            )),
          [a, u] = i.useState(l.O.isHandoffComplete);
        return (
          a && !1 === l.O.isHandoffComplete && u(!1),
          i.useEffect(() => {
            !0 !== a && u(!0);
          }, [a]),
          i.useEffect(() => l.O.handoff(), []),
          !t && a
        );
      }
    },
    6601: function (e, t, n) {
      n.d(t, {
        T: function () {
          return u;
        },
        h: function () {
          return a;
        },
      });
      var r = n(4090),
        i = n(641);
      let l = Symbol();
      function a(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return Object.assign(e, { [l]: t });
      }
      function u() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        let a = (0, r.useRef)(t);
        (0, r.useEffect)(() => {
          a.current = t;
        }, [t]);
        let u = (0, i.z)((e) => {
          for (let t of a.current)
            null != t && ("function" == typeof t ? t(e) : (t.current = e));
        });
        return t.every((e) => null == e || (null == e ? void 0 : e[l]))
          ? void 0
          : u;
      }
    },
    8358: function (e, t, n) {
      n.d(t, {
        ZM: function () {
          return a;
        },
        oJ: function () {
          return u;
        },
        up: function () {
          return o;
        },
      });
      var r,
        i = n(4090);
      let l = (0, i.createContext)(null);
      l.displayName = "OpenClosedContext";
      var a =
        (((r = a || {})[(r.Open = 1)] = "Open"),
        (r[(r.Closed = 2)] = "Closed"),
        (r[(r.Closing = 4)] = "Closing"),
        (r[(r.Opening = 8)] = "Opening"),
        r);
      function u() {
        return (0, i.useContext)(l);
      }
      function o(e) {
        let { value: t, children: n } = e;
        return i.createElement(l.Provider, { value: t }, n);
      }
    },
    2466: function (e, t, n) {
      n.d(t, {
        A: function () {
          return r;
        },
      });
      function r() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return Array.from(
          new Set(t.flatMap((e) => ("string" == typeof e ? e.split(" ") : [])))
        )
          .filter(Boolean)
          .join(" ");
      }
    },
    5205: function (e, t, n) {
      n.d(t, {
        k: function () {
          return function e() {
            let t = [],
              n = {
                addEventListener: (e, t, r, i) => (
                  e.addEventListener(t, r, i),
                  n.add(() => e.removeEventListener(t, r, i))
                ),
                requestAnimationFrame() {
                  for (
                    var e = arguments.length, t = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  let i = requestAnimationFrame(...t);
                  return n.add(() => cancelAnimationFrame(i));
                },
                nextFrame() {
                  for (
                    var e = arguments.length, t = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return n.requestAnimationFrame(() =>
                    n.requestAnimationFrame(...t)
                  );
                },
                setTimeout() {
                  for (
                    var e = arguments.length, t = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  let i = setTimeout(...t);
                  return n.add(() => clearTimeout(i));
                },
                microTask() {
                  for (
                    var e = arguments.length, t = Array(e), i = 0;
                    i < e;
                    i++
                  )
                    t[i] = arguments[i];
                  let l = { current: !0 };
                  return (
                    (0, r.Y)(() => {
                      l.current && t[0]();
                    }),
                    n.add(() => {
                      l.current = !1;
                    })
                  );
                },
                style(e, t, n) {
                  let r = e.style.getPropertyValue(t);
                  return (
                    Object.assign(e.style, { [t]: n }),
                    this.add(() => {
                      Object.assign(e.style, { [t]: r });
                    })
                  );
                },
                group(t) {
                  let n = e();
                  return t(n), this.add(() => n.dispose());
                },
                add: (e) => (
                  t.push(e),
                  () => {
                    let n = t.indexOf(e);
                    if (n >= 0) for (let e of t.splice(n, 1)) e();
                  }
                ),
                dispose() {
                  for (let e of t.splice(0)) e();
                },
              };
            return n;
          };
        },
      });
      var r = n(1210);
    },
    1879: function (e, t, n) {
      n.d(t, {
        O: function () {
          return u;
        },
      });
      var r = Object.defineProperty,
        i = (e, t, n) =>
          t in e
            ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        l = (e, t, n) => (i(e, "symbol" != typeof t ? t + "" : t, n), n);
      class a {
        set(e) {
          this.current !== e &&
            ((this.handoffState = "pending"),
            (this.currentId = 0),
            (this.current = e));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "undefined" == typeof document ? "server" : "client";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
        constructor() {
          l(this, "current", this.detect()),
            l(this, "handoffState", "pending"),
            l(this, "currentId", 0);
        }
      }
      let u = new a();
    },
    2640: function (e, t, n) {
      n.d(t, {
        E: function () {
          return r;
        },
      });
      function r(e, t) {
        for (
          var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), l = 2;
          l < n;
          l++
        )
          i[l - 2] = arguments[l];
        if (e in t) {
          let n = t[e];
          return "function" == typeof n ? n(...i) : n;
        }
        let a = Error(
          'Tried to handle "'
            .concat(
              e,
              '" but there is no handler defined. Only defined handlers are: '
            )
            .concat(
              Object.keys(t)
                .map((e) => '"'.concat(e, '"'))
                .join(", "),
              "."
            )
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(a, r), a);
      }
    },
    1210: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return r;
        },
      });
      function r(e) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(e)
          : Promise.resolve()
              .then(e)
              .catch((e) =>
                setTimeout(() => {
                  throw e;
                })
              );
      }
    },
    8318: function (e, t, n) {
      n.d(t, {
        AN: function () {
          return o;
        },
        Y2: function () {
          return d;
        },
        l4: function () {
          return s;
        },
        oA: function () {
          return p;
        },
        sY: function () {
          return c;
        },
        yV: function () {
          return m;
        },
      });
      var r,
        i,
        l = n(4090),
        a = n(2466),
        u = n(2640),
        o =
          (((r = o || {})[(r.None = 0)] = "None"),
          (r[(r.RenderStrategy = 1)] = "RenderStrategy"),
          (r[(r.Static = 2)] = "Static"),
          r),
        s =
          (((i = s || {})[(i.Unmount = 0)] = "Unmount"),
          (i[(i.Hidden = 1)] = "Hidden"),
          i);
      function c(e) {
        let {
          ourProps: t,
          theirProps: n,
          slot: r,
          defaultTag: i,
          features: l,
          visible: a = !0,
          name: o,
          mergeRefs: s,
        } = e;
        s = null != s ? s : v;
        let c = h(n, t);
        if (a) return f(c, r, i, o, s);
        let d = null != l ? l : 0;
        if (2 & d) {
          let { static: e = !1, ...t } = c;
          if (e) return f(t, r, i, o, s);
        }
        if (1 & d) {
          let { unmount: e = !0, ...t } = c;
          return (0, u.E)(e ? 0 : 1, {
            0: () => null,
            1: () =>
              f({ ...t, hidden: !0, style: { display: "none" } }, r, i, o, s),
          });
        }
        return f(c, r, i, o, s);
      }
      function f(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = arguments.length > 3 ? arguments[3] : void 0,
          i = arguments.length > 4 ? arguments[4] : void 0,
          {
            as: u = n,
            children: o,
            refName: s = "ref",
            ...c
          } = g(e, ["unmount", "static"]),
          f = void 0 !== e.ref ? { [s]: e.ref } : {},
          d = "function" == typeof o ? o(t) : o;
        "className" in c &&
          c.className &&
          "function" == typeof c.className &&
          (c.className = c.className(t));
        let v = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, i] of Object.entries(t))
            "boolean" == typeof i && (e = !0), !0 === i && n.push(r);
          e && (v["data-headlessui-state"] = n.join(" "));
        }
        if (u === l.Fragment && Object.keys(p(c)).length > 0) {
          if (!(0, l.isValidElement)(d) || (Array.isArray(d) && d.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                "The current component <".concat(
                  r,
                  ' /> is rendering a "Fragment".'
                ),
                "However we need to passthrough the following props:",
                Object.keys(c)
                  .map((e) => "  - ".concat(e))
                  .join("\n"),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ]
                  .map((e) => "  - ".concat(e))
                  .join("\n"),
              ].join("\n")
            );
          let e = d.props,
            t =
              "function" == typeof (null == e ? void 0 : e.className)
                ? function () {
                    for (
                      var t = arguments.length, n = Array(t), r = 0;
                      r < t;
                      r++
                    )
                      n[r] = arguments[r];
                    return (0, a.A)(
                      null == e ? void 0 : e.className(...n),
                      c.className
                    );
                  }
                : (0, a.A)(null == e ? void 0 : e.className, c.className);
          return (0, l.cloneElement)(
            d,
            Object.assign(
              {},
              h(d.props, p(g(c, ["ref"]))),
              v,
              f,
              { ref: i(d.ref, f.ref) },
              t ? { className: t } : {}
            )
          );
        }
        return (0, l.createElement)(
          u,
          Object.assign(
            {},
            g(c, ["ref"]),
            u !== l.Fragment && f,
            u !== l.Fragment && v
          ),
          d
        );
      }
      function d() {
        let e = (0, l.useRef)([]),
          t = (0, l.useCallback)((t) => {
            for (let n of e.current)
              null != n && ("function" == typeof n ? n(t) : (n.current = t));
          }, []);
        return function () {
          for (var n = arguments.length, r = Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
          if (!r.every((e) => null == e)) return (e.current = r), t;
        };
      }
      function v() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.every((e) => null == e)
          ? void 0
          : (e) => {
              for (let n of t)
                null != n && ("function" == typeof n ? n(e) : (n.current = e));
            };
      }
      function h() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (0 === t.length) return {};
        if (1 === t.length) return t[0];
        let r = {},
          i = {};
        for (let e of t)
          for (let t in e)
            t.startsWith("on") && "function" == typeof e[t]
              ? (null != i[t] || (i[t] = []), i[t].push(e[t]))
              : (r[t] = e[t]);
        if (r.disabled || r["aria-disabled"])
          return Object.assign(
            r,
            Object.fromEntries(Object.keys(i).map((e) => [e, void 0]))
          );
        for (let e in i)
          Object.assign(r, {
            [e](t) {
              for (
                var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), l = 1;
                l < n;
                l++
              )
                r[l - 1] = arguments[l];
              for (let n of i[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                n(t, ...r);
              }
            },
          });
        return r;
      }
      function m(e) {
        var t;
        return Object.assign((0, l.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function p(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function g(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
    },
  },
]);
