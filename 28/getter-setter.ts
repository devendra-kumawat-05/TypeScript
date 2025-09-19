class EmpInfo {
  _name: string = "Devendra";
  _email: string = "devendra@gmail.com";

  get name(): string {
    return "MR. " + this._name;
  }

  set email(val: string) {
    this._email = "new_" + val;
  }
}

let emp1 = new EmpInfo();
console.log(emp1.name);

emp1.email = "devendra@gmail.com";
console.log(emp1._email);
