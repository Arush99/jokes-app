import { useRef, useState } from "react";
import './App.css';
import useRandomJokes from './useRandomJokes';

function App() {
  
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  
  const [firstName, setFirstName] = useState("Arush");
  const [lastName, setLastName] = useState("Sharma");

  const joke = useRandomJokes(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="app">
       <header className="App-header">
      <center>
        <h1>The Joke Generator</h1>
        <h2>{joke}</h2>
        <form>
          <input class="input" placeholder="First name" ref= {firstNameRef} />
          <input class="input" placeholder="Last name" ref = {lastNameRef}/>
          <button id = "btn" onClick = {generateJoke}>Generate Joke</button>
        </form>
       
      </center>
      </header>
    </div>
  );
}

export default App;
