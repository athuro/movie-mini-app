import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const {id} = useParams();
    console.log(id)
    const [movie, setMovie] = useState()

    useEffect( () => {
        fetch(`http://localhost:8082/movies/${id}`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }, [])

    return (
        <>
            <h3>{movie.title}</h3>
            <p>{movie.list}</p>
        </>
    )
}

export default Details