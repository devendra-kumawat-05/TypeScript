function totalPrice(item: number, price: number, text?: string) {
  if (text) {
    console.log(text + price * item);
  } else {
    console.log(price * item);
  }
}

totalPrice(50, 100, "Total Price: ");
totalPrice(60, 50);
// totalPrice("100", 50)

function simple(item: number | string | boolean) {
  console.log(item);
}

simple("100");
simple(100);
simple(true);
