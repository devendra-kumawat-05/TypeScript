function UpdateSum(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.value = function sum(x: number, y: number) {
    let output = x + y;
    return "The output of " + x + " and" + y + " is : " + output;
  };
}

class CustomMaths1 {
  //   @UpdateSum
  sum(x: number, y: number) {
    return x + y;
  }
}

let c2 = new CustomMaths1();
console.log(c2.sum(10, 20));
