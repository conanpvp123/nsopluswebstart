(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    8580: function (e, r, a) {
      Promise.resolve().then(a.bind(a, 1845)),
        Promise.resolve().then(a.bind(a, 7388)),
        Promise.resolve().then(a.bind(a, 6016)),
        Promise.resolve().then(a.bind(a, 4848)),
        Promise.resolve().then(a.t.bind(a, 5935, 23)),
        Promise.resolve().then(a.t.bind(a, 7276, 23)),
        Promise.resolve().then(a.t.bind(a, 7744, 23)),
        Promise.resolve().then(a.t.bind(a, 8888, 23)),
        Promise.resolve().then(a.bind(a, 4890)),
        Promise.resolve().then(a.bind(a, 2767)),
        Promise.resolve().then(a.bind(a, 1221)),
        Promise.resolve().then(a.bind(a, 2806)),
        Promise.resolve().then(a.bind(a, 4498)),
        Promise.resolve().then(a.bind(a, 9299)),
        Promise.resolve().then(a.bind(a, 9194)),
        Promise.resolve().then(a.bind(a, 6234)),
        Promise.resolve().then(a.bind(a, 1311)),
        Promise.resolve().then(a.bind(a, 4080)),
        Promise.resolve().then(a.bind(a, 9606)),
        Promise.resolve().then(a.bind(a, 7157)),
        Promise.resolve().then(a.bind(a, 1565));
    },
    3113: function (e, r, a) {
      "use strict";
      a.d(r, {
        i: function () {
          return t;
        },
      });
      var s = a(70);
      let t = {
        login: (e) => s.Z.post("auth/login", e),
        register: (e) => s.Z.post("auth/register", e),
        getUserByToken: (e) => s.Z.post("auth/verify", { access_token: e }),
        resetPasswordViaPhone: (e) => s.Z.post("password/reset-via-phone", e),
        forgotPassword: (e) => s.Z.post("password/request", e),
        resetPassword: (e, r) =>
          s.Z.post("password/reset", { password: e, token: r }),
      };
    },
    1877: function (e, r, a) {
      "use strict";
      a.d(r, {
        B: function () {
          return t;
        },
      });
      var s = a(70);
      let t = {
        getPlayers: () => s.Z.get("user/players"),
        getUserProfile: () => s.Z.get("user/profile"),
        verifySMSOTP: (e, r) =>
          s.Z.post("one-time-password/verify", { phone: e, code: r }),
        sendEmailOTP: () => s.Z.post("email/send-otp"),
        verifyEmailOTP: (e) => s.Z.post("email/verify", { code: e }),
        changePassword: (e) => s.Z.post("user/change-password", e),
        getTransactions: (e) => s.Z.get("transactions?".concat(e)),
        activeUser: () => s.Z.post("user/active"),
        transfer: (e) => s.Z.post("user/transfer", e),
        addPhone: (e) => s.Z.post("phone/add", { phone: e }),
        addEmail: (e) => s.Z.post("email/add", { email: e }),
        updatePhone: (e, r) =>
          s.Z.post("phone/update", { code: e, newPhone: r }),
        updateEmail: (e, r) =>
          s.Z.post("email/update", { code: e, newEmail: r }),
        updateUsername: (e) =>
          s.Z.post("user/update-username", { username: e }),
      };
    },
    9557: function (e, r, a) {
      "use strict";
      var s = a(3827),
        t = a(7794),
        i = a(8693);
      a(4090),
        (r.Z = (e) => {
          let {
              label: r,
              icon: a,
              placeholder: n,
              countMax: l,
              isOtp: o,
              inputRef: d,
              ...c
            } = e,
            [u, m] = (0, i.U$)(c);
          return (0, s.jsxs)("div", {
            className: "mb-4",
            children: [
              (0, s.jsxs)("div", {
                className:
                  "flex content-center items-center justify-between text-sm",
                children: [
                  (0, s.jsx)("label", {
                    htmlFor: c.id || c.name,
                    className:
                      "block font-medium text-gray-700 dark:text-gray-200",
                    children: r,
                  }),
                  l &&
                    (0, s.jsxs)("span", {
                      className: "text-gray-500 dark:text-gray-400",
                      children: [u.value ? u.value.length : 0, "/", l],
                    }),
                  o &&
                    (0, s.jsx)("span", {
                      className:
                        "text-primary-500 dark:text-primary-400 cursor-pointer",
                      onClick: () => {
                        t.y.info(
                          "C\xe1ch lấy m\xe3 OTP",
                          "Soạn tin: NSP OTP gửi 7039 để nhận m\xe3 OTP"
                        );
                      },
                      children: "C\xe1ch lấy m\xe3 OTP ?",
                    }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "relative mt-1",
                children: [
                  (0, s.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, s.jsx)("input", {
                        ...u,
                        ...c,
                        ref: d,
                        autoComplete: c.autoComplete || c.name,
                        placeholder: n || r,
                        className:
                          "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3.5 py-2.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1.5 "
                            .concat(a && "ps-11", " ")
                            .concat(
                              m.touched && m.error
                                ? "ring-red-500 focus:ring-red-500 dark:focus:ring-red-400"
                                : "focus:ring-primary-500 dark:focus:ring-primary-400"
                            ),
                      }),
                      a &&
                        (0, s.jsx)("span", {
                          className:
                            "absolute inset-y-0 start-0 flex items-center pointer-events-none px-3.5",
                          children: (0, s.jsx)("span", {
                            className: ""
                              .concat(a, " flex-shrink-0 ")
                              .concat(
                                m.touched && m.error
                                  ? "text-red-500 dark:text-red-400"
                                  : "text-gray-400 dark:text-gray-500",
                                " h-5 w-5"
                              ),
                          }),
                        }),
                    ],
                  }),
                  m.touched && m.error
                    ? (0, s.jsx)("p", {
                        className:
                          "mt-2 text-red-500 dark:text-red-400 text-sm",
                        children: m.error,
                      })
                    : null,
                ],
              }),
            ],
          });
        });
    },
    3453: function (e, r, a) {
      "use strict";
      var s = a(3827),
        t = a(1877),
        i = a(8693),
        n = a(4090),
        l = a(9557);
      r.Z = (e) => {
        let { phone: r, onConfirmSuccess: a } = e,
          [o, d] = (0, n.useState)(!1),
          [c, u] = (0, n.useState)(!1),
          [m, h, { setError: x }] = (0, i.U$)("code"),
          g = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            r && m && m.value && 6 === m.value.length && !c
              ? (g.current && g.current.blur(),
                d(!0),
                t.B.verifySMSOTP(r, m.value)
                  .then(() => {
                    a(), u(!0);
                  })
                  .catch((e) => {
                    x(e.message);
                  })
                  .finally(() => {
                    d(!1);
                  }))
              : u(!1);
          }, [m.value]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(l.Z, {
                label: "M\xe3 OTP",
                name: "code",
                placeholder: "Nhập m\xe3 OTP",
                pattern: "\\d*",
                maxLength: 6,
                icon: "icon-[bxs--lock]",
                isOtp: !0,
                inputRef: g,
                inputMode: "numeric",
              }),
              (o || c) &&
                (0, s.jsxs)("div", {
                  className: "mt-[-18px] mb-1",
                  children: [
                    o &&
                      (0, s.jsx)("small", {
                        className: "text-yellow-500",
                        children: "Đang x\xe1c thực...",
                      }),
                    c &&
                      (0, s.jsx)("small", {
                        className: "text-primary-500",
                        children: "Đ\xe3 x\xe1c thực!",
                      }),
                  ],
                }),
            ],
          })
        );
      };
    },
    6602: function (e, r, a) {
      "use strict";
      var s = a(3827);
      a(4090),
        (r.Z = (e) => {
          let { isSubmitting: r, children: a, ...t } = e;
          return (0, s.jsxs)("button", {
            type: "submit",
            disabled: r,
            className:
              "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center",
            ...t,
            children: [
              r &&
                (0, s.jsx)("span", {
                  className:
                    "icon-[bx--loader-alt] flex-shrink-0 h-5 w-5 animate-spin",
                }),
              "string" == typeof a && r ? "".concat(a, "...") : a,
            ],
          });
        });
    },
    4890: function (e, r, a) {
      "use strict";
      a.r(r),
        a.d(r, {
          default: function () {
            return t;
          },
        });
      var s = a(3827);
      function t() {
        return (0, s.jsx)("footer", {
          children: (0, s.jsxs)("div", {
            className:
              "mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-between items-center h-[var(--footer-size)]",
            children: [
              (0, s.jsxs)("div", {
                className: "text-xs font-semibold",
                children: [
                  (0, s.jsx)("span", {
                    className: "text-gray-500 dark:text-gray-400 mr-1",
                    children: "NsoPlus |",
                  }),
                  (0, s.jsx)("span", {
                    className: "text-primary mr-1",
                    children: "2024",
                  }),
                  (0, s.jsx)("span", {
                    className: "text-gray-500 dark:text-gray-400",
                    children: "Copyright",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "text-xs font-semibold",
                children: [
                  (0, s.jsx)("span", {
                    className: "text-gray-500 dark:text-gray-400 mr-1",
                    children: "Make by",
                  }),
                  (0, s.jsx)("span", {
                    className: "text-primary",
                    children: "NsoPlus",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    2767: function (e, r, a) {
      "use strict";
      a.r(r),
        a.d(r, {
          default: function () {
            return c;
          },
        });
      var s = a(3827),
        t = a(7269),
        i = a(9606),
        n = a(1565),
        l = a(703),
        o = a(8792);
      let d = (0, a(4232).default)(
        () => Promise.all([a.e(7095), a.e(8310)]).then(a.bind(a, 8310)),
        { loadableGenerated: { webpack: () => [8310] }, ssr: !1 }
      );
      function c() {
        let { openSidebar: e } = (0, i.useLayout)(),
          { setModal: r } = (0, n.useModal)(),
          { currentUser: a, firstLoading: c } = (0, t.Z)();
        return (0, s.jsx)("header", {
          className:
            "sticky top-0 z-50 bg-white/75 dark:bg-transparent backdrop-blur-xl",
          children: (0, s.jsxs)("div", {
            className:
              "mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center h-[var(--header-size)] max-h-[var(--header-size)]",
            children: [
              (0, s.jsx)("div", {
                className: "flex items-center md:hidden mr-2",
                children: (0, s.jsx)("span", {
                  className: "icon-[bx--menu-alt-left] w-7 h-7 cursor-pointer",
                  onClick: e,
                }),
              }),
              (0, s.jsx)("div", {
                className: "flex items-center mr-auto",
                children: (0, s.jsx)(o.default, {
                  href: "/",
                  className: "router-link-active router-link-exact-active",
                  "aria-current": "page",
                  children: (0, s.jsx)("div", {
                    className: "flex items-center",
                    children: (0, s.jsx)(l.default, {
                      src: "/logo.png",
                      className: "w-auto h-[calc(var(--header-size)*0.9)] mr-2",
                      alt: "NsoPlus ninja school",
                      width: 500,
                      height: 331,
                    }),
                  }),
                }),
              }),
              (0, s.jsxs)("div", {
                className: "flex justify-end items-center",
                children: [
                  (0, s.jsx)(d, {}),
                  void 0 === a
                    ? (0, s.jsx)("div", {
                        className: "flex items-center ml-1",
                        children: (0, s.jsx)("button", {
                          type: "button",
                          className:
                            "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center",
                          onClick: () => r("auth"),
                          children: "Đăng Nhập",
                        }),
                      })
                    : (0, s.jsx)(o.default, {
                        href: "/profile",
                        className: "flex items-center ml-1 cursor-pointer",
                        children: (0, s.jsxs)("div", {
                          className:
                            "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center relative p-1.5",
                          children: [
                            (0, s.jsx)("span", {
                              className:
                                "icon-[bxs--user] flex-shrink-0 h-5 w-5",
                            }),
                            "Hi, ",
                            (0, s.jsx)("span", {
                              className: "font-semibold",
                              children: null == a ? void 0 : a.username,
                            }),
                          ],
                        }),
                      }),
                ],
              }),
            ],
          }),
        });
      }
    },
    1221: function (e, r, a) {
      "use strict";
      a.r(r);
      var s = a(3827),
        t = a(4090),
        i = a(3405),
        n = a(5950),
        l = a(7622),
        o = a(1877),
        d = a(1565),
        c = a(7269);
      r.default = () => {
        let [e, r] = (0, t.useState)(!1),
          { getOrDefault: a } = (0, l.Z)(),
          { disableModal: u } = (0, d.useModal)(),
          { mutate: m } = (0, c.Z)();
        return (0, s.jsx)(i.Z, {
          modalKey: "active-modal",
          children: (0, s.jsxs)("div", {
            className:
              "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900",
            children: [
              (0, s.jsxs)("div", {
                className: "px-4 py-5 sm:px-6",
                children: [
                  (0, s.jsx)("p", {
                    className: "break-words text-base font-semibold",
                    children: "K\xedch hoạt t\xe0i khoản",
                  }),
                  (0, s.jsxs)("p", {
                    className:
                      "break-words text-sm text-gray-500 dark:text-gray-400",
                    children: [
                      "K\xedch hoạt ngay để nhận được quyền lợi:",
                      (0, s.jsxs)("ul", {
                        className: "mt-1.5 list-disc list-inside",
                        children: [
                          (0, s.jsx)("li", {
                            children: "Mở t\xednh năng giao dịch",
                          }),
                          (0, s.jsx)("li", {
                            children: "Tham gia v\xf2ng xoay may mắn",
                          }),
                          (0, s.jsx)("li", {
                            children: "Bu\xf4n b\xe1n vật phẩm tr\xean shinwa",
                          }),
                          (0, s.jsx)("li", {
                            children: "Đ\xf3ng g\xf3p xu gia tộc",
                          }),
                          (0, s.jsx)("li", {
                            children: "Chat k\xeanh thế giới",
                          }),
                          (0, s.jsx)("li", {
                            children: "...v\xe0 một số t\xednh năng kh\xe1c",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "px-4 py-5 sm:p-6",
                children: (0, s.jsxs)("button", {
                  type: "button",
                  onClick: () => {
                    r(!0),
                      o.B.activeUser()
                        .then(() => {
                          u(), m();
                        })
                        .finally(() => {
                          r(!1);
                        });
                  },
                  disabled: e,
                  className:
                    "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center",
                  children: [
                    e &&
                      (0, s.jsx)("span", {
                        className:
                          "icon-[bx--loader-alt] flex-shrink-0 h-5 w-5 animate-spin",
                      }),
                    "K\xedch hoạt - Ph\xed ",
                    (0, n.xG)(a("active_fee", 1e3)),
                    " coin",
                  ],
                }),
              }),
            ],
          }),
        });
      };
    },
    9299: function (e, r, a) {
      "use strict";
      a.r(r);
      var s = a(3827),
        t = a(7622),
        i = a(8792),
        n = a(3405);
      r.default = () => {
        let { getOrDefault: e } = (0, t.Z)();
        return (0, s.jsx)(n.Z, {
          modalKey: "contact",
          sizeClass: "w-full sm:max-w-lg",
          children: (0, s.jsx)("div", {
            className:
              "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900",
            children: (0, s.jsxs)("div", {
              className: "px-4 py-5 sm:p-6",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex items-center mb-6",
                  children: [
                    (0, s.jsx)("span", {
                      className:
                        "icon-[bxs--map] text-primary-500 dark:text-primary-400 mr-2",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "break-words text-sm text-gray-500 dark:text-gray-400 font-semibold truncate mr-auto",
                      children: "Fanpage",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "break-words text-primary text-sm font-semibold text-right ml-6",
                      children: (0, s.jsx)(i.default, {
                        target: "_blank",
                        href: e("fanpage_link", "https://facebook.com"),
                        children: "Li\xean hệ Fanpage",
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex items-center mb-6",
                  children: [
                    (0, s.jsx)("span", {
                      className:
                        "icon-[bxs--envelope] text-primary-500 dark:text-primary-400 mr-2",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "break-words text-sm text-gray-500 dark:text-gray-400 font-semibold truncate mr-auto",
                      children: "Group Facebook",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "break-words text-primary text-sm font-semibold text-right ml-6",
                      children: (0, s.jsx)(i.default, {
                        target: "_blank",
                        href: e("group_link", "https://facebook.com"),
                        children: "Tham gia Group",
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex items-center mb-6",
                  children: [
                    (0, s.jsx)("span", {
                      className:
                        "icon-[bxs--phone] text-primary-500 dark:text-primary-400 mr-2",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "break-words text-sm text-gray-500 dark:text-gray-400 font-semibold truncate mr-auto",
                      children: "Box Zalo Nso+1",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "break-words text-primary text-sm font-semibold text-right ml-6",
                      children: (0, s.jsx)(i.default, {
                        target: "_blank",
                        href: e("zalo_box_link", "https://zalo.me/g"),
                        children: "Tham gia Box",
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex items-center mb-6",
                  children: [
                    (0, s.jsx)("span", {
                      className:
                        "icon-[bxs--phone] text-primary-500 dark:text-primary-400 mr-2",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "break-words text-sm text-gray-500 dark:text-gray-400 font-semibold truncate mr-auto",
                      children: "Box Zalo Nso+2",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "break-words text-primary text-sm font-semibold text-right ml-6",
                      children: (0, s.jsx)(i.default, {
                        target: "_blank",
                        href: e("zalo_box_link_sv2", "https://zalo.me/g"),
                        children: "Tham gia Box",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    9194: function (e, r, a) {
      "use strict";
      a.r(r);
      var s = a(3827),
        t = a(7622),
        i = a(7794),
        n = a(8792),
        l = a(3019),
        o = a(3405);
      r.default = () => {
        let { getSetting: e } = (0, t.Z)(),
          r = e("android_download_link"),
          a = e("ios_download_link"),
          d = e("pc_download_link"),
          c = (e) => {
            e ||
              i.y.failure("Hiện tại game chưa hỗ trợ tr\xean nền tảng n\xe0y");
          };
        return (0, s.jsx)(o.Z, {
          modalKey: "download",
          children: (0, s.jsxs)("div", {
            className:
              "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900",
            children: [
              l.Dt &&
                r &&
                (0, s.jsx)(s.Fragment, {
                  children: (0, s.jsx)(n.default, {
                    href: r,
                    passHref: !0,
                    children: (0, s.jsx)("a", {
                      className:
                        "block px-4 py-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                      children: "Android",
                    }),
                  }),
                }),
              (0, s.jsxs)("div", {
                className: "px-4 py-5 sm:p-6",
                children: [
                  (0, s.jsxs)(n.default, {
                    href: null != d ? d : "/",
                    onClick: () => c(d),
                    className:
                      "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 w-full flex justify-center items-center mb-3 font-semibold",
                    children: [
                      (0, s.jsx)("span", {
                        className:
                          "icon-[material-symbols--download] flex-shrink-0 h-5 w-5",
                      }),
                      "Tải về cho Desktop",
                    ],
                  }),
                  (0, s.jsxs)(n.default, {
                    href: null != r ? r : "/",
                    onClick: () => c(r),
                    className:
                      "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 w-full flex justify-center items-center mb-3 font-semibold",
                    children: [
                      (0, s.jsx)("span", {
                        className:
                          "icon-[material-symbols--download] flex-shrink-0 h-5 w-5",
                      }),
                      "Tải về cho Android",
                    ],
                  }),
                  (0, s.jsxs)(n.default, {
                    href: null != a ? a : "/",
                    onClick: () => c(a),
                    className:
                      "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 w-full flex justify-center items-center mb-2 font-semibold",
                    children: [
                      (0, s.jsx)("span", {
                        className:
                          "icon-[material-symbols--download] flex-shrink-0 h-5 w-5",
                      }),
                      "Tải về cho IOS",
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    3405: function (e, r, a) {
      "use strict";
      var s = a(3827),
        t = a(1565),
        i = a(129),
        n = a(5961),
        l = a(4090);
      r.Z = (e) => {
        let {
            modalKey: r,
            children: a,
            clickOverlayToClose: o = !0,
            sizeClass: d = "sm:max-w-lg",
            onDisable: c,
          } = e,
          { isModalOpen: u, disableModal: m } = (0, t.useModal)(),
          h = () => {
            o && (m(), c && c());
          };
        return (0, s.jsx)(i.u, {
          appear: !0,
          show: u(r),
          as: l.Fragment,
          children: (0, s.jsxs)(n.V, {
            onClose: () => {},
            onClick: h,
            className: "fixed inset-0 flex z-50",
            children: [
              (0, s.jsx)(i.u.Child, {
                as: l.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: (0, s.jsx)("div", {
                  className:
                    "fixed inset-0 transition-opacity bg-white/25 dark:bg-black/50 backdrop-blur",
                  onClick: h,
                }),
              }),
              (0, s.jsx)(i.u.Child, {
                as: l.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: (0, s.jsx)("div", {
                  className: "fixed inset-0 overflow-y-auto",
                  children: (0, s.jsx)("div", {
                    className:
                      "flex min-h-full sm:items-center justify-center text-center items-center p-4 sm:p-0",
                    children: (0, s.jsx)(n.V.Panel, {
                      className:
                        "relative text-left rtl:text-right flex flex-col overflow-visible bg-white dark:bg-gray-900 shadow-xl w-full rounded-lg sm:my-8 ".concat(
                          d
                        ),
                      children: a,
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },
    6234: function (e, r, a) {
      "use strict";
      a.r(r);
      var s = a(3827),
        t = a(7622),
        i = a(3405);
      r.default = () => {
        let { getSetting: e } = (0, t.Z)(),
          r = e("android_download_link"),
          a = e("ios_download_link"),
          n = e("pc_download_link");
        return (0, s.jsx)(i.Z, {
          modalKey: "platform-not-supported",
          children: (0, s.jsx)("div", {
            className:
              "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900",
            children: (0, s.jsxs)("div", {
              className: "flex flex-col items-center px-4 py-10",
              children: [
                (0, s.jsx)("span", {
                  className:
                    "icon-[bx--sad] w-16 h-16 text-red-500 dark:text-red-400 mb-2 opacity-75 dark:opacity-50",
                }),
                (0, s.jsxs)("p", {
                  className:
                    "break-words text-base text-red-500 dark:text-red-400 text-center",
                  children: [
                    "Xin lỗi, hiện tại GAME chỉ mới hỗ trợ tr\xean nền tảng ",
                    (0, s.jsx)("span", {
                      className: "font-semibold",
                      children: (() => {
                        let e = [];
                        return (
                          n && e.push("Desktop"),
                          r && e.push("Android"),
                          a && e.push("iOS"),
                          e.join(", ")
                        );
                      })(),
                    }),
                    ".",
                    (0, s.jsx)("br", {}),
                    "Vui l\xf2ng chờ ch\xfang m\xecnh cập nhật nh\xe9.",
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    2806: function (e, r, a) {
      "use strict";
      a.r(r),
        a.d(r, {
          default: function () {
            return O;
          },
        });
      var s = a(3827),
        t = a(991),
        i = a(3405),
        n = a(3113),
        l = a(9557),
        o = a(6602),
        d = a(7269),
        c = a(1565),
        u = a(5950),
        m = a(8693),
        h = a(7907),
        x = a(1991);
      let g = x.Ry({
          username: x.Z_().required("T\xe0i khoản kh\xf4ng được để trống"),
          password: x.Z_().required("Mật khẩu kh\xf4ng được để trống"),
        }),
        f = { username: "", password: "" };
      var p = () => {
          let e = (0, h.useRouter)(),
            { mutate: r } = (0, d.Z)(),
            { disableModal: a } = (0, c.useModal)(),
            t = async (s, t) => {
              let { setSubmitting: i, setFieldError: l } = t;
              try {
                let { access_token: t } = await n.i.login(s);
                (0, u.j1)({ access_token: t }), await r(), e.refresh(), a();
              } catch (e) {
                (0, u.yL)(), (0, u.yU)(e, l);
              } finally {
                i(!1);
              }
            };
          return (0, s.jsx)("div", {
            className: "px-4 py-5 sm:p-6",
            children: (0, s.jsx)(m.J9, {
              initialValues: f,
              validationSchema: g,
              onSubmit: t,
              children: (e) => {
                let { isSubmitting: r } = e;
                return (0, s.jsxs)(m.l0, {
                  children: [
                    (0, s.jsx)(l.Z, {
                      label: "T\xe0i khoản",
                      name: "username",
                      icon: "icon-[bxs--user]",
                    }),
                    (0, s.jsx)(l.Z, {
                      label: "Mật khẩu",
                      name: "password",
                      icon: "icon-[bxs--lock]",
                      type: "password",
                    }),
                    (0, s.jsx)("div", {
                      className: "flex justify-end items-center mt-6",
                      children: (0, s.jsx)(o.Z, {
                        isSubmitting: r,
                        children: "Đăng nhập",
                      }),
                    }),
                  ],
                });
              },
            }),
          });
        },
        b = a(2550),
        y = a.n(b);
      let v = x.Ry({
          username: x
            .Z_()
            .min(5, "Tối thiểu 5 k\xed tự")
            .max(25, "Tối đa 25 k\xed tự")
            .matches(
              /^[a-zA-Z0-9]+$/,
              "T\xe0i khoản kh\xf4ng được chứa k\xed tự đặc biệt"
            )
            .required("T\xe0i khoản kh\xf4ng được để trống"),
          password: x
            .Z_()
            .min(6, "Tối thiểu 6 k\xed tự")
            .max(25, "Tối đa 25 k\xed tự")
            .required("Mật khẩu kh\xf4ng được để trống"),
          confirm_password: x
            .Z_()
            .required("Vui l\xf2ng nhập lại mật khẩu")
            .oneOf([x.iH("password"), ""], "Mật khẩu kh\xf4ng khớp"),
        }),
        k = { username: "", password: "", confirm_password: "" };
      var j = () => {
          let { mutate: e } = (0, d.Z)(),
            { disableModal: r } = (0, c.useModal)(),
            a = (0, h.useRouter)(),
            t = async (s, t) => {
              let { setSubmitting: i, setFieldError: l } = t;
              try {
                let { access_token: t } = await n.i.register(s);
                (0, u.j1)({ access_token: t }), await e(), a.refresh(), r();
              } catch (e) {
                (0, u.yL)(),
                  (0, u.yU)(e, l),
                  y().Notify.failure(
                    "The given data was invalid." === e.message
                      ? "Dữ liệu kh\xf4ng hợp lệ"
                      : e.message
                  );
              } finally {
                i(!1);
              }
            };
          return (0, s.jsx)("div", {
            className: "px-4 py-5 sm:p-6",
            children: (0, s.jsx)(m.J9, {
              initialValues: k,
              validationSchema: v,
              onSubmit: t,
              children: (e) => {
                let { isSubmitting: r } = e;
                return (0, s.jsxs)(m.l0, {
                  children: [
                    (0, s.jsx)(l.Z, {
                      label: "T\xe0i khoản",
                      name: "username",
                      icon: "icon-[bxs--user]",
                      autoComplete: "off",
                    }),
                    (0, s.jsx)(l.Z, {
                      label: "Mật khẩu",
                      name: "password",
                      icon: "icon-[bxs--lock]",
                      type: "password",
                      autoComplete: "off",
                    }),
                    (0, s.jsx)(l.Z, {
                      label: "Nhập lại mật khẩu",
                      name: "confirm_password",
                      icon: "icon-[bxs--lock]",
                      type: "password",
                      autoComplete: "off",
                    }),
                    (0, s.jsx)("div", {
                      className: "flex justify-end items-center mt-6",
                      children: (0, s.jsx)(o.Z, {
                        isSubmitting: r,
                        children: "Đăng k\xfd",
                      }),
                    }),
                  ],
                });
              },
            }),
          });
        },
        w = a(3453),
        N = a(7794),
        Z = a(4090);
      let P = x.Ry({
        username: x
          .Z_()
          .min(5, "Tối thiểu 5 k\xed tự")
          .max(25, "Tối đa 25 k\xed tự")
          .required("T\xe0i khoản kh\xf4ng được để trống"),
        phoneOrEmail: x
          .Z_()
          .test(
            "is-phone-or-email",
            "Phải l\xe0 số điện thoại hoặc email hợp lệ",
            (e) =>
              /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e || "") ||
              /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(e || "")
          )
          .required("SĐT hoặc Email kh\xf4ng được để trống"),
        password: x
          .Z_()
          .min(6, "Tối thiểu 6 k\xed tự")
          .max(25, "Tối đa 25 k\xed tự"),
        confirm_password: x
          .Z_()
          .oneOf([x.iH("password"), ""], "Mật khẩu kh\xf4ng khớp"),
      });
      var T = () => {
          let [e, r] = (0, Z.useState)(!1),
            [a, t] = (0, Z.useState)(!1),
            { mutate: i } = (0, d.Z)(),
            { disableModal: x } = (0, c.useModal)(),
            g = (0, h.useRouter)();
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("div", {
                className: "px-4 py-5 sm:px-6",
                children: [
                  (0, s.jsx)("p", {
                    className: "break-words text-base font-semibold",
                    children: " Qu\xean Mật Khẩu",
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "break-words text-sm text-gray-500 dark:text-gray-400",
                    children:
                      "Sử dụng số điện thoại hoặc email đ\xe3 đăng k\xfd để đặt lại mật khẩu",
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "px-4 py-5 sm:p-6",
                children: (0, s.jsx)(m.J9, {
                  initialValues: {
                    username: "",
                    phoneOrEmail: "",
                    password: "",
                    confirm_password: "",
                    code: "",
                  },
                  validationSchema: P,
                  onSubmit: (s, t) => {
                    let { setSubmitting: l, setFieldError: o } = t;
                    s.phoneOrEmail.includes("@")
                      ? n.i
                          .forgotPassword(s)
                          .then(() => {
                            N.y.success(
                              "Đặt lại mật khẩu th\xe0nh c\xf4ng, vui l\xf2ng kiểm tra email để lấy lại mật khẩu"
                            );
                          })
                          .catch((e) => {
                            var r;
                            (0, u.yU)(e, o),
                              y().Notify.failure(
                                null !== (r = e.message) && void 0 !== r
                                  ? r
                                  : "C\xf3 lỗi xảy ra, vui l\xf2ng thử lại"
                              );
                          })
                          .finally(() => {
                            l(!1);
                          })
                      : e
                      ? a
                        ? n.i
                            .resetPasswordViaPhone(s)
                            .then((e) => {
                              (0, u.j1)({ access_token: e.access_token }),
                                i()
                                  .then(() => {
                                    N.y.successCallback(e.message, () => {
                                      x(), g.push("/"), g.refresh();
                                    });
                                  })
                                  .catch(() => {
                                    (0, u.yL)();
                                  });
                            })
                            .catch((e) => {
                              (0, u.yU)(e, o);
                            })
                            .finally(() => {
                              l(!1);
                            })
                        : l(!1)
                      : (r(!0), l(!1));
                  },
                  children: (r) => {
                    let { isSubmitting: i, values: n } = r;
                    return (0, s.jsxs)(m.l0, {
                      children: [
                        (0, s.jsx)(l.Z, {
                          label: "T\xe0i khoản",
                          name: "username",
                          icon: "icon-[bxs--user]",
                          autoComplete: "off",
                        }),
                        (0, s.jsx)(l.Z, {
                          label: "SĐT hoặc Email",
                          name: "phoneOrEmail",
                          icon: "icon-[bxs--phone]",
                          autoComplete: "off",
                        }),
                        e &&
                          (0, s.jsx)(s.Fragment, {
                            children: (0, s.jsx)(w.Z, {
                              phone: n.phoneOrEmail,
                              onConfirmSuccess: () => t(!0),
                            }),
                          }),
                        a &&
                          (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(l.Z, {
                                label: "Mật khẩu mới",
                                name: "password",
                                icon: "icon-[bxs--lock]",
                                type: "password",
                                autoComplete: "off",
                              }),
                              (0, s.jsx)(l.Z, {
                                label: "Nhập lại mật khẩu",
                                name: "confirm_password",
                                icon: "icon-[bxs--lock]",
                                type: "password",
                                autoComplete: "off",
                              }),
                            ],
                          }),
                        (0, s.jsx)("div", {
                          className: "flex justify-end items-center mt-6",
                          children: (0, s.jsx)(o.Z, {
                            isSubmitting: i,
                            children: "X\xe1c nhận",
                          }),
                        }),
                      ],
                    });
                  },
                }),
              }),
            ],
          });
        },
        _ = a(129),
        C = (e) => {
          let { children: r } = e;
          return (0, s.jsx)(_.u, {
            show: !0,
            appear: !0,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: r,
          });
        },
        O = () =>
          (0, s.jsx)(i.Z, {
            modalKey: "auth",
            children: (0, s.jsx)("div", {
              className: "p-2",
              children: (0, s.jsxs)(t.O.Group, {
                children: [
                  (0, s.jsxs)(t.O.List, {
                    className:
                      "bg-gray-100 dark:bg-gray-800 rounded-lg p-1 w-full h-10 grid items-center",
                    style: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
                    children: [
                      (0, s.jsx)(t.O, {
                        className: (e) => {
                          let { selected: r } = e;
                          return "relative inline-flex items-center justify-center w-full h-8 px-3 text-sm font-medium rounded-md transition-colors duration-200 ease-out\n            ".concat(
                            r
                              ? "text-gray-900 dark:text-white bg-white dark:bg-gray-900 shadow-sm"
                              : "text-gray-500 dark:text-gray-400"
                          );
                        },
                        children: "Đăng nhập",
                      }),
                      (0, s.jsx)(t.O, {
                        className: (e) => {
                          let { selected: r } = e;
                          return "relative inline-flex items-center justify-center w-full h-8 px-3 text-sm font-medium rounded-md transition-colors duration-200 ease-out\n            ".concat(
                            r
                              ? "text-gray-900 dark:text-white bg-white dark:bg-gray-900 shadow-sm"
                              : "text-gray-500 dark:text-gray-400"
                          );
                        },
                        children: "Đăng k\xfd",
                      }),
                      (0, s.jsx)(t.O, {
                        className: (e) => {
                          let { selected: r } = e;
                          return "relative inline-flex items-center justify-center w-full h-8 px-3 text-sm font-medium rounded-md transition-colors duration-200 ease-out\n            ".concat(
                            r
                              ? "text-gray-900 dark:text-white bg-white dark:bg-gray-900 shadow-sm"
                              : "text-gray-500 dark:text-gray-400"
                          );
                        },
                        children: "Mật khẩu",
                      }),
                    ],
                  }),
                  (0, s.jsxs)(t.O.Panels, {
                    className: "mt-2",
                    children: [
                      (0, s.jsx)(t.O.Panel, {
                        className:
                          "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900",
                        children: (0, s.jsx)(C, {
                          children: (0, s.jsx)(p, {}),
                        }),
                      }),
                      (0, s.jsx)(t.O.Panel, {
                        className:
                          "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900",
                        children: (0, s.jsx)(C, {
                          children: (0, s.jsx)(j, {}),
                        }),
                      }),
                      (0, s.jsx)(t.O.Panel, {
                        className:
                          "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900",
                        children: (0, s.jsx)(C, {
                          children: (0, s.jsx)(T, {}),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
    },
    4498: function (e, r, a) {
      "use strict";
      a.r(r);
      var s = a(3827),
        t = a(3113),
        i = a(9557),
        n = a(6602),
        l = a(1565),
        o = a(5950),
        d = a(7794),
        c = a(8693),
        u = a(7907),
        m = a(1991),
        h = a(3405),
        x = a(7269);
      let g = m.Ry({
          password: m
            .Z_()
            .min(6, "Tối thiểu 6 k\xed tự")
            .max(25, "Tối đa 25 k\xed tự")
            .required("Mật khẩu kh\xf4ng được để trống"),
          confirm_password: m
            .Z_()
            .oneOf([m.iH("password"), ""], "Mật khẩu kh\xf4ng khớp")
            .required("Vui l\xf2ng nhập lại mật khẩu"),
        }),
        f = { password: "", confirm_password: "" };
      r.default = () => {
        let { disableModal: e } = (0, l.useModal)(),
          r = (0, u.useParams)(),
          a = (0, u.useRouter)(),
          { mutate: m } = (0, x.Z)(),
          p = r.token;
        return (0, s.jsxs)(h.Z, {
          modalKey: "reset-password",
          children: [
            (0, s.jsxs)("div", {
              className: "px-4 pt-5 sm:px-6",
              children: [
                (0, s.jsx)("p", {
                  className: "break-words text-base font-semibold",
                  children: "Đặt lại mật khẩu",
                }),
                (0, s.jsx)("p", {
                  className:
                    "break-words text-sm text-gray-500 dark:text-gray-400",
                  children:
                    "Đặt lại mật khẩu mới cho t\xe0i khoản của bạn, link n\xe0y chỉ c\xf3 hiệu lực trong 1 giờ.",
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "px-4 pb-5 sm:p-6",
              children: (0, s.jsx)(c.J9, {
                initialValues: f,
                validationSchema: g,
                onSubmit: (r, s) => {
                  let { setSubmitting: i, setFieldError: n } = s;
                  if (!p) {
                    d.y.failure(
                      "Y\xeau cầu kh\xf4ng hợp lệ, vui l\xf2ng gửi một y\xeau cầu mới"
                    );
                    return;
                  }
                  t.i
                    .resetPassword(r.password, p)
                    .then((r) => {
                      (0, o.j1)({ access_token: r.access_token }),
                        m()
                          .then(() => {
                            d.y.successCallback(r.message, () => {
                              e(), a.push("/"), a.refresh();
                            });
                          })
                          .catch(() => {
                            (0, o.yL)();
                          });
                    })
                    .catch((e) => {
                      (0, o.yU)(e, n);
                    })
                    .finally(() => {
                      i(!1);
                    });
                },
                children: (e) => {
                  let { isSubmitting: r } = e;
                  return (0, s.jsxs)(c.l0, {
                    children: [
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(i.Z, {
                            label: "Mật khẩu mới",
                            name: "password",
                            icon: "icon-[bxs--lock]",
                            type: "password",
                            autoComplete: "off",
                          }),
                          (0, s.jsx)(i.Z, {
                            label: "Nhập lại mật khẩu",
                            name: "confirm_password",
                            icon: "icon-[bxs--lock]",
                            type: "password",
                            autoComplete: "off",
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: "flex justify-end items-center mt-6",
                        children: (0, s.jsx)(n.Z, {
                          isSubmitting: r,
                          children: "X\xe1c nhận",
                        }),
                      }),
                    ],
                  });
                },
              }),
            }),
          ],
        });
      };
    },
    1311: function (e, r, a) {
      "use strict";
      a.r(r),
        a.d(r, {
          default: function () {
            return g;
          },
        });
      var s = a(3827),
        t = a(7622),
        i = a(1565),
        n = a(8792),
        l = a(7269),
        o = a(9606),
        d = a(1754),
        c = a(129),
        u = a(7907);
      let m = (e) =>
          e
            ? "text-primary-500 dark:text-primary-400"
            : "text-gray-500 dark:text-gray-400",
        h = (e) => {
          let {
              label: r,
              href: a,
              prefetch: t = !0,
              roles: i,
              openInNewTab: d,
            } = e,
            { hasRole: c } = (0, l.Z)(),
            { closeSidebar: m } = (0, o.useLayout)(),
            h = (0, u.usePathname)() === a;
          return i && !c(...i)
            ? (0, s.jsx)(s.Fragment, {})
            : (0, s.jsx)("li", {
                children: (0, s.jsx)(n.default, {
                  className:
                    "group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75 px-3 py-1.5 w-full focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 rounded-md font-medium text-sm ".concat(
                      h
                        ? "text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50"
                    ),
                  href: a,
                  prefetch: t,
                  onClick: m,
                  target: d ? "_blank" : void 0,
                  children: (0, s.jsx)("span", {
                    className: "truncate relative",
                    children: r,
                  }),
                }),
              });
        };
      var x = (e) => {
        let { title: r, icon: a, links: t } = e;
        return 0 === t.length
          ? (0, s.jsx)(s.Fragment, {})
          : (0, s.jsx)(d.p, {
              defaultOpen: !0,
              children: (e) => {
                let { open: i } = e;
                return (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsxs)(d.p.Button, {
                      className:
                        "flex items-center py-2 cursor-pointer overflow-hidden select-none w-full text-left",
                      children: [
                        (0, s.jsx)("span", {
                          className: "".concat(a, " w-5 h-5 ").concat(m(i)),
                        }),
                        (0, s.jsx)("p", {
                          className: "break-words text-sm ".concat(
                            m(i),
                            " font-semibold mx-4"
                          ),
                          children: r,
                        }),
                        (0, s.jsx)("span", {
                          className: ""
                            .concat(
                              i ? "rotate-90" : "rotate-0",
                              " icon-[bx--chevron-right] w-5 h-5 "
                            )
                            .concat(
                              m(i),
                              " ms-auto transform transition-transform"
                            ),
                        }),
                      ],
                    }),
                    (0, s.jsx)(c.u, {
                      enter: "transition duration-200 ease-out",
                      enterFrom: "transform scale-95 opacity-0",
                      enterTo: "transform scale-100 opacity-100",
                      leave: "transition duration-175 ease-out",
                      leaveFrom: "transform scale-100 opacity-100",
                      leaveTo: "transform scale-95 opacity-0",
                      children: (0, s.jsx)(d.p.Panel, {
                        className:
                          "text-sm text-gray-500 dark:text-gray-400 pt-0 pb-2 pl-6 transition-opacity duration-500 ease-in-out",
                        children: (0, s.jsx)("nav", {
                          className: "relative",
                          children: (0, s.jsx)("ul", {
                            children: t.map((e, r) =>
                              (0, s.jsx)(h, { ...e }, r)
                            ),
                          }),
                        }),
                      }),
                    }),
                  ],
                });
              },
            });
      };
      function g() {
        let { getOrDefault: e } = (0, t.Z)(),
          { setModal: r } = (0, i.useModal)(),
          { closeSidebar: a } = (0, o.useLayout)();
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsxs)(n.default, {
              onClick: a,
              href: "/download",
              className:
                "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 w-full flex justify-center items-center mb-2 font-semibold",
              children: [
                (0, s.jsx)("span", {
                  className:
                    "icon-[material-symbols--download] flex-shrink-0 h-5 w-5",
                  "aria-hidden": "true",
                }),
                "TẢI GAME",
              ],
            }),
            (0, s.jsx)("div", {
              className: "mb-4",
              children: (0, s.jsx)("button", {
                type: "button",
                className:
                  "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 w-full flex justify-center items-center",
                onClick: () => r("contact"),
                children: "Cộng Đồng - Hỗ Trợ",
              }),
            }),
            (0, s.jsxs)("div", {
              className: "w-full flex flex-col",
              children: [
                (0, s.jsx)(x, {
                  title: "Chức năng",
                  icon: "icon-[bx--cube-alt]",
                  links: [
                    { label: "Nạp tiền", href: "/recharge" },
                    { label: "Đổi lượng", href: "/package/gold" },
                    { label: "Giftcode", href: "/giftcode" },
                    { label: "V\xf2ng quay", href: "/wheel" },
                    {
                      label: "Chuyển tiền",
                      href: "/transfer",
                      roles: ["Administrator", "Agency"],
                    },
                    { label: "Chuyển dữ liệu", href: "/convert" },
                  ],
                }),
                (0, s.jsx)(x, {
                  title: "Sự kiện",
                  icon: "icon-[bx--calendar]",
                  links: [
                    { label: "Đăng nhập", href: "/event/login" },
                    { label: "T\xedch giờ chơi", href: "/event/play" },
                    {
                      label: "T\xedch nạp th\xe1ng",
                      href: "/event/exchange/month",
                    },
                    { label: "T\xedch nạp tổng", href: "/event/exchange" },
                  ],
                }),
                (0, s.jsx)(x, {
                  title: "Xếp Hạng",
                  icon: "icon-[bx--bar-chart-alt-2]",
                  links: [
                    { label: "Cao thủ", href: "/ranking/master" },
                    { label: "Gia tộc", href: "/ranking/clan" },
                    { label: "T\xedch lũy", href: "/ranking/wealth" },
                  ],
                }),
                (0, s.jsx)(x, {
                  title: "B\xe0i viết",
                  icon: "icon-[bx--news]",
                  links: [
                    { label: "Tất cả", href: "/tin-tuc" },
                    { label: "Hướng dẫn", href: "/danh-muc/huong-dan" },
                    { label: "T\xednh năng", href: "/danh-muc/tinh-nang" },
                    { label: "Sự kiện", href: "/danh-muc/su-kien" },
                  ],
                }),
                (0, s.jsx)(x, {
                  title: "Mạng X\xe3 Hội",
                  icon: "icon-[bx--book-reader]",
                  links: [
                    {
                      label: "Fanpage",
                      href: e("fanpage_link", "https://www.facebook.com"),
                      openInNewTab: !0,
                    },
                    {
                      label: "Group",
                      href: e("group_link", "https://www.facebook.com"),
                      openInNewTab: !0,
                    },
                    {
                      label: "Zalo",
                      href: e("zalo_box_link_sv2", "https://zalo.me"),
                      openInNewTab: !0,
                    },
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    4080: function (e, r, a) {
      "use strict";
      a.r(r);
      var s = a(3827),
        t = a(9606),
        i = a(129),
        n = a(5961),
        l = a(703),
        o = a(8792),
        d = a(4090),
        c = a(1311);
      r.default = () => {
        let { isSidebarOpen: e, closeSidebar: r } = (0, t.useLayout)();
        return (0, s.jsx)(i.u, {
          appear: !0,
          show: e,
          as: d.Fragment,
          children: (0, s.jsxs)(n.V, {
            onClose: () => {},
            onClick: r,
            className: "fixed inset-0 flex z-50",
            children: [
              (0, s.jsx)(i.u.Child, {
                as: d.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: (0, s.jsx)("div", {
                  className:
                    "fixed inset-0 transition-opacity bg-white/25 dark:bg-black/50 backdrop-blur",
                  onClick: r,
                }),
              }),
              (0, s.jsx)(i.u.Child, {
                as: d.Fragment,
                enter: "transition ease-out duration-300 transform",
                enterFrom: "-translate-x-full",
                enterTo: "translate-x-0",
                leave: "transition ease-in duration-200 transform",
                leaveFrom: "translate-x-0",
                leaveTo: "-translate-x-full",
                children: (0, s.jsx)(n.V.Panel, {
                  className:
                    "relative flex-1 flex flex-col w-full focus:outline-none w-screen max-w-xs bg-white dark:bg-gray-900",
                  children: (0, s.jsx)("div", {
                    className:
                      "relative overflow-visible overflow-y-auto rounded-lg divide-y divide-gray-100 dark:divide-gray-800 shadow bg-white dark:bg-gray-900 flex flex-col flex-1 w-full",
                    children: (0, s.jsxs)("div", {
                      className: "grow overflow-y-auto px-4 py-3 sm:p-6",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "flex justify-center items-center w-full mb-3",
                          children: (0, s.jsx)(o.default, {
                            onClick: r,
                            className: "focus:outline-none",
                            href: "/",
                            children: (0, s.jsx)("div", {
                              className: "flex items-center",
                              children: (0, s.jsx)(l.default, {
                                src: "/logo.png",
                                className:
                                  "w-auto h-[calc(var(--header-size)*1.5)] mr-2",
                                alt: "NsoPlus",
                                width: 500,
                                height: 331,
                              }),
                            }),
                          }),
                        }),
                        (0, s.jsx)(c.default, {}),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },
    7269: function (e, r, a) {
      "use strict";
      var s = a(1877),
        t = a(5950),
        i = a(4090),
        n = a(8016),
        l = a(3046);
      r.Z = () => {
        let [e, r] = (0, l.Z)("user"),
          {
            data: a,
            isLoading: o,
            isValidating: d,
            mutate: c,
          } = (0, n.ZP)("/auth/me", {
            shouldRetryOnError: !1,
            focusThrottleInterval: 6e4,
            revalidateOnFocus: !1,
            revalidateOnMount: !0,
            dedupingInterval: 1e4,
            fallbackData: e,
            fetcher: () =>
              s.B.getUserProfile().catch((e) => {
                throw ("Unauthenticated." === e.message && u(), e);
              }),
            onSuccess: (e) => {
              r(e);
            },
          }),
          u = (0, i.useCallback)(() => {
            r(void 0), c(void 0, !1), (0, t.yL)();
          }, [c, r]),
          m = (0, i.useCallback)(
            (e) => {
              a && (c({ ...a, balance: e }, !1), r({ ...a, balance: e }));
            },
            [a, c, r]
          );
        return {
          currentUser: a,
          loading: o || d,
          logout: u,
          mutate: c,
          firstLoading: o,
          isValidating: d,
          setBalance: m,
          hasRole: function () {
            for (var e, r = arguments.length, s = Array(r), t = 0; t < r; t++)
              s[t] = arguments[t];
            return null == a
              ? void 0
              : null === (e = a.role_names) || void 0 === e
              ? void 0
              : e.some((e) => s.includes(e));
          },
          hasPermission: function () {
            for (var e, r = arguments.length, s = Array(r), t = 0; t < r; t++)
              s[t] = arguments[t];
            return null == a
              ? void 0
              : null === (e = a.permission_names) || void 0 === e
              ? void 0
              : e.some((e) => s.includes(e));
          },
        };
      };
    },
    6027: function (e, r, a) {
      "use strict";
      var s = a(8016),
        t = a(3046);
      r.Z = function (e) {
        let r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          [a, i] = (0, t.Z)(null != e ? e : "");
        return (0, s.ZP)(e, { onSuccess: i, fallbackData: a, ...r });
      };
    },
    7622: function (e, r, a) {
      "use strict";
      a.d(r, {
        Z: function () {
          return i;
        },
      });
      var s = a(70),
        t = a(6027),
        i = () => {
          let { data: e } = (0, t.Z)("/settings", {
            revalidateOnFocus: !1,
            revalidateOnReconnect: !1,
            dedupingInterval: 18e5,
            fetcher: () => s.Z.get("/settings"),
          });
          return {
            getSetting: (r, a) =>
              e && e[r] ? (a ? JSON.parse(e[r]) : e[r]) : null,
            getOrDefault: (r, a, s) =>
              e && e[r] ? (s ? JSON.parse(e[r]) : e[r]) : a,
          };
        };
    },
    9606: function (e, r, a) {
      "use strict";
      a.r(r),
        a.d(r, {
          LayoutProvider: function () {
            return n;
          },
          useLayout: function () {
            return l;
          },
        });
      var s = a(3827),
        t = a(4090);
      let i = (0, t.createContext)(void 0),
        n = (e) => {
          let { children: r } = e,
            [a, n] = (0, t.useState)(!1);
          return (0, s.jsx)(i.Provider, {
            value: {
              isSidebarOpen: a,
              openSidebar: () => n(!0),
              closeSidebar: () => n(!1),
            },
            children: r,
          });
        },
        l = () => {
          let e = (0, t.useContext)(i);
          if (void 0 === e)
            throw Error("useLayout must be used within a LayoutProvider");
          return e;
        };
    },
    1565: function (e, r, a) {
      "use strict";
      a.r(r),
        a.d(r, {
          ModalProvider: function () {
            return n;
          },
          useModal: function () {
            return l;
          },
          useModalData: function () {
            return o;
          },
        });
      var s = a(3827),
        t = a(4090);
      let i = (0, t.createContext)(void 0),
        n = (e) => {
          let { children: r } = e,
            [a, n] = (0, t.useState)([]),
            [l, o] = (0, t.useState)({}),
            d = (e, r) => {
              o((a) => ({ ...a, [e]: r }));
            };
          return (0, s.jsx)(i.Provider, {
            value: {
              getData: function (e) {
                return l[e];
              },
              setModal: (e, r) => {
                e && (n([...a, e]), r && d(e, r));
              },
              setData: d,
              disableModal: () => {
                n(a.slice(0, -1));
              },
              isModalOpen: (e) => a.includes(e),
            },
            children: r,
          });
        },
        l = () => {
          let e = (0, t.useContext)(i);
          if (void 0 === e)
            throw Error("useModal must be used within a ModalProvider");
          return e;
        };
      function o(e) {
        let { getData: r } = l();
        return r(e);
      }
    },
    7744: function () {},
    8888: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        8792, 5345, 8016, 129, 1749, 2370, 8831, 3019, 3666, 5311, 7478, 8069,
        1744,
      ],
      function () {
        return e((e.s = 8580));
      }
    ),
      (_N_E = e.O());
  },
]);
