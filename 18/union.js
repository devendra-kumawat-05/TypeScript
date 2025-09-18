var studentData;
studentData = "Devendra";
studentData = 25;
studentData = true;
console.log(studentData);
//
function chai() {
    var item = 1;
    if (item > 1) {
        return ["black chai", "masala chai"];
    }
    return "masala chai";
}
console.log(chai());
//
function mayBe(name) {
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
