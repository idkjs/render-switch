'use strict';


function twice(data) {
  return /* tuple */[
          data,
          data
        ];
}

console.log("twice", /* tuple */[
      "s",
      "s"
    ]);

exports.twice = twice;
/*  Not a pure module */
