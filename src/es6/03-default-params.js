function newUser(name, age, country) {
  var name = name || "Alexander";
  var age = age || 36;
  var country = country || "CR";
  console.log(name, age, country);
}

newUser();
newUser("Alessandro", 11, "CR");

// lastest structure
function newAdmin(name = "Alessandro", age = 11, country = "CR") {
  console.log(name, age, country);
}

newAdmin();
newAdmin("Alexander", 36, "CR");
