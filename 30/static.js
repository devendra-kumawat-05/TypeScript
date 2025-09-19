var Company = /** @class */ (function () {
    function Company() {
    }
    Company.getName = function () {
        return "Google Com.";
    };
    Company.name = "Google";
    return Company;
}());
var c1 = new Company();
// console.log(c1.name);
console.log(Company.name);
console.log(Company.getName());
