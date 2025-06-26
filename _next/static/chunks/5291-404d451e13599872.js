"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5291],
  {
    5401: function (e, t, a) {
      a.d(t, {
        C: function () {
          return n;
        },
      });
      var r = a(70);
      let n = {
        getPublicGiftcode: () => r.Z.get("/giftcode/public"),
        getItemTemplates: () => r.Z.get("/items/templates"),
      };
    },
    1877: function (e, t, a) {
      a.d(t, {
        B: function () {
          return n;
        },
      });
      var r = a(70);
      let n = {
        getPlayers: () => r.Z.get("user/players"),
        getUserProfile: () => r.Z.get("user/profile"),
        verifySMSOTP: (e, t) =>
          r.Z.post("one-time-password/verify", { phone: e, code: t }),
        sendEmailOTP: () => r.Z.post("email/send-otp"),
        verifyEmailOTP: (e) => r.Z.post("email/verify", { code: e }),
        changePassword: (e) => r.Z.post("user/change-password", e),
        getTransactions: (e) => r.Z.get("transactions?".concat(e)),
        activeUser: () => r.Z.post("user/active"),
        transfer: (e) => r.Z.post("user/transfer", e),
        addPhone: (e) => r.Z.post("phone/add", { phone: e }),
        addEmail: (e) => r.Z.post("email/add", { email: e }),
        updatePhone: (e, t) =>
          r.Z.post("phone/update", { code: e, newPhone: t }),
        updateEmail: (e, t) =>
          r.Z.post("email/update", { code: e, newEmail: t }),
        updateUsername: (e) =>
          r.Z.post("user/update-username", { username: e }),
      };
    },
    7362: function (e, t, a) {
      var r = a(3827),
        n = a(6273),
        l = a(129),
        i = a(4090);
      t.Z = (e) => {
        let {
          label: t,
          size: a = "md",
          value: s,
          button: o,
          options: d,
          error: c,
          touched: u,
          onChange: m,
        } = e;
        return (
          void 0 !== u &&
            u &&
            !s &&
            (c =
              "Vui l\xf2ng chọn " +
              (t ? (null == t ? void 0 : t.toLowerCase()) : "")),
          (0, r.jsxs)("div", {
            className: "".concat(t ? "mb-4" : ""),
            children: [
              t &&
                (0, r.jsx)("div", {
                  className:
                    "flex content-center items-center justify-between text-sm",
                  children: (0, r.jsx)("label", {
                    className:
                      "block font-medium text-gray-700 dark:text-gray-200",
                    children: t,
                  }),
                }),
              (0, r.jsxs)("div", {
                className: "relative ".concat(t ? "mt-1" : ""),
                children: [
                  (0, r.jsxs)(n.R, {
                    as: "div",
                    className: "relative",
                    onChange: m,
                    defaultValue: s,
                    disabled: 0 === d.length,
                    children: [
                      (0, r.jsx)(n.R.Button, {
                        as: "div",
                        className: "inline-flex w-full",
                        children: (0, r.jsxs)("button", {
                          className:
                            "z-10 relative w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 inline-flex items-center text-left cursor-default rounded-md text-sm "
                              .concat(
                                "xs" === a
                                  ? "ps-3 gap-x-2.5 px-1.5 py-1 pe-8"
                                  : "sm" === a
                                  ? "ps-4 gap-x-2 px-2 py-1.5 pe-9"
                                  : "gap-x-2.5 px-3.5 py-2.5 pe-11",
                                " shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1.5 "
                              )
                              .concat(
                                c
                                  ? "ring-red-500 focus:ring-red-500 dark:focus:ring-red-400"
                                  : "focus:ring-primary-500 dark:focus:ring-primary-400"
                              ),
                          type: "button",
                          children: [
                            (0, r.jsx)("p", {
                              className: "break-words truncate",
                              children: (() => {
                                if (0 === d.length)
                                  return "Chưa c\xf3 ".concat(
                                    null == t ? void 0 : t.toLowerCase()
                                  );
                                if (s) {
                                  var e, a;
                                  return null !==
                                    (a =
                                      null ===
                                        (e = d.find((e) => e.value == s)) ||
                                      void 0 === e
                                        ? void 0
                                        : e.label) && void 0 !== a
                                    ? a
                                    : "Kh\xf4ng x\xe1c định";
                                }
                                return "Chọn ".concat(
                                  null == t ? void 0 : t.toLowerCase()
                                );
                              })(),
                            }),
                            (0, r.jsx)("span", {
                              className:
                                "absolute inset-y-0 end-0 flex items-center pointer-events-none ".concat(
                                  "xs" === a
                                    ? "px-2"
                                    : "sm" === a
                                    ? "px-2.5"
                                    : "px-3.5"
                                ),
                              children: (0, r.jsx)("span", {
                                className:
                                  "icon-[bx--chevron-down] flex-shrink-0 text-gray-400 dark:text-gray-500 text-gray-500 dark:text-gray-400 h-5 w-5",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)(l.u, {
                        enter: "transition duration-200 ease-out",
                        enterFrom: "transform scale-95 opacity-0",
                        enterTo: "transform scale-100 opacity-100",
                        leave: "transition duration-175 ease-out",
                        leaveFrom: "transform scale-100 opacity-100",
                        leaveTo: "transform scale-95 opacity-0",
                        className: "absolute z-20 w-full py-1 mt-1",
                        children: (0, r.jsx)(n.R.Options, {
                          className:
                            "relative focus:outline-none overflow-y-auto scroll-py-1 ring-1 ring-gray-200 dark:ring-gray-700 rounded-md shadow-lg bg-white dark:bg-gray-800 p-1 max-h-60",
                          children: d.map((e) =>
                            (0, r.jsx)(
                              n.R.Option,
                              {
                                value: e.value,
                                as: i.Fragment,
                                disabled: e.unavailable,
                                children: (t) => {
                                  let { active: a, selected: n } = t;
                                  return (0, r.jsxs)("li", {
                                    className:
                                      "cursor-default select-none relative flex items-center justify-between gap-1 rounded-md px-2 py-1.5 text-sm text-gray-900 dark:text-white ".concat(
                                        a ? "bg-gray-100 dark:bg-gray-900" : ""
                                      ),
                                    children: [
                                      (0, r.jsx)("div", {
                                        className:
                                          "flex items-center gap-2 min-w-0",
                                        children: (0, r.jsx)("span", {
                                          className: "truncate ".concat(
                                            n ? "font-medium" : ""
                                          ),
                                          children: e.label,
                                        }),
                                      }),
                                      n &&
                                        (0, r.jsx)("span", {
                                          className:
                                            "absolute inset-y-0 end-0 flex items-center pe-2",
                                          children: (0, r.jsx)("span", {
                                            className:
                                              "icon-[bx--check] h-5 w-5 text-gray-900 dark:text-white flex-shrink-0",
                                          }),
                                        }),
                                    ],
                                  });
                                },
                              },
                              e.value
                            )
                          ),
                        }),
                      }),
                    ],
                  }),
                  c
                    ? (0, r.jsx)("p", {
                        className:
                          "mt-2 text-red-500 dark:text-red-400 text-sm",
                        children: c,
                      })
                    : null,
                ],
              }),
            ],
          })
        );
      };
    },
    5105: function (e, t, a) {
      var r = a(3827),
        n = a(6457),
        l = a(1565),
        i = a(5950),
        s = a(703);
      t.Z = (e) => {
        let { item: t } = e,
          { getName: a, getIcon: o } = (0, n.Z)(),
          { setModal: d } = (0, l.useModal)();
        return (0, r.jsxs)("div", {
          className:
            "relative inline-block hover:ring-primary-500 dark:hover:ring-primary-400 cursor-pointer rounded-xl",
          onClick: () => {
            d("item-preview", t);
          },
          children: [
            (0, r.jsx)("div", {
              className: "relative select-none transition-all rounded-xl p-1",
              style:
                12 == t.id
                  ? { aspectRatio: "1 / 1", maxWidth: 36, maxHeight: 50 }
                  : { maxWidth: 55, maxHeight: 55 },
              children:
                t.id &&
                (0, r.jsx)(s.default, {
                  src: "https://cdn.nsoplus.com/items/".concat(o(t.id), ".png"),
                  width: 110,
                  height: 110,
                  alt: a(t.id) || "Item",
                  className: "object-cover select-none",
                  style: { maxHeight: "50px" },
                }),
            }),
            (0, r.jsx)("div", {
              className:
                "flex items-center absolute bottom-1 right-1 rounded-md px-[5px] bg-gray-600 dark:bg-gray-700 cursor-pointer",
              children:
                (null == t ? void 0 : t.quantity) > 1 &&
                (0, r.jsx)("p", {
                  className: "break-words font-bold text-center",
                  style: { color: "rgb(255, 255, 255)", fontSize: 10 },
                  children: (0, i.uf)(null == t ? void 0 : t.quantity),
                }),
            }),
          ],
        });
      };
    },
    9003: function (e, t, a) {
      a.r(t);
      var r = a(3827),
        n = a(6457),
        l = a(1565),
        i = a(5950),
        s = a(703),
        o = a(3405);
      t.default = () => {
        var e;
        let { getName: t, getIcon: a } = (0, n.Z)(),
          d = (0, l.useModalData)("item-preview");
        return (0, r.jsx)(o.Z, {
          modalKey: "item-preview",
          sizeClass: "max-w-[220px] sm:max-w-[220px]",
          children: (0, r.jsxs)("div", {
            className: "p-4 sm:p-4",
            children: [
              (0, r.jsx)("div", {
                className:
                  "relative select-none transition-all rounded-xl mx-auto",
                style:
                  (null == d ? void 0 : d.id) == 12
                    ? { aspectRatio: "1 / 1", maxWidth: 36, maxHeight: 50 }
                    : { maxWidth: 60, maxHeight: 60 },
                children:
                  (null == d ? void 0 : d.id) &&
                  (0, r.jsx)(s.default, {
                    src: "https://cdn.nsoplus.com/items/".concat(
                      a(null == d ? void 0 : d.id),
                      ".png"
                    ),
                    width: 240,
                    height: 240,
                    alt: "image",
                    loading: "lazy",
                    className: "object-cover select-none",
                    style:
                      (null == d ? void 0 : d.id) == 12
                        ? {}
                        : { maxHeight: 60 },
                  }),
              }),
              (0, r.jsxs)("div", {
                className: "flex flex-col items-center mt-4",
                children: [
                  (0, r.jsxs)("p", {
                    className:
                      "break-words text-gray-500 dark:text-gray-400 font-bold text-center leading-5",
                    children: [
                      t(
                        null !== (e = null == d ? void 0 : d.id) && void 0 !== e
                          ? e
                          : -1
                      ) || "Vật phẩm",
                      " ",
                      (null == d ? void 0 : d.expire) &&
                      (null == d ? void 0 : d.expire) > 0
                        ? "(".concat(null == d ? void 0 : d.expire, " ng\xe0y)")
                        : "",
                    ],
                  }),
                  (0, r.jsxs)("span", {
                    className:
                      "inline-flex items-center rounded-md text-sm py-1 bg-primary-500 dark:bg-primary-400 text-white dark:text-gray-900 mt-4 px-3 font-semibold",
                    children: [
                      "x ",
                      (0, i.xG)((null == d ? void 0 : d.quantity) || 1),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    1398: function (e, t, a) {
      a.r(t);
      var r = a(3827),
        n = a(8792);
      t.default = (e) => {
        let { title: t, description: a, playButton: l } = e;
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
            l &&
              (0, r.jsx)("div", {
                className: "flex items-center ml-4",
                children: (0, r.jsxs)(n.default, {
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
    3405: function (e, t, a) {
      var r = a(3827),
        n = a(1565),
        l = a(129),
        i = a(5961),
        s = a(4090);
      t.Z = (e) => {
        let {
            modalKey: t,
            children: a,
            clickOverlayToClose: o = !0,
            sizeClass: d = "sm:max-w-lg",
            onDisable: c,
          } = e,
          { isModalOpen: u, disableModal: m } = (0, n.useModal)(),
          x = () => {
            o && (m(), c && c());
          };
        return (0, r.jsx)(l.u, {
          appear: !0,
          show: u(t),
          as: s.Fragment,
          children: (0, r.jsxs)(i.V, {
            onClose: () => {},
            onClick: x,
            className: "fixed inset-0 flex z-50",
            children: [
              (0, r.jsx)(l.u.Child, {
                as: s.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: (0, r.jsx)("div", {
                  className:
                    "fixed inset-0 transition-opacity bg-white/25 dark:bg-black/50 backdrop-blur",
                  onClick: x,
                }),
              }),
              (0, r.jsx)(l.u.Child, {
                as: s.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: (0, r.jsx)("div", {
                  className: "fixed inset-0 overflow-y-auto",
                  children: (0, r.jsx)("div", {
                    className:
                      "flex min-h-full sm:items-center justify-center text-center items-center p-4 sm:p-0",
                    children: (0, r.jsx)(i.V.Panel, {
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
    7269: function (e, t, a) {
      var r = a(1877),
        n = a(5950),
        l = a(4090),
        i = a(8016),
        s = a(3046);
      t.Z = () => {
        let [e, t] = (0, s.Z)("user"),
          {
            data: a,
            isLoading: o,
            isValidating: d,
            mutate: c,
          } = (0, i.ZP)("/auth/me", {
            shouldRetryOnError: !1,
            focusThrottleInterval: 6e4,
            revalidateOnFocus: !1,
            revalidateOnMount: !0,
            dedupingInterval: 1e4,
            fallbackData: e,
            fetcher: () =>
              r.B.getUserProfile().catch((e) => {
                throw ("Unauthenticated." === e.message && u(), e);
              }),
            onSuccess: (e) => {
              t(e);
            },
          }),
          u = (0, l.useCallback)(() => {
            t(void 0), c(void 0, !1), (0, n.yL)();
          }, [c, t]),
          m = (0, l.useCallback)(
            (e) => {
              a && (c({ ...a, balance: e }, !1), t({ ...a, balance: e }));
            },
            [a, c, t]
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
            for (var e, t = arguments.length, r = Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            return null == a
              ? void 0
              : null === (e = a.role_names) || void 0 === e
              ? void 0
              : e.some((e) => r.includes(e));
          },
          hasPermission: function () {
            for (var e, t = arguments.length, r = Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            return null == a
              ? void 0
              : null === (e = a.permission_names) || void 0 === e
              ? void 0
              : e.some((e) => r.includes(e));
          },
        };
      };
    },
    6027: function (e, t, a) {
      var r = a(8016),
        n = a(3046);
      t.Z = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          [a, l] = (0, n.Z)(null != e ? e : "");
        return (0, r.ZP)(e, { onSuccess: l, fallbackData: a, ...t });
      };
    },
    6457: function (e, t, a) {
      var r = a(5401),
        n = a(6027);
      t.Z = () => {
        let { data: e } = (0, n.Z)("/items/templates", {
          revalidateOnFocus: !1,
          revalidateOnReconnect: !1,
          dedupingInterval: 864e5,
          shouldRetryOnError: !1,
          fetcher: () => r.C.getItemTemplates(),
        });
        return {
          data: e,
          getItem: (t) => {
            try {
              return null == e ? void 0 : e.find((e) => e.id == t);
            } catch (e) {
              return null;
            }
          },
          getIcon: (t) => {
            try {
              var a, r;
              return null !==
                (r =
                  null == e
                    ? void 0
                    : null === (a = e.find((e) => e.id == t)) || void 0 === a
                    ? void 0
                    : a.icon) && void 0 !== r
                ? r
                : 0;
            } catch (e) {
              return null;
            }
          },
          getName: (t) => {
            try {
              var a;
              return null == e
                ? void 0
                : null === (a = e.find((e) => e.id == t)) || void 0 === a
                ? void 0
                : a.name;
            } catch (e) {
              return null;
            }
          },
        };
      };
    },
    3176: function (e, t, a) {
      var r = a(1877),
        n = a(5950),
        l = a(4090),
        i = a(6027);
      t.Z = () => {
        let [e, t] = (0, l.useState)(0),
          { data: a } = (0, i.Z)((0, n.iH)() ? "/user/players" : null, {
            revalidateOnFocus: !1,
            revalidateOnReconnect: !1,
            errorRetryInterval: 1e4,
            fetcher: () => r.B.getPlayers(),
          });
        return {
          players: a,
          getOptions: () =>
            (a &&
              Array.isArray(a) &&
              (null == a
                ? void 0
                : a.map((e) => {
                    var t;
                    return {
                      label: ""
                        .concat(e.name, " - ")
                        .concat(
                          null == e
                            ? void 0
                            : null === (t = e.server) || void 0 === t
                            ? void 0
                            : t.name
                        ),
                      value: e.id,
                    };
                  }))) ||
            [],
          selectedPlayer: e,
          setSelectedPlayer: t,
        };
      };
    },
    1565: function (e, t, a) {
      a.r(t),
        a.d(t, {
          ModalProvider: function () {
            return i;
          },
          useModal: function () {
            return s;
          },
          useModalData: function () {
            return o;
          },
        });
      var r = a(3827),
        n = a(4090);
      let l = (0, n.createContext)(void 0),
        i = (e) => {
          let { children: t } = e,
            [a, i] = (0, n.useState)([]),
            [s, o] = (0, n.useState)({}),
            d = (e, t) => {
              o((a) => ({ ...a, [e]: t }));
            };
          return (0, r.jsx)(l.Provider, {
            value: {
              getData: function (e) {
                return s[e];
              },
              setModal: (e, t) => {
                e && (i([...a, e]), t && d(e, t));
              },
              setData: d,
              disableModal: () => {
                i(a.slice(0, -1));
              },
              isModalOpen: (e) => a.includes(e),
            },
            children: t,
          });
        },
        s = () => {
          let e = (0, n.useContext)(l);
          if (void 0 === e)
            throw Error("useModal must be used within a ModalProvider");
          return e;
        };
      function o(e) {
        let { getData: t } = s();
        return t(e);
      }
    },
  },
]);
