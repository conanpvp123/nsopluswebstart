(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9160],
  {
    6760: function (e, r, t) {
      Promise.resolve().then(t.bind(t, 8667));
    },
    7907: function (e, r, t) {
      "use strict";
      var s = t(5313);
      t.o(s, "redirect") &&
        t.d(r, {
          redirect: function () {
            return s.redirect;
          },
        }),
        t.o(s, "useParams") &&
          t.d(r, {
            useParams: function () {
              return s.useParams;
            },
          }),
        t.o(s, "usePathname") &&
          t.d(r, {
            usePathname: function () {
              return s.usePathname;
            },
          }),
        t.o(s, "useRouter") &&
          t.d(r, {
            useRouter: function () {
              return s.useRouter;
            },
          });
    },
    8667: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return i;
          },
        });
      var s = t(3827),
        n = t(8792),
        a = t(7907);
      function i() {
        let e = (0, a.usePathname)();
        return (0, s.jsxs)("div", {
          className: "flex flex-col justify-center items-center p-6 w-full",
          children: [
            (0, s.jsx)("p", {
              className:
                "break-words text-primary-500 dark:text-primary-400 font-bold text-center text-8xl",
              children: "404",
            }),
            (0, s.jsxs)("p", {
              className:
                "break-words text-2xl text-gray-500 dark:text-gray-400 text-center mb-6",
              children: ["Kh\xf4ng t\xecm thấy trang: ", e],
            }),
            (0, s.jsxs)(n.default, {
              href: "/",
              className:
                "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center",
              children: [
                (0, s.jsx)("span", { children: "Quay lại trang chủ" }),
                (0, s.jsx)("span", { className: "icon-[bx--home] w-4 h-4" }),
              ],
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [8792, 7478, 8069, 1744], function () {
      return e((e.s = 6760));
    }),
      (_N_E = e.O());
  },
]);
