import './App.css';
import {useState} from "react";

function App() {

  const [loggedIn, setStatus] = useState(true);
  return (
    <div>
      <h1>Assignment 1
      </h1>
      <h2><button onClick = {() => setStatus(!loggedIn)}>
        {loggedIn ? "Login" : "Log out"}
      </button>
      </h2>
    </div>
  )
}

export default App