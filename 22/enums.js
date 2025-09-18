var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var who = Role.ADMIN;
console.log(who);
var who2 = Role.READ_ONLY;
console.log(who2);
