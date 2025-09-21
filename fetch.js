// const obj = {
//   name: "jarif",
//   age: 23,
//   job: "teacher"
// };
const person = {
  name: "Jarif",
  age: 23,
  study: "B.Sc.",
  job: "front end developer",
  friends: ["jarif", "rahim", "karim"],
  address: {
    block: "A",
    road: 3,
    street: "17/A",
    house: "128/1",
  },
  country: "Bangladesh"
};

const jsondata = JSON.stringify(person);
console.log(jsondata);
const plaindata = JSON.parse(jsondata);
console.log(plaindata);
 
// JSON.stringify() --> object to JSON data
// JSON.parse() --> JSON data to object 

