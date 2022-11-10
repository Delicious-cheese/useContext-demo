import React, { useContext } from 'react';
import { MovieCtx } from '../context/MovieContext'

const NavBar = () => {
    const [movies, setMovies] = useContext(MovieCtx);

    return (
        <div>
            <span>Hi</span>
            <span>这里有 <strong>{movies.length}</strong> 部电影</span>
        </div>
    )
}

export default NavBar