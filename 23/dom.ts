let heading = document.querySelector("h1");
console.log(heading?.textContent);
console.log(heading?.classList);

let anchor = document.querySelector("a")!;
console.log(anchor.href);

let acls = document.querySelector(".link")! as HTMLAnchorElement;
console.log(acls);
console.log(acls.href);
