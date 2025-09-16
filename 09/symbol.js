var _a;
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
var id = Symbol("id");
var obj = (_a = {},
    _a[id] = 1,
    _a.name = "Dev",
    _a);
