let val: [number, string, boolean, undefined] = [1, "Aryan", true, undefined];

let val2: readonly [number, string, boolean, undefined] = [
  1,
  "Aryan",
  true,
  undefined,
];
console.log(val2);

console.log(val);

console.log(val[0]);
console.log(val[1]);
console.log(val[2]);
console.log(val[3]);

val.push("Kavi");

console.log(val);
