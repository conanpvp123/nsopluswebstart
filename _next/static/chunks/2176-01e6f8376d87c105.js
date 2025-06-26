"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2176],
  {
    1877: function (e, r, a) {
      a.d(r, {
        B: function () {
          return i;
        },
      });
      var t = a(70);
      let i = {
        getPlayers: () => t.Z.get("user/players"),
        getUserProfile: () => t.Z.get("user/profile"),
        verifySMSOTP: (e, r) =>
          t.Z.post("one-time-password/verify", { phone: e, code: r }),
        sendEmailOTP: () => t.Z.post("email/send-otp"),
        verifyEmailOTP: (e) => t.Z.post("email/verify", { code: e }),
        changePassword: (e) => t.Z.post("user/change-password", e),
        getTransactions: (e) => t.Z.get("transactions?".concat(e)),
        activeUser: () => t.Z.post("user/active"),
        transfer: (e) => t.Z.post("user/transfer", e),
        addPhone: (e) => t.Z.post("phone/add", { phone: e }),
        addEmail: (e) => t.Z.post("email/add", { email: e }),
        updatePhone: (e, r) =>
          t.Z.post("phone/update", { code: e, newPhone: r }),
        updateEmail: (e, r) =>
          t.Z.post("email/update", { code: e, newEmail: r }),
        updateUsername: (e) =>
          t.Z.post("user/update-username", { username: e }),
      };
    },
    9557: function (e, r, a) {
      var t = a(3827),
        i = a(7794),
        s = a(8693);
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
            [u, m] = (0, s.U$)(c);
          return (0, t.jsxs)("div", {
            className: "mb-4",
            children: [
              (0, t.jsxs)("div", {
                className:
                  "flex content-center items-center justify-between text-sm",
                children: [
                  (0, t.jsx)("label", {
                    htmlFor: c.id || c.name,
                    className:
                      "block font-medium text-gray-700 dark:text-gray-200",
                    children: r,
                  }),
                  l &&
                    (0, t.jsxs)("span", {
                      className: "text-gray-500 dark:text-gray-400",
                      children: [u.value ? u.value.length : 0, "/", l],
                    }),
                  o &&
                    (0, t.jsx)("span", {
                      className:
                        "text-primary-500 dark:text-primary-400 cursor-pointer",
                      onClick: () => {
                        i.y.info(
                          "C\xe1ch lấy m\xe3 OTP",
                          "Soạn tin: NSP OTP gửi 7039 để nhận m\xe3 OTP"
                        );
                      },
                      children: "C\xe1ch lấy m\xe3 OTP ?",
                    }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "relative mt-1",
                children: [
                  (0, t.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, t.jsx)("input", {
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
                        (0, t.jsx)("span", {
                          className:
                            "absolute inset-y-0 start-0 flex items-center pointer-events-none px-3.5",
                          children: (0, t.jsx)("span", {
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
                    ? (0, t.jsx)("p", {
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
    6602: function (e, r, a) {
      var t = a(3827);
      a(4090),
        (r.Z = (e) => {
          let { isSubmitting: r, children: a, ...i } = e;
          return (0, t.jsxs)("button", {
            type: "submit",
            disabled: r,
            className:
              "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center",
            ...i,
            children: [
              r &&
                (0, t.jsx)("span", {
                  className:
                    "icon-[bx--loader-alt] flex-shrink-0 h-5 w-5 animate-spin",
                }),
              "string" == typeof a && r ? "".concat(a, "...") : a,
            ],
          });
        });
    },
    1398: function (e, r, a) {
      a.r(r);
      var t = a(3827),
        i = a(8792);
      r.default = (e) => {
        let { title: r, description: a, playButton: s } = e;
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
            s &&
              (0, t.jsx)("div", {
                className: "flex items-center ml-4",
                children: (0, t.jsxs)(i.default, {
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
    3405: function (e, r, a) {
      var t = a(3827),
        i = a(1565),
        s = a(129),
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
          { isModalOpen: u, disableModal: m } = (0, i.useModal)(),
          p = () => {
            o && (m(), c && c());
          };
        return (0, t.jsx)(s.u, {
          appear: !0,
          show: u(r),
          as: l.Fragment,
          children: (0, t.jsxs)(n.V, {
            onClose: () => {},
            onClick: p,
            className: "fixed inset-0 flex z-50",
            children: [
              (0, t.jsx)(s.u.Child, {
                as: l.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: (0, t.jsx)("div", {
                  className:
                    "fixed inset-0 transition-opacity bg-white/25 dark:bg-black/50 backdrop-blur",
                  onClick: p,
                }),
              }),
              (0, t.jsx)(s.u.Child, {
                as: l.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: (0, t.jsx)("div", {
                  className: "fixed inset-0 overflow-y-auto",
                  children: (0, t.jsx)("div", {
                    className:
                      "flex min-h-full sm:items-center justify-center text-center items-center p-4 sm:p-0",
                    children: (0, t.jsx)(n.V.Panel, {
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
    2978: function (e, r, a) {
      a.r(r);
      var t = a(3827),
        i = a(1877),
        s = a(9557),
        n = a(6602),
        l = a(1565),
        o = a(5950),
        d = a(7794),
        c = a(8693),
        u = a(1991),
        m = a(3405),
        p = a(7269);
      let h = u.Ry().shape({
        phone: u
          .Z_()
          .matches(
            /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
            "Số điện thoại kh\xf4ng hợp lệ"
          )
          .required("Kh\xf4ng được bỏ trống"),
      });
      r.default = () => {
        let { disableModal: e } = (0, l.useModal)(),
          { mutate: r } = (0, p.Z)();
        return (0, t.jsx)(m.Z, {
          modalKey: "add-phone",
          children: (0, t.jsxs)("div", {
            className:
              "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900",
            children: [
              (0, t.jsxs)("div", {
                className: "px-4 py-5 sm:px-6",
                children: [
                  (0, t.jsx)("p", {
                    className: "break-words text-base font-semibold",
                    children: "Th\xeam số điện thoại",
                  }),
                  (0, t.jsx)("p", {
                    className:
                      "break-words text-sm text-gray-500 dark:text-gray-400",
                    children:
                      "Bảo mật t\xe0i khoản của bạn bằng c\xe1ch th\xeam số điện thoại",
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "px-4 py-5 sm:p-6",
                children: (0, t.jsx)(c.J9, {
                  initialValues: { phone: "" },
                  validationSchema: h,
                  onSubmit: (a, t) => {
                    let { setSubmitting: s, setFieldError: n } = t;
                    i.B.addPhone(a.phone)
                      .then((a) => {
                        var t;
                        r(),
                          d.y.successCallback(
                            null !== (t = a.message) && void 0 !== t
                              ? t
                              : "Th\xeam số điện thoại th\xe0nh c\xf4ng",
                            () => {
                              e();
                            }
                          );
                      })
                      .catch((e) => {
                        (0, o.yU)(e, n);
                      })
                      .finally(() => {
                        s(!1);
                      });
                  },
                  children: (e) => {
                    let { isSubmitting: r, values: a } = e;
                    return (0, t.jsxs)(c.l0, {
                      children: [
                        (0, t.jsx)(s.Z, {
                          label: "Số điện thoại",
                          name: "phone",
                          icon: "icon-[bx--phone]",
                          autoComplete: "off",
                        }),
                        (0, t.jsx)("div", {
                          className: "flex justify-end items-center mt-6",
                          children: (0, t.jsx)(n.Z, {
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
          }),
        });
      };
    },
    5227: function (e, r, a) {
      var t = a(3827),
        i = a(1992);
      let s = (e) =>
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
          } = (0, i.yp)(),
          o = (t) => {
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
                  children: n.map((i, n) =>
                    (0, t.jsx)(
                      "button",
                      {
                        type: "button",
                        className: "".concat(
                          r === parseInt(i.label)
                            ? "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center z-[1] first:rounded-s-md last:rounded-e-md !rounded-full min-w-[32px] justify-center"
                            : "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center first:rounded-s-md last:rounded-e-md !rounded-full min-w-[32px] justify-center rtl:[&_span:last-child]:rotate-180"
                        ),
                        "aria-label": i.label,
                        disabled:
                          e ||
                          ("pagination.previous" === i.label && 1 === r) ||
                          ("pagination.next" === i.label && r === a) ||
                          "..." === i.label,
                        onClick: () => o(i.label),
                        children: s(i.label),
                      },
                      n
                    )
                  ),
                }),
              }),
            });
      };
    },
    5128: function (e, r, a) {
      a.r(r);
      var t = a(3827),
        i = a(7269),
        s = a(1565),
        n = a(129),
        l = a(4090);
      r.default = () => {
        let [e, r] = (0, l.useState)(!0),
          { setModal: a } = (0, s.useModal)(),
          { currentUser: o } = (0, i.Z)();
        return !o || (null == o ? void 0 : o.activated)
          ? (0, t.jsx)(t.Fragment, {})
          : (0, t.jsx)(n.u, {
              show: e,
              enter: "transition-opacity duration-200",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "transition-opacity duration-200",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: (0, t.jsxs)("div", {
                className:
                  "p-4 mb-4 text-primary-800 border border-primary-300 rounded-lg bg-primary-50 dark:bg-gray-800 dark:text-primary-400 dark:border-primary-800",
                children: [
                  (0, t.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                      (0, t.jsx)("span", {
                        className:
                          "icon-[bx--error] flex-shrink-0 w-4 h-4 me-2",
                      }),
                      (0, t.jsx)("span", {
                        className: "sr-only",
                        children: "Info",
                      }),
                      (0, t.jsx)("h3", {
                        className: "text-lg font-medium",
                        children: "K\xedch hoạt t\xe0i khoản",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "mb-2 text-sm",
                    children: [
                      "K\xedch hoạt ngay để nhận được quyền lợi:",
                      (0, t.jsxs)("ul", {
                        className: "mt-1.5 list-disc list-inside",
                        children: [
                          (0, t.jsx)("li", {
                            children: "Mở t\xednh năng giao dịch",
                          }),
                          (0, t.jsx)("li", {
                            children: "Tham gia v\xf2ng xoay may mắn",
                          }),
                          (0, t.jsx)("li", {
                            children: "Bu\xf4n b\xe1n vật phẩm tr\xean shinwa",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex",
                    children: [
                      (0, t.jsxs)("button", {
                        onClick: () => a("active-modal"),
                        type: "button",
                        className:
                          "text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
                        children: [
                          (0, t.jsx)("span", {
                            className: "icon-[bx--check] me-1 h-5 w-5",
                          }),
                          "K\xedch hoạt ngay",
                        ],
                      }),
                      (0, t.jsx)("button", {
                        type: "button",
                        className:
                          "text-primary-800 bg-transparent border border-primary-800 hover:bg-primary-900 hover:text-white focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-primary-600 dark:border-primary-600 dark:text-primary-400 dark:hover:text-white dark:focus:ring-primary-800",
                        onClick: () => r(!1),
                        children: "Để sau",
                      }),
                    ],
                  }),
                ],
              }),
            });
      };
    },
    7269: function (e, r, a) {
      var t = a(1877),
        i = a(5950),
        s = a(4090),
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
              t.B.getUserProfile().catch((e) => {
                throw ("Unauthenticated." === e.message && u(), e);
              }),
            onSuccess: (e) => {
              r(e);
            },
          }),
          u = (0, s.useCallback)(() => {
            r(void 0), c(void 0, !1), (0, i.yL)();
          }, [c, r]),
          m = (0, s.useCallback)(
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
            for (var e, r = arguments.length, t = Array(r), i = 0; i < r; i++)
              t[i] = arguments[i];
            return null == a
              ? void 0
              : null === (e = a.role_names) || void 0 === e
              ? void 0
              : e.some((e) => t.includes(e));
          },
          hasPermission: function () {
            for (var e, r = arguments.length, t = Array(r), i = 0; i < r; i++)
              t[i] = arguments[i];
            return null == a
              ? void 0
              : null === (e = a.permission_names) || void 0 === e
              ? void 0
              : e.some((e) => t.includes(e));
          },
        };
      };
    },
    1565: function (e, r, a) {
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
      var t = a(3827),
        i = a(4090);
      let s = (0, i.createContext)(void 0),
        n = (e) => {
          let { children: r } = e,
            [a, n] = (0, i.useState)([]),
            [l, o] = (0, i.useState)({}),
            d = (e, r) => {
              o((a) => ({ ...a, [e]: r }));
            };
          return (0, t.jsx)(s.Provider, {
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
          let e = (0, i.useContext)(s);
          if (void 0 === e)
            throw Error("useModal must be used within a ModalProvider");
          return e;
        };
      function o(e) {
        let { getData: r } = l();
        return r(e);
      }
    },
    1992: function (e, r, a) {
      a.d(r, {
        ZP: function () {
          return u;
        },
        tV: function () {
          return c;
        },
        yp: function () {
          return m;
        },
      });
      var t = a(3827),
        i = a(70),
        s = a(3046),
        n = a(4090),
        l = a(8016);
      let o = (0, n.createContext)(void 0),
        d = new Map(),
        c = (e) => {
          let r = d.get(e);
          r && r();
        };
      function u(e) {
        let {
            url: r,
            tableKey: a = r,
            children: c,
            useCache: u,
            defaultPerPage: m,
            defaultFilters: p = {},
          } = e,
          [h, x] = (0, s.Z)(r),
          [g, f] = (0, n.useState)(1),
          [y, b] = (0, n.useState)(null != m ? m : 5),
          [v, k] = (0, n.useState)(1),
          [j, w] = (0, n.useState)([]),
          [N, Z] = (0, n.useState)(""),
          [S, P] = (0, n.useState)("id"),
          [C, T] = (0, n.useState)("desc"),
          [M, O] = (0, n.useState)(p),
          [F, E] = (0, n.useState)(!0),
          _ = (0, n.useMemo)(() => {
            let e = new URLSearchParams();
            return (
              e.append("page", g.toString()),
              e.append("per_page", y.toString()),
              N && e.append("search", N),
              S && e.append("sort", S),
              C && e.append("order", C),
              Object.keys(M).length && e.append("filters", JSON.stringify(M)),
              "".concat(r, "?").concat(e.toString())
            );
          }, [g, M, C, y, N, S, r]),
          {
            data: U,
            isLoading: I,
            isValidating: B,
            mutate: D,
          } = (0, l.ZP)(_, {
            shouldRetryOnError: !1,
            focusThrottleInterval: 6e4,
            revalidateOnFocus: !0,
            revalidateOnMount: !0,
            keepPreviousData: !u,
            fetcher: async (e) => i.Z.get(e).then((e) => e),
            onSuccess: (e) => {
              let {
                payload: { pagination: r },
              } = e;
              f(r.current_page),
                b(r.per_page),
                k(r.last_page),
                w(r.links),
                u && x(e),
                E(!1);
            },
            onError: () => {
              E(!1);
            },
            fallbackData: h,
          });
        (0, n.useEffect)(
          () => (
            d.set(a, () => D()),
            () => {
              d.delete(a);
            }
          ),
          [a, D]
        );
        let K = () => {
          D();
        };
        return (0, t.jsx)(o.Provider, {
          value: {
            data: U,
            isLoading: I,
            isValidating: B,
            firstLoading: F,
            current_page: g,
            per_page: y,
            search: N,
            sort: S,
            order: C,
            filters: M,
            last_page: v,
            links: j,
            setCurrentPage: f,
            setPerPage: b,
            setSearch: Z,
            setSort: P,
            setOrder: T,
            setFilters: O,
            setLastPage: k,
            setLinks: w,
            refetch: K,
          },
          children:
            "function" == typeof c
              ? c({
                  data: U,
                  isLoading: I,
                  isValidating: B,
                  firstLoading: F,
                  current_page: g,
                  per_page: y,
                  search: N,
                  sort: S,
                  order: C,
                  filters: M,
                  last_page: v,
                  links: j,
                  setCurrentPage: f,
                  setPerPage: b,
                  setSearch: Z,
                  setSort: P,
                  setOrder: T,
                  setFilters: O,
                  setLastPage: k,
                  setLinks: w,
                  refetch: K,
                })
              : c,
        });
      }
      let m = () => {
        let e = (0, n.useContext)(o);
        if (void 0 === e)
          throw Error("useTableQuery must be used within a TableQueryProvider");
        return e;
      };
    },
  },
]);
