(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5570],
  {
    5558: function (e, r, n) {
      Promise.resolve().then(n.bind(n, 9861));
    },
    7907: function (e, r, n) {
      "use strict";
      var s = n(5313);
      n.o(s, "redirect") &&
        n.d(r, {
          redirect: function () {
            return s.redirect;
          },
        }),
        n.o(s, "useParams") &&
          n.d(r, {
            useParams: function () {
              return s.useParams;
            },
          }),
        n.o(s, "usePathname") &&
          n.d(r, {
            usePathname: function () {
              return s.usePathname;
            },
          }),
        n.o(s, "useRouter") &&
          n.d(r, {
            useRouter: function () {
              return s.useRouter;
            },
          });
    },
    1877: function (e, r, n) {
      "use strict";
      n.d(r, {
        B: function () {
          return t;
        },
      });
      var s = n(70);
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
    9861: function (e, r, n) {
      "use strict";
      n.r(r),
        n.d(r, {
          default: function () {
            return p;
          },
        });
      var s = n(3827),
        t = n(70),
        a = n(9557),
        i = n(6602),
        l = n(1398),
        d = n(7269),
        o = n(5950),
        c = n(7794),
        m = n(8693),
        u = n(4090),
        h = n(1991),
        x = n(7907),
        p = () => {
          let [e, r] = (0, u.useState)(!1),
            [n, p] = (0, u.useState)(!1),
            [g, b] = (0, u.useState)(!1),
            [f, y] = (0, u.useState)(!1),
            [k, v] = (0, u.useState)(""),
            [j, N] = (0, u.useState)(""),
            { mutate: w } = (0, d.Z)(),
            Z = (0, x.useRouter)(),
            T = h.Ry().shape({
              username: h
                .Z_()
                .min(5, "Tối thiểu 5 k\xed tự")
                .max(25, "Tối đa 25 k\xed tự")
                .matches(
                  /^[a-zA-Z0-9]+$/,
                  "T\xe0i khoản kh\xf4ng được chứa k\xed tự đặc biệt"
                )
                .required("T\xe0i khoản kh\xf4ng được để trống"),
              name: h
                .Z_()
                .min(5, "Tối thiểu 5 k\xed tự")
                .max(25, "Tối đa 25 k\xed tự")
                .matches(
                  /^[a-zA-Z0-9]+$/,
                  "T\xe0i khoản kh\xf4ng được chứa k\xed tự đặc biệt"
                )
                .required("T\xe0i khoản kh\xf4ng được để trống"),
              password: h
                .Z_()
                .min(6, "Tối thiểu 6 k\xed tự")
                .max(25, "Tối đa 25 k\xed tự")
                .required("Mật khẩu kh\xf4ng được để trống"),
              phone: h
                .Z_()
                .matches(
                  /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                  "Số điện thoại kh\xf4ng hợp lệ"
                )
                .required("Kh\xf4ng được bỏ trống"),
            }),
            P = (e) =>
              !!n &&
              (!g || (e.new_username === k && "" !== k)) &&
              (!f || (e.new_name === j && "" !== j));
          return (0, s.jsxs)("div", {
            className: "max-w-[700px] mx-auto",
            children: [
              (0, s.jsx)(l.default, {
                title: "Chuyển Server",
                description:
                  "Chuyển dữ liệu nh\xe2n vật từ NsoMega sang Nso+ 1",
              }),
              (0, s.jsx)("div", {
                children: (0, s.jsx)(m.J9, {
                  initialValues: {
                    username: "",
                    password: "",
                    name: "",
                    phone: "",
                    new_username: "",
                    new_name: "",
                  },
                  validationSchema: T,
                  onSubmit: (e, r) => {
                    var n;
                    let {
                      setSubmitting: s,
                      setFieldError: a,
                      resetForm: i,
                    } = r;
                    ((n = { ...e, confirm: P(e) }),
                    t.Z.post("convert/check", n))
                      .then((r) => {
                        console.log(r),
                          r.success &&
                            (i(),
                            c.y.successCallback(
                              "Chuyển dữ liệu th\xe0nh c\xf4ng, từ nay bạn c\xf3 thể đăng nhập tại NsoPlus với t\xe0i khoản l\xe0: ".concat(
                                e.new_username || e.username
                              ),
                              () => {
                                (0, o.j1)({ access_token: r.access_token }),
                                  w()
                                    .then(() => {
                                      Z.push("/"), Z.refresh();
                                    })
                                    .catch(() => {
                                      (0, o.yL)();
                                    });
                              }
                            )),
                          b(r.isUsernameExist),
                          y(r.isNameExist),
                          v(r.newUsername),
                          N(r.newName),
                          p(!0);
                      })
                      .catch((e) => {
                        (0, o.yU)(e, a);
                      })
                      .finally(() => {
                        s(!1);
                      });
                  },
                  children: (e) => {
                    let { isSubmitting: r, values: t } = e;
                    return (0, s.jsxs)(m.l0, {
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "flex items-center p-4 mb-4 text-sm text-primary-800 border border-primary-300 rounded-lg bg-primary-50 dark:bg-gray-800 dark:text-primary-400 dark:border-primary-800",
                          role: "alert",
                          children: [
                            (0, s.jsx)("span", {
                              className:
                                "flex-shrink-0 inline w-4 h-4 me-3 icon-[bx--check]",
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("span", {
                                  className: "font-semibold",
                                  children: "Lưu \xfd!",
                                }),
                                " Nhập đầy đủ ch\xednh x\xe1c to\xe0n bộ th\xf4ng tin của bạn tại ",
                                (0, s.jsx)("span", {
                                  className: "font-medium",
                                  children: "NsoMega",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)(a.Z, {
                          name: "username",
                          label: "T\xean t\xe0i khoản",
                          readOnly: n,
                        }),
                        (0, s.jsx)(a.Z, {
                          name: "password",
                          label: "Mật khẩu",
                          readOnly: n,
                        }),
                        (0, s.jsx)(a.Z, {
                          name: "name",
                          label: "T\xean nh\xe2n vật",
                          readOnly: n,
                        }),
                        (0, s.jsx)(a.Z, {
                          name: "phone",
                          label: "Số điện thoại",
                          readOnly: n,
                        }),
                        n &&
                          (0, s.jsxs)("div", {
                            className: "pt-1",
                            children: [
                              g || f
                                ? (0, s.jsx)("div", {
                                    className:
                                      "flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",
                                    role: "alert",
                                    children: (0, s.jsxs)("div", {
                                      children: [
                                        (0, s.jsx)("span", {
                                          className: "font-semibold",
                                          children: "Tr\xf9ng lặp!",
                                        }),
                                        " T\xean t\xe0i khoản hoặc t\xean nh\xe2n vật của bạn bị tr\xf9ng với một nh\xe2n vật kh\xe1c ở",
                                        " ",
                                        (0, s.jsx)("span", {
                                          className: "font-medium",
                                          children: "Nso+1",
                                        }),
                                        ", vui l\xf2ng thay đổi th\xe0nh th\xf4ng tin mới. Sau khi thay đổi bạn sẽ đăng nhập bằng th\xf4ng tin mới n\xe0y",
                                      ],
                                    }),
                                  })
                                : (0, s.jsx)("div", {
                                    className:
                                      "flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800",
                                    role: "alert",
                                    children: (0, s.jsxs)("div", {
                                      children: [
                                        (0, s.jsx)("span", {
                                          className: "font-semibold",
                                          children: "Mọi thứ sẵn s\xe0ng!",
                                        }),
                                        " Bấm x\xe1c nhận để tiến h\xe0nh chuyển dữ liệu từ ",
                                        (0, s.jsx)("span", {
                                          className: "font-medium",
                                          children: "NsoMega",
                                        }),
                                        " ",
                                        "sang ",
                                        (0, s.jsx)("span", {
                                          className: "font-medium",
                                          children: "Nso+1",
                                        }),
                                      ],
                                    }),
                                  }),
                              g &&
                                (0, s.jsx)(a.Z, {
                                  name: "new_username",
                                  label: "T\xean t\xe0i khoản mới",
                                }),
                              f &&
                                (0, s.jsx)(a.Z, {
                                  name: "new_name",
                                  label: "T\xean nh\xe2n vật mới",
                                }),
                              P(t) &&
                                (0, s.jsx)("div", {
                                  className:
                                    "flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800",
                                  role: "alert",
                                  children: (0, s.jsxs)("div", {
                                    children: [
                                      (0, s.jsx)("span", {
                                        className: "font-semibold",
                                        children: "Mọi thứ sẵn s\xe0ng!",
                                      }),
                                      " Bấm x\xe1c nhận để tiến h\xe0nh chuyển dữ liệu từ ",
                                      (0, s.jsx)("span", {
                                        className: "font-medium",
                                        children: "NsoMega",
                                      }),
                                      " ",
                                      "sang ",
                                      (0, s.jsx)("span", {
                                        className: "font-medium",
                                        children: "Nso+1",
                                      }),
                                    ],
                                  }),
                                }),
                            ],
                          }),
                        (0, s.jsx)("div", {
                          className: "flex justify-end items-center mt-4",
                          children: (0, s.jsx)(i.Z, {
                            isSubmitting: r,
                            children: P(t) ? "X\xe1c nhận" : "Kiểm tra",
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
    9557: function (e, r, n) {
      "use strict";
      var s = n(3827),
        t = n(7794),
        a = n(8693);
      n(4090),
        (r.Z = (e) => {
          let {
              label: r,
              icon: n,
              placeholder: i,
              countMax: l,
              isOtp: d,
              inputRef: o,
              ...c
            } = e,
            [m, u] = (0, a.U$)(c);
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
                      children: [m.value ? m.value.length : 0, "/", l],
                    }),
                  d &&
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
                        ...m,
                        ...c,
                        ref: o,
                        autoComplete: c.autoComplete || c.name,
                        placeholder: i || r,
                        className:
                          "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3.5 py-2.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1.5 "
                            .concat(n && "ps-11", " ")
                            .concat(
                              u.touched && u.error
                                ? "ring-red-500 focus:ring-red-500 dark:focus:ring-red-400"
                                : "focus:ring-primary-500 dark:focus:ring-primary-400"
                            ),
                      }),
                      n &&
                        (0, s.jsx)("span", {
                          className:
                            "absolute inset-y-0 start-0 flex items-center pointer-events-none px-3.5",
                          children: (0, s.jsx)("span", {
                            className: ""
                              .concat(n, " flex-shrink-0 ")
                              .concat(
                                u.touched && u.error
                                  ? "text-red-500 dark:text-red-400"
                                  : "text-gray-400 dark:text-gray-500",
                                " h-5 w-5"
                              ),
                          }),
                        }),
                    ],
                  }),
                  u.touched && u.error
                    ? (0, s.jsx)("p", {
                        className:
                          "mt-2 text-red-500 dark:text-red-400 text-sm",
                        children: u.error,
                      })
                    : null,
                ],
              }),
            ],
          });
        });
    },
    6602: function (e, r, n) {
      "use strict";
      var s = n(3827);
      n(4090),
        (r.Z = (e) => {
          let { isSubmitting: r, children: n, ...t } = e;
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
              "string" == typeof n && r ? "".concat(n, "...") : n,
            ],
          });
        });
    },
    1398: function (e, r, n) {
      "use strict";
      n.r(r);
      var s = n(3827),
        t = n(8792);
      r.default = (e) => {
        let { title: r, description: n, playButton: a } = e;
        return (0, s.jsxs)("div", {
          className: "flex justify-between items-center capitalize mb-4",
          children: [
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    (0, s.jsx)("span", {
                      className:
                        "icon-[bxs--circle] w-4 h-4 text-primary-500 dark:text-primary-400 md:mr-4 mr-2",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "md:text-2xl text-xl font-bold text-gray-700 dark:text-gray-300",
                      children: r,
                    }),
                  ],
                }),
                (0, s.jsx)("p", {
                  className:
                    "break-words text-gray-500 dark:text-gray-400 md:text-lg text-sm md:mt-1",
                  children: n,
                }),
              ],
            }),
            a &&
              (0, s.jsx)("div", {
                className: "flex items-center ml-4",
                children: (0, s.jsxs)(t.default, {
                  href: "/download",
                  className:
                    "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center",
                  children: [
                    (0, s.jsx)("span", {
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
    7269: function (e, r, n) {
      "use strict";
      var s = n(1877),
        t = n(5950),
        a = n(4090),
        i = n(8016),
        l = n(3046);
      r.Z = () => {
        let [e, r] = (0, l.Z)("user"),
          {
            data: n,
            isLoading: d,
            isValidating: o,
            mutate: c,
          } = (0, i.ZP)("/auth/me", {
            shouldRetryOnError: !1,
            focusThrottleInterval: 6e4,
            revalidateOnFocus: !1,
            revalidateOnMount: !0,
            dedupingInterval: 1e4,
            fallbackData: e,
            fetcher: () =>
              s.B.getUserProfile().catch((e) => {
                throw ("Unauthenticated." === e.message && m(), e);
              }),
            onSuccess: (e) => {
              r(e);
            },
          }),
          m = (0, a.useCallback)(() => {
            r(void 0), c(void 0, !1), (0, t.yL)();
          }, [c, r]),
          u = (0, a.useCallback)(
            (e) => {
              n && (c({ ...n, balance: e }, !1), r({ ...n, balance: e }));
            },
            [n, c, r]
          );
        return {
          currentUser: n,
          loading: d || o,
          logout: m,
          mutate: c,
          firstLoading: d,
          isValidating: o,
          setBalance: u,
          hasRole: function () {
            for (var e, r = arguments.length, s = Array(r), t = 0; t < r; t++)
              s[t] = arguments[t];
            return null == n
              ? void 0
              : null === (e = n.role_names) || void 0 === e
              ? void 0
              : e.some((e) => s.includes(e));
          },
          hasPermission: function () {
            for (var e, r = arguments.length, s = Array(r), t = 0; t < r; t++)
              s[t] = arguments[t];
            return null == n
              ? void 0
              : null === (e = n.permission_names) || void 0 === e
              ? void 0
              : e.some((e) => s.includes(e));
          },
        };
      };
    },
  },
  function (e) {
    e.O(0, [8792, 5345, 8016, 8831, 5311, 7478, 8069, 1744], function () {
      return e((e.s = 5558));
    }),
      (_N_E = e.O());
  },
]);
