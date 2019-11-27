'use strict';

var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function sum(a, b) {
  if (a[0] >= 25096) {
    if (typeof b !== "number" && b[0] === 25096) {
      return /* `px */[
              25096,
              a[1] + b[1] | 0
            ];
    }
    
  } else if (typeof b !== "number" && b[0] === 24416) {
    return /* `mm */[
            24416,
            a[1] + b[1]
          ];
  }
  throw [
        Caml_builtin_exceptions.match_failure,
        /* tuple */[
          "TypeCohersion.re",
          3,
          40
        ]
      ];
}

sum(/* `px */[
      25096,
      30
    ], /* `px */[
      25096,
      40
    ]);

sum(/* `mm */[
      24416,
      20.4
    ], /* `mm */[
      24416,
      30.2
    ]);

exports.sum = sum;
/*  Not a pure module */
