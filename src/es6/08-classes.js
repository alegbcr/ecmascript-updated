// declarando una clase
class User {
  // constructor => inicializa elementos de la clase
  constructor(name) {
    this.name = name;
  }

  // metodos => funciones de la clase
  speak() {
    return "Hello!!!";
  }

  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

// Instancia de la clase
const alegbcr = new User("Ale");
console.log(alegbcr.greeting());

/* ____ Setters and Getters  ____ */
class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log("Hello,");
  }

  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  /* Get sirve para leer valores */
  get uAge() {
    this.age;
  }
  /* Set sirve para asignar valores */
  set uAge(n) {
    this.age = n;
  }
}

// Instancia de la clase
const alexgbcr = new User2("Alex", 36);
console.log(alexgbcr.greeting());
console.log(alexgbcr.uAge);
