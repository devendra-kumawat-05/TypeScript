function UpdateSum(target, key, descriptor) {
    descriptor.value = function sum(x, y) {
        var output = x + y;
        return "The output of " + x + " and" + y + " is : " + output;
    };
}
var CustomMaths1 = /** @class */ (function () {
    function CustomMaths1() {
    }
    //   @UpdateSum
    CustomMaths1.prototype.sum = function (x, y) {
        return x + y;
    };
    return CustomMaths1;
}());
var c2 = new CustomMaths1();
console.log(c2.sum(10, 20));
