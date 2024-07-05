let firstName = "Ram";
let lastName = "Site";

let person = {
  // firstName:firstName,
  // lastName:lastName
  firstName,
  lastName,
};

function createPerson(firstName, lastName,age) {
  let fullname = firstName + " " + lastName;
  return {
    firstName,
    lastName,
    fullname,
    isSenior() {
      return age > 60;
    }
  };
}
let p = createPerson("Shyam", "Laxman",32);

console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullname);
console.log(p.isSenior());
// console.log(person.firstName);
// console.log(person.lastName);
