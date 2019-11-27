# Handling the missing variant error

from [discord chat here](https://discordapp.com/channels/235176658175262720/235176658175262720/649272063852281878)

```reason
// type summable = [ | `px(int) | `mm(float)];

// let sum = (a: summable, b: summable) => {
//   switch (a, b) {
//   | (`px(a), `px(b)) => `px(a + b)
//   | (`mm(a), `mm(b)) => `mm(a +. b)
//   };
// };

// sum(`px(30), `px(40));
// sum(`mm(20.4), `mm(30.2));

type summable = [ | `px(int) | `mm(float)];

/* o the compiler suggests ((mm , `px )|(px _, mm )) which means that something is missing, but not specifically that. It gives you the same suggestion if any options are missing at all. So basically its asy you are missing a variant which handles an argument in this

uncomment the last option and compiler is happy. */
let sum = (a: summable, b: summable) => {
  switch (a, b) {
  | (`px(a), `px(b)) => `px(a + b)
  | (`px(a), `mm(b)) => `px(a + int_of_float(b))
  | (`mm(a), `mm(b)) => `mm(a +. b)
  | (`mm(a), `px(b)) => `mm(a +. float_of_int(b))
  };
};

sum(`px(30), `px(40));
sum(`mm(20.4), `mm(30.2));
```