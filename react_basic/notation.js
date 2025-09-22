const person = {
    name: "Jarif",
    age: 25,
    friends: ["Alom", "Babul", "Abul", "Kalam"],
    salary: 25000,
    10: "Secret code",
    "gender": "male"
}

// const name = person.name; // dot notation
const name = person["name"] // bracket notation
console.log(name);

const secretCode = person["10"];
console.log(secretCode);

const gender = person["gender"];
console.log(gender);


