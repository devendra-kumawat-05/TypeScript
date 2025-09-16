var sym = Symbol();
var sym2 = Symbol();

var sym3 = Symbol("abc");
var sym4 = Symbol("abc");

// console.log(sym === sym2);
// console.log(sym);
// console.log(sym2);

console.log(sym3);
console.log(sym4);
console.log(sym3 === sym4);

const id = Symbol("id");

const obj = {
  [id]: 1,
  name: "Dev",
};
