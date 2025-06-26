(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5131],
  {
    1526: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 1398)),
        Promise.resolve().then(a.bind(a, 3085));
    },
    6656: function (e, t, a) {
      "use strict";
      a.d(t, {
        k: function () {
          return i;
        },
      });
      var r = a(70);
      let i = {
        getMasterRanking: (e) =>
          r.Z.get("/ranking/master?server_id=".concat(e)),
        getWealthRanking: () => r.Z.get("/ranking/wealth"),
        getClanRanking: (e) => r.Z.get("/ranking/clan?server_id=".concat(e)),
      };
    },
    1398: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a(3827),
        i = a(8792);
      t.default = (e) => {
        let { title: t, description: a, playButton: s } = e;
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
                  children: a,
                }),
              ],
            }),
            s &&
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
    3085: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a(3827),
        i = a(6656),
        s = a(3046),
        n = a(7794),
        l = a(4090);
      t.default = () => {
        let [e, t] = (0, s.Z)("wealth-ranking"),
          a = (0, l.useRef)(0);
        return (
          (0, l.useEffect)(() => {
            let e = Date.now();
            (a.current = e),
              i.k
                .getWealthRanking()
                .then((r) => {
                  e === a.current && t(r);
                })
                .catch((e) => {
                  n.y.failure(
                    "Kh\xf4ng thể tải dữ liệu xếp hạng t\xe0i ph\xfa. Vui l\xf2ng thử lại sau."
                  );
                });
          }, []),
          (0, r.jsxs)("table", {
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
                      children: (0, r.jsx)("span", { children: "Xếp hạng" }),
                    }),
                    (0, r.jsx)("th", {
                      scope: "col",
                      className:
                        "text-left rtl:text-right whitespace-nowrap px-4 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                      children: (0, r.jsx)("span", { children: "Nh\xe2n vật" }),
                    }),
                    (0, r.jsx)("th", {
                      scope: "col",
                      className:
                        "text-left rtl:text-right whitespace-nowrap px-4 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                      children: (0, r.jsx)("span", { children: "T\xedch lũy" }),
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("tbody", {
                className: "divide-y divide-gray-200 dark:divide-gray-800",
                children:
                  null == e
                    ? void 0
                    : e.map((e, t) => {
                        var a;
                        return (0, r.jsxs)(
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
                                children:
                                  null === (a = e.user) || void 0 === a
                                    ? void 0
                                    : a.name,
                              }),
                              (0, r.jsx)("td", {
                                className:
                                  "whitespace-nowrap px-4 py-4 text-gray-500 dark:text-gray-400 text-sm",
                                children: "*******",
                              }),
                            ],
                          },
                          "ranking-".concat(t)
                        );
                      }),
              }),
            ],
          })
        );
      };
    },
  },
  function (e) {
    e.O(0, [8792, 5345, 5311, 7478, 8069, 1744], function () {
      return e((e.s = 1526));
    }),
      (_N_E = e.O());
  },
]);
