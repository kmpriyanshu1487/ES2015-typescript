class Person {
  constructor(name) {
    this.name = name;
    console.log(this.name + " Constructor");
  }
  static staticMethod() {
    console.log("Static Method");
  }

  greetPerson() {
    console.log("Hello " + this.name);
  }
}

let p = new Person("Ram");
Person.staticMethod();
p.greetPerson();
