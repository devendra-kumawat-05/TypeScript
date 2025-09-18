enum Role {
    ADMIN = "ADMIN",
    READ_ONLY = "READ_ONLY",
    AUTHOR = "AUTHOR",
}

let who:Role = Role.ADMIN;
console.log(who);

let who2:Role = Role.READ_ONLY;
console.log(who2);