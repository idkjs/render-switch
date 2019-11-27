module type Switch = {
  type on_state = [ | `On(string)];
  type off_state = [ | `Off(float)];
  type state = [ on_state | off_state];

  type turn_on = [ | `Turn_on];
  type turn_off = [ | `Turn_off];
  type actions = [ turn_on | turn_off];

  type fsm('state, 'actions);
  type fsm_off = fsm(off_state, turn_on);
  type fsm_on = fsm(on_state, turn_off);
  type view = [ | `On(fsm_on) | `Off(fsm_off)];

  let on: fsm_off => fsm([> on_state], [> turn_off]);
  let off: fsm_on => fsm([> off_state], [> turn_on]);

  let view: fsm([< on_state | off_state], [< turn_on | turn_off]) => view;

  let lift:
    fsm([< on_state | off_state], [< turn_on | turn_off]) =>
    fsm(state, actions);

  let make: unit => fsm(off_state, turn_on);
};

module Switch: Switch = {
  type on_state = [ | `On(string)];
  type off_state = [ | `Off(float)];
  type state = [ on_state | off_state];

  type turn_on = [ | `Turn_on];
  type turn_off = [ | `Turn_off];
  type actions = [ turn_on | turn_off];

  type fsm('state, 'actions) = 'state;
  type fsm_off = fsm(off_state, turn_on);
  type fsm_on = fsm(on_state, turn_off);
  type view = [ | `On(fsm_on) | `Off(fsm_off)];

  let on = _ => `On("string");
  let off = _ => `Off(0.0);

  let view = x =>
    switch (x) {
    | `On(str) => `On(`On(str))
    | `Off(flt) => `Off(`Off(flt))
    };

  let lift = x =>
    switch (x) {
    | `On(str) => `On(str)
    | `Off(flt) => `Off(flt)
    };

  let make = () => `Off(0.0);
};

let initial = Switch.make();
Switch.on(initial);

module RenderSwitch = {
  [@react.component]
  let make = () => {
    let (fsm, setFsm) = React.useState(() => Switch.make() |> Switch.lift);

    switch (fsm |> Switch.view) {
    | `On(f) =>
      <button onClick={_ => setFsm(_ => Switch.off(f))}>
        "on"->React.string
      </button>
    | `Off(g) =>
      <button onClick={_ => setFsm(_ => Switch.on(g))}>
        "off"->React.string
      </button>
    };
  };
};

ReactDOMRe.renderToElementWithId(<RenderSwitch />, "root");





// // Entry point

// [@bs.val] external document: Js.t({..}) = "document";

// // We're using raw DOM manipulations here, to avoid making you read
// // ReasonReact when you might precisely be trying to learn it for the first
// // time through the examples later.
// let style = document##createElement("style");
// document##head##appendChild(style);
// style##innerHTML #= ExampleStyles.style;

// let makeContainer = text => {
//   let container = document##createElement("div");
//   container##className #= "container";

//   let title = document##createElement("div");
//   title##className #= "containerTitle";
//   title##innerText #= text;

//   let content = document##createElement("div");
//   content##className #= "containerContent";

//   let () = container##appendChild(title);
//   let () = container##appendChild(content);
//   let () = document##body##appendChild(container);

//   content;
// };

// // All 4 examples.
// ReactDOMRe.render(
//   <BlinkingGreeting>
//     {React.string("Hello!")}
//   </BlinkingGreeting>,
//   makeContainer("Blinking Greeting"),
// );

// ReactDOMRe.render(
//   <ReducerFromReactJSDocs />,
//   makeContainer("Reducer From ReactJS Docs"),
// );

// ReactDOMRe.render(
//   <FetchedDogPictures />,
//   makeContainer("Fetched Dog Pictures"),
// );

// ReactDOMRe.render(
//   <ReasonUsingJSUsingReason />,
//   makeContainer("Reason Using JS Using Reason"),
// );
