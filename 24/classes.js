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
var pro1 = new Product("Samsung", 10000, 101);
var pro2 = new Product("Apple", 2000, 22);
var pro3 = new Product("Nothing", 32000, 201);
console.log(pro1);
console.log(pro2);
console.log(pro3);
pro1.addToCart();
console.log(pro1.buyProduct());
