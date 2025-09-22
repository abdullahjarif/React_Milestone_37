// const products = [
//   "Xaomi",
//   "Samsung",
//   "Huawai",
//   "Realme",
//   "Oppo",
//   "Iphone",
//   "Itel",
//   "Nokia",
//   "OnePlus",
// ];
// console.log(products);

// Product Details
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
  },
];

// console.log(productsDetails);
// console.log(productsDetails[0]);

// const arrColor = productsDetails.map(
//   (productsDetails) => productsDetails.color
// );
// console.log(arrColor);

// const productPrice = productsDetails.map(
//   (productsDetails) => productsDetails.price
// );
// console.log(productPrice);

// foreach return kore na
// productsDetails.forEach(product => console.log(product.brand));

// const productBrand = productsDetails.filter(productBrand => productBrand.brand === 'Samsung');
// console.log(productBrand);

// const productColor = productsDetails.filter(color => color.color === 'Cayan');
// console.log(productColor);

// const productPrice = productsDetails.filter(price => price.price >= 30000);
// const productPrice = productsDetails.filter((price) => price.price <= 30000);
// console.log(productPrice);

const productId = productsDetails.filter((pId) => pId.id !== 3);
console.log(productId);
