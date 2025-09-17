function loopFunction(): never {
  console.log("loop");
  while (true) {
    console.log("loop");
  }
}

function simpleFunction(): never {
  throw new Error("Error");
}

function simple() {
  console.log("simple");
}
