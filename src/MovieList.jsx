import Movie from "./Movie.jsx";

function MovieData({data}) {

    return (
        <>
        {
            data.map((movieDetails) => {
                return <Movie title={movieDetails.title} release={movieDetails.release} rating={movieDetails.rating}/>
            })
        }
        </>
    )
}

export default MovieData