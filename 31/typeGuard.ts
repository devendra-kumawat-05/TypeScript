let userData20: number | string | boolean = "Devendra";

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

function checkDataType(data: string | number) {
  if (typeof data === "string") {
    console.log("This is a String Data Type");
  } else if (typeof data === "number") {
    console.log("This is a Number Data type");
  }
}

checkDataType(20);

class Product21 {}

let p1 = new Product21();

class Order21 {}

let o2 = new Order21();

function checkDetails(data: Product21 | Order21) {
  if (data instanceof Product21) {
    console.log("This is Product 21");
  } else if (data instanceof Order21) {
    console.log("This is Order 21");
  }
}

checkDetails(p1);
checkDetails(o2);


interface userData22{
    name: string;
    age: number;
}

interface userData21{
    id: number;
    email: string;
}


let userData2: userData21 | userData22 = {
    id: 1,
    email: "0X9dH@example.com"
}
let userData3: userData21 | userData22 = {
    name: "Devendra",
    age: 25
}

function checkUserData(data:userData21|userData22){
    if(data as userData21){
        console.log("This is userData21");
    }
    else if(data as userData22){
        console.log("This is userData22");
    }
}

checkUserData(userData2);
checkUserData(userData3);