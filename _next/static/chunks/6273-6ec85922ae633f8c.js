"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6273],
  {
    6273: function (e, t, n) {
      n.d(t, {
        R: function () {
          return Y;
        },
      });
      var r,
        o,
        i,
        a,
        l = n(4090),
        u = n(9790),
        s = n(5235);
      function c(e, t) {
        let [n, r] = (0, l.useState)(e),
          o = (0, s.E)(e);
        return (0, u.e)(() => r(o.current), [o, r, ...t]), n;
      }
      var d = n(641),
        p = n(44),
        f = n(2381),
        v = n(1679),
        b = n(1454),
        x = n(6601),
        g = n(2165),
        h = n(6887),
        R = n(7700),
        m = n(8358),
        O = n(4152),
        y = n(2554),
        S = n(5205),
        T = n(8803);
      function L(e, t) {
        return e ? e + "[" + t + "]" : t;
      }
      var I = n(2640),
        D = n(4819),
        E = n(8318),
        P = n(7409),
        C =
          (((r = C || {})[(r.Open = 0)] = "Open"),
          (r[(r.Closed = 1)] = "Closed"),
          r),
        w =
          (((o = w || {})[(o.Single = 0)] = "Single"),
          (o[(o.Multi = 1)] = "Multi"),
          o),
        z =
          (((i = z || {})[(i.Pointer = 0)] = "Pointer"),
          (i[(i.Other = 1)] = "Other"),
          i),
        F =
          (((a = F || {})[(a.OpenListbox = 0)] = "OpenListbox"),
          (a[(a.CloseListbox = 1)] = "CloseListbox"),
          (a[(a.GoToOption = 2)] = "GoToOption"),
          (a[(a.Search = 3)] = "Search"),
          (a[(a.ClearSearch = 4)] = "ClearSearch"),
          (a[(a.RegisterOption = 5)] = "RegisterOption"),
          (a[(a.UnregisterOption = 6)] = "UnregisterOption"),
          (a[(a.RegisterLabel = 7)] = "RegisterLabel"),
          a);
      function M(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (e) => e,
          n =
            null !== e.activeOptionIndex
              ? e.options[e.activeOptionIndex]
              : null,
          r = (0, T.z2)(
            t(e.options.slice()),
            (e) => e.dataRef.current.domRef.current
          ),
          o = n ? r.indexOf(n) : null;
        return -1 === o && (o = null), { options: r, activeOptionIndex: o };
      }
      let k = {
          1: (e) =>
            e.dataRef.current.disabled || 1 === e.listboxState
              ? e
              : { ...e, activeOptionIndex: null, listboxState: 1 },
          0(e) {
            if (e.dataRef.current.disabled || 0 === e.listboxState) return e;
            let t = e.activeOptionIndex,
              { isSelected: n } = e.dataRef.current,
              r = e.options.findIndex((e) => n(e.dataRef.current.value));
            return (
              -1 !== r && (t = r),
              { ...e, listboxState: 0, activeOptionIndex: t }
            );
          },
          2(e, t) {
            var n;
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let r = M(e),
              o = (0, y.d)(t, {
                resolveItems: () => r.options,
                resolveActiveIndex: () => r.activeOptionIndex,
                resolveId: (e) => e.id,
                resolveDisabled: (e) => e.dataRef.current.disabled,
              });
            return {
              ...e,
              ...r,
              searchQuery: "",
              activeOptionIndex: o,
              activationTrigger: null != (n = t.trigger) ? n : 1,
            };
          },
          3: (e, t) => {
            if (e.dataRef.current.disabled || 1 === e.listboxState) return e;
            let n = "" !== e.searchQuery ? 0 : 1,
              r = e.searchQuery + t.value.toLowerCase(),
              o = (
                null !== e.activeOptionIndex
                  ? e.options
                      .slice(e.activeOptionIndex + n)
                      .concat(e.options.slice(0, e.activeOptionIndex + n))
                  : e.options
              ).find((e) => {
                var t;
                return (
                  !e.dataRef.current.disabled &&
                  (null == (t = e.dataRef.current.textValue)
                    ? void 0
                    : t.startsWith(r))
                );
              }),
              i = o ? e.options.indexOf(o) : -1;
            return -1 === i || i === e.activeOptionIndex
              ? { ...e, searchQuery: r }
              : {
                  ...e,
                  searchQuery: r,
                  activeOptionIndex: i,
                  activationTrigger: 1,
                };
          },
          4: (e) =>
            e.dataRef.current.disabled ||
            1 === e.listboxState ||
            "" === e.searchQuery
              ? e
              : { ...e, searchQuery: "" },
          5: (e, t) => {
            let n = { id: t.id, dataRef: t.dataRef },
              r = M(e, (e) => [...e, n]);
            return (
              null === e.activeOptionIndex &&
                e.dataRef.current.isSelected(t.dataRef.current.value) &&
                (r.activeOptionIndex = r.options.indexOf(n)),
              { ...e, ...r }
            );
          },
          6: (e, t) => {
            let n = M(e, (e) => {
              let n = e.findIndex((e) => e.id === t.id);
              return -1 !== n && e.splice(n, 1), e;
            });
            return { ...e, ...n, activationTrigger: 1 };
          },
          7: (e, t) => ({ ...e, labelId: t.id }),
        },
        A = (0, l.createContext)(null);
      function N(e) {
        let t = (0, l.useContext)(A);
        if (null === t) {
          let t = Error(
            "<".concat(e, " /> is missing a parent <Listbox /> component.")
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, N), t);
        }
        return t;
      }
      A.displayName = "ListboxActionsContext";
      let Q = (0, l.createContext)(null);
      function V(e) {
        let t = (0, l.useContext)(Q);
        if (null === t) {
          let t = Error(
            "<".concat(e, " /> is missing a parent <Listbox /> component.")
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, V), t);
        }
        return t;
      }
      function B(e, t) {
        return (0, I.E)(t.type, k, e, t);
      }
      Q.displayName = "ListboxDataContext";
      let U = l.Fragment,
        G = E.AN.RenderStrategy | E.AN.Static,
        Y = Object.assign(
          (0, E.yV)(function (e, t) {
            let {
                value: n,
                defaultValue: r,
                form: o,
                name: i,
                onChange: a,
                by: s = (e, t) => e === t,
                disabled: c = !1,
                horizontal: f = !1,
                multiple: b = !1,
                ...g
              } = e,
              h = f ? "horizontal" : "vertical",
              O = (0, x.T)(t),
              [S = b ? [] : void 0, D] = (function (e, t, n) {
                let [r, o] = (0, l.useState)(n),
                  i = void 0 !== e,
                  a = (0, l.useRef)(i),
                  u = (0, l.useRef)(!1),
                  s = (0, l.useRef)(!1);
                return (
                  !i || a.current || u.current
                    ? i ||
                      !a.current ||
                      s.current ||
                      ((s.current = !0),
                      (a.current = i),
                      console.error(
                        "A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen."
                      ))
                    : ((u.current = !0),
                      (a.current = i),
                      console.error(
                        "A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen."
                      )),
                  [
                    i ? e : r,
                    (0, d.z)((e) => (i || o(e), null == t ? void 0 : t(e))),
                  ]
                );
              })(n, a, r),
              [P, C] = (0, l.useReducer)(B, {
                dataRef: (0, l.createRef)(),
                listboxState: 1,
                options: [],
                searchQuery: "",
                labelId: null,
                activeOptionIndex: null,
                activationTrigger: 1,
              }),
              w = (0, l.useRef)({ static: !1, hold: !1 }),
              z = (0, l.useRef)(null),
              F = (0, l.useRef)(null),
              M = (0, l.useRef)(null),
              k = (0, d.z)(
                "string" == typeof s
                  ? (e, t) =>
                      (null == e ? void 0 : e[s]) ===
                      (null == t ? void 0 : t[s])
                  : s
              ),
              N = (0, l.useCallback)(
                (e) =>
                  (0, I.E)(V.mode, {
                    1: () => S.some((t) => k(t, e)),
                    0: () => k(S, e),
                  }),
                [S]
              ),
              V = (0, l.useMemo)(
                () => ({
                  ...P,
                  value: S,
                  disabled: c,
                  mode: b ? 1 : 0,
                  orientation: h,
                  compare: k,
                  isSelected: N,
                  optionsPropsRef: w,
                  labelRef: z,
                  buttonRef: F,
                  optionsRef: M,
                }),
                [S, c, b, P]
              );
            (0, u.e)(() => {
              P.dataRef.current = V;
            }, [V]),
              (0, v.O)(
                [V.buttonRef, V.optionsRef],
                (e, t) => {
                  var n;
                  C({ type: 1 }),
                    (0, T.sP)(t, T.tJ.Loose) ||
                      (e.preventDefault(),
                      null == (n = V.buttonRef.current) || n.focus());
                },
                0 === V.listboxState
              );
            let G = (0, l.useMemo)(
                () => ({ open: 0 === V.listboxState, disabled: c, value: S }),
                [V, c, S]
              ),
              Y = (0, d.z)((e) => {
                let t = V.options.find((t) => t.id === e);
                t && J(t.dataRef.current.value);
              }),
              j = (0, d.z)(() => {
                if (null !== V.activeOptionIndex) {
                  let { dataRef: e, id: t } = V.options[V.activeOptionIndex];
                  J(e.current.value),
                    C({ type: 2, focus: y.T.Specific, id: t });
                }
              }),
              _ = (0, d.z)(() => C({ type: 0 })),
              H = (0, d.z)(() => C({ type: 1 })),
              Z = (0, d.z)((e, t, n) =>
                e === y.T.Specific
                  ? C({ type: 2, focus: y.T.Specific, id: t, trigger: n })
                  : C({ type: 2, focus: e, trigger: n })
              ),
              K = (0, d.z)(
                (e, t) => (
                  C({ type: 5, id: e, dataRef: t }), () => C({ type: 6, id: e })
                )
              ),
              q = (0, d.z)(
                (e) => (C({ type: 7, id: e }), () => C({ type: 7, id: null }))
              ),
              J = (0, d.z)((e) =>
                (0, I.E)(V.mode, {
                  0: () => (null == D ? void 0 : D(e)),
                  1() {
                    let t = V.value.slice(),
                      n = t.findIndex((t) => k(t, e));
                    return (
                      -1 === n ? t.push(e) : t.splice(n, 1),
                      null == D ? void 0 : D(t)
                    );
                  },
                })
              ),
              W = (0, d.z)((e) => C({ type: 3, value: e })),
              X = (0, d.z)(() => C({ type: 4 })),
              $ = (0, l.useMemo)(
                () => ({
                  onChange: J,
                  registerOption: K,
                  registerLabel: q,
                  goToOption: Z,
                  closeListbox: H,
                  openListbox: _,
                  selectActiveOption: j,
                  selectOption: Y,
                  search: W,
                  clearSearch: X,
                }),
                []
              ),
              ee = (0, l.useRef)(null),
              et = (0, p.G)();
            return (
              (0, l.useEffect)(() => {
                ee.current &&
                  void 0 !== r &&
                  et.addEventListener(ee.current, "reset", () => {
                    null == D || D(r);
                  });
              }, [ee, D]),
              l.createElement(
                A.Provider,
                { value: $ },
                l.createElement(
                  Q.Provider,
                  { value: V },
                  l.createElement(
                    m.up,
                    {
                      value: (0, I.E)(V.listboxState, {
                        0: m.ZM.Open,
                        1: m.ZM.Closed,
                      }),
                    },
                    null != i &&
                      null != S &&
                      (function e() {
                        let t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          n =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : null,
                          r =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : [];
                        for (let [o, i] of Object.entries(t))
                          !(function t(n, r, o) {
                            if (Array.isArray(o))
                              for (let [e, i] of o.entries())
                                t(n, L(r, e.toString()), i);
                            else
                              o instanceof Date
                                ? n.push([r, o.toISOString()])
                                : "boolean" == typeof o
                                ? n.push([r, o ? "1" : "0"])
                                : "string" == typeof o
                                ? n.push([r, o])
                                : "number" == typeof o
                                ? n.push([r, "".concat(o)])
                                : null == o
                                ? n.push([r, ""])
                                : e(o, r, n);
                          })(r, L(n, o), i);
                        return r;
                      })({ [i]: S }).map((e, t) => {
                        let [n, r] = e;
                        return l.createElement(R._, {
                          features: R.A.Hidden,
                          ref:
                            0 === t
                              ? (e) => {
                                  var t;
                                  ee.current =
                                    null !=
                                    (t = null == e ? void 0 : e.closest("form"))
                                      ? t
                                      : null;
                                }
                              : void 0,
                          ...(0, E.oA)({
                            key: n,
                            as: "input",
                            type: "hidden",
                            hidden: !0,
                            readOnly: !0,
                            form: o,
                            name: n,
                            value: r,
                          }),
                        });
                      }),
                    (0, E.sY)({
                      ourProps: { ref: O },
                      theirProps: g,
                      slot: G,
                      defaultTag: U,
                      name: "Listbox",
                    })
                  )
                )
              )
            );
          }),
          {
            Button: (0, E.yV)(function (e, t) {
              var n;
              let r = (0, f.M)(),
                { id: o = "headlessui-listbox-button-".concat(r), ...i } = e,
                a = V("Listbox.Button"),
                u = N("Listbox.Button"),
                s = (0, x.T)(a.buttonRef, t),
                v = (0, p.G)(),
                g = (0, d.z)((e) => {
                  switch (e.key) {
                    case P.R.Space:
                    case P.R.Enter:
                    case P.R.ArrowDown:
                      e.preventDefault(),
                        u.openListbox(),
                        v.nextFrame(() => {
                          a.value || u.goToOption(y.T.First);
                        });
                      break;
                    case P.R.ArrowUp:
                      e.preventDefault(),
                        u.openListbox(),
                        v.nextFrame(() => {
                          a.value || u.goToOption(y.T.Last);
                        });
                  }
                }),
                h = (0, d.z)((e) => {
                  e.key === P.R.Space && e.preventDefault();
                }),
                R = (0, d.z)((e) => {
                  if ((0, O.P)(e.currentTarget)) return e.preventDefault();
                  0 === a.listboxState
                    ? (u.closeListbox(),
                      v.nextFrame(() => {
                        var e;
                        return null == (e = a.buttonRef.current)
                          ? void 0
                          : e.focus({ preventScroll: !0 });
                      }))
                    : (e.preventDefault(), u.openListbox());
                }),
                m = c(() => {
                  if (a.labelId) return [a.labelId, o].join(" ");
                }, [a.labelId, o]),
                S = (0, l.useMemo)(
                  () => ({
                    open: 0 === a.listboxState,
                    disabled: a.disabled,
                    value: a.value,
                  }),
                  [a]
                ),
                T = {
                  ref: s,
                  id: o,
                  type: (0, b.f)(e, a.buttonRef),
                  "aria-haspopup": "listbox",
                  "aria-controls":
                    null == (n = a.optionsRef.current) ? void 0 : n.id,
                  "aria-expanded": 0 === a.listboxState,
                  "aria-labelledby": m,
                  disabled: a.disabled,
                  onKeyDown: g,
                  onKeyUp: h,
                  onClick: R,
                };
              return (0,
              E.sY)({ ourProps: T, theirProps: i, slot: S, defaultTag: "button", name: "Listbox.Button" });
            }),
            Label: (0, E.yV)(function (e, t) {
              let n = (0, f.M)(),
                { id: r = "headlessui-listbox-label-".concat(n), ...o } = e,
                i = V("Listbox.Label"),
                a = N("Listbox.Label"),
                s = (0, x.T)(i.labelRef, t);
              (0, u.e)(() => a.registerLabel(r), [r]);
              let c = (0, d.z)(() => {
                  var e;
                  return null == (e = i.buttonRef.current)
                    ? void 0
                    : e.focus({ preventScroll: !0 });
                }),
                p = (0, l.useMemo)(
                  () => ({ open: 0 === i.listboxState, disabled: i.disabled }),
                  [i]
                );
              return (0,
              E.sY)({ ourProps: { ref: s, id: r, onClick: c }, theirProps: o, slot: p, defaultTag: "label", name: "Listbox.Label" });
            }),
            Options: (0, E.yV)(function (e, t) {
              var n;
              let r = (0, f.M)(),
                { id: o = "headlessui-listbox-options-".concat(r), ...i } = e,
                a = V("Listbox.Options"),
                u = N("Listbox.Options"),
                s = (0, x.T)(a.optionsRef, t),
                v = (0, p.G)(),
                b = (0, p.G)(),
                g = (0, m.oJ)(),
                h =
                  null !== g
                    ? (g & m.ZM.Open) === m.ZM.Open
                    : 0 === a.listboxState;
              (0, l.useEffect)(() => {
                var e;
                let t = a.optionsRef.current;
                t &&
                  0 === a.listboxState &&
                  t !==
                    (null == (e = (0, D.r)(t)) ? void 0 : e.activeElement) &&
                  t.focus({ preventScroll: !0 });
              }, [a.listboxState, a.optionsRef]);
              let R = (0, d.z)((e) => {
                  switch ((b.dispose(), e.key)) {
                    case P.R.Space:
                      if ("" !== a.searchQuery)
                        return (
                          e.preventDefault(),
                          e.stopPropagation(),
                          u.search(e.key)
                        );
                    case P.R.Enter:
                      if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        null !== a.activeOptionIndex)
                      ) {
                        let { dataRef: e } = a.options[a.activeOptionIndex];
                        u.onChange(e.current.value);
                      }
                      0 === a.mode &&
                        (u.closeListbox(),
                        (0, S.k)().nextFrame(() => {
                          var e;
                          return null == (e = a.buttonRef.current)
                            ? void 0
                            : e.focus({ preventScroll: !0 });
                        }));
                      break;
                    case (0, I.E)(a.orientation, {
                      vertical: P.R.ArrowDown,
                      horizontal: P.R.ArrowRight,
                    }):
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        u.goToOption(y.T.Next)
                      );
                    case (0, I.E)(a.orientation, {
                      vertical: P.R.ArrowUp,
                      horizontal: P.R.ArrowLeft,
                    }):
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        u.goToOption(y.T.Previous)
                      );
                    case P.R.Home:
                    case P.R.PageUp:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        u.goToOption(y.T.First)
                      );
                    case P.R.End:
                    case P.R.PageDown:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        u.goToOption(y.T.Last)
                      );
                    case P.R.Escape:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        u.closeListbox(),
                        v.nextFrame(() => {
                          var e;
                          return null == (e = a.buttonRef.current)
                            ? void 0
                            : e.focus({ preventScroll: !0 });
                        })
                      );
                    case P.R.Tab:
                      e.preventDefault(), e.stopPropagation();
                      break;
                    default:
                      1 === e.key.length &&
                        (u.search(e.key),
                        b.setTimeout(() => u.clearSearch(), 350));
                  }
                }),
                O = c(() => {
                  var e;
                  return null == (e = a.buttonRef.current) ? void 0 : e.id;
                }, [a.buttonRef.current]),
                T = (0, l.useMemo)(() => ({ open: 0 === a.listboxState }), [a]),
                L = {
                  "aria-activedescendant":
                    null === a.activeOptionIndex ||
                    null == (n = a.options[a.activeOptionIndex])
                      ? void 0
                      : n.id,
                  "aria-multiselectable": 1 === a.mode || void 0,
                  "aria-labelledby": O,
                  "aria-orientation": a.orientation,
                  id: o,
                  onKeyDown: R,
                  role: "listbox",
                  tabIndex: 0,
                  ref: s,
                };
              return (0,
              E.sY)({ ourProps: L, theirProps: i, slot: T, defaultTag: "ul", features: G, visible: h, name: "Listbox.Options" });
            }),
            Option: (0, E.yV)(function (e, t) {
              let n = (0, f.M)(),
                {
                  id: r = "headlessui-listbox-option-".concat(n),
                  disabled: o = !1,
                  value: i,
                  ...a
                } = e,
                c = V("Listbox.Option"),
                p = N("Listbox.Option"),
                v =
                  null !== c.activeOptionIndex &&
                  c.options[c.activeOptionIndex].id === r,
                b = c.isSelected(i),
                R = (0, l.useRef)(null),
                m = (0, g.x)(R),
                O = (0, s.E)({
                  disabled: o,
                  value: i,
                  domRef: R,
                  get textValue() {
                    return m();
                  },
                }),
                T = (0, x.T)(t, R);
              (0, u.e)(() => {
                if (0 !== c.listboxState || !v || 0 === c.activationTrigger)
                  return;
                let e = (0, S.k)();
                return (
                  e.requestAnimationFrame(() => {
                    var e, t;
                    null ==
                      (t =
                        null == (e = R.current) ? void 0 : e.scrollIntoView) ||
                      t.call(e, { block: "nearest" });
                  }),
                  e.dispose
                );
              }, [
                R,
                v,
                c.listboxState,
                c.activationTrigger,
                c.activeOptionIndex,
              ]),
                (0, u.e)(() => p.registerOption(r, O), [O, r]);
              let L = (0, d.z)((e) => {
                  if (o) return e.preventDefault();
                  p.onChange(i),
                    0 === c.mode &&
                      (p.closeListbox(),
                      (0, S.k)().nextFrame(() => {
                        var e;
                        return null == (e = c.buttonRef.current)
                          ? void 0
                          : e.focus({ preventScroll: !0 });
                      }));
                }),
                I = (0, d.z)(() => {
                  if (o) return p.goToOption(y.T.Nothing);
                  p.goToOption(y.T.Specific, r);
                }),
                D = (0, h.g)(),
                P = (0, d.z)((e) => D.update(e)),
                C = (0, d.z)((e) => {
                  D.wasMoved(e) && (o || v || p.goToOption(y.T.Specific, r, 0));
                }),
                w = (0, d.z)((e) => {
                  D.wasMoved(e) && (o || (v && p.goToOption(y.T.Nothing)));
                }),
                z = (0, l.useMemo)(
                  () => ({ active: v, selected: b, disabled: o }),
                  [v, b, o]
                );
              return (0,
              E.sY)({ ourProps: { id: r, ref: T, role: "option", tabIndex: !0 === o ? void 0 : -1, "aria-disabled": !0 === o || void 0, "aria-selected": b, disabled: void 0, onClick: L, onFocus: I, onPointerEnter: P, onMouseEnter: P, onPointerMove: C, onMouseMove: C, onPointerLeave: w, onMouseLeave: w }, theirProps: a, slot: z, defaultTag: "li", name: "Listbox.Option" });
            }),
          }
        );
    },
    1454: function (e, t, n) {
      n.d(t, {
        f: function () {
          return a;
        },
      });
      var r = n(4090),
        o = n(9790);
      function i(e) {
        var t;
        if (e.type) return e.type;
        let n = null != (t = e.as) ? t : "button";
        if ("string" == typeof n && "button" === n.toLowerCase())
          return "button";
      }
      function a(e, t) {
        let [n, a] = (0, r.useState)(() => i(e));
        return (
          (0, o.e)(() => {
            a(i(e));
          }, [e.type, e.as]),
          (0, o.e)(() => {
            n ||
              (t.current &&
                t.current instanceof HTMLButtonElement &&
                !t.current.hasAttribute("type") &&
                a("button"));
          }, [n, t]),
          n
        );
      }
    },
    2165: function (e, t, n) {
      n.d(t, {
        x: function () {
          return l;
        },
      });
      var r = n(4090);
      let o =
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
      function i(e) {
        var t, n;
        let r = null != (t = e.innerText) ? t : "",
          i = e.cloneNode(!0);
        if (!(i instanceof HTMLElement)) return r;
        let a = !1;
        for (let e of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
          e.remove(), (a = !0);
        let l = a ? (null != (n = i.innerText) ? n : "") : r;
        return o.test(l) && (l = l.replace(o, "")), l;
      }
      var a = n(641);
      function l(e) {
        let t = (0, r.useRef)(""),
          n = (0, r.useRef)("");
        return (0, a.z)(() => {
          let r = e.current;
          if (!r) return "";
          let o = r.innerText;
          if (t.current === o) return n.current;
          let a = (function (e) {
            let t = e.getAttribute("aria-label");
            if ("string" == typeof t) return t.trim();
            let n = e.getAttribute("aria-labelledby");
            if (n) {
              let e = n
                .split(" ")
                .map((e) => {
                  let t = document.getElementById(e);
                  if (t) {
                    let e = t.getAttribute("aria-label");
                    return "string" == typeof e ? e.trim() : i(t).trim();
                  }
                  return null;
                })
                .filter(Boolean);
              if (e.length > 0) return e.join(", ");
            }
            return i(e).trim();
          })(r)
            .trim()
            .toLowerCase();
          return (t.current = o), (n.current = a), a;
        });
      }
    },
    6887: function (e, t, n) {
      n.d(t, {
        g: function () {
          return i;
        },
      });
      var r = n(4090);
      function o(e) {
        return [e.screenX, e.screenY];
      }
      function i() {
        let e = (0, r.useRef)([-1, -1]);
        return {
          wasMoved(t) {
            let n = o(t);
            return (
              (e.current[0] !== n[0] || e.current[1] !== n[1]) &&
              ((e.current = n), !0)
            );
          },
          update(t) {
            e.current = o(t);
          },
        };
      }
    },
    2554: function (e, t, n) {
      n.d(t, {
        T: function () {
          return o;
        },
        d: function () {
          return i;
        },
      });
      var r,
        o =
          (((r = o || {})[(r.First = 0)] = "First"),
          (r[(r.Previous = 1)] = "Previous"),
          (r[(r.Next = 2)] = "Next"),
          (r[(r.Last = 3)] = "Last"),
          (r[(r.Specific = 4)] = "Specific"),
          (r[(r.Nothing = 5)] = "Nothing"),
          r);
      function i(e, t) {
        let n = t.resolveItems();
        if (n.length <= 0) return null;
        let r = t.resolveActiveIndex(),
          o = null != r ? r : -1;
        switch (e.focus) {
          case 0:
            for (let e = 0; e < n.length; ++e)
              if (!t.resolveDisabled(n[e], e, n)) return e;
            return r;
          case 1:
            for (let e = o - 1; e >= 0; --e)
              if (!t.resolveDisabled(n[e], e, n)) return e;
            return r;
          case 2:
            for (let e = o + 1; e < n.length; ++e)
              if (!t.resolveDisabled(n[e], e, n)) return e;
            return r;
          case 3:
            for (let e = n.length - 1; e >= 0; --e)
              if (!t.resolveDisabled(n[e], e, n)) return e;
            return r;
          case 4:
            for (let r = 0; r < n.length; ++r)
              if (t.resolveId(n[r], r, n) === e.id) return r;
            return r;
          case 5:
            return null;
          default:
            !(function (e) {
              throw Error("Unexpected object: " + e);
            })(e);
        }
      }
    },
  },
]);
