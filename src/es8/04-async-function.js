const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("AsynC!!!"), 2000)
      : reject(new Error("ERROR"));
  });
};

const anotherFun = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log("Hello");
};

console.log("before");
anotherFun();
console.log("after");
