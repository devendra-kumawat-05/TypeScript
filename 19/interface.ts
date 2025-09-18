interface Student {
  name: string;
  age: number;
  college: string;
}
interface Teacher extends Student {
  subject: string;
}

let stu: Student = { name: "Devendra", age: 25, college: "NIT" };
let teacher: Teacher = {
  name: "Ravi",
  age: 40,
  college: "NIT",
  subject: "Maths",
};
let management: Student = { name: "Salini", age: 30, college: "NIT" };
