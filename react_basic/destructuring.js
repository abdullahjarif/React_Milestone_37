// const friends = ["Jarif", "Kashem", "Hasem", "Jalil", "Fahad", "Ahad", "Arif"];
// const element1 = friends[0];
// const element2 = friends[1];
// const element3 = friends[2];
// const element4 = friends[3];
// const [element1, element4, element3, element2] = friends;
// console.log(element1, element2, element3, element4);

const person = {
  name: "Jarif",
  age: 23,
  study: "B.Sc.",
  job: "front end developer",
  address: {
    block: "A",
    road: 3,
    street: "17/A",
    house: "128/1",
  },
  country: "Bangladesh"
};
console.log(person);
console.log(person.address);
console.log(person.country);
console.log(person.address.block);

const {name, age, job} = person;
console.log(name, age, job);

// object destructuring --> {} bracket
// array destructuring --> [] bracket
