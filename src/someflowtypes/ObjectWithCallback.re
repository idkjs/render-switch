/* https://github.com/cristianoc/genType/blob/e89568e25de85f443060a2dce9e714e3c9ae3154/examples/flow-react-example/src/Types.re#L119 */
type objectWithCallback = {
  .
  "y": option({. "z": option(unit => int)}),
  "x": option(unit => unit),
  "w": option(unit => int),
};

let convertObjectWithCallback = (x: objectWithCallback) => x;

let cbx = int => int->string_of_int->Js.log2("callback_x: ", _);
let cb = int => int->string_of_int->Js.log2("callbacK: ", _);
let objectWithCallback: objectWithCallback = {
  "y": Some({"z": Some(_ => 1)}),
  "x": Some(_ => 2->cbx),
  "w": Some(_ => 2),
};
let checkCall = x =>
  switch (x) {
  | Some(x) => x()->Js.log2("check_objectWithCallback##x", _)
  | None => ()
  };


let checkX = x => x ? None : Some(x);
let callX = x => x();

let check =
  objectWithCallback##x
  ->Belt.Option.map(x => x()->Js.log2("check_objectWithCallback##x", _))
  ->Belt.Option.getExn;
Js.log2("check", check); //check 0

let get_x = objectWithCallback##x->Belt.Option.map(x => x());
Js.log2("get_x", get_x); //get_x 0

switch (objectWithCallback##x) {
| Some(x) => x()->Js.log
| None => ()
};
switch (objectWithCallback##w) {
| Some(w) => w()->Js.log2("callback_w", _)
| None => ()
};
switch (objectWithCallback##y) {
| Some(y) =>
  switch (y##z) {
  | Some(z) => z()->Js.log2("callback_z", _)
  | None => ()
  }
| None => ()
};