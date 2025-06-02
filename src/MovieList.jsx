import Movie from "./Movie.jsx";

function Movie({data}) {

    return (
        <>
        {
            data.map((movieDetails) => {
                return <Movie title={movieDetails.title} release={movieDetails.title} rating={movieDetails.rating}/>
            })
        }
        </>
    )
}

export default Movie