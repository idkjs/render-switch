'use strict';


function isWeekend(x) {
  if (x !== -29784519) {
    return x === 569248848;
  } else {
    return true;
  }
}

function onlySunday(param) {
  return /* () */0;
}

function swap(x) {
  if (x >= 569248848) {
    return /* saturday */-29784519;
  } else {
    return /* sunday */569248848;
  }
}

function testConvert(x) {
  return x;
}

function testConvert2(x) {
  return x;
}

function testConvert3(x) {
  return x;
}

function testConvert2to3(x) {
  return x;
}

function id1(x) {
  return x;
}

function id2(x) {
  return x;
}

function polyWithOpt(foo) {
  var match = foo === "bar";
  if (match) {
    return ;
  } else {
    var match$1 = foo !== "baz";
    if (match$1) {
      return /* `One */[
              3953222,
              foo
            ];
    } else {
      return /* `Two */[
              4203884,
              1
            ];
    }
  }
}

var monday = /* monday */-949852400;

var saturday = /* saturday */-29784519;

var sunday = /* sunday */569248848;

var fortytwoOK = /* fortytwo */23437694;

var fortytwoBAD = /* fortytwo */23437694;

exports.isWeekend = isWeekend;
exports.monday = monday;
exports.saturday = saturday;
exports.sunday = sunday;
exports.onlySunday = onlySunday;
exports.swap = swap;
exports.testConvert = testConvert;
exports.fortytwoOK = fortytwoOK;
exports.fortytwoBAD = fortytwoBAD;
exports.testConvert2 = testConvert2;
exports.testConvert3 = testConvert3;
exports.testConvert2to3 = testConvert2to3;
exports.id1 = id1;
exports.id2 = id2;
exports.polyWithOpt = polyWithOpt;
/* No side effect */
