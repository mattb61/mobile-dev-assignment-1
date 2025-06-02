import './App.css';
import MovieData from "./MovieList.jsx";
import movieDetails from "./movies.json";
import NavBar from "./NavBar.jsx";

function App() {

  return (
    <>
      <NavBar></NavBar>
      <h3>Details for {movieDetails.movies}</h3>
      <MovieData data={movieDetails.movieList}/>
    </>
  )
}

export default App