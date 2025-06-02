function Movie({title, release, rating}) {

    return (
        <>
            <h3>Title: {title}</h3>
            <p>Release date: {release}</p>
            <p>Rating: {rating}</p>
        </>
    )
}

export default Movie