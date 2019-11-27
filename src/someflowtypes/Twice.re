type twice('a) = ('a, 'a);

let twice: string => twice(string) =
  data => {
    (data, data);
  };
Js.log2("twice", twice("s"));