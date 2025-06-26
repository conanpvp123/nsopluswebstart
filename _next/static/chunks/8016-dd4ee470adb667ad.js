"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8016],
  {
    699: function (e, t, r) {
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(4090),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        a = n.useState,
        u = n.useEffect,
        o = n.useLayoutEffect,
        l = n.useDebugValue;
      function s(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !i(e, r);
        } catch (e) {
          return !0;
        }
      }
      var c =
        void 0 === window.document || void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = a({ inst: { value: r, getSnapshot: t } }),
                i = n[0].inst,
                c = n[1];
              return (
                o(
                  function () {
                    (i.value = r), (i.getSnapshot = t), s(i) && c({ inst: i });
                  },
                  [e, r, t]
                ),
                u(
                  function () {
                    return (
                      s(i) && c({ inst: i }),
                      e(function () {
                        s(i) && c({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                l(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c;
    },
    2362: function (e, t, r) {
      e.exports = r(699);
    },
    8016: function (e, t, r) {
      r.d(t, {
        ZP: function () {
          return Y;
        },
        JG: function () {
          return j;
        },
      });
      var n,
        i = r(4090),
        a = r(2362);
      let u = () => {},
        o = u(),
        l = Object,
        s = (e) => e === o,
        c = (e) => "function" == typeof e,
        d = (e, t) => ({ ...e, ...t }),
        f = (e) => c(e.then),
        g = new WeakMap(),
        E = 0,
        v = (e) => {
          let t, r;
          let n = typeof e,
            i = e && e.constructor,
            a = i == Date;
          if (l(e) !== e || a || i == RegExp)
            t = a
              ? e.toJSON()
              : "symbol" == n
              ? e.toString()
              : "string" == n
              ? JSON.stringify(e)
              : "" + e;
          else {
            if ((t = g.get(e))) return t;
            if (((t = ++E + "~"), g.set(e, t), i == Array)) {
              for (r = 0, t = "@"; r < e.length; r++) t += v(e[r]) + ",";
              g.set(e, t);
            }
            if (i == l) {
              t = "#";
              let n = l.keys(e).sort();
              for (; !s((r = n.pop())); )
                s(e[r]) || (t += r + ":" + v(e[r]) + ",");
              g.set(e, t);
            }
          }
          return t;
        },
        h = new WeakMap(),
        w = {},
        y = {},
        p = "undefined",
        _ = typeof document != p,
        R = () => typeof window.requestAnimationFrame != p,
        m = (e, t) => {
          let r = h.get(e);
          return [
            () => (!s(t) && e.get(t)) || w,
            (n) => {
              if (!s(t)) {
                let i = e.get(t);
                t in y || (y[t] = i), r[5](t, d(i, n), i || w);
              }
            },
            r[6],
            () => (!s(t) && t in y ? y[t] : (!s(t) && e.get(t)) || w),
          ];
        },
        T = !0,
        [b, O] = window.addEventListener
          ? [
              window.addEventListener.bind(window),
              window.removeEventListener.bind(window),
            ]
          : [u, u],
        S = {
          initFocus: (e) => (
            _ && document.addEventListener("visibilitychange", e),
            b("focus", e),
            () => {
              _ && document.removeEventListener("visibilitychange", e),
                O("focus", e);
            }
          ),
          initReconnect: (e) => {
            let t = () => {
                (T = !0), e();
              },
              r = () => {
                T = !1;
              };
            return (
              b("online", t),
              b("offline", r),
              () => {
                O("online", t), O("offline", r);
              }
            );
          },
        },
        V = !i.useId,
        L = "Deno" in window,
        k = (e) => (R() ? window.requestAnimationFrame(e) : setTimeout(e, 1)),
        C = L ? i.useEffect : i.useLayoutEffect,
        A = "undefined" != typeof navigator && navigator.connection,
        N =
          !L &&
          A &&
          (["slow-2g", "2g"].includes(A.effectiveType) || A.saveData),
        D = (e) => {
          if (c(e))
            try {
              e = e();
            } catch (t) {
              e = "";
            }
          let t = e;
          return [
            (e =
              "string" == typeof e
                ? e
                : (Array.isArray(e) ? e.length : e)
                ? v(e)
                : ""),
            t,
          ];
        },
        x = 0,
        I = () => ++x;
      var F = {
        ERROR_REVALIDATE_EVENT: 3,
        FOCUS_EVENT: 0,
        MUTATE_EVENT: 2,
        RECONNECT_EVENT: 1,
      };
      async function P() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        let [n, i, a, u] = t,
          l = d(
            { populateCache: !0, throwOnError: !0 },
            "boolean" == typeof u ? { revalidate: u } : u || {}
          ),
          g = l.populateCache,
          E = l.rollbackOnError,
          v = l.optimisticData,
          w = (e) => ("function" == typeof E ? E(e) : !1 !== E),
          y = l.throwOnError;
        if (c(i)) {
          let e = [];
          for (let t of n.keys())
            !/^\$(inf|sub)\$/.test(t) && i(n.get(t)._k) && e.push(t);
          return Promise.all(e.map(p));
        }
        return p(i);
        async function p(e) {
          let r;
          let [i] = D(e);
          if (!i) return;
          let [u, d] = m(n, i),
            [E, p, _, R] = h.get(n),
            T = () => {
              let t = E[i];
              return (c(l.revalidate)
                ? l.revalidate(u().data, e)
                : !1 !== l.revalidate) && (delete _[i], delete R[i], t && t[0])
                ? t[0](2).then(() => u().data)
                : u().data;
            };
          if (t.length < 3) return T();
          let b = a,
            O = I();
          p[i] = [O, 0];
          let S = !s(v),
            V = u(),
            L = V.data,
            k = V._c,
            C = s(k) ? L : k;
          if ((S && d({ data: (v = c(v) ? v(C, L) : v), _c: C }), c(b)))
            try {
              b = b(C);
            } catch (e) {
              r = e;
            }
          if (b && f(b)) {
            if (
              ((b = await b.catch((e) => {
                r = e;
              })),
              O !== p[i][0])
            ) {
              if (r) throw r;
              return b;
            }
            r && S && w(r) && ((g = !0), d({ data: C, _c: o }));
          }
          if (
            (g &&
              !r &&
              (c(g)
                ? d({ data: g(b, C), error: o, _c: o })
                : d({ data: b, error: o, _c: o })),
            (p[i][1] = I()),
            Promise.resolve(T()).then(() => {
              d({ _c: o });
            }),
            r)
          ) {
            if (y) throw r;
            return;
          }
          return b;
        }
      }
      let M = (e, t) => {
          for (let r in e) e[r][0] && e[r][0](t);
        },
        U = (e, t) => {
          if (!h.has(e)) {
            let r = d(S, t),
              n = {},
              i = P.bind(o, e),
              a = u,
              l = {},
              s = (e, t) => {
                let r = l[e] || [];
                return (l[e] = r), r.push(t), () => r.splice(r.indexOf(t), 1);
              },
              c = (t, r, n) => {
                e.set(t, r);
                let i = l[t];
                if (i) for (let e of i) e(r, n);
              },
              f = () => {
                if (!h.has(e) && (h.set(e, [n, {}, {}, {}, i, c, s]), !L)) {
                  let t = r.initFocus(setTimeout.bind(o, M.bind(o, n, 0))),
                    i = r.initReconnect(setTimeout.bind(o, M.bind(o, n, 1)));
                  a = () => {
                    t && t(), i && i(), h.delete(e);
                  };
                }
              };
            return f(), [e, i, f, a];
          }
          return [e, h.get(e)[4]];
        },
        [W, j] = U(new Map()),
        $ = d(
          {
            onLoadingSlow: u,
            onSuccess: u,
            onError: u,
            onErrorRetry: (e, t, r, n, i) => {
              let a = r.errorRetryCount,
                u = i.retryCount,
                o =
                  ~~((Math.random() + 0.5) * (1 << (u < 8 ? u : 8))) *
                  r.errorRetryInterval;
              (s(a) || !(u > a)) && setTimeout(n, o, i);
            },
            onDiscarded: u,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: N ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: N ? 5e3 : 3e3,
            compare: (e, t) => v(e) == v(t),
            isPaused: () => !1,
            cache: W,
            mutate: j,
            fallback: {},
          },
          {
            isOnline: () => T,
            isVisible: () => {
              let e = _ && document.visibilityState;
              return s(e) || "hidden" !== e;
            },
          }
        ),
        q = (e, t) => {
          let r = d(e, t);
          if (t) {
            let { use: n, fallback: i } = e,
              { use: a, fallback: u } = t;
            n && a && (r.use = n.concat(a)), i && u && (r.fallback = d(i, u));
          }
          return r;
        },
        J = (0, i.createContext)({}),
        G = window.__SWR_DEVTOOLS_USE__,
        Z = G ? window.__SWR_DEVTOOLS_USE__ : [],
        z = (e) =>
          c(e[1])
            ? [e[0], e[1], e[2] || {}]
            : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
        B = () => d($, (0, i.useContext)(J)),
        H = Z.concat((e) => (t, r, n) => {
          let i =
            r &&
            function () {
              for (var e = arguments.length, n = Array(e), i = 0; i < e; i++)
                n[i] = arguments[i];
              let [a] = D(t),
                [, , , u] = h.get(W);
              if (a.startsWith("$inf$")) return r(...n);
              let o = u[a];
              return s(o) ? r(...n) : (delete u[a], o);
            };
          return e(t, i, n);
        }),
        K = (e, t, r) => {
          let n = t[e] || (t[e] = []);
          return (
            n.push(r),
            () => {
              let e = n.indexOf(r);
              e >= 0 && ((n[e] = n[n.length - 1]), n.pop());
            }
          );
        };
      G && (window.__SWR_DEVTOOLS_REACT__ = i);
      let Q =
          i.use ||
          ((e) => {
            if ("pending" === e.status) throw e;
            if ("fulfilled" === e.status) return e.value;
            if ("rejected" === e.status) throw e.reason;
            throw (
              ((e.status = "pending"),
              e.then(
                (t) => {
                  (e.status = "fulfilled"), (e.value = t);
                },
                (t) => {
                  (e.status = "rejected"), (e.reason = t);
                }
              ),
              e)
            );
          }),
        X = { dedupe: !0 };
      l.defineProperty(
        (e) => {
          let { value: t } = e,
            r = (0, i.useContext)(J),
            n = c(t),
            a = (0, i.useMemo)(() => (n ? t(r) : t), [n, r, t]),
            u = (0, i.useMemo)(() => (n ? a : q(r, a)), [n, r, a]),
            l = a && a.provider,
            s = (0, i.useRef)(o);
          l && !s.current && (s.current = U(l(u.cache || W), a));
          let f = s.current;
          return (
            f && ((u.cache = f[0]), (u.mutate = f[1])),
            C(() => {
              if (f) return f[2] && f[2](), f[3];
            }, []),
            (0, i.createElement)(J.Provider, d(e, { value: u }))
          );
        },
        "defaultValue",
        { value: $ }
      );
      let Y =
        ((n = (e, t, r) => {
          let {
              cache: n,
              compare: u,
              suspense: l,
              fallbackData: f,
              revalidateOnMount: g,
              revalidateIfStale: E,
              refreshInterval: v,
              refreshWhenHidden: w,
              refreshWhenOffline: y,
              keepPreviousData: p,
            } = r,
            [_, R, T, b] = h.get(n),
            [O, S] = D(e),
            A = (0, i.useRef)(!1),
            N = (0, i.useRef)(!1),
            x = (0, i.useRef)(O),
            M = (0, i.useRef)(t),
            U = (0, i.useRef)(r),
            W = () => U.current,
            j = () => W().isVisible() && W().isOnline(),
            [$, q, J, G] = m(n, O),
            Z = (0, i.useRef)({}).current,
            z = s(f) ? r.fallback[O] : f,
            B = (e, t) => {
              for (let r in Z)
                if ("data" === r) {
                  if (!u(e[r], t[r]) && (!s(e[r]) || !u(eu, t[r]))) return !1;
                } else if (t[r] !== e[r]) return !1;
              return !0;
            },
            H = (0, i.useMemo)(() => {
              let e =
                  !!O &&
                  !!t &&
                  (s(g) ? !W().isPaused() && !l && (!!s(E) || E) : g),
                r = (t) => {
                  let r = d(t);
                  return (delete r._k, e)
                    ? { isValidating: !0, isLoading: !0, ...r }
                    : r;
                },
                n = $(),
                i = G(),
                a = r(n),
                u = n === i ? a : r(i),
                o = a;
              return [
                () => {
                  let e = r($());
                  return B(e, o)
                    ? ((o.data = e.data),
                      (o.isLoading = e.isLoading),
                      (o.isValidating = e.isValidating),
                      (o.error = e.error),
                      o)
                    : ((o = e), e);
                },
                () => u,
              ];
            }, [n, O]),
            Y = (0, a.useSyncExternalStore)(
              (0, i.useCallback)(
                (e) =>
                  J(O, (t, r) => {
                    B(r, t) || e();
                  }),
                [n, O]
              ),
              H[0],
              H[1]
            ),
            ee = !A.current,
            et = _[O] && _[O].length > 0,
            er = Y.data,
            en = s(er) ? z : er,
            ei = Y.error,
            ea = (0, i.useRef)(en),
            eu = p ? (s(er) ? ea.current : er) : en,
            eo =
              (!et || !!s(ei)) &&
              (ee && !s(g)
                ? g
                : !W().isPaused() && (l ? !s(en) && E : s(en) || E)),
            el = !!(O && t && ee && eo),
            es = s(Y.isValidating) ? el : Y.isValidating,
            ec = s(Y.isLoading) ? el : Y.isLoading,
            ed = (0, i.useCallback)(
              async (e) => {
                let t, n;
                let i = M.current;
                if (!O || !i || N.current || W().isPaused()) return !1;
                let a = !0,
                  l = e || {},
                  d = !T[O] || !l.dedupe,
                  f = () =>
                    V
                      ? !N.current && O === x.current && A.current
                      : O === x.current,
                  g = { isValidating: !1, isLoading: !1 },
                  E = () => {
                    q(g);
                  },
                  v = () => {
                    let e = T[O];
                    e && e[1] === n && delete T[O];
                  },
                  h = { isValidating: !0 };
                s($().data) && (h.isLoading = !0);
                try {
                  if (
                    (d &&
                      (q(h),
                      r.loadingTimeout &&
                        s($().data) &&
                        setTimeout(() => {
                          a && f() && W().onLoadingSlow(O, r);
                        }, r.loadingTimeout),
                      (T[O] = [i(S), I()])),
                    ([t, n] = T[O]),
                    (t = await t),
                    d && setTimeout(v, r.dedupingInterval),
                    !T[O] || T[O][1] !== n)
                  )
                    return d && f() && W().onDiscarded(O), !1;
                  g.error = o;
                  let e = R[O];
                  if (!s(e) && (n <= e[0] || n <= e[1] || 0 === e[1]))
                    return E(), d && f() && W().onDiscarded(O), !1;
                  let l = $().data;
                  (g.data = u(l, t) ? l : t),
                    d && f() && W().onSuccess(t, O, r);
                } catch (r) {
                  v();
                  let e = W(),
                    { shouldRetryOnError: t } = e;
                  !e.isPaused() &&
                    ((g.error = r),
                    d &&
                      f() &&
                      (e.onError(r, O, e),
                      (!0 === t || (c(t) && t(r))) &&
                        (!W().revalidateOnFocus ||
                          !W().revalidateOnReconnect ||
                          j()) &&
                        e.onErrorRetry(
                          r,
                          O,
                          e,
                          (e) => {
                            let t = _[O];
                            t && t[0] && t[0](F.ERROR_REVALIDATE_EVENT, e);
                          },
                          { retryCount: (l.retryCount || 0) + 1, dedupe: !0 }
                        )));
                }
                return (a = !1), E(), !0;
              },
              [O, n]
            ),
            ef = (0, i.useCallback)(function () {
              for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
              return P(n, x.current, ...t);
            }, []);
          if (
            (C(() => {
              (M.current = t), (U.current = r), s(er) || (ea.current = er);
            }),
            C(() => {
              if (!O) return;
              let e = ed.bind(o, X),
                t = 0,
                r = K(O, _, function (r) {
                  let n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (r == F.FOCUS_EVENT) {
                    let r = Date.now();
                    W().revalidateOnFocus &&
                      r > t &&
                      j() &&
                      ((t = r + W().focusThrottleInterval), e());
                  } else if (r == F.RECONNECT_EVENT)
                    W().revalidateOnReconnect && j() && e();
                  else if (r == F.MUTATE_EVENT) return ed();
                  else if (r == F.ERROR_REVALIDATE_EVENT) return ed(n);
                });
              return (
                (N.current = !1),
                (x.current = O),
                (A.current = !0),
                q({ _k: S }),
                eo && (s(en) || L ? e() : k(e)),
                () => {
                  (N.current = !0), r();
                }
              );
            }, [O]),
            C(() => {
              let e;
              function t() {
                let t = c(v) ? v($().data) : v;
                t && -1 !== e && (e = setTimeout(r, t));
              }
              function r() {
                !$().error && (w || W().isVisible()) && (y || W().isOnline())
                  ? ed(X).then(t)
                  : t();
              }
              return (
                t(),
                () => {
                  e && (clearTimeout(e), (e = -1));
                }
              );
            }, [v, w, y, O]),
            (0, i.useDebugValue)(eu),
            l && s(en) && O)
          ) {
            if (!V && L)
              throw Error(
                "Fallback data is required when using suspense in SSR."
              );
            (M.current = t), (U.current = r), (N.current = !1);
            let e = b[O];
            if ((s(e) || Q(ef(e)), s(ei))) {
              let e = ed(X);
              s(eu) || ((e.status = "fulfilled"), (e.value = !0)), Q(e);
            } else throw ei;
          }
          return {
            mutate: ef,
            get data() {
              return (Z.data = !0), eu;
            },
            get error() {
              return (Z.error = !0), ei;
            },
            get isValidating() {
              return (Z.isValidating = !0), es;
            },
            get isLoading() {
              return (Z.isLoading = !0), ec;
            },
          };
        }),
        function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          let i = B(),
            [a, u, o] = z(t),
            l = q(i, o),
            s = n,
            { use: c } = l,
            d = (c || []).concat(H);
          for (let e = d.length; e--; ) s = d[e](s);
          return s(a, u || l.fetcher || null, l);
        });
    },
  },
]);
