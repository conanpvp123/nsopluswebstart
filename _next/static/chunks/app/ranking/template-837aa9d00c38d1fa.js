(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2583],
  {
    5614: function (n, t, e) {
      Promise.resolve().then(e.bind(e, 4297));
    },
    4297: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          default: function () {
            return u;
          },
        });
      var c = e(3827),
        i = e(4090);
      function u(n) {
        let { children: t } = n,
          [e, u] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            u(!0);
          }, []),
          (0, c.jsx)("div", {
            className: "transition-opacity duration-300 ".concat(
              e ? "opacity-100" : "opacity-0"
            ),
            children: t,
          })
        );
      }
    },
  },
  function (n) {
    n.O(0, [7478, 8069, 1744], function () {
      return n((n.s = 5614));
    }),
      (_N_E = n.O());
  },
]);
