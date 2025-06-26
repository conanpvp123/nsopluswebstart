"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9714],
  {
    6656: function (e, t, n) {
      n.d(t, {
        k: function () {
          return i;
        },
      });
      var r = n(70);
      let i = {
        getMasterRanking: (e) =>
          r.Z.get("/ranking/master?server_id=".concat(e)),
        getWealthRanking: () => r.Z.get("/ranking/wealth"),
        getClanRanking: (e) => r.Z.get("/ranking/clan?server_id=".concat(e)),
      };
    },
    7362: function (e, t, n) {
      var r = n(3827),
        i = n(6273),
        a = n(129),
        o = n(4090);
      t.Z = (e) => {
        let {
          label: t,
          size: n = "md",
          value: l,
          button: s,
          options: u,
          error: c,
          touched: d,
          onChange: f,
        } = e;
        return (
          void 0 !== d &&
            d &&
            !l &&
            (c =
              "Vui l\xf2ng chọn " +
              (t ? (null == t ? void 0 : t.toLowerCase()) : "")),
          (0, r.jsxs)("div", {
            className: "".concat(t ? "mb-4" : ""),
            children: [
              t &&
                (0, r.jsx)("div", {
                  className:
                    "flex content-center items-center justify-between text-sm",
                  children: (0, r.jsx)("label", {
                    className:
                      "block font-medium text-gray-700 dark:text-gray-200",
                    children: t,
                  }),
                }),
              (0, r.jsxs)("div", {
                className: "relative ".concat(t ? "mt-1" : ""),
                children: [
                  (0, r.jsxs)(i.R, {
                    as: "div",
                    className: "relative",
                    onChange: f,
                    defaultValue: l,
                    disabled: 0 === u.length,
                    children: [
                      (0, r.jsx)(i.R.Button, {
                        as: "div",
                        className: "inline-flex w-full",
                        children: (0, r.jsxs)("button", {
                          className:
                            "z-10 relative w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 inline-flex items-center text-left cursor-default rounded-md text-sm "
                              .concat(
                                "xs" === n
                                  ? "ps-3 gap-x-2.5 px-1.5 py-1 pe-8"
                                  : "sm" === n
                                  ? "ps-4 gap-x-2 px-2 py-1.5 pe-9"
                                  : "gap-x-2.5 px-3.5 py-2.5 pe-11",
                                " shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1.5 "
                              )
                              .concat(
                                c
                                  ? "ring-red-500 focus:ring-red-500 dark:focus:ring-red-400"
                                  : "focus:ring-primary-500 dark:focus:ring-primary-400"
                              ),
                          type: "button",
                          children: [
                            (0, r.jsx)("p", {
                              className: "break-words truncate",
                              children: (() => {
                                if (0 === u.length)
                                  return "Chưa c\xf3 ".concat(
                                    null == t ? void 0 : t.toLowerCase()
                                  );
                                if (l) {
                                  var e, n;
                                  return null !==
                                    (n =
                                      null ===
                                        (e = u.find((e) => e.value == l)) ||
                                      void 0 === e
                                        ? void 0
                                        : e.label) && void 0 !== n
                                    ? n
                                    : "Kh\xf4ng x\xe1c định";
                                }
                                return "Chọn ".concat(
                                  null == t ? void 0 : t.toLowerCase()
                                );
                              })(),
                            }),
                            (0, r.jsx)("span", {
                              className:
                                "absolute inset-y-0 end-0 flex items-center pointer-events-none ".concat(
                                  "xs" === n
                                    ? "px-2"
                                    : "sm" === n
                                    ? "px-2.5"
                                    : "px-3.5"
                                ),
                              children: (0, r.jsx)("span", {
                                className:
                                  "icon-[bx--chevron-down] flex-shrink-0 text-gray-400 dark:text-gray-500 text-gray-500 dark:text-gray-400 h-5 w-5",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)(a.u, {
                        enter: "transition duration-200 ease-out",
                        enterFrom: "transform scale-95 opacity-0",
                        enterTo: "transform scale-100 opacity-100",
                        leave: "transition duration-175 ease-out",
                        leaveFrom: "transform scale-100 opacity-100",
                        leaveTo: "transform scale-95 opacity-0",
                        className: "absolute z-20 w-full py-1 mt-1",
                        children: (0, r.jsx)(i.R.Options, {
                          className:
                            "relative focus:outline-none overflow-y-auto scroll-py-1 ring-1 ring-gray-200 dark:ring-gray-700 rounded-md shadow-lg bg-white dark:bg-gray-800 p-1 max-h-60",
                          children: u.map((e) =>
                            (0, r.jsx)(
                              i.R.Option,
                              {
                                value: e.value,
                                as: o.Fragment,
                                disabled: e.unavailable,
                                children: (t) => {
                                  let { active: n, selected: i } = t;
                                  return (0, r.jsxs)("li", {
                                    className:
                                      "cursor-default select-none relative flex items-center justify-between gap-1 rounded-md px-2 py-1.5 text-sm text-gray-900 dark:text-white ".concat(
                                        n ? "bg-gray-100 dark:bg-gray-900" : ""
                                      ),
                                    children: [
                                      (0, r.jsx)("div", {
                                        className:
                                          "flex items-center gap-2 min-w-0",
                                        children: (0, r.jsx)("span", {
                                          className: "truncate ".concat(
                                            i ? "font-medium" : ""
                                          ),
                                          children: e.label,
                                        }),
                                      }),
                                      i &&
                                        (0, r.jsx)("span", {
                                          className:
                                            "absolute inset-y-0 end-0 flex items-center pe-2",
                                          children: (0, r.jsx)("span", {
                                            className:
                                              "icon-[bx--check] h-5 w-5 text-gray-900 dark:text-white flex-shrink-0",
                                          }),
                                        }),
                                    ],
                                  });
                                },
                              },
                              e.value
                            )
                          ),
                        }),
                      }),
                    ],
                  }),
                  c
                    ? (0, r.jsx)("p", {
                        className:
                          "mt-2 text-red-500 dark:text-red-400 text-sm",
                        children: c,
                      })
                    : null,
                ],
              }),
            ],
          })
        );
      };
    },
    1398: function (e, t, n) {
      n.r(t);
      var r = n(3827),
        i = n(8792);
      t.default = (e) => {
        let { title: t, description: n, playButton: a } = e;
        return (0, r.jsxs)("div", {
          className: "flex justify-between items-center capitalize mb-4",
          children: [
            (0, r.jsxs)("div", {
              children: [
                (0, r.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    (0, r.jsx)("span", {
                      className:
                        "icon-[bxs--circle] w-4 h-4 text-primary-500 dark:text-primary-400 md:mr-4 mr-2",
                    }),
                    (0, r.jsx)("p", {
                      className:
                        "md:text-2xl text-xl font-bold text-gray-700 dark:text-gray-300",
                      children: t,
                    }),
                  ],
                }),
                (0, r.jsx)("p", {
                  className:
                    "break-words text-gray-500 dark:text-gray-400 md:text-lg text-sm md:mt-1",
                  children: n,
                }),
              ],
            }),
            a &&
              (0, r.jsx)("div", {
                className: "flex items-center ml-4",
                children: (0, r.jsxs)(i.default, {
                  href: "/download",
                  className:
                    "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center",
                  children: [
                    (0, r.jsx)("span", {
                      className: "icon-[bx--play] flex-shrink-0 h-5 w-5",
                      "aria-hidden": "true",
                    }),
                    "Tải Game",
                  ],
                }),
              }),
          ],
        });
      };
    },
    152: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
      });
      let r = [
        { label: "Nso+ 1", value: 1 },
        { label: "Nso+ 2", value: 2 },
      ];
    },
    7409: function (e, t, n) {
      n.d(t, {
        R: function () {
          return i;
        },
      });
      var r,
        i =
          (((r = i || {}).Space = " "),
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
    2381: function (e, t, n) {
      n.d(t, {
        M: function () {
          return s;
        },
      });
      var r,
        i = n(4090),
        a = n(1879),
        o = n(9790),
        l = n(2144);
      let s =
        null != (r = i.useId)
          ? r
          : function () {
              let e = (0, l.H)(),
                [t, n] = i.useState(e ? () => a.O.nextId() : null);
              return (
                (0, o.e)(() => {
                  null === t && n(a.O.nextId());
                }, [t]),
                null != t ? "" + t : void 0
              );
            };
    },
    1679: function (e, t, n) {
      n.d(t, {
        O: function () {
          return u;
        },
      });
      var r = n(4090),
        i = n(8803),
        a = n(5256),
        o = n(5235);
      function l(e, t, n) {
        let i = (0, o.E)(t);
        (0, r.useEffect)(() => {
          function t(e) {
            i.current(e);
          }
          return (
            document.addEventListener(e, t, n),
            () => document.removeEventListener(e, t, n)
          );
        }, [e, n]);
      }
      var s = n(1372);
      function u(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          o = (0, r.useRef)(!1);
        function u(n, r) {
          if (!o.current || n.defaultPrevented) return;
          let a = r(n);
          if (null !== a && a.getRootNode().contains(a) && a.isConnected) {
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
                (null != e && e.contains(a)) ||
                (n.composed && n.composedPath().includes(e))
              )
                return;
            }
            return (
              (0, i.sP)(a, i.tJ.Loose) ||
                -1 === a.tabIndex ||
                n.preventDefault(),
              t(n, a)
            );
          }
        }
        (0, r.useEffect)(() => {
          requestAnimationFrame(() => {
            o.current = n;
          });
        }, [n]);
        let c = (0, r.useRef)(null);
        l(
          "pointerdown",
          (e) => {
            var t, n;
            o.current &&
              (c.current =
                (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                  ? void 0
                  : n[0]) || e.target);
          },
          !0
        ),
          l(
            "mousedown",
            (e) => {
              var t, n;
              o.current &&
                (c.current =
                  (null ==
                  (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                    ? void 0
                    : n[0]) || e.target);
            },
            !0
          ),
          l(
            "click",
            (e) => {
              (0, a.tq)() ||
                (c.current && (u(e, () => c.current), (c.current = null)));
            },
            !0
          ),
          l(
            "touchend",
            (e) =>
              u(e, () => (e.target instanceof HTMLElement ? e.target : null)),
            !0
          ),
          (0, s.s)(
            "blur",
            (e) =>
              u(e, () =>
                window.document.activeElement instanceof HTMLIFrameElement
                  ? window.document.activeElement
                  : null
              ),
            !0
          );
      }
    },
    1372: function (e, t, n) {
      n.d(t, {
        s: function () {
          return a;
        },
      });
      var r = n(4090),
        i = n(5235);
      function a(e, t, n) {
        let a = (0, i.E)(t);
        (0, r.useEffect)(() => {
          function t(e) {
            a.current(e);
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
          return a;
        },
        _: function () {
          return o;
        },
      });
      var r,
        i = n(8318),
        a =
          (((r = a || {})[(r.None = 1)] = "None"),
          (r[(r.Focusable = 2)] = "Focusable"),
          (r[(r.Hidden = 4)] = "Hidden"),
          r);
      let o = (0, i.yV)(function (e, t) {
        var n;
        let { features: r = 1, ...a } = e,
          o = {
            ref: t,
            "aria-hidden":
              (2 & r) == 2 || (null != (n = a["aria-hidden"]) ? n : void 0),
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
        i.sY)({ ourProps: o, theirProps: a, slot: {}, defaultTag: "div", name: "Hidden" });
      });
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
          return w;
        },
        EO: function () {
          return E;
        },
        GO: function () {
          return v;
        },
        TO: function () {
          return f;
        },
        fE: function () {
          return m;
        },
        jA: function () {
          return N;
        },
        sP: function () {
          return p;
        },
        tJ: function () {
          return g;
        },
        wI: function () {
          return h;
        },
        z2: function () {
          return y;
        },
      });
      var r,
        i,
        a,
        o,
        l,
        s = n(5205),
        u = n(2640),
        c = n(4819);
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
        m =
          (((i = m || {})[(i.Error = 0)] = "Error"),
          (i[(i.Overflow = 1)] = "Overflow"),
          (i[(i.Success = 2)] = "Success"),
          (i[(i.Underflow = 3)] = "Underflow"),
          i),
        x =
          (((a = x || {})[(a.Previous = -1)] = "Previous"),
          (a[(a.Next = 1)] = "Next"),
          a);
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
        (((o = g || {})[(o.Strict = 0)] = "Strict"),
        (o[(o.Loose = 1)] = "Loose"),
        o);
      function p(e) {
        var t;
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (
          e !== (null == (t = (0, c.r)(e)) ? void 0 : t.body) &&
          (0, u.E)(n, {
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
      function h(e) {
        let t = (0, c.r)(e);
        (0, s.k)().nextFrame(() => {
          t && !p(t.activeElement, 0) && w(e);
        });
      }
      var b =
        (((l = b || {})[(l.Keyboard = 0)] = "Keyboard"),
        (l[(l.Mouse = 1)] = "Mouse"),
        l);
      function w(e) {
        null == e || e.focus({ preventScroll: !0 });
      }
      function y(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (e) => e;
        return e.slice().sort((e, n) => {
          let r = t(e),
            i = t(n);
          if (null === r || null === i) return 0;
          let a = r.compareDocumentPosition(i);
          return a & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : a & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
        });
      }
      function E(e, t) {
        return N(v(), t, { relativeTo: e });
      }
      function N(e, t) {
        var n, r, i;
        let {
            sorted: a = !0,
            relativeTo: o = null,
            skipElements: l = [],
          } = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {},
          s = Array.isArray(e)
            ? e.length > 0
              ? e[0].ownerDocument
              : document
            : e.ownerDocument,
          u = Array.isArray(e) ? (a ? y(e) : e) : v(e);
        l.length > 0 && u.length > 1 && (u = u.filter((e) => !l.includes(e))),
          (o = null != o ? o : s.activeElement);
        let c = (() => {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          d = (() => {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, u.indexOf(o)) - 1;
            if (4 & t) return Math.max(0, u.indexOf(o)) + 1;
            if (8 & t) return u.length - 1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          f = 32 & t ? { preventScroll: !0 } : {},
          m = 0,
          x = u.length,
          g;
        do {
          if (m >= x || m + x <= 0) return 0;
          let e = d + m;
          if (16 & t) e = (e + x) % x;
          else {
            if (e < 0) return 3;
            if (e >= x) return 1;
          }
          null == (g = u[e]) || g.focus(f), (m += c);
        } while (g !== s.activeElement);
        return (
          6 & t &&
            null !=
              (i =
                null == (r = null == (n = g) ? void 0 : n.matches)
                  ? void 0
                  : r.call(n, "textarea,input")) &&
            i &&
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
          return i;
        },
      });
      var r = n(1879);
      function i(e) {
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
      function i() {
        return r() || /Android/gi.test(window.navigator.userAgent);
      }
      n.d(t, {
        gn: function () {
          return r;
        },
        tq: function () {
          return i;
        },
      });
    },
  },
]);
