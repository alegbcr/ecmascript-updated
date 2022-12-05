function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["Alexander", "Alessandro", "Luciana", "Sofía", "Pamela"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
