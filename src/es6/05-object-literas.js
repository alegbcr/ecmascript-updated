/* enahced object literals */

// origunal form
function newUser(ser, age, country, uId) {
  return {
    user: user,
    age: age,
    country: country,
    id: uId,
  };
}

// new form
function newUser2(user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId,
  };
}

console.log("newUser", "alexgbcr", 36, "CR");
console.log("newUser2", "alexgbcr", 36, "CR", 1);
