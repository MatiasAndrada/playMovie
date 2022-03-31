import React from 'react'
import Movie from '../Movies/Movie'

const MovieList = ({ productList }) => {
    return (
        <div className="row">
            {
                productList.map((i) => <Movie key={i.imdbID} Title={i.Title} Poster={i.Poster} Year={i.Year} Type={i.Type}/>)
            }
        </div>
    )
}

export default MovieList;