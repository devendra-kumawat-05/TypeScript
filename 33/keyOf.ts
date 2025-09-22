type PersonT = {
  name: string;
  age: number;
  isMarried: boolean;
};

let PersonData: PersonT = {
  name: "Devendra",
  age: 25,
  isMarried: false,
};

type PersonKeys = keyof PersonT;

let PersonDataKeys: PersonKeys;

PersonDataKeys = "name";
PersonDataKeys = "age";
PersonDataKeys = "isMarried";

// let userX: keyof typeof PersonT = "name";
