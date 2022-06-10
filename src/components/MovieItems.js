

const MovieItems = (props) => {
    return (
        <section className="movieCard">
            <h2>{props.title}</h2>
            <h2>{props.year}</h2>
            <h2>{props.director}</h2>
            <h2>{props.duration}</h2>
            <h2>{props.rate}</h2>
            {props.genre.map((ele) => <p>{ele}</p>)}

        </section>
    );
}

export default MovieItems;