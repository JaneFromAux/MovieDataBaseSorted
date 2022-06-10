import data from "../data";
import { useState } from "react";
import MovieItems from "./MovieItems";
const SortButton = () => {

    const [movies, setMovies] = useState(data);//
    //movies ist der default Wert(Start) der bei useState in Klammern steht und ist veränderbar -- NUR durch setMovies  
    console.log();
    let sortDateAs = () => {
        let sortAs = [...movies].sort((a, b) => a.year - b.year);
        console.log(sortAs);
        setMovies(sortAs); // hier wird movies geupdatedt durch sortAs
    }
    let sortDateDs = () => {
        let sortDs = [...movies].sort((a, b) => b.year - a.year)
        console.log(sortDs);
        setMovies(sortDs)
    }
    let sortAlphaAZ = () => {
        console.log('runs');
        let sortAZ = [...movies].sort(function (a, b) {
            if (a.title < b.title) { return -1; }
            if (a.title > b.title) { return 1; }
            return 0;
        })
        console.log(sortAZ);
        setMovies(sortAZ)
    }

    let sortAlphsZA = () => {
        let sortZA = [...movies].sort(function (a, b) {
            if (a.title > b.title) { return -1; }
            if (a.title < b.title) { return 1; }
            return 0;
        })
        console.log(sortZA);
        setMovies(sortZA)
    }
    let sortBestRate = () => {
        let sortBest = [...movies].sort((a, b) => b.rate - a.rate)
        setMovies(sortBest)
    }

    let sortGenre = () => {
        console.log('runs');
        let sortGen = [...movies].sort((a, b) => {
            if (a.genre < b.genre) { return -1; }
            if (a.genre > b.genre) { return 1; }
            return 0;
        })
        setMovies(sortGen)


    }

    return (
        <section>
            <div className="buttonWrap">
                <button onClick={sortDateAs}>Sort by Date Ascending</button>
                <button onClick={sortDateDs}>Sort by Date Descending</button>
                <button onClick={sortAlphaAZ}>A-Z</button>
                <button onClick={sortAlphsZA}>Z-A</button>
                <button onClick={sortBestRate}>Best Rate</button>
                <button onClick={sortGenre}>Genre</button>
            </div >
            <div>
                {movies.map((ele, i) =>
                    <MovieItems
                        key={i}
                        title={ele.title}
                        year={ele.year}
                        director={ele.director}
                        duration={ele.duration}
                        rate={ele.rate}
                        genre={ele.genre}
                    />
                )}
            </div>
        </section>
    );
}

export default SortButton;