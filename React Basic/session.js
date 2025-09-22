// const name = "Jarif";
// console.log(name);

function handleAddStorage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
//   console.log(name);
localStorage.setItem("name", name);
localStorage.setItem("email", email);

const data = {name, email};
localStorage.setItem(name, JSON.stringify(data))

}

const storedItem = localStorage.getItem("Abdullah Jarif");
console.log(storedItem);
console.log(JSON.parse(storedItem));

const handleClick = ()=>{
    localStorage.clear();
}

// do remove --> localStorage.remove()


