class Company {
  static name: string = "Google";

  static getName() {
    return "Google Com.";
  }
}

let c1 = new Company();
// console.log(c1.name);
console.log(Company.name);
console.log(Company.getName());
