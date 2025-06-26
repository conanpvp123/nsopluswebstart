(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7579, 602, 7702, 9811],
  {
    5850: function (e, a, s) {
      Promise.resolve().then(s.bind(s, 7105)),
        Promise.resolve().then(s.bind(s, 1398));
    },
    7105: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return w;
          },
        });
      var i = s(3827),
        r = s(70);
      let t = {
        getEvent: (e) => r.Z.get("/events/".concat(e)),
        getPublicEvent: (e) => r.Z.get("/events/".concat(e, "/public")),
        getUserProgress: (e) => r.Z.get("/events/".concat(e, "/progress")),
        claimMilestone: (e, a, s) =>
          r.Z.post("/events/".concat(e, "/claim"), {
            milestone_id: a,
            player_id: s,
          }),
      };
      var n = s(5950),
        l = s(4090),
        d = s(8016),
        c = s(9003),
        o = () =>
          (0, i.jsxs)("tr", {
            className: "animate-pulse",
            children: [
              (0, i.jsx)("td", {
                className: "whitespace-nowrap px-3 py-4",
                children: (0, i.jsx)("div", {
                  className: "h-5 bg-gray-300 dark:bg-gray-700 rounded",
                }),
              }),
              (0, i.jsx)("td", {
                className: "whitespace-nowrap px-3 py-4",
                children: (0, i.jsx)("div", {
                  className: "flex items-center gap-2",
                  children: [void 0, void 0, void 0].map((e, a) =>
                    (0, i.jsx)(
                      "div",
                      {
                        className:
                          "h-11 w-11 bg-gray-300 dark:bg-gray-700 rounded-md",
                      },
                      a
                    )
                  ),
                }),
              }),
              (0, i.jsx)("td", {
                className: "whitespace-nowrap px-3 py-4",
                children: (0, i.jsx)("div", {
                  className: "h-6 w-10 bg-gray-300 dark:bg-gray-700 rounded-md",
                }),
              }),
            ],
          }),
        g = s(3176),
        m = s(1565),
        x = s(7794),
        h = s(5551),
        p = s(7362),
        y = s(5105),
        u = s(3405),
        b = s(1413);
      let v = () => {
        var e;
        let { disableModal: a } = (0, m.useModal)(),
          s = (0, m.useModalData)("event-claim"),
          {
            getOptions: r,
            selectedPlayer: c,
            setSelectedPlayer: o,
          } = (0, g.Z)(),
          [u, v] = (0, l.useState)(!1);
        return (0, i.jsxs)("form", {
          className: "p-4",
          children: [
            (0, i.jsx)(p.Z, {
              label: "Nh\xe2n vật",
              options: r(),
              value: c,
              onChange: o,
            }),
            (0, i.jsxs)("div", {
              className: "mb-4",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "flex content-center items-center justify-between text-sm",
                  children: (0, i.jsx)("label", {
                    className:
                      "block font-medium text-gray-700 dark:text-gray-200",
                    children: "Phần thưởng",
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "relative mt-2",
                  children: (0, i.jsx)("div", {
                    className:
                      "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900",
                    children: (0, i.jsx)("div", {
                      className: "p-2 sm:p-2",
                      children: (0, i.jsx)("div", {
                        className:
                          "flex items-center flex-wrap gap-2 justify-center",
                        children:
                          null == s
                            ? void 0
                            : null === (e = s.rewards) || void 0 === e
                            ? void 0
                            : e.map((e, a) => (0, i.jsx)(y.Z, { item: e }, a)),
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "flex justify-end items-center mt-4",
              children: [
                (0, i.jsxs)("button", {
                  type: "button",
                  className:
                    "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center mr-1",
                  disabled: !c || u,
                  onClick: () => {
                    if (s) {
                      let e = 0,
                        i = h.Z.getItem("user/setting");
                      if (i && 1 === s.event_id) {
                        e = i.count;
                        let a = new Date(i.last_claimed);
                        if (
                          ((0, n.zk)(a) || (e = 0),
                          (0, n.zk)(a) && e >= b.Z.ATTENDANCE_LIMIT)
                        ) {
                          x.y.failure(
                            "Mỗi ng\xe0y chỉ được điểm danh tối đa ".concat(
                              b.Z.ATTENDANCE_LIMIT,
                              " lần"
                            )
                          );
                          return;
                        }
                      }
                      v(!0),
                        t
                          .claimMilestone(s.event_id, s.id, c)
                          .then(() => {
                            (0, d.JG)("/api/event/".concat(s.event_id)),
                              x.y.success("Nhận phần thưởng th\xe0nh c\xf4ng"),
                              a(),
                              1 === s.event_id &&
                                h.Z.setItem("user/setting", {
                                  count: e + 1,
                                  last_claimed: new Date().getTime(),
                                });
                          })
                          .finally(() => v(!1));
                    }
                  },
                  children: [
                    u &&
                      (0, i.jsx)("span", {
                        className:
                          "icon-[bx--loader-alt] flex-shrink-0 h-5 w-5 animate-spin",
                      }),
                    "Nhận",
                  ],
                }),
                (0, i.jsx)("button", {
                  onClick: a,
                  type: "button",
                  className:
                    "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center",
                  children: "Đ\xf3ng",
                }),
              ],
            }),
          ],
        });
      };
      var f = () =>
          (0, i.jsx)(u.Z, {
            modalKey: "event-claim",
            children: (0, i.jsx)(v, {}),
          }),
        k = (e) => {
          let { milestone: a } = e,
            { setModal: s } = (0, m.useModal)(),
            r = (0, l.useMemo)(() => !a.user_milestones, [a.user_milestones]),
            t = (0, l.useMemo)(
              () =>
                !r &&
                a.user_milestones.length > 0 &&
                a.user_milestones[0].claimed,
              [r, a.user_milestones]
            ),
            n = (0, l.useMemo)(
              () => r || 0 === a.user_milestones.length,
              [r, a.user_milestones]
            );
          return (0, i.jsxs)("tr", {
            children: [
              (0, i.jsx)("td", {
                className:
                  "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm",
                children: (0, i.jsx)("p", {
                  className: "break-words font-semibold",
                  children: a.name,
                }),
              }),
              (0, i.jsx)("td", {
                className:
                  "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm",
                children: (0, i.jsx)("div", {
                  className:
                    "flex items-center flex-wrap gap-2 sm:min-w-[auto] min-w-[250px]",
                  children: a.rewards.map((e, a) =>
                    (0, i.jsx)(y.Z, { item: e }, a)
                  ),
                }),
              }),
              (0, i.jsx)("td", {
                className:
                  "whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm",
                children: (0, i.jsx)("button", {
                  onClick: () => {
                    s("event-claim", a);
                  },
                  type: "button",
                  disabled: n || t,
                  className: ""
                    .concat(
                      "focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm inline-flex items-center",
                      " "
                    )
                    .concat(
                      n
                        ? "focus-visible:outline-0 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
                        : t
                        ? "text-gray-500 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 dark:disabled:bg-gray-600"
                        : "text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400"
                    ),
                  children: r
                    ? "Chưa đăng nhập "
                    : n
                    ? "Chưa đạt"
                    : t
                    ? "Đ\xe3 nhận"
                    : "Nhận",
                }),
              }),
            ],
          });
        },
        j = s(7269),
        w = (e) => {
          var a;
          let { event_id: s, showProgress: r = !1, progressUnit: g } = e,
            { data: m, isLoading: x } = (0, d.ZP)("/api/event/".concat(s), {
              fetcher: () =>
                (0, n.hP)().access_token ? t.getEvent(s) : t.getPublicEvent(s),
              revalidateOnFocus: !1,
              revalidateOnReconnect: !1,
            }),
            [h, p] = (0, l.useState)(-1),
            { currentUser: y } = (0, j.Z)();
          return (
            (0, l.useEffect)(() => {
              r &&
                y &&
                t.getUserProgress(s).then((e) => {
                  let { progress: a } = e;
                  p(a);
                });
            }, [s, r, y]),
            (0, i.jsxs)("div", {
              className: "relative min-h-[200px]",
              children: [
                null != y &&
                  r &&
                  (0, i.jsx)("div", {
                    className: "mb-2",
                    children: (0, i.jsxs)("span", {
                      className: "text-gray-500 dark:text-gray-400 break-words",
                      children: [
                        (0, i.jsx)("span", {
                          className: "font-semibold",
                          children: "T\xedch lũy: ",
                        }),
                        -1 === h
                          ? (0, i.jsx)("span", {
                              className: "animate-pulse",
                              children: "Đang tải",
                            })
                          : h % 1 != 0
                          ? h.toFixed(2)
                          : (0, n.xG)(h),
                        " ",
                        g,
                      ],
                    }),
                  }),
                (0, i.jsx)("div", {
                  children: (0, i.jsx)("div", {
                    className:
                      "relative overflow-visible rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900",
                    children: (0, i.jsx)("div", {
                      className: "p-0 sm:p-0",
                      children: (0, i.jsx)("div", {
                        className: "relative overflow-x-auto",
                        children: (0, i.jsxs)("table", {
                          className:
                            "min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700",
                          children: [
                            (0, i.jsx)("thead", {
                              children: (0, i.jsxs)("tr", {
                                children: [
                                  (0, i.jsx)("th", {
                                    scope: "col",
                                    className:
                                      "text-left rtl:text-right whitespace-nowrap px-3 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                    children: (0, i.jsx)("span", {
                                      children: "Mốc",
                                    }),
                                  }),
                                  (0, i.jsx)("th", {
                                    scope: "col",
                                    className:
                                      "text-left rtl:text-right whitespace-nowrap px-3 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                    children: (0, i.jsx)("span", {
                                      children: "Phần thưởng",
                                    }),
                                  }),
                                  (0, i.jsx)("th", {
                                    scope: "col",
                                    className:
                                      "text-left rtl:text-right whitespace-nowrap px-3 py-3.5 text-gray-900 dark:text-white font-semibold text-sm",
                                    children: (0, i.jsx)("span", {
                                      children: "Trạng th\xe1i",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsxs)("tbody", {
                              className:
                                "divide-y divide-gray-200 dark:divide-gray-800",
                              children: [
                                m &&
                                  !m.milestones &&
                                  (0, i.jsx)("tr", {
                                    children: (0, i.jsx)("td", {
                                      colSpan: 3,
                                      children: (0, i.jsxs)("div", {
                                        className:
                                          "flex flex-col items-center px-4 py-10",
                                        children: [
                                          (0, i.jsx)("span", {
                                            className:
                                              "icon-[bx--data] w-16 h-16 text-primary-500 dark:text-primary-400 mb-2 opacity-75 dark:opacity-50",
                                          }),
                                          (0, i.jsx)("p", {
                                            className:
                                              "break-words text-sm text-gray-500 dark:text-gray-400 text-center",
                                            children:
                                              "Sự kiện chưa cập nhật phần thưởng, vui l\xf2ng quay lại sau",
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                null == m
                                  ? void 0
                                  : null === (a = m.milestones) || void 0 === a
                                  ? void 0
                                  : a.map((e, a) =>
                                      (0, i.jsx)(k, { milestone: e }, a)
                                    ),
                                x &&
                                  !m &&
                                  Array.from({ length: 8 }).map((e, a) =>
                                    (0, i.jsx)(o, {}, a)
                                  ),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
                (0, i.jsx)(c.default, {}),
                (0, i.jsx)(f, {}),
              ],
            })
          );
        };
    },
  },
  function (e) {
    e.O(
      0,
      [8792, 5345, 8016, 129, 1749, 2370, 6273, 5311, 5291, 7478, 8069, 1744],
      function () {
        return e((e.s = 5850));
      }
    ),
      (_N_E = e.O());
  },
]);
