var UserNameSpace;
(function (UserNameSpace) {
    var Auth = /** @class */ (function () {
        function Auth() {
        }
        Auth.prototype.login = function () {
            console.log("User Login Successfully");
        };
        return Auth;
    }());
    UserNameSpace.Auth = Auth;
    function getList() {
        console.log("User List ");
    }
    UserNameSpace.getList = getList;
})(UserNameSpace || (UserNameSpace = {}));
var AdminNameSpace;
(function (AdminNameSpace) {
    var Auth = /** @class */ (function () {
        function Auth() {
        }
        Auth.prototype.login = function () {
            console.log("Admin Login Successfully");
        };
        return Auth;
    }());
    AdminNameSpace.Auth = Auth;
    function getList() {
        console.log("Admin List ");
    }
    AdminNameSpace.getList = getList;
})(AdminNameSpace || (AdminNameSpace = {}));
var user12 = new UserNameSpace.Auth();
user12.login();
UserNameSpace.getList();
AdminNameSpace.getList();
