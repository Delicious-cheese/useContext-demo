import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const MovieCtx = createContext()

export const MovieContext = ({ children }) => {
    const [movies, setMovies] = useState([
        { id: uuidv4(), name: '大话西游', price: 50 },
        { id: uuidv4(), name: '肖申克的救赎', price: 50 },
        { id: uuidv4(), name: '白日梦想家', price: 45 },
        { id: uuidv4(), name: '战狼', price: 50 },
    ])

    return (
        <MovieCtx.Provider value={[movies, setMovies]}>
            {children}
        </MovieCtx.Provider>
    )
}
