'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");

function on(param) {
  return /* `On */[
          17727,
          "string"
        ];
}

function off(param) {
  return /* `Off */[
          3951439,
          0.0
        ];
}

function view(x) {
  if (x[0] >= 3951439) {
    return /* `Off */[
            3951439,
            /* `Off */[
              3951439,
              x[1]
            ]
          ];
  } else {
    return /* `On */[
            17727,
            /* `On */[
              17727,
              x[1]
            ]
          ];
  }
}

function lift(x) {
  if (x[0] >= 3951439) {
    return /* `Off */[
            3951439,
            x[1]
          ];
  } else {
    return /* `On */[
            17727,
            x[1]
          ];
  }
}

function make(param) {
  return /* `Off */[
          3951439,
          0.0
        ];
}

var Switch = {
  on: on,
  off: off,
  view: view,
  lift: lift,
  make: make
};

function Index$RenderSwitch(Props) {
  var match = React.useState((function () {
          return lift(/* `Off */[
                      3951439,
                      0.0
                    ]);
        }));
  var setFsm = match[1];
  var match$1 = view(match[0]);
  if (match$1[0] >= 3951439) {
    return React.createElement("button", {
                onClick: (function (param) {
                    return Curry._1(setFsm, (function (param) {
                                  return /* `On */[
                                          17727,
                                          "string"
                                        ];
                                }));
                  })
              }, "off");
  } else {
    return React.createElement("button", {
                onClick: (function (param) {
                    return Curry._1(setFsm, (function (param) {
                                  return /* `Off */[
                                          3951439,
                                          0.0
                                        ];
                                }));
                  })
              }, "on");
  }
}

var RenderSwitch = {
  make: Index$RenderSwitch
};

ReactDOMRe.renderToElementWithId(React.createElement(Index$RenderSwitch, { }), "root");

var initial = /* `Off */[
  3951439,
  0.0
];

exports.Switch = Switch;
exports.initial = initial;
exports.RenderSwitch = RenderSwitch;
/*  Not a pure module */
