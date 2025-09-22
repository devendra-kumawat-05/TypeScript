interface CollegeType {
  name: string;
  students: number;
  location: string;
  branch?: number;
}

// let CollegeData: Partial<CollegeType> = {
//   name: "NIT",
//   students: 1000,
//   location: "Hyderabad",
// };

function getCollegeData(data: Partial<CollegeType>) {
  console.log(data);
}

getCollegeData({ name: "NIT", branch: 5 });

function getCollegeData2(data: Required<CollegeType>) {
  console.log(data);
}

getCollegeData2({
  name: "NIT",
  students: 1000,
  location: "Hyderabad",
  branch: 5,
});

let collegeData4: Readonly<CollegeType> = {
  name: "NIT",
  students: 1000,
  location: "Hyderabad",
  branch: 5,
};

let collegeData5: Pick<CollegeType, "name" | "students"> = {
  name: "NIT",
  students: 1000,
};
