type summable = [ | `px(int) | `mm(float)];

let sum = (a: summable, b: summable) => {
  switch (a, b) {
  | (`px(a), `px(b)) => `px(a + b)
  | (`mm(a), `mm(b)) => `mm(a +. b)
  };
};

sum(`px(30), `px(40));
sum(`mm(20.4), `mm(30.2));