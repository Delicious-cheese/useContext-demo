import React, { useContext } from 'react';
import { MovieCtx } from '../context/MovieContext'

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieCtx)

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 2
            }}
        >
            {
                movies.map(movie => <li key={movie.id}>{movie.name}</li>)
            }
        </div>
    )
}

export default MovieList