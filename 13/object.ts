let userData: {
  name: string;
  age: number;
  company: string;
  present: boolean;
} = {
  name: "Devendra",
  age: 25,
  company: "Google",
  present: true,
};

console.log(userData);

console.log(userData.name);
console.log(userData.age);
console.log(userData.company);
console.log(userData.present);

let obj: {
  [key: string]: string | number | boolean | undefined;
} = {
  name: "Devendra",
  age: 25,
  company: "Google",
  present: true,
};

console.log(obj);

let newObj: {
  name: string;
  age: number;
  address: {};
} = {
  name: "Devendra",
  age: 25,
  address: {
    lat: 80.8,
    long: 20.2,
  },
};

console.log(newObj);
