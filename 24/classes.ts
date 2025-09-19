class Product {
  name: string;
  price: number;
  pId: number;
  inCart: boolean = false;
  isOrdered: boolean = false;
  constructor(name: string, price: number, pId: number) {
    this.name = name;
    this.price = price;
    this.pId = pId;
  }
  addToCart(): void {
    this.inCart = true;
  }
  buyProduct() {
    if (this.inCart) {
      return `Product ${this.name} is ordered in ${this.price}`;
    }
  }
}

let pro1 = new Product("Samsung", 10000, 101);
let pro2 = new Product("Apple", 2000, 22);
let pro3 = new Product("Nothing", 32000, 201);

console.log(pro1);
console.log(pro2);
console.log(pro3);

pro1.addToCart();
console.log(pro1.buyProduct());
