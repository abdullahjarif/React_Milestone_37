// truthy value
// false value --> false, 0, -0, null, undefined

// check truth or false value
// const test = 1;
// const result = test ? "true value" : "false value";
// console.log(result);

// const num = 18;
// const result2 = num >= 5 && num < 15 ? "true value" : "false value";
// console.log(result2);

const isActive = true;
// console.log(!isActive);
const showUser = () => console.log("Show user green");
const hideUser = () => console.log("Hide user red");

// isActive ? showUser() : hideUser();
isActive && showUser();


const num = '10';
const addResult = +num;
console.log(typeof addResult);

const add = num + 10;
const sub = num - 10;

console.log(typeof num);
console.log(typeof add);
console.log(add);
console.log(typeof sub);
console.log(sub);


