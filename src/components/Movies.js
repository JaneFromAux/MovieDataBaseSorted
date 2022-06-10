import data from '../data';
import MovieItems from './MovieItems';

const Movies = () => {
    return (
        <div className='wrapper'>
            {data.map((ele, i) =>
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
    );
}

export default Movies;