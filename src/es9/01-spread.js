const user = { username: "alegbcr", age: 36, country: "CR" };
const { username, ...values } = user;
console.log("username: ", username);
console.log("values: ", values);
