import "./App.css";
import ToDo from "./Todo";
import FruitsList from "./fruitsList";
import StudentList from "./studentList";
import Library from "./library";

function App() {
  // const time = 50;

  // const fruits = [
  //   "Banana",
  //   "Apple",
  //   "Orange",
  //   "Jack-Fruit",
  //   "Watermelon",
  //   "Mango",
  //   "Guava",
  //   "Papaya",
  // ];

  const students = [
    { id: 1, name: "Jarif", dept: "CSE", class: "Math", marks: 50 },
    { id: 2, name: "Abir", dept: "CSE", class: "English", marks: 60 },
    { id: 3, name: "Shaan", dept: "CSE", class: "Accounting", marks: 70 },
    { id: 4, name: "Rafi", dept: "CSE", class: "Finance", marks: 80 },
    { id: 5, name: "Rafsan", dept: "CSE", class: "Marketing", marks: 90 },
  ];
  
  
  const books = [
    {
      id: 1,
      title: "Foundation",
      category: "Science Fiction",
      volume: 1,
      author: "Isaac Asimov",
      price: "$15.99",
      issn: "1234-5678"
    },
    {
      id: 2,
      title: "The Hobbit",
      category: "Fantasy",
      volume: 2,
      author: "J.R.R. Tolkien",
      price: "$12.99",
      issn: "2345-6789"
    },
    {
      id: 3,
      category: "Mystery",
      title: "Murder on the Orient Express",
      volume: 3,
      author: "Agatha Christie",
      price: "$10.99",
      issn: "3456-7890"
    },
    {
      id: 4,
      category: "Horror",
      title: "The Shining",
      volume: 4,
      author: "Stephen King",
      price: "$14.99",
      issn: "4567-8901"
    },
    {
      id: 5,
      category: "Romance",
      title: "Pride and Prejudice",
      volume: 5,
      author: "Jane Austen",
      price: "$9.99",
      issn: "5678-9012"
    },
  ];

  return (
    <>
      <h1>Introduction to React</h1>
      

      <Library books={books}></Library>

      

      {students.map((students) => (
        //(function_loop_parameter.map((function_loop_parameter dynamically={dynamically}) => (return_value)))

        <StudentList key={students.id} students={students}></StudentList>
      ))}

      {/* {fruits.map((fruits) => (
        <FruitsList key={fruits} fruits={fruits}></FruitsList>
      ))} */}

      {/* <ToDo task="Learn React" isDone={true} time={time}></ToDo>
      <ToDo task="Learn Next" isDone={false}></ToDo>
      <ToDo task="Revise JS" isDone={true} time={time}></ToDo>
      <ToDo task="Complete React Milestone 1" isDone={true} time={time}></ToDo>
      <ToDo task="Complete Node JS Milestone 1" isDone={false}></ToDo> */}

      {/* <Student></Student>
      <Developer name="Jarif" lang="Python (Django)"></Developer>
      <Developer name="Abir" lang="React JS"></Developer>
      <Developer name="Shaan" lang="Node JS"></Developer>
      <Person></Person>
      <Sports></Sports>
      <Person></Person>
      <Pet></Pet>
      <Device device="Samsung s25" brand="Samsung" price="25000 BDT"></Device>
      <Device device="Reami Note 9" brand="Xaomi" price="25000 BDT"></Device>
      <Author nameAuthor="Jarif" userLanguage="React JS" website="www.jarifwrites.com" authorMail="22-46386-1@student.aiub.edu"></Author>
      <Player playerName="Tamim" jerseyNo="99" runs="10000" strikeRate="200.20"></Player>
      <Player playerName="Mushfiqur" jerseyNo="67" runs="12000" strikeRate="200.50"></Player>
      <Book category="Science Fiction" volume="1" author="Isaac Asimov" price="$15.99" issn="1234-5678"></Book>
      <Book category="Fantasy" volume="2" author="J.R.R. Tolkien" price="$12.99" issn="2345-6789"></Book>
      <Book category="Mystery" volume="3" author="Agatha Christie" price="$10.99" issn="3456-7890"></Book> */}
    </>
  );
}

/**
 * first declare a function ... parameter for () bracket ... body for {} bracket
 * then mentioned in return body
 */
