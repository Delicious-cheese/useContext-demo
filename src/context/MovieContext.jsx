import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const MovieCtx = createContext()

const mvs = localStorage.getItem('mvs')
    ? JSON.parse(localStorage.getItem('mvs'))
    : [{ id: uuidv4(), name: '大话西游', price: 50 },
    { id: uuidv4(), name: '肖申克的救赎', price: 50 }]


export const MovieContext = ({ children }) => {
    const [movies, setMovies] = useState(mvs)

    return (
        <MovieCtx.Provider value={[movies, setMovies]}>
            {children}
        </MovieCtx.Provider>
    )
}
