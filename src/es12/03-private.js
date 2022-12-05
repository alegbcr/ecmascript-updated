class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // methods
  #speak() {
    console.log("Hello,");
  }

  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  /* Get sirve para leer valores */
  get #uAge() {
    this.age;
  }
  /* Set sirve para asignar valores */
  set #uAge(n) {
    this.age = n;
  }
}

// Instancia de la clase
const alexgbcr = new User("Alex", 36);
console.log(alexgbcr.greeting());
console.log(alexgbcr.uAge);
