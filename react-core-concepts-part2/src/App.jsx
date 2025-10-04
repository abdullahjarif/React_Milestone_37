import Counter from "./counter";
import "./App.css";


function App() {
  // const [count, setCount] = useState(0)

  function handleClick() {
    alert("I Love React");
  }

  const buttonHandler = () => {
    alert("Button Clicked");
  };

  const handleAdd = (num) => {
    alert(num + 4);
  }

  return (
    <>
      <h3>React Core Concepts part 02</h3>
      
      
      
      <Counter></Counter>



      {/* <button onClick={buttonHandler()}>Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function () {
          alert("Click Again");
        }}
      >
        Click Again
      </button>
      <button onClick={buttonHandler}>Click Me2</button>

      {/* using arrow function */}
      <button onClick={() => alert("Using Arrow Function")}>Click Me3</button>
      {/* wrap with arrow function */}
      <button onClick={() => handleAdd(10)}>Add Button</button> 
    </>
  );
}

export default App;
