(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [599],
  {
    7800: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 1398)),
        Promise.resolve().then(a.bind(a, 3086));
    },
    3086: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a(3827),
        r = a(6656),
        i = a(152),
        l = a(3046),
        n = a(5950),
        d = a(7794),
        c = a(4090),
        x = a(7362);
      t.default = () => {
        let [e, t] = (0, c.useState)(!1),
          [a, h] = (0, l.Z)("master-ranking"),
          [p, o] = (0, c.useState)(1),
          m = (0, c.useRef)(0);
        return (
          (0, c.useEffect)(() => {
            let e = Date.now();
            (m.current = e),
              t(!0),
              r.k
                .getMasterRanking(p)
                .then((t) => {
                  e === m.current && h(t);
                })
                .catch((e) => {
                  d.y.failure(
                    "Kh\xf4ng thể tải dữ liệu xếp hạng cao thủ. Vui l\xf2ng thử lại sau."
                  );
                })
                .finally(() => t(!1));
          }, [p]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(x.Z, {
                size: "md",
                value: p,
                onChange: o,
                options: i.M,
              }),
              (0, s.jsx)("div", {
                className:
                  "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 mt-4",
                children: (0, s.jsx)("div", {
                  className: "p-0 sm:p-0",
                  children: (0, s.jsxs)("div", {
                    className: "relative overflow-x-auto",
                    children: [
                      e &&
                        (0, s.jsxs)("div", {
                          className:
                            "flex justify-center items-center absolute top-0 left-0 min-w-full min-h-full bg-white/75 dark:bg-gray-800/90 z-10 rounded-lg",
                          children: [
                            (0, s.jsx)("span", {
                              className:
                                "icon-[bx--loader-alt] w-6 h-6 text-primary-500 dark:text-primary-400 animate-spin mr-2",
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "break-words text-sm text-gray-500 dark:text-gray-400 font-semibold",
                              children: "Đang tải...",
                            }),
                          ],
                        }),
                      (0, s.jsxs)("table", {
                        className:
                          "min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700",
                        children: [
                          (0, s.jsx)("thead", {
                            className: "relative",
                            children: (0, s.jsxs)("tr", {
                              className: "",
                              children: [
                                (0, s.jsx)("th", {
                                  scope: "col",
                                  className:
                                    "text-left rtl:text-right whitespace-nowrap px-4 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                  children: (0, s.jsx)("span", {
                                    children: "Xếp hạng",
                                  }),
                                }),
                                (0, s.jsx)("th", {
                                  scope: "col",
                                  className:
                                    "text-left rtl:text-right whitespace-nowrap px-4 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                  children: (0, s.jsx)("span", {
                                    children: "Nh\xe2n vật",
                                  }),
                                }),
                                (0, s.jsx)("th", {
                                  scope: "col",
                                  className:
                                    "text-left rtl:text-right whitespace-nowrap px-4 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                  children: (0, s.jsx)("span", {
                                    children: "Tr\xecnh độ",
                                  }),
                                }),
                                (0, s.jsx)("th", {
                                  scope: "col",
                                  className:
                                    "text-left rtl:text-right whitespace-nowrap px-4 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                  children: (0, s.jsx)("span", {
                                    children: "Thời gian",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsx)("tbody", {
                            className:
                              "divide-y divide-gray-200 dark:divide-gray-800",
                            children:
                              null == a
                                ? void 0
                                : a.map((e, t) =>
                                    (0, s.jsxs)(
                                      "tr",
                                      {
                                        children: [
                                          (0, s.jsx)("td", {
                                            className:
                                              "whitespace-nowrap px-4 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                            children: t + 1,
                                          }),
                                          (0, s.jsx)("td", {
                                            className:
                                              "whitespace-nowrap px-4 py-4 text-primary-500 dark:text-primary-400 text-sm font-medium",
                                            children: e.name,
                                          }),
                                          (0, s.jsxs)("td", {
                                            className:
                                              "whitespace-nowrap px-4 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                            children: ["Level ", e.level],
                                          }),
                                          (0, s.jsx)("td", {
                                            className:
                                              "whitespace-nowrap px-4 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                            children: (0, n.zM)(
                                              new Date(
                                                e.last_time_level_up
                                              ).toISOString()
                                            ),
                                          }),
                                        ],
                                      },
                                      "ranking-".concat(t)
                                    )
                                  ),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      };
    },
  },
  function (e) {
    e.O(0, [8792, 5345, 129, 6273, 5311, 9714, 7478, 8069, 1744], function () {
      return e((e.s = 7800));
    }),
      (_N_E = e.O());
  },
]);
