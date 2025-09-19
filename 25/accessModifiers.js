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
var Product = /** @class */ (function () {
    function Product(name, price, pId) {
        this.inCart = false;
        this.isOrdered = false;
        this.name = name;
        this.price = price;
        this.pId = pId;
    }
    Product.prototype.addToCart = function () {
        this.inCart = true;
    };
    Product.prototype.buyProduct = function () {
        if (this.inCart) {
            return "Product ".concat(this.name, " is ordered in ").concat(this.price);
        }
    };
    return Product;
}());
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order() {
        return _super.call(this, "Google", 100000, 303) || this;
    }
    Order.prototype.getPrice = function () {
        return this.price;
    };
    return Order;
}(Product));
var pro1 = new Product("Samsung", 10000, 101);
var ord = new Order();
console.log(ord.getPrice());
// console.log(pro1.name);
console.log(pro1.price);
