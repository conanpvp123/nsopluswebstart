(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1931, 1951],
  {
    5384: function (e, r, a) {
      Promise.resolve().then(a.t.bind(a, 5250, 23)),
        Promise.resolve().then(a.bind(a, 1398)),
        Promise.resolve().then(a.bind(a, 2978)),
        Promise.resolve().then(a.bind(a, 2951)),
        Promise.resolve().then(a.bind(a, 5149)),
        Promise.resolve().then(a.bind(a, 5128)),
        Promise.resolve().then(a.bind(a, 4365));
    },
    5149: function (e, r, a) {
      "use strict";
      a.r(r);
      var t = a(3827),
        s = a(7622),
        n = a(703),
        l = a(4090),
        i = a(8896);
      a(4199),
        (r.default = () => {
          let { getOrDefault: e, getSetting: r } = (0, s.Z)(),
            a = e("thumbnail-1", "/images/thumbnail/1.png"),
            d = e("thumbnail-2", "/images/thumbnail/2.png"),
            c = r("thumbnail-3"),
            o = r("thumbnail-4"),
            g = r("thumbnail-5"),
            m = (0, l.useMemo)(
              () =>
                [
                  { img: a, desc: "Thumbnail 1" },
                  { img: d, desc: "Thumbnail 2" },
                  { img: c, desc: "Thumbnail 3" },
                  { img: o, desc: "Thumbnail 4" },
                  { img: g, desc: "Thumbnail 5" },
                ].filter((e) => e.img),
              [a, d, c, o, g]
            );
          return (0, t.jsx)("div", {
            className: "w-full max-w-5xl mx-auto text-center",
            children: (0, t.jsx)(i.lr, {
              className:
                "relative select-none transition-all overflow-hidden rounded-xl shadow-md hover:shadow-lg",
              autoPlay: !0,
              infiniteLoop: !0,
              stopOnHover: !0,
              renderArrowPrev: (e, r, a) =>
                (0, t.jsx)("button", {
                  type: "button",
                  onClick: e,
                  disabled: !r,
                  "aria-label": a,
                  className:
                    "absolute top-1/2 left-0 z-10 p-1 -translate-y-1/2 text-white",
                  children: (0, t.jsx)("span", {
                    className: "icon-[bx--chevron-left] text-3xl lg:text-4xl",
                  }),
                }),
              renderArrowNext: (e, r, a) =>
                (0, t.jsx)("button", {
                  type: "button",
                  onClick: e,
                  disabled: !r,
                  "aria-label": a,
                  className:
                    "absolute top-1/2 right-0 z-10 p-1 -translate-y-1/2 text-white",
                  children: (0, t.jsx)("span", {
                    className: "icon-[bx--chevron-right] text-3xl lg:text-4xl",
                  }),
                }),
              showStatus: !1,
              showThumbs: !1,
              showIndicators: !1,
              children: m.map((e, r) =>
                (0, t.jsx)(
                  "div",
                  {
                    style: { aspectRatio: "16 / 9" },
                    children: (0, t.jsx)(n.default, {
                      className: "object-cover w-full h-full select-none",
                      style: { borderRadius: "inherit" },
                      src: e.img,
                      alt: e.desc,
                      width: 1024,
                      height: 598,
                    }),
                  },
                  r
                )
              ),
            }),
          });
        });
    },
    2951: function (e, r, a) {
      "use strict";
      a.r(r),
        a.d(r, {
          default: function () {
            return m;
          },
        });
      var t = a(3827),
        s = a(1992),
        n = a(5227),
        l = a(5950),
        i = a(703),
        d = a(8792);
      let c = (e) => {
        var r;
        let { post: a } = e;
        return (0, t.jsx)(d.default, {
          href: "/tin-tuc/".concat(a.slug),
          className: "xl:col-span-4 md:col-span-6 col-span-12",
          children: (0, t.jsxs)("div", {
            className:
              "relative transition-all overflow-hidden rounded-xl ring-gray-200 dark:ring-gray-800 dark:ring-1 ring-0 hover:ring-2 dark:hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 shadow-md hover:shadow-lg bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800",
            children: [
              (0, t.jsx)("div", {
                className: "p-0 sm:p-0",
                children: (0, t.jsx)("div", {
                  className: "relative select-none",
                  style: { aspectRatio: "16 / 9" },
                  children: (0, t.jsx)(i.default, {
                    src: a.thumbnail,
                    alt: "image",
                    loading: "lazy",
                    "data-nuxt-img": "",
                    className: "object-cover w-full h-full select-none",
                    style: { borderRadius: "inherit" },
                    width: 1e3,
                    height: 1e3,
                  }),
                }),
              }),
              (0, t.jsxs)("div", {
                className: "px-4 py-5 sm:p-6",
                children: [
                  (0, t.jsx)("p", {
                    className:
                      "break-words text-primary-500 dark:text-primary-400 font-bold truncate-2 mb-2",
                    children: a.title,
                  }),
                  (0, t.jsx)("p", {
                    className:
                      "break-words text-gray-500 dark:text-gray-400 line-clamp-2 truncate-2",
                    children: a.short_content,
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "px-4 py-4 sm:px-6 pt-0 sm:pt-0",
                children: (0, t.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    a.pin
                      ? (0, t.jsx)("span", {
                          className:
                            "icon-[bxs--pin] w-4 h-4 text-primary-500 dark:text-primary-400 mr-2",
                        })
                      : null,
                    (0, t.jsx)("p", {
                      className:
                        "break-words text-gray-500 dark:text-gray-400 font-semibold md:text-sm text-xs mr-auto",
                      children: (0, l.zM)(
                        (0, l.kB)(
                          null !== (r = a.created_at) && void 0 !== r ? r : ""
                        )
                      ),
                    }),
                    a.category &&
                      (0, t.jsx)("span", {
                        className:
                          "inline-flex items-center font-medium rounded-md text-xs px-2 py-1 ".concat(
                            ((e) => {
                              switch (e) {
                                case "red":
                                  return "bg-red-500 dark:bg-red-400";
                                case "green":
                                  return "bg-green-500 dark:bg-green-400";
                                case "blue":
                                  return "bg-blue-500 dark:bg-blue-400";
                                case "indigo":
                                  return "bg-indigo-500 dark:bg-indigo-400";
                                case "pink":
                                  return "bg-pink-500 dark:bg-pink-400";
                                case "yellow":
                                  return "bg-yellow-500 dark:bg-yellow-400";
                                case "purple":
                                  return "bg-purple-500 dark:bg-purple-400";
                                case "gray":
                                  return "bg-gray-500 dark:bg-gray-400";
                                case "orange":
                                  return "bg-orange-500 dark:bg-orange-400";
                                case "teal":
                                  return "bg-teal-500 dark:bg-teal-400";
                                case "cyan":
                                  return "bg-cyan-500 dark:bg-cyan-400";
                                case "lime":
                                  return "bg-lime-500 dark:bg-lime-400";
                                case "amber":
                                  return "bg-amber-500 dark:bg-amber-400";
                                case "emerald":
                                  return "bg-emerald-500 dark:bg-emerald-400";
                                default:
                                  return "bg-primary-500 dark:bg-primary-400";
                              }
                            })(a.category.color),
                            " text-white dark:text-gray-900"
                          ),
                        children: a.category.title,
                      }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
      var o = () =>
          (0, t.jsxs)("div", {
            className:
              "overflow-visible relative transition-all rounded-xl ring-gray-200 dark:ring-gray-800 dark:ring-1 ring-0 shadow-md hover:shadow-lg bg-white dark:bg-gray-900 xl:col-span-4 md:col-span-6 col-span-12",
            children: [
              (0, t.jsx)("div", {
                className: "p-0 sm:p-0",
                children: (0, t.jsx)("div", {
                  style: { aspectRatio: "16 / 9" },
                  children: (0, t.jsx)("div", {
                    className:
                      "animate-pulse bg-gray-100 dark:bg-gray-800 w-full h-full rounded-none",
                  }),
                }),
              }),
              (0, t.jsxs)("div", {
                className: "px-4 py-5 sm:p-6",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "animate-pulse bg-gray-100 dark:bg-gray-800 rounded-md w-full h-5 mb-2",
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "animate-pulse bg-gray-100 dark:bg-gray-800 rounded-md w-full h-16",
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "px-4 py-4 sm:px-6 pt-0 sm:pt-0",
                children: (0, t.jsxs)("div", {
                  className: "flex justify-between items-center",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "animate-pulse bg-gray-100 dark:bg-gray-800 rounded-md w-24 h-4",
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "animate-pulse bg-gray-100 dark:bg-gray-800 rounded-md w-20 h-6",
                    }),
                  ],
                }),
              }),
            ],
          }),
        g = a(4090),
        m = (e) => {
          let { category_id: r, pagination: a } = e;
          return (0, t.jsx)(s.ZP, {
            url: r ? "/categories/".concat(r, "/posts") : "/posts",
            defaultPerPage: 6,
            children: (e) => {
              let { data: r, isLoading: s, firstLoading: l } = e;
              return (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)("div", {
                    className: "grid grid-cols-12 gap-4",
                    children: [
                      !l && r && (null == r ? void 0 : r.data.length) === 0
                        ? (0, t.jsx)("div", {
                            className: "col-span-12 text-center",
                            children: (0, t.jsx)("p", {
                              className:
                                "text-gray-500 dark:text-gray-400 text-xl font-semibold",
                              children: "Kh\xf4ng c\xf3 b\xe0i viết n\xe0o",
                            }),
                          })
                        : (0, t.jsx)(t.Fragment, {}),
                      r
                        ? null == r
                          ? void 0
                          : r.data.map((e, r) =>
                              (0, t.jsx)(
                                g.Fragment,
                                {
                                  children:
                                    !l && s
                                      ? (0, t.jsx)(o, {})
                                      : (0, t.jsx)(c, { post: e }),
                                },
                                r
                              )
                            )
                        : Array.from({ length: 6 }, (e, r) =>
                            (0, t.jsx)(o, {}, r)
                          ),
                    ],
                  }),
                  a && (0, t.jsx)(n.Z, {}),
                ],
              });
            },
          });
        };
    },
    4365: function (e, r, a) {
      "use strict";
      a.r(r);
      var t = a(3827),
        s = a(7269),
        n = a(1565);
      r.default = () => {
        let { setModal: e } = (0, n.useModal)(),
          { currentUser: r } = (0, s.Z)();
        return !r || (null == r ? void 0 : r.phone)
          ? (0, t.jsx)(t.Fragment, {})
          : (0, t.jsxs)("div", {
              className:
                "flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800 cursor-pointer",
              role: "alert",
              onClick: () => {
                e("add-phone");
              },
              children: [
                (0, t.jsx)("span", {
                  className:
                    "flex-shrink-0 inline w-4 h-4 me-3 icon-[bx--check]",
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("span", {
                      className: "font-semibold",
                      children: "Lưu \xfd!",
                    }),
                    " T\xe0i khoản chưa c\xf3 số điện thoại,",
                    " ",
                    (0, t.jsx)("span", {
                      className: "font-medium",
                      children: "th\xeam ngay",
                    }),
                    " để bảo mật t\xe0i khoản của bạn",
                  ],
                }),
              ],
            });
      };
    },
    6027: function (e, r, a) {
      "use strict";
      var t = a(8016),
        s = a(3046);
      r.Z = function (e) {
        let r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          [a, n] = (0, s.Z)(null != e ? e : "");
        return (0, t.ZP)(e, { onSuccess: n, fallbackData: a, ...r });
      };
    },
    7622: function (e, r, a) {
      "use strict";
      a.d(r, {
        Z: function () {
          return n;
        },
      });
      var t = a(70),
        s = a(6027),
        n = () => {
          let { data: e } = (0, s.Z)("/settings", {
            revalidateOnFocus: !1,
            revalidateOnReconnect: !1,
            dedupingInterval: 18e5,
            fetcher: () => t.Z.get("/settings"),
          });
          return {
            getSetting: (r, a) =>
              e && e[r] ? (a ? JSON.parse(e[r]) : e[r]) : null,
            getOrDefault: (r, a, t) =>
              e && e[r] ? (t ? JSON.parse(e[r]) : e[r]) : a,
          };
        };
    },
  },
  function (e) {
    e.O(
      0,
      [
        8792, 5345, 8016, 129, 1749, 2370, 8831, 1317, 5311, 2176, 7478, 8069,
        1744,
      ],
      function () {
        return e((e.s = 5384));
      }
    ),
      (_N_E = e.O());
  },
]);
