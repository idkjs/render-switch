'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function convertObjectWithCallback(x) {
  return x;
}

function cbx($$int) {
  var __x = String($$int);
  console.log("callback_x: ", __x);
  return /* () */0;
}

function cb($$int) {
  var __x = String($$int);
  console.log("callbacK: ", __x);
  return /* () */0;
}

var objectWithCallback = {
  y: {
    z: (function (param) {
        return 1;
      })
  },
  x: (function (param) {
      return cbx(2);
    }),
  w: (function (param) {
      return 2;
    })
};

function checkCall(x) {
  if (x !== undefined) {
    var __x = Curry._1(x, /* () */0);
    console.log("check_objectWithCallback##x", __x);
    return /* () */0;
  } else {
    return /* () */0;
  }
}

function checkX(x) {
  if (x) {
    return ;
  } else {
    return x;
  }
}

function callX(x) {
  return Curry._1(x, /* () */0);
}

var check = Belt_Option.getExn(Belt_Option.map(objectWithCallback.x, (function (x) {
            var __x = Curry._1(x, /* () */0);
            console.log("check_objectWithCallback##x", __x);
            return /* () */0;
          })));

console.log("check", check);

var get_x = Belt_Option.map(objectWithCallback.x, (function (x) {
        return Curry._1(x, /* () */0);
      }));

console.log("get_x", get_x);

var match = objectWithCallback.x;

if (match !== undefined) {
  console.log(Curry._1(match, /* () */0));
}

var match$1 = objectWithCallback.w;

if (match$1 !== undefined) {
  var __x = Curry._1(match$1, /* () */0);
  console.log("callback_w", __x);
}

var match$2 = objectWithCallback.y;

if (match$2 !== undefined) {
  var match$3 = Caml_option.valFromOption(match$2).z;
  if (match$3 !== undefined) {
    var __x$1 = Curry._1(match$3, /* () */0);
    console.log("callback_z", __x$1);
  }
  
}

exports.convertObjectWithCallback = convertObjectWithCallback;
exports.cbx = cbx;
exports.cb = cb;
exports.objectWithCallback = objectWithCallback;
exports.checkCall = checkCall;
exports.checkX = checkX;
exports.callX = callX;
exports.check = check;
exports.get_x = get_x;
/* check Not a pure module */
