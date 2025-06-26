(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7601],
  {
    7231: function (e, r, t) {
      Promise.resolve().then(t.bind(t, 449));
    },
    449: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return a;
          },
        });
      var s = t(3827),
        i = t(8792),
        n = t(4090);
      function a(e) {
        let { error: r, reset: t } = e;
        return (
          (0, n.useEffect)(() => {
            console.error(r);
          }, [r]),
          (0, s.jsxs)("div", {
            className: "flex flex-col justify-center items-center p-6 w-full",
            children: [
              (0, s.jsx)("p", {
                className:
                  "break-words text-primary-500 dark:text-primary-400 font-bold text-center text-2xl md:text-3xl",
                children: "C\xf3 lỗi xảy ra",
              }),
              (0, s.jsx)("p", {
                className:
                  "break-words text-gray-500 dark:text-gray-400 text-center mb-6 text-base md:text-lg",
                children:
                  "C\xf3 một ch\xfat lỗi xảy ra trong qu\xe1 tr\xecnh thực hiện, vui l\xf2ng chụp ảnh m\xe0n h\xecnh v\xe0 gửi tới ADMIN",
              }),
              (0, s.jsx)("code", {
                className:
                  "break-words text-sm text-gray-500 dark:text-gray-400 text-center mb-6",
                children: r.message,
              }),
              (0, s.jsx)("div", {
                children: (0, s.jsxs)(i.default, {
                  href: "/",
                  className:
                    "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center",
                  children: [
                    (0, s.jsx)("span", { children: "Về trang chủ" }),
                    (0, s.jsx)("span", {
                      className: "icon-[bx--home] w-4 h-4",
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [8792, 7478, 8069, 1744], function () {
      return e((e.s = 7231));
    }),
      (_N_E = e.O());
  },
]);
