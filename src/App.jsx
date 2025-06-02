import './App.css';
import MovieData from "./MovieList.jsx";
import movieDetails from "./movies.json";
import {useState} from "react";

function App() {

  const [loggedIn, setStatus] = useState(true);
  return (
    <>
      <h1>Assignment 1
      </h1>
      <h2><button onClick = {() => setStatus(!loggedIn)}>
        {loggedIn ? "Login" : "Log out"}
      </button>
      </h2>
      <h2>Details for {movieDetails.movies}</h2>
      <MovieData data={movieDetails.movieList}/>
    </>
  )
}

export default App