interface CollegeDataType {
  name: string;
  displayTeacher(): void;
  getStudentList(): string[];
}

class CollegeData implements CollegeDataType {
  name: string;
  constructor(cName: string) {
    this.name = cName;
  }

  displayTeacher(): void {
    console.log("Devendra", "Ravi");
  }

  getStudentList(): string[] {
    return ["Devendra", "Aryan"];
  }
}

let CollegeData1 = new CollegeData("NIT");
console.log(CollegeData1);

CollegeData1.displayTeacher();
console.log(CollegeData1.getStudentList());
