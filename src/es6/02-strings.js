let hello = "hello";
let world = "world";

// original form
let epicPhrase = hello + " " + world + "!";
console.log(epicPhrase);

// best form
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

// Milti-line strings
let lorem = "esto es un string \n" + "esto es otra linea";
console.log(lorem);

let lorem2 = `esto es un string 
esto es otra linea`;
console.log(lorem2);
