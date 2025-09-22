var userData20 = "Devendra";
userData20 = true;
// if (typeof userData20 === "string") {
//   console.log("This is a String Data Type");
// }
// if (typeof userData20 === "number") {
//   console.log("This is a Number Data type");
// }
// if (typeof userData20 === "boolean") {
//   console.log("This is a Boolean Data type");
// }
function checkDataType(data) {
    if (typeof data === "string") {
        console.log("This is a String Data Type");
    }
    else if (typeof data === "number") {
        console.log("This is a Number Data type");
    }
}
checkDataType(20);
var Product21 = /** @class */ (function () {
    function Product21() {
    }
    return Product21;
}());
var p1 = new Product21();
var Order21 = /** @class */ (function () {
    function Order21() {
    }
    return Order21;
}());
var o2 = new Order21();
function checkDetails(data) {
    if (data instanceof Product21) {
        console.log("This is Product 21");
    }
    else if (data instanceof Order21) {
        console.log("This is Order 21");
    }
}
checkDetails(p1);
checkDetails(o2);
var userData2 = {
    id: 1,
    email: "0X9dH@example.com"
};
var userData3 = {
    name: "Devendra",
    age: 25
};
function checkUserData(data) {
    if (data) {
        console.log("This is userData21");
    }
    else if (data) {
        console.log("This is userData22");
    }
}
checkUserData(userData2);
checkUserData(userData3);
