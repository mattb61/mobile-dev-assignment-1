function Movie({title, release, rating}) {

    return (
        <>
            <h4>Title: {title}</h4>
            <p>Release date: {release}</p>
            <p>Rating: {rating}</p>
        </>
    )
}

export default Movie