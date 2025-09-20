const products = [
  "Xaomi",
  "Samsung",
  "Huawai",
  "Realme",
  "Oppo",
  "Iphone",
  "Itel",
  "Nokia",
  "OnePlus",
];
console.log(products);

const productsDetails = [
  {
    name: "Samsung s25",
    brand: "Samsung",
    price: 150000,
    Ram: "8gb",
    Rom: "256gb",
    color: "Black",
  },
  {
    name: "Readmi note 14",
    brand: "Xaomi",
    price: 35000,
    Ram: "8gb",
    Rom: "256gb",
    color: "Cayan",
  },
  {
    name: "Iphone 17",
    brand: "Iphone",
    price: 150000,
    Ram: "8gb",
    Rom: "256gb",
    color: "Red",
  },
  {
    name: "Realme C75",
    brand: "Samsung",
    price: 20000,
    Ram: "8gb",
    Rom: "256gb",
    color: "White",
  },
  {
    name: "OnePlus nord",
    brand: "OnePlus",
    price: 40000,
    Ram: "8gb",
    Rom: "256gb",
    color: "Blue",
  },
];

console.log(productsDetails);
console.log(productsDetails[0]);

const arrColor = productsDetails.map(
  (productsDetails) => productsDetails.color
);
console.log(arrColor);

const productPrice = productsDetails.map(
  (productsDetails) => productsDetails.price
);
console.log(productPrice);
