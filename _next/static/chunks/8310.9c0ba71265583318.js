"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8310],
  {
    8310: function (e, i, s) {
      s.r(i);
      var t = s(3827),
        r = s(9452),
        a = s(991),
        n = s(4848),
        l = s(4090),
        o = s(4806);
      i.default = () => {
        let [e, i] = (0, l.useState)(null),
          [s, u] = (0, l.useState)(null),
          { styles: d, attributes: c } = (0, o.D)(e, s),
          { theme: x, setTheme: f } = (0, n.useTheme)(),
          m = (e) => {
            f(0 === e ? "dark" : 1 === e ? "light" : "system");
          },
          g = () =>
            "dark" === x ? 0 : "light" === x ? 1 : "system" === x ? 2 : 1;
        return (0, t.jsx)(r.J, {
          className: "relative",
          children: (e) => {
            let { open: s } = e;
            return (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(r.J.Button, {
                  as: "div",
                  className: "inline-flex w-full",
                  ref: i,
                  children: (0, t.jsx)("button", {
                    type: "button",
                    className:
                      "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center",
                    "aria-label": "Theme",
                    children: (0, t.jsx)("span", {
                      className: "icon-[bxs--brush] flex-shrink-0 h-5 w-5",
                    }),
                  }),
                }),
                (0, t.jsx)(r.J.Panel, {
                  ref: u,
                  style: d.popper,
                  ...c.popper,
                  className:
                    "overflow-hidden focus:outline-none relative bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800 rounded-md shadow-lg",
                  children: (0, t.jsx)("div", {
                    className: "p-2 w-56",
                    children: (0, t.jsx)(a.O.Group, {
                      as: "div",
                      className: "relative space-y-2",
                      selectedIndex: g(),
                      onChange: m,
                      children: (0, t.jsxs)(a.O.List, {
                        as: "div",
                        className:
                          "relative bg-gray-100 dark:bg-gray-800 rounded-lg p-1 w-full h-10 inline-grid items-center",
                        style: {
                          gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
                        },
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none",
                            style: {
                              top: "4px",
                              left: "".concat(67 * g() + 4, "px"),
                              width: "67px",
                              height: "32px",
                            },
                            children: (0, t.jsx)("div", {
                              className:
                                "w-full h-full bg-white dark:bg-gray-900 rounded-md shadow-sm",
                            }),
                          }),
                          (0, t.jsx)(a.O, {
                            className: (e) =>
                              "relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out h-8 px-3 text-sm font-medium rounded-md ".concat(
                                e
                                  ? "text-gray-900 dark:text-white"
                                  : "text-gray-500 dark:text-gray-400"
                              ),
                            children: (0, t.jsx)("span", {
                              className: "truncate",
                              children: "Dark",
                            }),
                          }),
                          (0, t.jsx)(a.O, {
                            className: (e) =>
                              "relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out h-8 px-3 text-sm font-medium rounded-md ".concat(
                                e
                                  ? "text-gray-900 dark:text-white"
                                  : "text-gray-500 dark:text-gray-400"
                              ),
                            children: (0, t.jsx)("span", {
                              className: "truncate",
                              children: "Light",
                            }),
                          }),
                          (0, t.jsx)(a.O, {
                            className: (e) =>
                              "relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out h-8 px-3 text-sm font-medium rounded-md ".concat(
                                e
                                  ? "text-gray-900 dark:text-white"
                                  : "text-gray-500 dark:text-gray-400"
                              ),
                            children: (0, t.jsx)("span", {
                              className: "truncate",
                              children: "Auto",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            });
          },
        });
      };
    },
  },
]);
