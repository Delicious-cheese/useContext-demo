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
                gap: 2,
                width: '300px'
            }}
        >
            {
                movies.map(movie => (
                    <li key={movie.id}
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <strong className='text-hide' style={{ width: '56%', textAlign: 'left' }}>{movie.name}</strong>
                        <span style={{ width: '24%', textAlign: 'left' }}>票价:{movie.price}</span>
                    </li>
                ))
            }
        </div>
    )
}

export default MovieList