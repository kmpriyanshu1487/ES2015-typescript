function Greetperson(name) {
  let Greet;
  if (name === "Ram") {
    Greet = "Hi Ram!";
  } else {
    Greet = "Hello There!";
  }
  console.log(Greet);
}
Greetperson("Ram");

var a = 1;
var b = 2;
if (a === 1) {
  var a = 10;
  let b = 20;
  console.log(a);
  console.log(b);
}
console.log(a);
console.log(b);

