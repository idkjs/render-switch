'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var TypesGen = require("./Types.gen");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var SomeFlowTypes = require("./SomeFlowTypes");

function consumeOption(x) {
  return Belt_Option.mapWithDefault(x, 0, (function (n) {
                return n;
              }));
}

function consumeOption2(x) {
  return Belt_Option.mapWithDefault(x, 0, (function (n) {
                return n;
              }));
}

function testArray(a) {
  return a;
}

function identity(x) {
  return x;
}

var saturday = SomeFlowTypes.SATURDAY;

var sunday = SomeFlowTypes.SUNDAY;

var monday = SomeFlowTypes.MONDAY;

function isWeekend(day) {
  if (day === saturday) {
    return true;
  } else {
    return day === sunday;
  }
}

function testFunctionOnOptionsAsArgument(a, foo) {
  return Curry._1(foo, a);
}

function foo(prim) {
  return TypesGen.foo(prim);
}

function testDateKey(x) {
  return x;
}

function convertObjectWithCallback(x) {
  return x;
}

function testInstantiateTypeParameter(x) {
  return x;
}

exports.consumeOption = consumeOption;
exports.consumeOption2 = consumeOption2;
exports.testArray = testArray;
exports.identity = identity;
exports.saturday = saturday;
exports.sunday = sunday;
exports.monday = monday;
exports.isWeekend = isWeekend;
exports.testFunctionOnOptionsAsArgument = testFunctionOnOptionsAsArgument;
exports.foo = foo;
exports.testDateKey = testDateKey;
exports.convertObjectWithCallback = convertObjectWithCallback;
exports.testInstantiateTypeParameter = testInstantiateTypeParameter;
/* saturday Not a pure module */
