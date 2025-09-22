function Fruits<T>(name: T): T {
  return name;
}

let onlyFruits = Fruits("Apple");
let onlyNum = Fruits(1);
let OnlyBool = Fruits(true);
