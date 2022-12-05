const entries = new Map([
  ["name", "Alexander"],
  ["age", 36],
]);
console.log(entries);
console.log(Object.fromEntries(entries));
const user = Object.fromEntries(entries);
console.log(user);