function Person() {
  const name = "Jarif";
  const address = "Dhaka";
  const course = "React JS";
  const personStyle = {
    color: "yellow",
    textAlign: "center",
  };
  return (
    <>
      <div className="person">
        <h2 id="person" title="tooltip" style={personStyle}>
          I am {name}
        </h2>
        <p>Hi, welcome to {course} class</p>
        <p>I am from {address}</p>
      </div>
    </>
  );
}

function Developer(props) {
  console.log(props);

  // const devName = "Abdullah";
  // const language = "ReactJS";
  return (
    <div className="developer">
      <h3
        style={{
          color: "aqua",
        }}
      >
        Developer : {props.name}
      </h3>
      <h5
        style={{
          color: "#61dafbaa",
        }}
      >
        Language : {props.lang}
      </h5>
    </div>
  );
}

function Device(props) {
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        border: "3px solid skyblue",
        borderRadius: "20px",
      }}
    >
      <h3 style={{ color: "orange", fontWeight: "bold" }}>
        Device : {props.device}
      </h3>
      <p>Brand : {props.brand}</p>
      <p>Price : {props.price}</p>
    </div>
  );
}

function Student() {
  return (
    <div
      style={{
        border: "2px solid purple",
        margin: "10px",
        padding: "10px",
        borderRadius: "20px",
      }}
      className="student"
    >
      <p>Name: Jarif</p>
      <p>Dept.: CSE</p>
      <p>Class: Math</p>
      <p>Marks: 50</p>
    </div>
  );
}

function Author(props) {
  // const nameAuthor = "Jarif";
  // const userLanguage = "React JS";
  // const website = "www.jarifwrites.com";
  // const authorMail = "22-46386-1@student.aiub.edu"
  return (
    <div
      style={{
        border: "2px solid orange",
        margin: "10px",
        padding: "10px",
        borderRadius: "20px",
      }}
      className="author"
      id="author"
    >
      <h2
        style={{
          color: "Cyan",
        }}
      >
        Author Name: {props.nameAuthor}
      </h2>
      <p
        style={{
          color: "lightgreen",
        }}
      >
        Bio: A passionate writer and {props.userLanguage} developer.
      </p>
      <p>Website: {props.website}</p>
      <p>Contact: {props.authorMail}</p>
    </div>
  );
}

function Pet() {
  return (
    <div className="pet">
      <ul>
        <li>Bird</li>
        <li>Cow</li>
        <li>Dog</li>
        <li>Cat</li>
        <li>Rat</li>
        <li>Hamster</li>
      </ul>
    </div>
  );
}

function Sports() {
  return (
    <div className="sports">
      <h3>Cricket</h3>
      <p>Playing and losing</p>
      <ul>
        <li>Banana</li>
        <li>Apple</li>
        <li>Orange</li>
        <li>Jack-Fruit</li>
        <li>Watermelon</li>
      </ul>
    </div>
  );
}

// const {playerName,jerseyNo,runs,strikeRate} = {name:"Tamim",jerseyNo:"99",runs:"10000",strikeRate:"200.20"};

function Player({ playerName, jerseyNo, runs, strikeRate }) {
  // destructuring korle just second bracket diye element gula likhe dite hobe pore props replace kore dile hobe r props keyword ta mention kora lagbe na

  return (
    <div
      style={{
        border: "2px solid green",
        margin: "10px",
        padding: "10px",
        borderRadius: "20px",
      }}
      className="player"
    >
      <h3>Player Name: {playerName} </h3>
      <p>Jersey No: {jerseyNo} </p>
      <p>Runs: {runs} </p>
      <p>Strike Rate: {strikeRate} </p>
    </div>
  );
}

function Book({ category, volume, author, issn, price }) {
  return (
    <div
      style={{
        border: "2px solid blue",
        margin: "10px",
        padding: "10px",
        borderRadius: "20px",
      }}
      className="book"
    >
      <h3
        style={{
          color: "brown",
          fontWeight: "bold",
        }}
      >
        Category: {category}
      </h3>
      <p>Volume: {volume}</p>
      <p>Author: {author}</p>
      <p>ISSN: {issn}</p>
      <p>Price: {price}</p>
    </div>
  );
}

export default App;
