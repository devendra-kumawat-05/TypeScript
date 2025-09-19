var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.login = function (name, password) {
        if (name && password) {
            return "Student is logged in";
        }
        else {
            return "Student is not logged in";
        }
    };
    Student.prototype.result = function (marks) {
        if (marks > 33) {
            return "Pass";
        }
        else {
            return "Fail";
        }
    };
    return Student;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.subject = function (subject) {
        return "Subject is " + subject;
    };
    return Teacher;
}(Student));
var s1 = new Student();
console.log(s1.login("Aryan", "123"));
console.log(s1.result(40));
var t1 = new Teacher();
console.log(t1.login("Suman", "123"));
console.log(t1.subject("Maths"));
