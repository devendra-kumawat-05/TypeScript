var CollegeData = /** @class */ (function () {
    function CollegeData(cName) {
        this.name = cName;
    }
    CollegeData.prototype.displayTeacher = function () {
        console.log("Devendra", "Ravi");
    };
    CollegeData.prototype.getStudentList = function () {
        return ["Devendra", "Aryan"];
    };
    return CollegeData;
}());
var CollegeData1 = new CollegeData("NIT");
console.log(CollegeData1);
CollegeData1.displayTeacher();
console.log(CollegeData1.getStudentList());
