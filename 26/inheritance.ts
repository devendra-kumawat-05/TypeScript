class Student {
  login(name: string, password: string) {
    if (name && password) {
      return "Student is logged in";
    } else {
      return "Student is not logged in";
    }
  }
  result(marks: number) {
    if (marks > 33) {
      return "Pass";
    } else {
      return "Fail";
    }
  }
}

class Teacher extends Student {
  subject(subject: string) {
    return "Subject is " + subject;
  }
}

let s1 = new Student();
console.log(s1.login("Aryan", "123"));
console.log(s1.result(40));

let t1 = new Teacher();
console.log(t1.login("Suman", "123"));
console.log(t1.subject("Maths"));
