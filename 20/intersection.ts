// type personA = { name: string };
// type personB = { age: number };
// type personC = personA & personB;

interface personA {
  name: string;
}
interface personB {
  age: number;
}
type personC = personA & personB;

let personDataA: personA = {
  name: "Devendra",
};

let personDataB: personB = {
  age: 25,
};

let personDataC: personC = {
  name: "Devendra",
  age: 25,
};
