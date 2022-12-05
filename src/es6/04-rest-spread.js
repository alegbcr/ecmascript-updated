/* arrays destructuring */
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
// values
console.log(a, b);
console.log(a, fruits[1]);
console.log(fruits[0], b);

/* objects destructuring */
let user = { username: "Alexander", age: 36 };
let { username, age } = user;
// values
console.log(username, age);
console.log(username, user.age);
console.log(user.username, age);

/* spread operator */
let person = { name: "Alessandro", age: 11 };
let country = "CR";
let data = { ...person, country };
let data2 = { id: 1, ...person, country };
// values
console.log(data);

/* rest */
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[4]);
  return num + values[0];
}
sum(1, 1, 3, 4, 6, 78);
