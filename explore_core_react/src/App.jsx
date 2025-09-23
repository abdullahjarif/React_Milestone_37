import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Introduction to React</h1>
      <Student></Student>
      <Developer name="Jarif" lang="Python (Django)"></Developer>
      <Developer name="Abir" lang="React JS"></Developer>
      <Developer name="Shaan" lang="Node JS"></Developer>
      <Person></Person>
      <Sports></Sports>
      <Person></Person>
      <Pet></Pet>
      <Device device="Samsung s25" brand="Samsung" price="25000 BDT"></Device>
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
    textAlign: "center"
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
      <h3 style={{
          color: "aqua"
        }}>
        Developer : {props.name}
      </h3>
      <h5
        style={{
          color: "#61dafbaa"
        }}>
        Language : {props.lang}
      </h5>
    </div>
  );
}

function Device(props){
  return(
    <div style={{
        margin: "10px",
        padding: "10px",
        border: "3px solid skyblue",
        borderRadius: "20px"
    }}>
      <h3>Device  : {props.device}</h3>
      <p>Brand  : {props.brand}</p>
      <p>Price : {props.price}</p>

    </div>
  );
}

function Student() {
  return (
    <div className="student">
      <p>Name: Jarif</p>
      <p>Dept.: CSE</p>
      <p>Class: Math</p>
      <p>Marks: 50</p>
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

export default App;
