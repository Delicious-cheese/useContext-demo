import React, { useContext, useState } from 'react'
import { MovieCtx } from '../context/MovieContext'
import { v4 as uuidV4 } from 'uuid'

const AddMovie = () => {
    const [movies, setMovies] = useContext(MovieCtx)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)

    const addMovie = (e) => {
        e.preventDefault()
        setMovies(preMovie => [
            ...preMovie,
            {
                id: uuidV4(),
                name,
                price
            }
        ])
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    return (
        <div>
            <h5 style={{ margin: 0 }}>添加需要上架的电影名称以及票价</h5>
            <form onSubmit={addMovie}>
                <input type="text" name="mname" value={name} onChange={handleName} />
                <input type="number" name="mprice" value={price} onChange={handlePrice} />
                <button type='submit'>添加</button>
            </form>
        </div>
    )
}

export default AddMovie