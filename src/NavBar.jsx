import {useState} from "react";

function NavBar() {

  const [loggedIn, setStatus] = useState(true);
  return (
    <>
      <h1>Assignment 1
      </h1>
        <h2><button onClick = {() => setStatus(!loggedIn)}>
        {loggedIn ? "Login" : "Log out"}
      </button>
      </h2>
      </>
  )
}

export default NavBar