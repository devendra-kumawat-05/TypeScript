class Product {
  private name: string;
  price: number;
  protected pId: number;
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

class Order extends Product {
  constructor() {
    super("Google", 100000, 303);
  }
  getPrice() {
    return this.price;
  }
}

let pro1 = new Product("Samsung", 10000, 101);
let ord = new Order();
console.log(ord.getPrice());

// console.log(pro1.name);
console.log(pro1.price);
