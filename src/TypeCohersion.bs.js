'use strict';

var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function sum(a, b) {
  if (a[0] >= 25096) {
    var a$1 = a[1];
    if (b[0] >= 25096) {
      return /* `px */[
              25096,
              a$1 + b[1] | 0
            ];
    } else {
      return /* `px */[
              25096,
              a$1 + (b[1] | 0) | 0
            ];
    }
  } else {
    if (typeof b === "number") {
      throw [
            Caml_builtin_exceptions.match_failure,
            /* tuple */[
              "TypeCohersion.re",
              18,
              40
            ]
          ];
    }
    if (b[0] !== 24416) {
      throw [
            Caml_builtin_exceptions.match_failure,
            /* tuple */[
              "TypeCohersion.re",
              18,
              40
            ]
          ];
    }
    return /* `mm */[
            24416,
            a[1] + b[1]
          ];
  }
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
