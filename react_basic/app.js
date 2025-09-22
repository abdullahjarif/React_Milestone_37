// variable
// const and let

// let name = "Jarif";
// name = "Abdullah Jarif";

// const countryName = "Bangladesh";
// const num = 18;
// // if (num >= 20 && num <= 30) {
// if (num >= 20 || num <= 30) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

const friends = ["Joe", "Rahim", "Karif", "Jarif", "Arif"];
console.log(friends);
// console.log(friends.length);
// console.log(friends[1]);
// friends.pop();
// friends.pop();
// friends.push("Amin");
// friends.unshift("Abdullah");
// friends.shift("Abdullah");
// console.log(friends);
// console.log(friends.slice(2, 3));
// console.log(friends.splice(2, 3));

// for (let ind = 0; ind < friends.length; ind++) {
//   // console.log(friends);
//   const element = friends[ind];
//   console.log(element);
// }

// function sum(a, b) {
//   console.log(arguments);

//   const result = a + b;
//   return result;
// }

// const output = sum(4, 5);
// console.log(output);

const person = {
  lname: "Jarif",
  fname: "Abdullah",
  age: 23,
  address: {
    street: "3",
    block: "A",
  },
  friends: friends
};
person.fname = "Hero";
console.log(person);
console.log(person.friends);
console.log(person.friends[1]);
console.log(person.address.block);


