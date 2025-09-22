// template string --> ``

const fname = "Gias Uddin";
const lname = "Jarif";

console.log(fname + " " + lname);
console.log(`My name is ${fname} ${lname}`);

// arrow function
const sum = (a, b) => a + b;
console.log(sum(4, 5));

// multiple line hoile second bracket use korte hobe

// rest operator
const total = (...rest) => {
  console.log(rest);
};
total(1, 2, 3); // give an array

const multiply = (a, b, c) => {
  const result = a * b * c;
  return result;
};
console.log(multiply(4, 5, 8));

// ... spread operator

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
console.log(...numbers);

const newArr = [...numbers, 10, 100];
console.log(newArr);



