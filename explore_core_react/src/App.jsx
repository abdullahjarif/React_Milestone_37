import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Introduction to React</h1>
      <Person></Person>
      <Sports></Sports>
      <Person></Person>
      <Pet></Pet>
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
  return (
    <>
      <h2>Hi, welcome to {course} class</h2>
      <p>I am {name}</p>
      <p>I am from {address}</p>
    </>
  );
}

function Pet(){
  return(
    <ul>
      <li>Bird</li>
      <li>Cow</li>
      <li>Dog</li>
      <li>Cat</li>
      <li>Rat</li>
      <li>Hamster</li>
    </ul>
  )
}

function Sports(){
  return(
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>Banana</li>
        <li>Apple</li>
        <li>Orange</li>
        <li>Jack-Fruit</li>
        <li>Watermelon</li>
      </ul>
      <p>Playing and losing</p>
    </div>
  );
}

export default App;
