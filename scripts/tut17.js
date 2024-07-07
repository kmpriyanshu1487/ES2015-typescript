let employee = ["Ram", "laxman", "Male"];

let [fname, /*lname, gender*/ ...elements] = employee;

console.log(fname);
console.log(elements);
// console.log(gender);