class Person{
    greet(){}
}

let p=new Person();
console.log(typeof Person);

console.log(p.greet=== Person.prototype.greet);