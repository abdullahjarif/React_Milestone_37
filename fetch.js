// const obj = {
//   name: "jarif",
//   age: 23,
//   job: "teacher"
// };
// const person = {
//   name: "Jarif",
//   age: 23,
//   study: "B.Sc.",
//   job: "front end developer",
//   friends: ["jarif", "rahim", "karim"],
//   address: {
//     block: "A",
//     road: 3,
//     street: "17/A",
//     house: "128/1",
//   },
//   country: "Bangladesh",
// };

// const jsondata = JSON.stringify(person);
// console.log(jsondata);
// const plaindata = JSON.parse(jsondata);
// console.log(plaindata);

// JSON.stringify() --> object to JSON data
// JSON.parse() --> JSON data to object

// fetch
// fetch("url")
//   .then((response) => response.json())
//   .then((data) => console.log(data));


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
  country: "Bangladesh",
};

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);


const productsDetails = [
  {
    id: 1,
    name: "Samsung s25",
    brand: "Samsung",
    price: 150000,
    Ram: "8gb",
    Rom: "256gb",
    color: "Black",
  },
  {
    id: 2,
    name: "Readmi note 14",
    brand: "Xaomi",
    price: 35000,
    Ram: "8gb",
    Rom: "256gb",
    color: "Cayan",
  },
  {
    id: 3,
    name: "Iphone 17",
    brand: "Iphone",
    price: 150000,
    Ram: "8gb",
    Rom: "256gb",
    color: "Red",
  },
  {
    id: 4,
    name: "Realme C75",
    brand: "Realme",
    price: 20000,
    Ram: "8gb",
    Rom: "256gb",
    color: "White",
  },
  {
    id: 5,
    name: "OnePlus nord",
    brand: "OnePlus",
    price: 40000,
    Ram: "8gb",
    Rom: "256gb",
    color: "Blue",
  }
];

const newData = {
  name: 'Fridge',
  brand: 'Walton',
  load: '75kg',
  color: 'blue',
  price: '90000'
}

// add new element
const newArr = [...productsDetails, newData];
console.log(newArr);

// delete an element and add a new element 
const remainingProducts = productsDetails.filter(product => product.brand !== 'Xaomi');
console.log(remainingProducts);
const remainingArr = [...remainingProducts, newData];
console.log(remainingArr);


