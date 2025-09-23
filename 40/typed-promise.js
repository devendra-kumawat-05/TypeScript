// function test1() {
//   setTimeout(() => {
//     console.log("test1");
//   }, 2000);
// }
function complexLogic() {
    return new Promise(function (res, req) {
        setTimeout(function () {
            res({
                name: "Devendra",
                id: 1,
                email: "devendra@devendra",
            });
        }, 2000);
    });
}
complexLogic().then(function (data) {
    console.log(data);
});
