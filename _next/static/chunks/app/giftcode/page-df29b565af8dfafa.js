(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2971],
  {
    1638: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 697)),
        Promise.resolve().then(i.bind(i, 4460)),
        Promise.resolve().then(i.bind(i, 9003)),
        Promise.resolve().then(i.bind(i, 1398));
    },
    5401: function (e, t, i) {
      "use strict";
      i.d(t, {
        C: function () {
          return a;
        },
      });
      var r = i(70);
      let a = {
        getPublicGiftcode: () => r.Z.get("/giftcode/public"),
        getItemTemplates: () => r.Z.get("/items/templates"),
      };
    },
    697: function (e, t, i) {
      "use strict";
      i.r(t);
      var r = i(3827),
        a = i(1565),
        s = i(5950),
        l = i(703),
        n = i(3405);
      t.default = () => {
        let e = (0, a.useModalData)("currency-preview");
        return (0, r.jsx)(n.Z, {
          modalKey: "currency-preview",
          sizeClass: "max-w-[220px] sm:max-w-[220px]",
          children: (0, r.jsxs)("div", {
            className: "p-4 sm:p-4",
            children: [
              (0, r.jsx)("div", {
                className:
                  "relative select-none transition-all rounded-xl mx-auto",
                style:
                  (null == e ? void 0 : e.icon) === "yen"
                    ? { maxWidth: 36, maxHeight: 50 }
                    : { maxWidth: 80, maxHeight: 80 },
                children: (0, r.jsx)(l.default, {
                  src: "https://cdn.nsoplus.com/items/".concat(
                    (null == e ? void 0 : e.icon) === "gold" ||
                      (null == e ? void 0 : e.icon) === "coin"
                      ? 7085
                      : (null == e ? void 0 : e.icon) === "yen"
                      ? 493
                      : 0,
                    ".png"
                  ),
                  width: 240,
                  height: 240,
                  alt: "image",
                  loading: "lazy",
                  "data-nuxt-img": "",
                  className: "object-cover select-none",
                  style: { borderRadius: "inherit" },
                }),
              }),
              (0, r.jsxs)("div", {
                className: "flex flex-col items-center mt-4",
                children: [
                  (0, r.jsx)("p", {
                    className:
                      "break-words text-gray-500 dark:text-gray-400 font-bold text-center leading-5",
                    children:
                      (null == e ? void 0 : e.icon) === "gold"
                        ? "Lượng"
                        : (null == e ? void 0 : e.icon) === "yen"
                        ? "Y\xean"
                        : "Xu",
                  }),
                  (0, r.jsxs)("span", {
                    className:
                      "inline-flex items-center rounded-md text-sm py-1 bg-primary-500 dark:bg-primary-400 text-white dark:text-gray-900 mt-4 px-3 font-semibold",
                    children: [
                      "x ",
                      (0, s.xG)((null == e ? void 0 : e.amount) || 1),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    4460: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return u;
          },
        });
      var r = i(3827),
        a = i(5401),
        s = i(6027),
        l = () =>
          (0, r.jsxs)("tr", {
            className: "animate-pulse",
            children: [
              (0, r.jsx)("td", {
                className: "whitespace-nowrap px-3 py-4",
                children: (0, r.jsx)("div", {
                  className: "h-5 bg-gray-300 dark:bg-gray-700 rounded",
                }),
              }),
              (0, r.jsx)("td", {
                className: "whitespace-nowrap px-3 py-4",
                children: (0, r.jsx)("div", {
                  className: "flex items-center gap-2",
                  children: [void 0, void 0, void 0].map((e, t) =>
                    (0, r.jsx)(
                      "div",
                      {
                        className:
                          "h-11 w-11 bg-gray-300 dark:bg-gray-700 rounded-md",
                      },
                      t
                    )
                  ),
                }),
              }),
            ],
          }),
        n = i(5105),
        d = i(1565),
        o = i(5950),
        c = i(703),
        m = (e) => {
          let { amount: t, icon: i } = e,
            { setModal: a } = (0, d.useModal)();
          return (0, r.jsxs)("div", {
            className:
              "relative inline-block hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer rounded-xl",
            onClick: () => {
              a("currency-preview", { amount: t, icon: i });
            },
            children: [
              (0, r.jsx)("div", {
                className: "relative select-none transition-all rounded-xl p-1",
                style:
                  "yen" === i
                    ? { aspectRatio: "1 / 1", maxWidth: 36, maxHeight: 50 }
                    : { aspectRatio: "1 / 1", maxWidth: 55, maxHeight: 55 },
                children: (0, r.jsx)(c.default, {
                  src: "https://cdn.nsoplus.com/items/".concat(
                    "gold" === i || "coin" === i ? 7085 : "yen" === i ? 493 : 0,
                    ".png"
                  ),
                  width: 110,
                  height: 110,
                  alt: "Currency",
                  className: "object-cover select-none",
                  style: { borderRadius: "inherit" },
                }),
              }),
              (0, r.jsx)("div", {
                className:
                  "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
                children: (0, r.jsx)("p", {
                  className: "break-words font-bold text-center",
                  style: { color: "rgb(255, 255, 255)", fontSize: 10 },
                  children: (0, o.uf)(t) || 1,
                }),
              }),
            ],
          });
        },
        x = (e) => {
          var t;
          let { gift: i } = e;
          return (0, r.jsxs)("tr", {
            children: [
              (0, r.jsx)("td", {
                className:
                  "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm",
                children: (0, r.jsx)("p", {
                  className: "break-words font-semibold uppercase",
                  children:
                    (null == i
                      ? void 0
                      : null === (t = i.server) || void 0 === t
                      ? void 0
                      : t.name) || "ALL",
                }),
              }),
              (0, r.jsx)("td", {
                className:
                  "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm",
                children: (0, r.jsx)("p", {
                  className: "break-words font-semibold uppercase",
                  children: i.code,
                }),
              }),
              (0, r.jsx)("td", {
                className:
                  "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm",
                children: (0, r.jsxs)("div", {
                  className:
                    "flex items-center flex-wrap gap-2 sm:min-w-[auto] min-w-[250px]",
                  children: [
                    i.coin > 0 &&
                      (0, r.jsx)(m, { amount: i.coin, icon: "coin" }),
                    i.yen > 0 && (0, r.jsx)(m, { amount: i.yen, icon: "yen" }),
                    i.gold > 0 &&
                      (0, r.jsx)(m, { amount: i.gold, icon: "gold" }),
                    i.items.map((e, t) => (0, r.jsx)(n.Z, { item: e }, t)),
                  ],
                }),
              }),
            ],
          });
        },
        u = () => {
          let { data: e, isLoading: t } = (0, s.Z)("/api/giftcode", {
            revalidateOnFocus: !1,
            revalidateOnReconnect: !1,
            dedupingInterval: 36e5,
            fetcher: () => a.C.getPublicGiftcode(),
          });
          return (0, r.jsxs)("table", {
            className:
              "min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700",
            children: [
              (0, r.jsx)("thead", {
                children: (0, r.jsxs)("tr", {
                  children: [
                    (0, r.jsx)("th", {
                      scope: "col",
                      className:
                        "text-left rtl:text-right whitespace-nowrap px-3 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                      children: (0, r.jsx)("span", { children: "M\xe1y chủ" }),
                    }),
                    (0, r.jsx)("th", {
                      scope: "col",
                      className:
                        "text-left rtl:text-right whitespace-nowrap px-3 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                      children: (0, r.jsx)("span", { children: "M\xe3" }),
                    }),
                    (0, r.jsx)("th", {
                      scope: "col",
                      className:
                        "text-left rtl:text-right whitespace-nowrap px-3 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                      children: (0, r.jsx)("span", { children: "Phần thưởng" }),
                    }),
                  ],
                }),
              }),
              (0, r.jsxs)("tbody", {
                className: "divide-y divide-gray-200 dark:divide-gray-800",
                children: [
                  null == e
                    ? void 0
                    : e.map((e, t) => (0, r.jsx)(x, { gift: e }, t)),
                  t &&
                    !e &&
                    Array.from({ length: 5 }).map((e, t) =>
                      (0, r.jsx)(l, {}, t)
                    ),
                ],
              }),
            ],
          });
        };
    },
    5105: function (e, t, i) {
      "use strict";
      var r = i(3827),
        a = i(6457),
        s = i(1565),
        l = i(5950),
        n = i(703);
      t.Z = (e) => {
        let { item: t } = e,
          { getName: i, getIcon: d } = (0, a.Z)(),
          { setModal: o } = (0, s.useModal)();
        return (0, r.jsxs)("div", {
          className:
            "relative inline-block hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer rounded-xl",
          onClick: () => {
            o("item-preview", t);
          },
          children: [
            (0, r.jsx)("div", {
              className: "relative select-none transition-all rounded-xl p-1",
              style:
                12 == t.id
                  ? { aspectRatio: "1 / 1", maxWidth: 36, maxHeight: 50 }
                  : { maxWidth: 55, maxHeight: 55 },
              children:
                t.id &&
                (0, r.jsx)(n.default, {
                  src: "https://cdn.nsoplus.com/items/".concat(d(t.id), ".png"),
                  width: 110,
                  height: 110,
                  alt: i(t.id) || "Item",
                  className: "object-cover select-none",
                  style: { maxHeight: "50px" },
                }),
            }),
            (0, r.jsx)("div", {
              className:
                "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
              children:
                (null == t ? void 0 : t.quantity) > 1 &&
                (0, r.jsx)("p", {
                  className: "break-words font-bold text-center",
                  style: { color: "rgb(255, 255, 255)", fontSize: 10 },
                  children: (0, l.uf)(null == t ? void 0 : t.quantity),
                }),
            }),
          ],
        });
      };
    },
    9003: function (e, t, i) {
      "use strict";
      i.r(t);
      var r = i(3827),
        a = i(6457),
        s = i(1565),
        l = i(5950),
        n = i(703),
        d = i(3405);
      t.default = () => {
        var e;
        let { getName: t, getIcon: i } = (0, a.Z)(),
          o = (0, s.useModalData)("item-preview");
        return (0, r.jsx)(d.Z, {
          modalKey: "item-preview",
          sizeClass: "max-w-[220px] sm:max-w-[220px]",
          children: (0, r.jsxs)("div", {
            className: "p-4 sm:p-4",
            children: [
              (0, r.jsx)("div", {
                className:
                  "relative select-none transition-all rounded-xl mx-auto",
                style:
                  (null == o ? void 0 : o.id) == 12
                    ? { aspectRatio: "1 / 1", maxWidth: 36, maxHeight: 50 }
                    : { maxWidth: 60, maxHeight: 60 },
                children:
                  (null == o ? void 0 : o.id) &&
                  (0, r.jsx)(n.default, {
                    src: "https://cdn.nsoplus.com/items/".concat(
                      i(null == o ? void 0 : o.id),
                      ".png"
                    ),
                    width: 240,
                    height: 240,
                    alt: "image",
                    loading: "lazy",
                    className: "object-cover select-none",
                    style:
                      (null == o ? void 0 : o.id) == 12
                        ? {}
                        : { maxHeight: 60 },
                  }),
              }),
              (0, r.jsxs)("div", {
                className: "flex flex-col items-center mt-4",
                children: [
                  (0, r.jsxs)("p", {
                    className:
                      "break-words text-gray-500 dark:text-gray-400 font-bold text-center leading-5",
                    children: [
                      t(
                        null !== (e = null == o ? void 0 : o.id) && void 0 !== e
                          ? e
                          : -1
                      ) || "Vật phẩm",
                      " ",
                      (null == o ? void 0 : o.expire) &&
                      (null == o ? void 0 : o.expire) > 0
                        ? "(".concat(null == o ? void 0 : o.expire, " ng\xe0y)")
                        : "",
                    ],
                  }),
                  (0, r.jsxs)("span", {
                    className:
                      "inline-flex items-center rounded-md text-sm py-1 bg-primary-500 dark:bg-primary-400 text-white dark:text-gray-900 mt-4 px-3 font-semibold",
                    children: [
                      "x ",
                      (0, l.xG)((null == o ? void 0 : o.quantity) || 1),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    1398: function (e, t, i) {
      "use strict";
      i.r(t);
      var r = i(3827),
        a = i(8792);
      t.default = (e) => {
        let { title: t, description: i, playButton: s } = e;
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
                  children: i,
                }),
              ],
            }),
            s &&
              (0, r.jsx)("div", {
                className: "flex items-center ml-4",
                children: (0, r.jsxs)(a.default, {
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
    3405: function (e, t, i) {
      "use strict";
      var r = i(3827),
        a = i(1565),
        s = i(129),
        l = i(5961),
        n = i(4090);
      t.Z = (e) => {
        let {
            modalKey: t,
            children: i,
            clickOverlayToClose: d = !0,
            sizeClass: o = "sm:max-w-lg",
            onDisable: c,
          } = e,
          { isModalOpen: m, disableModal: x } = (0, a.useModal)(),
          u = () => {
            d && (x(), c && c());
          };
        return (0, r.jsx)(s.u, {
          appear: !0,
          show: m(t),
          as: n.Fragment,
          children: (0, r.jsxs)(l.V, {
            onClose: () => {},
            onClick: u,
            className: "fixed inset-0 flex z-50",
            children: [
              (0, r.jsx)(s.u.Child, {
                as: n.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: (0, r.jsx)("div", {
                  className:
                    "fixed inset-0 transition-opacity bg-white/25 dark:bg-black/50 backdrop-blur",
                  onClick: u,
                }),
              }),
              (0, r.jsx)(s.u.Child, {
                as: n.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: (0, r.jsx)("div", {
                  className: "fixed inset-0 overflow-y-auto",
                  children: (0, r.jsx)("div", {
                    className:
                      "flex min-h-full sm:items-center justify-center text-center items-center p-4 sm:p-0",
                    children: (0, r.jsx)(l.V.Panel, {
                      className:
                        "relative text-left rtl:text-right flex flex-col overflow-visible bg-white dark:bg-gray-900 shadow-xl w-full rounded-lg sm:my-8 ".concat(
                          o
                        ),
                      children: i,
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },
    6027: function (e, t, i) {
      "use strict";
      var r = i(8016),
        a = i(3046);
      t.Z = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          [i, s] = (0, a.Z)(null != e ? e : "");
        return (0, r.ZP)(e, { onSuccess: s, fallbackData: i, ...t });
      };
    },
    6457: function (e, t, i) {
      "use strict";
      var r = i(5401),
        a = i(6027);
      t.Z = () => {
        let { data: e } = (0, a.Z)("/items/templates", {
          revalidateOnFocus: !1,
          revalidateOnReconnect: !1,
          dedupingInterval: 864e5,
          shouldRetryOnError: !1,
          fetcher: () => r.C.getItemTemplates(),
        });
        return {
          data: e,
          getItem: (t) => {
            try {
              return null == e ? void 0 : e.find((e) => e.id == t);
            } catch (e) {
              return null;
            }
          },
          getIcon: (t) => {
            try {
              var i, r;
              return null !==
                (r =
                  null == e
                    ? void 0
                    : null === (i = e.find((e) => e.id == t)) || void 0 === i
                    ? void 0
                    : i.icon) && void 0 !== r
                ? r
                : 0;
            } catch (e) {
              return null;
            }
          },
          getName: (t) => {
            try {
              var i;
              return null == e
                ? void 0
                : null === (i = e.find((e) => e.id == t)) || void 0 === i
                ? void 0
                : i.name;
            } catch (e) {
              return null;
            }
          },
        };
      };
    },
    1565: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          ModalProvider: function () {
            return l;
          },
          useModal: function () {
            return n;
          },
          useModalData: function () {
            return d;
          },
        });
      var r = i(3827),
        a = i(4090);
      let s = (0, a.createContext)(void 0),
        l = (e) => {
          let { children: t } = e,
            [i, l] = (0, a.useState)([]),
            [n, d] = (0, a.useState)({}),
            o = (e, t) => {
              d((i) => ({ ...i, [e]: t }));
            };
          return (0, r.jsx)(s.Provider, {
            value: {
              getData: function (e) {
                return n[e];
              },
              setModal: (e, t) => {
                e && (l([...i, e]), t && o(e, t));
              },
              setData: o,
              disableModal: () => {
                l(i.slice(0, -1));
              },
              isModalOpen: (e) => i.includes(e),
            },
            children: t,
          });
        },
        n = () => {
          let e = (0, a.useContext)(s);
          if (void 0 === e)
            throw Error("useModal must be used within a ModalProvider");
          return e;
        };
      function d(e) {
        let { getData: t } = n();
        return t(e);
      }
    },
  },
  function (e) {
    e.O(
      0,
      [8792, 5345, 8016, 129, 1749, 2370, 5311, 7478, 8069, 1744],
      function () {
        return e((e.s = 1638));
      }
    ),
      (_N_E = e.O());
  },
]);
