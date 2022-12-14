import React, { useContext, useState, useEffect } from 'react'
import { MovieCtx } from '../context/MovieContext'
import { v4 as uuidV4 } from 'uuid'

const AddMovie = () => {
    const [movies, setMovies] = useContext(MovieCtx)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(30)

    useEffect(() => {
        localStorage.setItem('mvs', JSON.stringify(movies))
    }, [movies, setMovies])


    const addMovie = (e) => {
        e.preventDefault()
        if (name && price) {
            setMovies(preMovie => [
                ...preMovie,
                {
                    id: uuidV4(),
                    name,
                    price
                }
            ])
        } else {
            alert('电影名和票价不能为空')
        }
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
                <input type="number" name="mprice" min={30} max={200} value={price} onChange={handlePrice} />
                <button type='submit'>添加</button>
            </form>
        </div>
    )
}

export default AddMovie