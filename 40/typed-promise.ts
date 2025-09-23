// function test1() {
//   setTimeout(() => {
//     console.log("test1");
//   }, 2000);
// }

// function test2() {
//   console.log("test2");
// }

// test1();
// test2();

type resultType = {
  name: string;
  id: number;
  email: string;
};

function complexLogic(): Promise<resultType> {
  return new Promise((res, req) => {
    setTimeout(() => {
      res({
        name: "Devendra",
        id: 1,
        email: "devendra@devendra",
      });
    }, 2000);
  });
}

complexLogic().then((data: resultType) => {
  console.log(data);
});
