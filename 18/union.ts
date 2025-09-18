let studentData: string | number | boolean | undefined;
studentData = "Devendra";
studentData = 25;
studentData = true;
console.log(studentData);

//

function chai(): string | string[] {
  let item = 1;
  if (item > 1) {
    return ["black chai", "masala chai"];
  }
  return "masala chai";
}

console.log(chai());

//

function mayBe(name: string | number | boolean | undefined) {
  if (typeof name === "string") {
    return "Student name is " + name;
  }
  if (typeof name === "number") {
    return "Student name is " + name;
  }
  return undefined;
}

mayBe("Devendra");
mayBe(25);
mayBe(true);
