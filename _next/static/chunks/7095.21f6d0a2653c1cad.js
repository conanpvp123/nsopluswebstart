"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7095],
  {
    4806: function (e, t, n) {
      n.d(t, {
        D: function () {
          return ey;
        },
      });
      var r,
        o,
        i,
        a,
        s,
        u = n(4090),
        l = n(9542);
      function c(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function f(e) {
        var t = c(e).Element;
        return e instanceof t || e instanceof Element;
      }
      function p(e) {
        var t = c(e).HTMLElement;
        return e instanceof t || e instanceof HTMLElement;
      }
      function d(e) {
        if ("undefined" == typeof ShadowRoot) return !1;
        var t = c(e).ShadowRoot;
        return e instanceof t || e instanceof ShadowRoot;
      }
      var v = Math.max,
        m = Math.min,
        h = Math.round;
      function y() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function g() {
        return !/^((?!chrome|android).)*safari/i.test(y());
      }
      function b(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          o = 1,
          i = 1;
        t &&
          p(e) &&
          ((o = (e.offsetWidth > 0 && h(r.width) / e.offsetWidth) || 1),
          (i = (e.offsetHeight > 0 && h(r.height) / e.offsetHeight) || 1));
        var a = (f(e) ? c(e) : window).visualViewport,
          s = !g() && n,
          u = (r.left + (s && a ? a.offsetLeft : 0)) / o,
          l = (r.top + (s && a ? a.offsetTop : 0)) / i,
          d = r.width / o,
          v = r.height / i;
        return {
          width: d,
          height: v,
          top: l,
          right: u + d,
          bottom: l + v,
          left: u,
          x: u,
          y: l,
        };
      }
      function w(e) {
        var t = c(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function x(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function O(e) {
        return ((f(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function E(e) {
        return b(O(e)).left + w(e).scrollLeft;
      }
      function P(e) {
        return c(e).getComputedStyle(e);
      }
      function S(e) {
        var t = P(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function M(e) {
        var t = b(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          1 >= Math.abs(t.width - n) && (n = t.width),
          1 >= Math.abs(t.height - r) && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function T(e) {
        return "html" === x(e)
          ? e
          : e.assignedSlot || e.parentNode || (d(e) ? e.host : null) || O(e);
      }
      function j(e, t) {
        void 0 === t && (t = []);
        var n,
          r = (function e(t) {
            return ["html", "body", "#document"].indexOf(x(t)) >= 0
              ? t.ownerDocument.body
              : p(t) && S(t)
              ? t
              : e(T(t));
          })(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = c(r),
          a = o ? [i].concat(i.visualViewport || [], S(r) ? r : []) : r,
          s = t.concat(a);
        return o ? s : s.concat(j(T(a)));
      }
      function A(e) {
        return p(e) && "fixed" !== P(e).position ? e.offsetParent : null;
      }
      function k(e) {
        for (
          var t = c(e), n = A(e);
          n &&
          ["table", "td", "th"].indexOf(x(n)) >= 0 &&
          "static" === P(n).position;

        )
          n = A(n);
        return n &&
          ("html" === x(n) || ("body" === x(n) && "static" === P(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(y());
                if (/Trident/i.test(y()) && p(e) && "fixed" === P(e).position)
                  return null;
                var n = T(e);
                for (
                  d(n) && (n = n.host);
                  p(n) && 0 > ["html", "body"].indexOf(x(n));

                ) {
                  var r = P(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      var D = "bottom",
        R = "right",
        I = "left",
        B = "auto",
        N = ["top", D, R, I],
        C = "start",
        F = "viewport",
        L = "popper",
        _ = N.reduce(function (e, t) {
          return e.concat([t + "-" + C, t + "-end"]);
        }, []),
        z = [].concat(N, [B]).reduce(function (e, t) {
          return e.concat([t, t + "-" + C, t + "-end"]);
        }, []),
        W = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ],
        H = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function V() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      var q = { passive: !0 };
      function U(e) {
        return e.split("-")[0];
      }
      function G(e) {
        return e.split("-")[1];
      }
      function Y(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function Z(e) {
        var t,
          n = e.reference,
          r = e.element,
          o = e.placement,
          i = o ? U(o) : null,
          a = o ? G(o) : null,
          s = n.x + n.width / 2 - r.width / 2,
          u = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case "top":
            t = { x: s, y: n.y - r.height };
            break;
          case D:
            t = { x: s, y: n.y + n.height };
            break;
          case R:
            t = { x: n.x + n.width, y: u };
            break;
          case I:
            t = { x: n.x - r.width, y: u };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var l = i ? Y(i) : null;
        if (null != l) {
          var c = "y" === l ? "height" : "width";
          switch (a) {
            case C:
              t[l] = t[l] - (n[c] / 2 - r[c] / 2);
              break;
            case "end":
              t[l] = t[l] + (n[c] / 2 - r[c] / 2);
          }
        }
        return t;
      }
      var J = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function K(e) {
        var t,
          n,
          r,
          o,
          i,
          a,
          s,
          u = e.popper,
          l = e.popperRect,
          f = e.placement,
          p = e.variation,
          d = e.offsets,
          v = e.position,
          m = e.gpuAcceleration,
          y = e.adaptive,
          g = e.roundOffsets,
          b = e.isFixed,
          w = d.x,
          x = void 0 === w ? 0 : w,
          E = d.y,
          S = void 0 === E ? 0 : E,
          M = "function" == typeof g ? g({ x: x, y: S }) : { x: x, y: S };
        (x = M.x), (S = M.y);
        var T = d.hasOwnProperty("x"),
          j = d.hasOwnProperty("y"),
          A = I,
          B = "top",
          N = window;
        if (y) {
          var C = k(u),
            F = "clientHeight",
            L = "clientWidth";
          C === c(u) &&
            "static" !== P((C = O(u))).position &&
            "absolute" === v &&
            ((F = "scrollHeight"), (L = "scrollWidth")),
            ("top" === f || ((f === I || f === R) && "end" === p)) &&
              ((B = D),
              (S -=
                (b && C === N && N.visualViewport
                  ? N.visualViewport.height
                  : C[F]) - l.height),
              (S *= m ? 1 : -1)),
            (f === I || (("top" === f || f === D) && "end" === p)) &&
              ((A = R),
              (x -=
                (b && C === N && N.visualViewport
                  ? N.visualViewport.width
                  : C[L]) - l.width),
              (x *= m ? 1 : -1));
        }
        var _ = Object.assign({ position: v }, y && J),
          z =
            !0 === g
              ? ((t = { x: x, y: S }),
                (n = c(u)),
                (r = t.x),
                (o = t.y),
                {
                  x: h(r * (i = n.devicePixelRatio || 1)) / i || 0,
                  y: h(o * i) / i || 0,
                })
              : { x: x, y: S };
        return ((x = z.x), (S = z.y), m)
          ? Object.assign(
              {},
              _,
              (((s = {})[B] = j ? "0" : ""),
              (s[A] = T ? "0" : ""),
              (s.transform =
                1 >= (N.devicePixelRatio || 1)
                  ? "translate(" + x + "px, " + S + "px)"
                  : "translate3d(" + x + "px, " + S + "px, 0)"),
              s)
            )
          : Object.assign(
              {},
              _,
              (((a = {})[B] = j ? S + "px" : ""),
              (a[A] = T ? x + "px" : ""),
              (a.transform = ""),
              a)
            );
      }
      var X = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function $(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return X[e];
        });
      }
      var Q = { start: "end", end: "start" };
      function ee(e) {
        return e.replace(/start|end/g, function (e) {
          return Q[e];
        });
      }
      function et(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && d(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function en(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function er(e, t, n) {
        var r, o, i, a, s, u, l, p, d, m;
        return t === F
          ? en(
              (function (e, t) {
                var n = c(e),
                  r = O(e),
                  o = n.visualViewport,
                  i = r.clientWidth,
                  a = r.clientHeight,
                  s = 0,
                  u = 0;
                if (o) {
                  (i = o.width), (a = o.height);
                  var l = g();
                  (l || (!l && "fixed" === t)) &&
                    ((s = o.offsetLeft), (u = o.offsetTop));
                }
                return { width: i, height: a, x: s + E(e), y: u };
              })(e, n)
            )
          : f(t)
          ? (((r = b(t, !1, "fixed" === n)).top = r.top + t.clientTop),
            (r.left = r.left + t.clientLeft),
            (r.bottom = r.top + t.clientHeight),
            (r.right = r.left + t.clientWidth),
            (r.width = t.clientWidth),
            (r.height = t.clientHeight),
            (r.x = r.left),
            (r.y = r.top),
            r)
          : en(
              ((o = O(e)),
              (a = O(o)),
              (s = w(o)),
              (u = null == (i = o.ownerDocument) ? void 0 : i.body),
              (l = v(
                a.scrollWidth,
                a.clientWidth,
                u ? u.scrollWidth : 0,
                u ? u.clientWidth : 0
              )),
              (p = v(
                a.scrollHeight,
                a.clientHeight,
                u ? u.scrollHeight : 0,
                u ? u.clientHeight : 0
              )),
              (d = -s.scrollLeft + E(o)),
              (m = -s.scrollTop),
              "rtl" === P(u || a).direction &&
                (d += v(a.clientWidth, u ? u.clientWidth : 0) - l),
              { width: l, height: p, x: d, y: m })
            );
      }
      function eo() {
        return { top: 0, right: 0, bottom: 0, left: 0 };
      }
      function ei(e) {
        return Object.assign({}, eo(), e);
      }
      function ea(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      function es(e, t) {
        void 0 === t && (t = {});
        var n,
          r,
          o,
          i,
          a,
          s,
          u,
          l = t,
          c = l.placement,
          d = void 0 === c ? e.placement : c,
          h = l.strategy,
          y = void 0 === h ? e.strategy : h,
          g = l.boundary,
          w = l.rootBoundary,
          E = l.elementContext,
          S = void 0 === E ? L : E,
          M = l.altBoundary,
          A = l.padding,
          I = void 0 === A ? 0 : A,
          B = ei("number" != typeof I ? I : ea(I, N)),
          C = e.rects.popper,
          _ = e.elements[void 0 !== M && M ? (S === L ? "reference" : L) : S],
          z =
            ((n = f(_) ? _ : _.contextElement || O(e.elements.popper)),
            (s = (a = [].concat(
              "clippingParents" === (r = void 0 === g ? "clippingParents" : g)
                ? ((o = j(T(n))),
                  f(
                    (i =
                      ["absolute", "fixed"].indexOf(P(n).position) >= 0 && p(n)
                        ? k(n)
                        : n)
                  )
                    ? o.filter(function (e) {
                        return f(e) && et(e, i) && "body" !== x(e);
                      })
                    : [])
                : [].concat(r),
              [void 0 === w ? F : w]
            ))[0]),
            ((u = a.reduce(function (e, t) {
              var r = er(n, t, y);
              return (
                (e.top = v(r.top, e.top)),
                (e.right = m(r.right, e.right)),
                (e.bottom = m(r.bottom, e.bottom)),
                (e.left = v(r.left, e.left)),
                e
              );
            }, er(n, s, y))).width = u.right - u.left),
            (u.height = u.bottom - u.top),
            (u.x = u.left),
            (u.y = u.top),
            u),
          W = b(e.elements.reference),
          H = Z({
            reference: W,
            element: C,
            strategy: "absolute",
            placement: d,
          }),
          V = en(Object.assign({}, C, H)),
          q = S === L ? V : W,
          U = {
            top: z.top - q.top + B.top,
            bottom: q.bottom - z.bottom + B.bottom,
            left: z.left - q.left + B.left,
            right: q.right - z.right + B.right,
          },
          G = e.modifiersData.offset;
        if (S === L && G) {
          var Y = G[d];
          Object.keys(U).forEach(function (e) {
            var t = [R, D].indexOf(e) >= 0 ? 1 : -1,
              n = ["top", D].indexOf(e) >= 0 ? "y" : "x";
            U[e] += Y[n] * t;
          });
        }
        return U;
      }
      function eu(e, t, n) {
        return v(e, m(t, n));
      }
      function el(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function ec(e) {
        return ["top", R, D, I].some(function (t) {
          return e[t] >= 0;
        });
      }
      var ef =
          ((i =
            void 0 ===
            (o = (r = {
              defaultModifiers: [
                {
                  name: "eventListeners",
                  enabled: !0,
                  phase: "write",
                  fn: function () {},
                  effect: function (e) {
                    var t = e.state,
                      n = e.instance,
                      r = e.options,
                      o = r.scroll,
                      i = void 0 === o || o,
                      a = r.resize,
                      s = void 0 === a || a,
                      u = c(t.elements.popper),
                      l = [].concat(
                        t.scrollParents.reference,
                        t.scrollParents.popper
                      );
                    return (
                      i &&
                        l.forEach(function (e) {
                          e.addEventListener("scroll", n.update, q);
                        }),
                      s && u.addEventListener("resize", n.update, q),
                      function () {
                        i &&
                          l.forEach(function (e) {
                            e.removeEventListener("scroll", n.update, q);
                          }),
                          s && u.removeEventListener("resize", n.update, q);
                      }
                    );
                  },
                  data: {},
                },
                {
                  name: "popperOffsets",
                  enabled: !0,
                  phase: "read",
                  fn: function (e) {
                    var t = e.state,
                      n = e.name;
                    t.modifiersData[n] = Z({
                      reference: t.rects.reference,
                      element: t.rects.popper,
                      strategy: "absolute",
                      placement: t.placement,
                    });
                  },
                  data: {},
                },
                {
                  name: "computeStyles",
                  enabled: !0,
                  phase: "beforeWrite",
                  fn: function (e) {
                    var t = e.state,
                      n = e.options,
                      r = n.gpuAcceleration,
                      o = n.adaptive,
                      i = n.roundOffsets,
                      a = void 0 === i || i,
                      s = {
                        placement: U(t.placement),
                        variation: G(t.placement),
                        popper: t.elements.popper,
                        popperRect: t.rects.popper,
                        gpuAcceleration: void 0 === r || r,
                        isFixed: "fixed" === t.options.strategy,
                      };
                    null != t.modifiersData.popperOffsets &&
                      (t.styles.popper = Object.assign(
                        {},
                        t.styles.popper,
                        K(
                          Object.assign({}, s, {
                            offsets: t.modifiersData.popperOffsets,
                            position: t.options.strategy,
                            adaptive: void 0 === o || o,
                            roundOffsets: a,
                          })
                        )
                      )),
                      null != t.modifiersData.arrow &&
                        (t.styles.arrow = Object.assign(
                          {},
                          t.styles.arrow,
                          K(
                            Object.assign({}, s, {
                              offsets: t.modifiersData.arrow,
                              position: "absolute",
                              adaptive: !1,
                              roundOffsets: a,
                            })
                          )
                        )),
                      (t.attributes.popper = Object.assign(
                        {},
                        t.attributes.popper,
                        { "data-popper-placement": t.placement }
                      ));
                  },
                  data: {},
                },
                {
                  name: "applyStyles",
                  enabled: !0,
                  phase: "write",
                  fn: function (e) {
                    var t = e.state;
                    Object.keys(t.elements).forEach(function (e) {
                      var n = t.styles[e] || {},
                        r = t.attributes[e] || {},
                        o = t.elements[e];
                      p(o) &&
                        x(o) &&
                        (Object.assign(o.style, n),
                        Object.keys(r).forEach(function (e) {
                          var t = r[e];
                          !1 === t
                            ? o.removeAttribute(e)
                            : o.setAttribute(e, !0 === t ? "" : t);
                        }));
                    });
                  },
                  effect: function (e) {
                    var t = e.state,
                      n = {
                        popper: {
                          position: t.options.strategy,
                          left: "0",
                          top: "0",
                          margin: "0",
                        },
                        arrow: { position: "absolute" },
                        reference: {},
                      };
                    return (
                      Object.assign(t.elements.popper.style, n.popper),
                      (t.styles = n),
                      t.elements.arrow &&
                        Object.assign(t.elements.arrow.style, n.arrow),
                      function () {
                        Object.keys(t.elements).forEach(function (e) {
                          var r = t.elements[e],
                            o = t.attributes[e] || {},
                            i = Object.keys(
                              t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                            ).reduce(function (e, t) {
                              return (e[t] = ""), e;
                            }, {});
                          p(r) &&
                            x(r) &&
                            (Object.assign(r.style, i),
                            Object.keys(o).forEach(function (e) {
                              r.removeAttribute(e);
                            }));
                        });
                      }
                    );
                  },
                  requires: ["computeStyles"],
                },
                {
                  name: "offset",
                  enabled: !0,
                  phase: "main",
                  requires: ["popperOffsets"],
                  fn: function (e) {
                    var t = e.state,
                      n = e.options,
                      r = e.name,
                      o = n.offset,
                      i = void 0 === o ? [0, 0] : o,
                      a = z.reduce(function (e, n) {
                        var r, o, a, s, u, l;
                        return (
                          (e[n] =
                            ((r = t.rects),
                            (a = [I, "top"].indexOf((o = U(n))) >= 0 ? -1 : 1),
                            (u = (s =
                              "function" == typeof i
                                ? i(Object.assign({}, r, { placement: n }))
                                : i)[0]),
                            (l = s[1]),
                            (u = u || 0),
                            (l = (l || 0) * a),
                            [I, R].indexOf(o) >= 0
                              ? { x: l, y: u }
                              : { x: u, y: l })),
                          e
                        );
                      }, {}),
                      s = a[t.placement],
                      u = s.x,
                      l = s.y;
                    null != t.modifiersData.popperOffsets &&
                      ((t.modifiersData.popperOffsets.x += u),
                      (t.modifiersData.popperOffsets.y += l)),
                      (t.modifiersData[r] = a);
                  },
                },
                {
                  name: "flip",
                  enabled: !0,
                  phase: "main",
                  fn: function (e) {
                    var t = e.state,
                      n = e.options,
                      r = e.name;
                    if (!t.modifiersData[r]._skip) {
                      for (
                        var o = n.mainAxis,
                          i = void 0 === o || o,
                          a = n.altAxis,
                          s = void 0 === a || a,
                          u = n.fallbackPlacements,
                          l = n.padding,
                          c = n.boundary,
                          f = n.rootBoundary,
                          p = n.altBoundary,
                          d = n.flipVariations,
                          v = void 0 === d || d,
                          m = n.allowedAutoPlacements,
                          h = t.options.placement,
                          y = U(h) === h,
                          g =
                            u ||
                            (y || !v
                              ? [$(h)]
                              : (function (e) {
                                  if (U(e) === B) return [];
                                  var t = $(e);
                                  return [ee(e), t, ee(t)];
                                })(h)),
                          b = [h].concat(g).reduce(function (e, n) {
                            var r, o, i, a, s, u, p, d, h, y, g, b;
                            return e.concat(
                              U(n) === B
                                ? ((o = (r = {
                                    placement: n,
                                    boundary: c,
                                    rootBoundary: f,
                                    padding: l,
                                    flipVariations: v,
                                    allowedAutoPlacements: m,
                                  }).placement),
                                  (i = r.boundary),
                                  (a = r.rootBoundary),
                                  (s = r.padding),
                                  (u = r.flipVariations),
                                  (d =
                                    void 0 === (p = r.allowedAutoPlacements)
                                      ? z
                                      : p),
                                  0 ===
                                    (g = (y = (h = G(o))
                                      ? u
                                        ? _
                                        : _.filter(function (e) {
                                            return G(e) === h;
                                          })
                                      : N).filter(function (e) {
                                      return d.indexOf(e) >= 0;
                                    })).length && (g = y),
                                  Object.keys(
                                    (b = g.reduce(function (e, n) {
                                      return (
                                        (e[n] = es(t, {
                                          placement: n,
                                          boundary: i,
                                          rootBoundary: a,
                                          padding: s,
                                        })[U(n)]),
                                        e
                                      );
                                    }, {}))
                                  ).sort(function (e, t) {
                                    return b[e] - b[t];
                                  }))
                                : n
                            );
                          }, []),
                          w = t.rects.reference,
                          x = t.rects.popper,
                          O = new Map(),
                          E = !0,
                          P = b[0],
                          S = 0;
                        S < b.length;
                        S++
                      ) {
                        var M = b[S],
                          T = U(M),
                          j = G(M) === C,
                          A = ["top", D].indexOf(T) >= 0,
                          k = A ? "width" : "height",
                          F = es(t, {
                            placement: M,
                            boundary: c,
                            rootBoundary: f,
                            altBoundary: p,
                            padding: l,
                          }),
                          L = A ? (j ? R : I) : j ? D : "top";
                        w[k] > x[k] && (L = $(L));
                        var W = $(L),
                          H = [];
                        if (
                          (i && H.push(F[T] <= 0),
                          s && H.push(F[L] <= 0, F[W] <= 0),
                          H.every(function (e) {
                            return e;
                          }))
                        ) {
                          (P = M), (E = !1);
                          break;
                        }
                        O.set(M, H);
                      }
                      if (E)
                        for (
                          var V = v ? 3 : 1,
                            q = function (e) {
                              var t = b.find(function (t) {
                                var n = O.get(t);
                                if (n)
                                  return n.slice(0, e).every(function (e) {
                                    return e;
                                  });
                              });
                              if (t) return (P = t), "break";
                            },
                            Y = V;
                          Y > 0 && "break" !== q(Y);
                          Y--
                        );
                      t.placement !== P &&
                        ((t.modifiersData[r]._skip = !0),
                        (t.placement = P),
                        (t.reset = !0));
                    }
                  },
                  requiresIfExists: ["offset"],
                  data: { _skip: !1 },
                },
                {
                  name: "preventOverflow",
                  enabled: !0,
                  phase: "main",
                  fn: function (e) {
                    var t = e.state,
                      n = e.options,
                      r = e.name,
                      o = n.mainAxis,
                      i = n.altAxis,
                      a = n.boundary,
                      s = n.rootBoundary,
                      u = n.altBoundary,
                      l = n.padding,
                      c = n.tether,
                      f = void 0 === c || c,
                      p = n.tetherOffset,
                      d = void 0 === p ? 0 : p,
                      h = es(t, {
                        boundary: a,
                        rootBoundary: s,
                        padding: l,
                        altBoundary: u,
                      }),
                      y = U(t.placement),
                      g = G(t.placement),
                      b = !g,
                      w = Y(y),
                      x = "x" === w ? "y" : "x",
                      O = t.modifiersData.popperOffsets,
                      E = t.rects.reference,
                      P = t.rects.popper,
                      S =
                        "function" == typeof d
                          ? d(
                              Object.assign({}, t.rects, {
                                placement: t.placement,
                              })
                            )
                          : d,
                      T =
                        "number" == typeof S
                          ? { mainAxis: S, altAxis: S }
                          : Object.assign({ mainAxis: 0, altAxis: 0 }, S),
                      j = t.modifiersData.offset
                        ? t.modifiersData.offset[t.placement]
                        : null,
                      A = { x: 0, y: 0 };
                    if (O) {
                      if (void 0 === o || o) {
                        var B,
                          N = "y" === w ? "top" : I,
                          F = "y" === w ? D : R,
                          L = "y" === w ? "height" : "width",
                          _ = O[w],
                          z = _ + h[N],
                          W = _ - h[F],
                          H = f ? -P[L] / 2 : 0,
                          V = g === C ? E[L] : P[L],
                          q = g === C ? -P[L] : -E[L],
                          Z = t.elements.arrow,
                          J = f && Z ? M(Z) : { width: 0, height: 0 },
                          K = t.modifiersData["arrow#persistent"]
                            ? t.modifiersData["arrow#persistent"].padding
                            : eo(),
                          X = K[N],
                          $ = K[F],
                          Q = eu(0, E[L], J[L]),
                          ee = b
                            ? E[L] / 2 - H - Q - X - T.mainAxis
                            : V - Q - X - T.mainAxis,
                          et = b
                            ? -E[L] / 2 + H + Q + $ + T.mainAxis
                            : q + Q + $ + T.mainAxis,
                          en = t.elements.arrow && k(t.elements.arrow),
                          er = en
                            ? "y" === w
                              ? en.clientTop || 0
                              : en.clientLeft || 0
                            : 0,
                          ei = null != (B = null == j ? void 0 : j[w]) ? B : 0,
                          ea = eu(
                            f ? m(z, _ + ee - ei - er) : z,
                            _,
                            f ? v(W, _ + et - ei) : W
                          );
                        (O[w] = ea), (A[w] = ea - _);
                      }
                      if (void 0 !== i && i) {
                        var el,
                          ec,
                          ef = "x" === w ? "top" : I,
                          ep = "x" === w ? D : R,
                          ed = O[x],
                          ev = "y" === x ? "height" : "width",
                          em = ed + h[ef],
                          eh = ed - h[ep],
                          ey = -1 !== ["top", I].indexOf(y),
                          eg =
                            null != (ec = null == j ? void 0 : j[x]) ? ec : 0,
                          eb = ey ? em : ed - E[ev] - P[ev] - eg + T.altAxis,
                          ew = ey ? ed + E[ev] + P[ev] - eg - T.altAxis : eh,
                          ex =
                            f && ey
                              ? (el = eu(eb, ed, ew)) > ew
                                ? ew
                                : el
                              : eu(f ? eb : em, ed, f ? ew : eh);
                        (O[x] = ex), (A[x] = ex - ed);
                      }
                      t.modifiersData[r] = A;
                    }
                  },
                  requiresIfExists: ["offset"],
                },
                {
                  name: "arrow",
                  enabled: !0,
                  phase: "main",
                  fn: function (e) {
                    var t,
                      n,
                      r = e.state,
                      o = e.name,
                      i = e.options,
                      a = r.elements.arrow,
                      s = r.modifiersData.popperOffsets,
                      u = U(r.placement),
                      l = Y(u),
                      c = [I, R].indexOf(u) >= 0 ? "height" : "width";
                    if (a && s) {
                      var f = ei(
                          "number" !=
                            typeof (t =
                              "function" == typeof (t = i.padding)
                                ? t(
                                    Object.assign({}, r.rects, {
                                      placement: r.placement,
                                    })
                                  )
                                : t)
                            ? t
                            : ea(t, N)
                        ),
                        p = M(a),
                        d = "y" === l ? "top" : I,
                        v = "y" === l ? D : R,
                        m =
                          r.rects.reference[c] +
                          r.rects.reference[l] -
                          s[l] -
                          r.rects.popper[c],
                        h = s[l] - r.rects.reference[l],
                        y = k(a),
                        g = y
                          ? "y" === l
                            ? y.clientHeight || 0
                            : y.clientWidth || 0
                          : 0,
                        b = f[d],
                        w = g - p[c] - f[v],
                        x = g / 2 - p[c] / 2 + (m / 2 - h / 2),
                        O = eu(b, x, w);
                      r.modifiersData[o] =
                        (((n = {})[l] = O), (n.centerOffset = O - x), n);
                    }
                  },
                  effect: function (e) {
                    var t = e.state,
                      n = e.options.element,
                      r = void 0 === n ? "[data-popper-arrow]" : n;
                    null != r &&
                      ("string" != typeof r ||
                        (r = t.elements.popper.querySelector(r))) &&
                      et(t.elements.popper, r) &&
                      (t.elements.arrow = r);
                  },
                  requires: ["popperOffsets"],
                  requiresIfExists: ["preventOverflow"],
                },
                {
                  name: "hide",
                  enabled: !0,
                  phase: "main",
                  requiresIfExists: ["preventOverflow"],
                  fn: function (e) {
                    var t = e.state,
                      n = e.name,
                      r = t.rects.reference,
                      o = t.rects.popper,
                      i = t.modifiersData.preventOverflow,
                      a = es(t, { elementContext: "reference" }),
                      s = es(t, { altBoundary: !0 }),
                      u = el(a, r),
                      l = el(s, o, i),
                      c = ec(u),
                      f = ec(l);
                    (t.modifiersData[n] = {
                      referenceClippingOffsets: u,
                      popperEscapeOffsets: l,
                      isReferenceHidden: c,
                      hasPopperEscaped: f,
                    }),
                      (t.attributes.popper = Object.assign(
                        {},
                        t.attributes.popper,
                        {
                          "data-popper-reference-hidden": c,
                          "data-popper-escaped": f,
                        }
                      ));
                  },
                },
              ],
            }).defaultModifiers)
              ? []
              : o),
          (s = void 0 === (a = r.defaultOptions) ? H : a),
          function (e, t, n) {
            void 0 === n && (n = s);
            var r,
              o = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, H, s),
                modifiersData: {},
                elements: { reference: e, popper: t },
                attributes: {},
                styles: {},
              },
              a = [],
              u = !1,
              l = {
                state: o,
                setOptions: function (n) {
                  var r,
                    u,
                    c,
                    p,
                    v,
                    m = "function" == typeof n ? n(o.options) : n;
                  d(),
                    (o.options = Object.assign({}, s, o.options, m)),
                    (o.scrollParents = {
                      reference: f(e)
                        ? j(e)
                        : e.contextElement
                        ? j(e.contextElement)
                        : [],
                      popper: j(t),
                    });
                  var h =
                    ((u = Object.keys(
                      (r = []
                        .concat(i, o.options.modifiers)
                        .reduce(function (e, t) {
                          var n = e[t.name];
                          return (
                            (e[t.name] = n
                              ? Object.assign({}, n, t, {
                                  options: Object.assign(
                                    {},
                                    n.options,
                                    t.options
                                  ),
                                  data: Object.assign({}, n.data, t.data),
                                })
                              : t),
                            e
                          );
                        }, {}))
                    ).map(function (e) {
                      return r[e];
                    })),
                    (c = new Map()),
                    (p = new Set()),
                    (v = []),
                    u.forEach(function (e) {
                      c.set(e.name, e);
                    }),
                    u.forEach(function (e) {
                      p.has(e.name) ||
                        (function e(t) {
                          p.add(t.name),
                            []
                              .concat(
                                t.requires || [],
                                t.requiresIfExists || []
                              )
                              .forEach(function (t) {
                                if (!p.has(t)) {
                                  var n = c.get(t);
                                  n && e(n);
                                }
                              }),
                            v.push(t);
                        })(e);
                    }),
                    W.reduce(function (e, t) {
                      return e.concat(
                        v.filter(function (e) {
                          return e.phase === t;
                        })
                      );
                    }, []));
                  return (
                    (o.orderedModifiers = h.filter(function (e) {
                      return e.enabled;
                    })),
                    o.orderedModifiers.forEach(function (e) {
                      var t = e.name,
                        n = e.options,
                        r = e.effect;
                      if ("function" == typeof r) {
                        var i = r({
                          state: o,
                          name: t,
                          instance: l,
                          options: void 0 === n ? {} : n,
                        });
                        a.push(i || function () {});
                      }
                    }),
                    l.update()
                  );
                },
                forceUpdate: function () {
                  if (!u) {
                    var e,
                      t,
                      n,
                      r,
                      i,
                      a,
                      s,
                      f,
                      d,
                      v,
                      m,
                      y,
                      g = o.elements,
                      P = g.reference,
                      T = g.popper;
                    if (V(P, T)) {
                      (o.rects = {
                        reference:
                          ((t = k(T)),
                          (n = "fixed" === o.options.strategy),
                          (r = p(t)),
                          (f =
                            p(t) &&
                            ((a =
                              h((i = t.getBoundingClientRect()).width) /
                                t.offsetWidth || 1),
                            (s = h(i.height) / t.offsetHeight || 1),
                            1 !== a || 1 !== s)),
                          (d = O(t)),
                          (v = b(P, f, n)),
                          (m = { scrollLeft: 0, scrollTop: 0 }),
                          (y = { x: 0, y: 0 }),
                          (r || (!r && !n)) &&
                            (("body" !== x(t) || S(d)) &&
                              (m =
                                (e = t) !== c(e) && p(e)
                                  ? {
                                      scrollLeft: e.scrollLeft,
                                      scrollTop: e.scrollTop,
                                    }
                                  : w(e)),
                            p(t)
                              ? ((y = b(t, !0)),
                                (y.x += t.clientLeft),
                                (y.y += t.clientTop))
                              : d && (y.x = E(d))),
                          {
                            x: v.left + m.scrollLeft - y.x,
                            y: v.top + m.scrollTop - y.y,
                            width: v.width,
                            height: v.height,
                          }),
                        popper: M(T),
                      }),
                        (o.reset = !1),
                        (o.placement = o.options.placement),
                        o.orderedModifiers.forEach(function (e) {
                          return (o.modifiersData[e.name] = Object.assign(
                            {},
                            e.data
                          ));
                        });
                      for (var j = 0; j < o.orderedModifiers.length; j++) {
                        if (!0 === o.reset) {
                          (o.reset = !1), (j = -1);
                          continue;
                        }
                        var A = o.orderedModifiers[j],
                          D = A.fn,
                          R = A.options,
                          I = void 0 === R ? {} : R,
                          B = A.name;
                        "function" == typeof D &&
                          (o =
                            D({ state: o, options: I, name: B, instance: l }) ||
                            o);
                      }
                    }
                  }
                },
                update: function () {
                  return (
                    r ||
                      (r = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (r = void 0),
                            e(
                              new Promise(function (e) {
                                l.forceUpdate(), e(o);
                              })
                            );
                        });
                      })),
                    r
                  );
                },
                destroy: function () {
                  d(), (u = !0);
                },
              };
            if (!V(e, t)) return l;
            function d() {
              a.forEach(function (e) {
                return e();
              }),
                (a = []);
            }
            return (
              l.setOptions(n).then(function (e) {
                !u && n.onFirstUpdate && n.onFirstUpdate(e);
              }),
              l
            );
          }),
        ep = n(8219),
        ed = n.n(ep),
        ev = function (e) {
          return e.reduce(function (e, t) {
            var n = t[0],
              r = t[1];
            return (e[n] = r), e;
          }, {});
        },
        em =
          window.document && window.document.createElement
            ? u.useLayoutEffect
            : u.useEffect,
        eh = [],
        ey = function (e, t, n) {
          void 0 === n && (n = {});
          var r = u.useRef(null),
            o = {
              onFirstUpdate: n.onFirstUpdate,
              placement: n.placement || "bottom",
              strategy: n.strategy || "absolute",
              modifiers: n.modifiers || eh,
            },
            i = u.useState({
              styles: {
                popper: { position: o.strategy, left: "0", top: "0" },
                arrow: { position: "absolute" },
              },
              attributes: {},
            }),
            a = i[0],
            s = i[1],
            c = u.useMemo(function () {
              return {
                name: "updateState",
                enabled: !0,
                phase: "write",
                fn: function (e) {
                  var t = e.state,
                    n = Object.keys(t.elements);
                  l.flushSync(function () {
                    s({
                      styles: ev(
                        n.map(function (e) {
                          return [e, t.styles[e] || {}];
                        })
                      ),
                      attributes: ev(
                        n.map(function (e) {
                          return [e, t.attributes[e]];
                        })
                      ),
                    });
                  });
                },
                requires: ["computeStyles"],
              };
            }, []),
            f = u.useMemo(
              function () {
                var e = {
                  onFirstUpdate: o.onFirstUpdate,
                  placement: o.placement,
                  strategy: o.strategy,
                  modifiers: [].concat(o.modifiers, [
                    c,
                    { name: "applyStyles", enabled: !1 },
                  ]),
                };
                return ed()(r.current, e)
                  ? r.current || e
                  : ((r.current = e), e);
              },
              [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, c]
            ),
            p = u.useRef();
          return (
            em(
              function () {
                p.current && p.current.setOptions(f);
              },
              [f]
            ),
            em(
              function () {
                if (null != e && null != t) {
                  var r = (n.createPopper || ef)(e, t, f);
                  return (
                    (p.current = r),
                    function () {
                      r.destroy(), (p.current = null);
                    }
                  );
                }
              },
              [e, t, n.createPopper]
            ),
            {
              state: p.current ? p.current.state : null,
              styles: a.styles,
              attributes: a.attributes,
              update: p.current ? p.current.update : null,
              forceUpdate: p.current ? p.current.forceUpdate : null,
            }
          );
        };
    },
    8219: function (e) {
      var t = "undefined" != typeof Element,
        n = "function" == typeof Map,
        r = "function" == typeof Set,
        o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
      e.exports = function (e, i) {
        try {
          return (function e(i, a) {
            if (i === a) return !0;
            if (i && a && "object" == typeof i && "object" == typeof a) {
              var s, u, l, c;
              if (i.constructor !== a.constructor) return !1;
              if (Array.isArray(i)) {
                if ((s = i.length) != a.length) return !1;
                for (u = s; 0 != u--; ) if (!e(i[u], a[u])) return !1;
                return !0;
              }
              if (n && i instanceof Map && a instanceof Map) {
                if (i.size !== a.size) return !1;
                for (c = i.entries(); !(u = c.next()).done; )
                  if (!a.has(u.value[0])) return !1;
                for (c = i.entries(); !(u = c.next()).done; )
                  if (!e(u.value[1], a.get(u.value[0]))) return !1;
                return !0;
              }
              if (r && i instanceof Set && a instanceof Set) {
                if (i.size !== a.size) return !1;
                for (c = i.entries(); !(u = c.next()).done; )
                  if (!a.has(u.value[0])) return !1;
                return !0;
              }
              if (o && ArrayBuffer.isView(i) && ArrayBuffer.isView(a)) {
                if ((s = i.length) != a.length) return !1;
                for (u = s; 0 != u--; ) if (i[u] !== a[u]) return !1;
                return !0;
              }
              if (i.constructor === RegExp)
                return i.source === a.source && i.flags === a.flags;
              if (
                i.valueOf !== Object.prototype.valueOf &&
                "function" == typeof i.valueOf &&
                "function" == typeof a.valueOf
              )
                return i.valueOf() === a.valueOf();
              if (
                i.toString !== Object.prototype.toString &&
                "function" == typeof i.toString &&
                "function" == typeof a.toString
              )
                return i.toString() === a.toString();
              if ((s = (l = Object.keys(i)).length) !== Object.keys(a).length)
                return !1;
              for (u = s; 0 != u--; )
                if (!Object.prototype.hasOwnProperty.call(a, l[u])) return !1;
              if (t && i instanceof Element) return !1;
              for (u = s; 0 != u--; )
                if (
                  (("_owner" !== l[u] && "__v" !== l[u] && "__o" !== l[u]) ||
                    !i.$$typeof) &&
                  !e(i[l[u]], a[l[u]])
                )
                  return !1;
              return !0;
            }
            return i != i && a != a;
          })(e, i);
        } catch (e) {
          if ((e.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw e;
        }
      };
    },
    9452: function (e, t, n) {
      n.d(t, {
        J: function () {
          return _;
        },
      });
      var r,
        o,
        i = n(4090),
        a = n(3832),
        s = n(641),
        u = n(5740),
        l = n(2381),
        c = n(9790),
        f = n(5235),
        p = n(1679),
        d = n(7273),
        v = n(1454),
        m = n(1820),
        h = n(6601),
        y = n(3839),
        g = n(7700),
        b = n(8358),
        w = n(4152),
        x = n(8803),
        O = n(2640),
        E = n(4819),
        P = n(8318),
        S = n(7409),
        M =
          (((r = M || {})[(r.Open = 0)] = "Open"),
          (r[(r.Closed = 1)] = "Closed"),
          r),
        T =
          (((o = T || {})[(o.TogglePopover = 0)] = "TogglePopover"),
          (o[(o.ClosePopover = 1)] = "ClosePopover"),
          (o[(o.SetButton = 2)] = "SetButton"),
          (o[(o.SetButtonId = 3)] = "SetButtonId"),
          (o[(o.SetPanel = 4)] = "SetPanel"),
          (o[(o.SetPanelId = 5)] = "SetPanelId"),
          o);
      let j = {
          0: (e) => {
            let t = {
              ...e,
              popoverState: (0, O.E)(e.popoverState, { 0: 1, 1: 0 }),
            };
            return 0 === t.popoverState && (t.__demoMode = !1), t;
          },
          1: (e) => (1 === e.popoverState ? e : { ...e, popoverState: 1 }),
          2: (e, t) => (e.button === t.button ? e : { ...e, button: t.button }),
          3: (e, t) =>
            e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId },
          4: (e, t) => (e.panel === t.panel ? e : { ...e, panel: t.panel }),
          5: (e, t) =>
            e.panelId === t.panelId ? e : { ...e, panelId: t.panelId },
        },
        A = (0, i.createContext)(null);
      function k(e) {
        let t = (0, i.useContext)(A);
        if (null === t) {
          let t = Error(
            "<".concat(e, " /> is missing a parent <Popover /> component.")
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, k), t);
        }
        return t;
      }
      A.displayName = "PopoverContext";
      let D = (0, i.createContext)(null);
      function R(e) {
        let t = (0, i.useContext)(D);
        if (null === t) {
          let t = Error(
            "<".concat(e, " /> is missing a parent <Popover /> component.")
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, R), t);
        }
        return t;
      }
      D.displayName = "PopoverAPIContext";
      let I = (0, i.createContext)(null);
      function B() {
        return (0, i.useContext)(I);
      }
      I.displayName = "PopoverGroupContext";
      let N = (0, i.createContext)(null);
      function C(e, t) {
        return (0, O.E)(t.type, j, e, t);
      }
      N.displayName = "PopoverPanelContext";
      let F = P.AN.RenderStrategy | P.AN.Static,
        L = P.AN.RenderStrategy | P.AN.Static,
        _ = Object.assign(
          (0, P.yV)(function (e, t) {
            var n;
            let { __demoMode: r = !1, ...o } = e,
              l = (0, i.useRef)(null),
              c = (0, h.T)(
                t,
                (0, h.h)((e) => {
                  l.current = e;
                })
              ),
              v = (0, i.useRef)([]),
              y = (0, i.useReducer)(C, {
                __demoMode: r,
                popoverState: r ? 0 : 1,
                buttons: v,
                button: null,
                buttonId: null,
                panel: null,
                panelId: null,
                beforePanelSentinel: (0, i.createRef)(),
                afterPanelSentinel: (0, i.createRef)(),
              }),
              [
                {
                  popoverState: g,
                  button: w,
                  buttonId: E,
                  panel: S,
                  panelId: M,
                  beforePanelSentinel: T,
                  afterPanelSentinel: j,
                },
                k,
              ] = y,
              R = (0, d.i)(null != (n = l.current) ? n : w),
              I = (0, i.useMemo)(() => {
                if (!w || !S) return !1;
                for (let e of document.querySelectorAll("body > *"))
                  if (
                    Number(null == e ? void 0 : e.contains(w)) ^
                    Number(null == e ? void 0 : e.contains(S))
                  )
                    return !0;
                let e = (0, x.GO)(),
                  t = e.indexOf(w),
                  n = (t + e.length - 1) % e.length,
                  r = (t + 1) % e.length,
                  o = e[n],
                  i = e[r];
                return !S.contains(o) && !S.contains(i);
              }, [w, S]),
              F = (0, f.E)(E),
              L = (0, f.E)(M),
              _ = (0, i.useMemo)(
                () => ({
                  buttonId: F,
                  panelId: L,
                  close: () => k({ type: 1 }),
                }),
                [F, L, k]
              ),
              z = B(),
              W = null == z ? void 0 : z.registerPopover,
              H = (0, s.z)(() => {
                var e;
                return null !=
                  (e = null == z ? void 0 : z.isFocusWithinPopoverGroup())
                  ? e
                  : (null == R ? void 0 : R.activeElement) &&
                      ((null == w ? void 0 : w.contains(R.activeElement)) ||
                        (null == S ? void 0 : S.contains(R.activeElement)));
              });
            (0, i.useEffect)(() => (null == W ? void 0 : W(_)), [W, _]);
            let [V, q] = (0, a.k)(),
              U = (0, m.v)({
                mainTreeNodeRef: null == z ? void 0 : z.mainTreeNodeRef,
                portals: V,
                defaultContainers: [w, S],
              });
            (0, u.O)(
              null == R ? void 0 : R.defaultView,
              "focus",
              (e) => {
                var t, n, r, o;
                e.target !== window &&
                  e.target instanceof HTMLElement &&
                  0 === g &&
                  (H() ||
                    (w &&
                      S &&
                      (U.contains(e.target) ||
                        (null !=
                          (n = null == (t = T.current) ? void 0 : t.contains) &&
                          n.call(t, e.target)) ||
                        (null !=
                          (o = null == (r = j.current) ? void 0 : r.contains) &&
                          o.call(r, e.target)) ||
                        k({ type: 1 }))));
              },
              !0
            ),
              (0, p.O)(
                U.resolveContainers,
                (e, t) => {
                  k({ type: 1 }),
                    (0, x.sP)(t, x.tJ.Loose) ||
                      (e.preventDefault(), null == w || w.focus());
                },
                0 === g
              );
            let G = (0, s.z)((e) => {
                k({ type: 1 });
                let t = e
                  ? e instanceof HTMLElement
                    ? e
                    : "current" in e && e.current instanceof HTMLElement
                    ? e.current
                    : w
                  : w;
                null == t || t.focus();
              }),
              Y = (0, i.useMemo)(() => ({ close: G, isPortalled: I }), [G, I]),
              Z = (0, i.useMemo)(() => ({ open: 0 === g, close: G }), [g, G]);
            return i.createElement(
              N.Provider,
              { value: null },
              i.createElement(
                A.Provider,
                { value: y },
                i.createElement(
                  D.Provider,
                  { value: Y },
                  i.createElement(
                    b.up,
                    { value: (0, O.E)(g, { 0: b.ZM.Open, 1: b.ZM.Closed }) },
                    i.createElement(
                      q,
                      null,
                      (0, P.sY)({
                        ourProps: { ref: c },
                        theirProps: o,
                        slot: Z,
                        defaultTag: "div",
                        name: "Popover",
                      }),
                      i.createElement(U.MainTreeNode, null)
                    )
                  )
                )
              )
            );
          }),
          {
            Button: (0, P.yV)(function (e, t) {
              let n = (0, l.M)(),
                { id: r = "headlessui-popover-button-".concat(n), ...o } = e,
                [a, u] = k("Popover.Button"),
                { isPortalled: c } = R("Popover.Button"),
                f = (0, i.useRef)(null),
                p = "headlessui-focus-sentinel-".concat((0, l.M)()),
                m = B(),
                b = null == m ? void 0 : m.closeOthers,
                E = null !== (0, i.useContext)(N);
              (0, i.useEffect)(() => {
                if (!E)
                  return (
                    u({ type: 3, buttonId: r }),
                    () => {
                      u({ type: 3, buttonId: null });
                    }
                  );
              }, [E, r, u]);
              let [M] = (0, i.useState)(() => Symbol()),
                T = (0, h.T)(
                  f,
                  t,
                  E
                    ? null
                    : (e) => {
                        if (e) a.buttons.current.push(M);
                        else {
                          let e = a.buttons.current.indexOf(M);
                          -1 !== e && a.buttons.current.splice(e, 1);
                        }
                        a.buttons.current.length > 1 &&
                          console.warn(
                            "You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."
                          ),
                          e && u({ type: 2, button: e });
                      }
                ),
                j = (0, h.T)(f, t),
                A = (0, d.i)(f),
                D = (0, s.z)((e) => {
                  var t, n, r;
                  if (E) {
                    if (1 === a.popoverState) return;
                    switch (e.key) {
                      case S.R.Space:
                      case S.R.Enter:
                        e.preventDefault(),
                          null == (n = (t = e.target).click) || n.call(t),
                          u({ type: 1 }),
                          null == (r = a.button) || r.focus();
                    }
                  } else
                    switch (e.key) {
                      case S.R.Space:
                      case S.R.Enter:
                        e.preventDefault(),
                          e.stopPropagation(),
                          1 === a.popoverState && (null == b || b(a.buttonId)),
                          u({ type: 0 });
                        break;
                      case S.R.Escape:
                        if (0 !== a.popoverState)
                          return null == b ? void 0 : b(a.buttonId);
                        if (
                          !f.current ||
                          (null != A &&
                            A.activeElement &&
                            !f.current.contains(A.activeElement))
                        )
                          return;
                        e.preventDefault(), e.stopPropagation(), u({ type: 1 });
                    }
                }),
                I = (0, s.z)((e) => {
                  E || (e.key === S.R.Space && e.preventDefault());
                }),
                C = (0, s.z)((t) => {
                  var n, r;
                  (0, w.P)(t.currentTarget) ||
                    e.disabled ||
                    (E
                      ? (u({ type: 1 }), null == (n = a.button) || n.focus())
                      : (t.preventDefault(),
                        t.stopPropagation(),
                        1 === a.popoverState && (null == b || b(a.buttonId)),
                        u({ type: 0 }),
                        null == (r = a.button) || r.focus()));
                }),
                F = (0, s.z)((e) => {
                  e.preventDefault(), e.stopPropagation();
                }),
                L = 0 === a.popoverState,
                _ = (0, i.useMemo)(() => ({ open: L }), [L]),
                z = (0, v.f)(e, f),
                W = E
                  ? { ref: j, type: z, onKeyDown: D, onClick: C }
                  : {
                      ref: T,
                      id: a.buttonId,
                      type: z,
                      "aria-expanded": 0 === a.popoverState,
                      "aria-controls": a.panel ? a.panelId : void 0,
                      onKeyDown: D,
                      onKeyUp: I,
                      onClick: C,
                      onMouseDown: F,
                    },
                H = (0, y.l)(),
                V = (0, s.z)(() => {
                  let e = a.panel;
                  e &&
                    (0, O.E)(H.current, {
                      [y.N.Forwards]: () => (0, x.jA)(e, x.TO.First),
                      [y.N.Backwards]: () => (0, x.jA)(e, x.TO.Last),
                    }) === x.fE.Error &&
                    (0, x.jA)(
                      (0, x.GO)().filter(
                        (e) => "true" !== e.dataset.headlessuiFocusGuard
                      ),
                      (0, O.E)(H.current, {
                        [y.N.Forwards]: x.TO.Next,
                        [y.N.Backwards]: x.TO.Previous,
                      }),
                      { relativeTo: a.button }
                    );
                });
              return i.createElement(
                i.Fragment,
                null,
                (0, P.sY)({
                  ourProps: W,
                  theirProps: o,
                  slot: _,
                  defaultTag: "button",
                  name: "Popover.Button",
                }),
                L &&
                  !E &&
                  c &&
                  i.createElement(g._, {
                    id: p,
                    features: g.A.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: V,
                  })
              );
            }),
            Overlay: (0, P.yV)(function (e, t) {
              let n = (0, l.M)(),
                { id: r = "headlessui-popover-overlay-".concat(n), ...o } = e,
                [{ popoverState: a }, u] = k("Popover.Overlay"),
                c = (0, h.T)(t),
                f = (0, b.oJ)(),
                p = null !== f ? (f & b.ZM.Open) === b.ZM.Open : 0 === a,
                d = (0, s.z)((e) => {
                  if ((0, w.P)(e.currentTarget)) return e.preventDefault();
                  u({ type: 1 });
                }),
                v = (0, i.useMemo)(() => ({ open: 0 === a }), [a]);
              return (0,
              P.sY)({ ourProps: { ref: c, id: r, "aria-hidden": !0, onClick: d }, theirProps: o, slot: v, defaultTag: "div", features: F, visible: p, name: "Popover.Overlay" });
            }),
            Panel: (0, P.yV)(function (e, t) {
              let n = (0, l.M)(),
                {
                  id: r = "headlessui-popover-panel-".concat(n),
                  focus: o = !1,
                  ...a
                } = e,
                [u, f] = k("Popover.Panel"),
                { close: p, isPortalled: v } = R("Popover.Panel"),
                m = "headlessui-focus-sentinel-before-".concat((0, l.M)()),
                w = "headlessui-focus-sentinel-after-".concat((0, l.M)()),
                E = (0, i.useRef)(null),
                M = (0, h.T)(E, t, (e) => {
                  f({ type: 4, panel: e });
                }),
                T = (0, d.i)(E),
                j = (0, P.Y2)();
              (0, c.e)(
                () => (
                  f({ type: 5, panelId: r }),
                  () => {
                    f({ type: 5, panelId: null });
                  }
                ),
                [r, f]
              );
              let A = (0, b.oJ)(),
                D =
                  null !== A
                    ? (A & b.ZM.Open) === b.ZM.Open
                    : 0 === u.popoverState,
                I = (0, s.z)((e) => {
                  var t;
                  if (e.key === S.R.Escape) {
                    if (
                      0 !== u.popoverState ||
                      !E.current ||
                      (null != T &&
                        T.activeElement &&
                        !E.current.contains(T.activeElement))
                    )
                      return;
                    e.preventDefault(),
                      e.stopPropagation(),
                      f({ type: 1 }),
                      null == (t = u.button) || t.focus();
                  }
                });
              (0, i.useEffect)(() => {
                var t;
                e.static ||
                  (1 === u.popoverState &&
                    (null == (t = e.unmount) || t) &&
                    f({ type: 4, panel: null }));
              }, [u.popoverState, e.unmount, e.static, f]),
                (0, i.useEffect)(() => {
                  if (u.__demoMode || !o || 0 !== u.popoverState || !E.current)
                    return;
                  let e = null == T ? void 0 : T.activeElement;
                  E.current.contains(e) || (0, x.jA)(E.current, x.TO.First);
                }, [u.__demoMode, o, E, u.popoverState]);
              let B = (0, i.useMemo)(
                  () => ({ open: 0 === u.popoverState, close: p }),
                  [u, p]
                ),
                C = {
                  ref: M,
                  id: r,
                  onKeyDown: I,
                  onBlur:
                    o && 0 === u.popoverState
                      ? (e) => {
                          var t, n, r, o, i;
                          let a = e.relatedTarget;
                          a &&
                            E.current &&
                            ((null != (t = E.current) && t.contains(a)) ||
                              (f({ type: 1 }),
                              ((null !=
                                (r =
                                  null == (n = u.beforePanelSentinel.current)
                                    ? void 0
                                    : n.contains) &&
                                r.call(n, a)) ||
                                (null !=
                                  (i =
                                    null == (o = u.afterPanelSentinel.current)
                                      ? void 0
                                      : o.contains) &&
                                  i.call(o, a))) &&
                                a.focus({ preventScroll: !0 })));
                        }
                      : void 0,
                  tabIndex: -1,
                },
                F = (0, y.l)(),
                _ = (0, s.z)(() => {
                  let e = E.current;
                  e &&
                    (0, O.E)(F.current, {
                      [y.N.Forwards]: () => {
                        var t;
                        (0, x.jA)(e, x.TO.First) === x.fE.Error &&
                          (null == (t = u.afterPanelSentinel.current) ||
                            t.focus());
                      },
                      [y.N.Backwards]: () => {
                        var e;
                        null == (e = u.button) ||
                          e.focus({ preventScroll: !0 });
                      },
                    });
                }),
                z = (0, s.z)(() => {
                  let e = E.current;
                  e &&
                    (0, O.E)(F.current, {
                      [y.N.Forwards]: () => {
                        var e;
                        if (!u.button) return;
                        let t = (0, x.GO)(),
                          n = t.indexOf(u.button),
                          r = t.slice(0, n + 1),
                          o = [...t.slice(n + 1), ...r];
                        for (let t of o.slice())
                          if (
                            "true" === t.dataset.headlessuiFocusGuard ||
                            (null != (e = u.panel) && e.contains(t))
                          ) {
                            let e = o.indexOf(t);
                            -1 !== e && o.splice(e, 1);
                          }
                        (0, x.jA)(o, x.TO.First, { sorted: !1 });
                      },
                      [y.N.Backwards]: () => {
                        var t;
                        (0, x.jA)(e, x.TO.Previous) === x.fE.Error &&
                          (null == (t = u.button) || t.focus());
                      },
                    });
                });
              return i.createElement(
                N.Provider,
                { value: r },
                D &&
                  v &&
                  i.createElement(g._, {
                    id: m,
                    ref: u.beforePanelSentinel,
                    features: g.A.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: _,
                  }),
                (0, P.sY)({
                  mergeRefs: j,
                  ourProps: C,
                  theirProps: a,
                  slot: B,
                  defaultTag: "div",
                  features: L,
                  visible: D,
                  name: "Popover.Panel",
                }),
                D &&
                  v &&
                  i.createElement(g._, {
                    id: w,
                    ref: u.afterPanelSentinel,
                    features: g.A.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: z,
                  })
              );
            }),
            Group: (0, P.yV)(function (e, t) {
              let n = (0, i.useRef)(null),
                r = (0, h.T)(n, t),
                [o, a] = (0, i.useState)([]),
                u = (0, m.H)(),
                l = (0, s.z)((e) => {
                  a((t) => {
                    let n = t.indexOf(e);
                    if (-1 !== n) {
                      let e = t.slice();
                      return e.splice(n, 1), e;
                    }
                    return t;
                  });
                }),
                c = (0, s.z)((e) => (a((t) => [...t, e]), () => l(e))),
                f = (0, s.z)(() => {
                  var e;
                  let t = (0, E.r)(n);
                  if (!t) return !1;
                  let r = t.activeElement;
                  return (
                    !!(null != (e = n.current) && e.contains(r)) ||
                    o.some((e) => {
                      var n, o;
                      return (
                        (null == (n = t.getElementById(e.buttonId.current))
                          ? void 0
                          : n.contains(r)) ||
                        (null == (o = t.getElementById(e.panelId.current))
                          ? void 0
                          : o.contains(r))
                      );
                    })
                  );
                }),
                p = (0, s.z)((e) => {
                  for (let t of o) t.buttonId.current !== e && t.close();
                }),
                d = (0, i.useMemo)(
                  () => ({
                    registerPopover: c,
                    unregisterPopover: l,
                    isFocusWithinPopoverGroup: f,
                    closeOthers: p,
                    mainTreeNodeRef: u.mainTreeNodeRef,
                  }),
                  [c, l, f, p, u.mainTreeNodeRef]
                ),
                v = (0, i.useMemo)(() => ({}), []);
              return i.createElement(
                I.Provider,
                { value: d },
                (0, P.sY)({
                  ourProps: { ref: r },
                  theirProps: e,
                  slot: v,
                  defaultTag: "div",
                  name: "Popover.Group",
                }),
                i.createElement(u.MainTreeNode, null)
              );
            }),
          }
        );
    },
  },
]);
