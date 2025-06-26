(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [358],
  {
    4505: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 1398)),
        Promise.resolve().then(a.bind(a, 4341));
    },
    4341: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a(3827),
        s = a(6656),
        i = a(152),
        n = a(3046),
        l = a(7794),
        d = a(4090),
        c = a(7362);
      t.default = () => {
        let [e, t] = (0, d.useState)(!1),
          [a, x] = (0, n.Z)("clan-ranking"),
          [h, p] = (0, d.useState)(1),
          o = (0, d.useRef)(0);
        return (
          (0, d.useEffect)(() => {
            let e = Date.now();
            (o.current = e),
              t(!0),
              s.k
                .getClanRanking(h)
                .then((t) => {
                  e === o.current && x(t);
                })
                .catch((e) => {
                  l.y.failure(
                    "Kh\xf4ng thể tải dữ liệu xếp hạng cao thủ. Vui l\xf2ng thử lại sau."
                  );
                })
                .finally(() => t(!1));
          }, [h]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(c.Z, {
                size: "md",
                value: h,
                onChange: p,
                options: i.M,
              }),
              (0, r.jsx)("div", {
                className:
                  "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 mt-4",
                children: (0, r.jsx)("div", {
                  className: "p-0 sm:p-0",
                  children: (0, r.jsx)("div", {
                    className: "relative overflow-x-auto",
                    children: (0, r.jsxs)("table", {
                      className:
                        "min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700",
                      children: [
                        (0, r.jsx)("thead", {
                          className: "relative",
                          children: (0, r.jsxs)("tr", {
                            className: "",
                            children: [
                              (0, r.jsx)("th", {
                                scope: "col",
                                className:
                                  "text-left rtl:text-right whitespace-nowrap px-4 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                children: (0, r.jsx)("span", {
                                  children: "Xếp hạng",
                                }),
                              }),
                              (0, r.jsx)("th", {
                                scope: "col",
                                className:
                                  "text-left rtl:text-right whitespace-nowrap px-4 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                children: (0, r.jsx)("span", {
                                  children: "Gia Tộc",
                                }),
                              }),
                              (0, r.jsx)("th", {
                                scope: "col",
                                className:
                                  "text-left rtl:text-right whitespace-nowrap px-4 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                children: (0, r.jsx)("span", {
                                  children: "Tộc Trưởng",
                                }),
                              }),
                              (0, r.jsx)("th", {
                                scope: "col",
                                className:
                                  "text-left rtl:text-right whitespace-nowrap px-4 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                children: (0, r.jsx)("span", {
                                  children: "Cấp độ",
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)("tbody", {
                          className:
                            "divide-y divide-gray-200 dark:divide-gray-800",
                          children:
                            null == a
                              ? void 0
                              : a.map((e, t) =>
                                  (0, r.jsxs)(
                                    "tr",
                                    {
                                      children: [
                                        (0, r.jsx)("td", {
                                          className:
                                            "whitespace-nowrap px-4 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                          children: t + 1,
                                        }),
                                        (0, r.jsx)("td", {
                                          className:
                                            "whitespace-nowrap px-4 py-4 text-primary-500 dark:text-primary-400 text-sm font-medium",
                                          children: e.name,
                                        }),
                                        (0, r.jsx)("td", {
                                          className:
                                            "whitespace-nowrap px-4 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                          children: e.patriarch_name,
                                        }),
                                        (0, r.jsxs)("td", {
                                          className:
                                            "whitespace-nowrap px-4 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                          children: ["Cấp độ ", e.level],
                                        }),
                                      ],
                                    },
                                    "ranking-".concat(t)
                                  )
                                ),
                        }),
                      ],
                    }),
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
      return e((e.s = 4505));
    }),
      (_N_E = e.O());
  },
]);
