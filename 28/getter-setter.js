var EmpInfo = /** @class */ (function () {
    function EmpInfo() {
        this._name = "Devendra";
        this._email = "devendra@gmail.com";
    }
    Object.defineProperty(EmpInfo.prototype, "name", {
        get: function () {
            return "MR. " + this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmpInfo.prototype, "email", {
        set: function (val) {
            this._email = "new_" + val;
        },
        enumerable: false,
        configurable: true
    });
    return EmpInfo;
}());
var emp1 = new EmpInfo();
console.log(emp1.name);
emp1.email = "devendra@gmail.com";
console.log(emp1._email);
