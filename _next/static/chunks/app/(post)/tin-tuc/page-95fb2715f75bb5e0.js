(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8567],
  {
    9950: function (e, r, a) {
      Promise.resolve().then(a.bind(a, 1398)),
        Promise.resolve().then(a.bind(a, 2951));
    },
    703: function (e, r, a) {
      "use strict";
      a.d(r, {
        default: function () {
          return s.a;
        },
      });
      var t = a(7447),
        s = a.n(t);
    },
    7447: function (e, r, a) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (function (e, r) {
          for (var a in r)
            Object.defineProperty(e, a, { enumerable: !0, get: r[a] });
        })(r, {
          getImageProps: function () {
            return l;
          },
          default: function () {
            return d;
          },
        });
      let t = a(6921),
        s = a(8630),
        i = a(1749),
        n = t._(a(536)),
        l = (e) => {
          let { props: r } = (0, s.getImgProps)(e, {
            defaultLoader: n.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, a] of Object.entries(r)) void 0 === a && delete r[e];
          return { props: r };
        },
        d = i.Image;
    },
    1398: function (e, r, a) {
      "use strict";
      a.r(r);
      var t = a(3827),
        s = a(8792);
      r.default = (e) => {
        let { title: r, description: a, playButton: i } = e;
        return (0, t.jsxs)("div", {
          className: "flex justify-between items-center capitalize mb-4",
          children: [
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    (0, t.jsx)("span", {
                      className:
                        "icon-[bxs--circle] w-4 h-4 text-primary-500 dark:text-primary-400 md:mr-4 mr-2",
                    }),
                    (0, t.jsx)("p", {
                      className:
                        "md:text-2xl text-xl font-bold text-gray-700 dark:text-gray-300",
                      children: r,
                    }),
                  ],
                }),
                (0, t.jsx)("p", {
                  className:
                    "break-words text-gray-500 dark:text-gray-400 md:text-lg text-sm md:mt-1",
                  children: a,
                }),
              ],
            }),
            i &&
              (0, t.jsx)("div", {
                className: "flex items-center ml-4",
                children: (0, t.jsxs)(s.default, {
                  href: "/download",
                  className:
                    "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center",
                  children: [
                    (0, t.jsx)("span", {
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
    2951: function (e, r, a) {
      "use strict";
      a.r(r),
        a.d(r, {
          default: function () {
            return g;
          },
        });
      var t = a(3827),
        s = a(1992),
        i = a(5227),
        n = a(5950),
        l = a(703),
        d = a(8792);
      let o = (e) => {
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
                  children: (0, t.jsx)(l.default, {
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
                      children: (0, n.zM)(
                        (0, n.kB)(
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
      var c = () =>
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
        u = a(4090),
        g = (e) => {
          let { category_id: r, pagination: a } = e;
          return (0, t.jsx)(s.ZP, {
            url: r ? "/categories/".concat(r, "/posts") : "/posts",
            defaultPerPage: 6,
            children: (e) => {
              let { data: r, isLoading: s, firstLoading: n } = e;
              return (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)("div", {
                    className: "grid grid-cols-12 gap-4",
                    children: [
                      !n && r && (null == r ? void 0 : r.data.length) === 0
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
                                u.Fragment,
                                {
                                  children:
                                    !n && s
                                      ? (0, t.jsx)(c, {})
                                      : (0, t.jsx)(o, { post: e }),
                                },
                                r
                              )
                            )
                        : Array.from({ length: 6 }, (e, r) =>
                            (0, t.jsx)(c, {}, r)
                          ),
                    ],
                  }),
                  a && (0, t.jsx)(i.Z, {}),
                ],
              });
            },
          });
        };
    },
    5227: function (e, r, a) {
      "use strict";
      var t = a(3827),
        s = a(1992);
      let i = (e) =>
        "pagination.previous" === e
          ? (0, t.jsx)("span", {
              className: "icon-[bx--chevron-left] flex-shrink-0 h-5 w-5",
              "aria-hidden": "true",
            })
          : "pagination.next" === e
          ? (0, t.jsx)("span", {
              className: "icon-[bx--chevron-right] flex-shrink-0 h-5 w-5",
              "aria-hidden": "true",
            })
          : (0, t.jsx)("span", { children: e });
      r.Z = () => {
        let {
            isLoading: e,
            current_page: r,
            last_page: a,
            links: n,
            setCurrentPage: l,
          } = (0, s.yp)(),
          d = (t) => {
            if ("..." !== t && !e) {
              if ("pagination.previous" === t) 1 !== r && l(r - 1);
              else if ("pagination.next" === t) {
                if (r === a) return;
                l(r + 1);
              } else l(parseInt(t));
            }
          };
        return 1 === a
          ? (0, t.jsx)(t.Fragment, {})
          : (0, t.jsx)("div", {
              className: "p-2 sm:p-2",
              children: (0, t.jsx)("div", {
                className: "flex justify-between items-center",
                children: (0, t.jsx)("div", {
                  className: "-space-x-px flex items-center gap-1 ml-auto",
                  children: n.map((s, n) =>
                    (0, t.jsx)(
                      "button",
                      {
                        type: "button",
                        className: "".concat(
                          r === parseInt(s.label)
                            ? "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center z-[1] first:rounded-s-md last:rounded-e-md !rounded-full min-w-[32px] justify-center"
                            : "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center first:rounded-s-md last:rounded-e-md !rounded-full min-w-[32px] justify-center rtl:[&_span:last-child]:rotate-180"
                        ),
                        "aria-label": s.label,
                        disabled:
                          e ||
                          ("pagination.previous" === s.label && 1 === r) ||
                          ("pagination.next" === s.label && r === a) ||
                          "..." === s.label,
                        onClick: () => d(s.label),
                        children: i(s.label),
                      },
                      n
                    )
                  ),
                }),
              }),
            });
      };
    },
    1992: function (e, r, a) {
      "use strict";
      a.d(r, {
        ZP: function () {
          return u;
        },
        tV: function () {
          return c;
        },
        yp: function () {
          return g;
        },
      });
      var t = a(3827),
        s = a(70),
        i = a(3046),
        n = a(4090),
        l = a(8016);
      let d = (0, n.createContext)(void 0),
        o = new Map(),
        c = (e) => {
          let r = o.get(e);
          r && r();
        };
      function u(e) {
        let {
            url: r,
            tableKey: a = r,
            children: c,
            useCache: u,
            defaultPerPage: g,
            defaultFilters: m = {},
          } = e,
          [p, b] = (0, i.Z)(r),
          [x, f] = (0, n.useState)(1),
          [h, y] = (0, n.useState)(null != g ? g : 5),
          [v, k] = (0, n.useState)(1),
          [j, w] = (0, n.useState)([]),
          [N, S] = (0, n.useState)(""),
          [_, P] = (0, n.useState)("id"),
          [O, z] = (0, n.useState)("desc"),
          [E, Z] = (0, n.useState)(m),
          [C, I] = (0, n.useState)(!0),
          F = (0, n.useMemo)(() => {
            let e = new URLSearchParams();
            return (
              e.append("page", x.toString()),
              e.append("per_page", h.toString()),
              N && e.append("search", N),
              _ && e.append("sort", _),
              O && e.append("order", O),
              Object.keys(E).length && e.append("filters", JSON.stringify(E)),
              "".concat(r, "?").concat(e.toString())
            );
          }, [x, E, O, h, N, _, r]),
          {
            data: M,
            isLoading: R,
            isValidating: T,
            mutate: A,
          } = (0, l.ZP)(F, {
            shouldRetryOnError: !1,
            focusThrottleInterval: 6e4,
            revalidateOnFocus: !0,
            revalidateOnMount: !0,
            keepPreviousData: !u,
            fetcher: async (e) => s.Z.get(e).then((e) => e),
            onSuccess: (e) => {
              let {
                payload: { pagination: r },
              } = e;
              f(r.current_page),
                y(r.per_page),
                k(r.last_page),
                w(r.links),
                u && b(e),
                I(!1);
            },
            onError: () => {
              I(!1);
            },
            fallbackData: p,
          });
        (0, n.useEffect)(
          () => (
            o.set(a, () => A()),
            () => {
              o.delete(a);
            }
          ),
          [a, A]
        );
        let D = () => {
          A();
        };
        return (0, t.jsx)(d.Provider, {
          value: {
            data: M,
            isLoading: R,
            isValidating: T,
            firstLoading: C,
            current_page: x,
            per_page: h,
            search: N,
            sort: _,
            order: O,
            filters: E,
            last_page: v,
            links: j,
            setCurrentPage: f,
            setPerPage: y,
            setSearch: S,
            setSort: P,
            setOrder: z,
            setFilters: Z,
            setLastPage: k,
            setLinks: w,
            refetch: D,
          },
          children:
            "function" == typeof c
              ? c({
                  data: M,
                  isLoading: R,
                  isValidating: T,
                  firstLoading: C,
                  current_page: x,
                  per_page: h,
                  search: N,
                  sort: _,
                  order: O,
                  filters: E,
                  last_page: v,
                  links: j,
                  setCurrentPage: f,
                  setPerPage: y,
                  setSearch: S,
                  setSort: P,
                  setOrder: z,
                  setFilters: Z,
                  setLastPage: k,
                  setLinks: w,
                  refetch: D,
                })
              : c,
        });
      }
      let g = () => {
        let e = (0, n.useContext)(d);
        if (void 0 === e)
          throw Error("useTableQuery must be used within a TableQueryProvider");
        return e;
      };
    },
  },
  function (e) {
    e.O(0, [8792, 5345, 8016, 1749, 5311, 7478, 8069, 1744], function () {
      return e((e.s = 9950));
    }),
      (_N_E = e.O());
  },
]);
