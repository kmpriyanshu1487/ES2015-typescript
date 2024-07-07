class Person {
  constructor(name) {
    console.log(name + " Person Constructor");
  }
  getID() {
    return 10;
  }
}

class Employee extends Person {
  constructor(name) {
    super(name);
    console.log(name + " Employee constructor");
  }
  getID() {
    return super.getID();
  }
}
let p = new Employee("Ram");
console.log(p.getID());
