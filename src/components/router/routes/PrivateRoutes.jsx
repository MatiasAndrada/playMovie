import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieList from '../../Movies/MovieList/MovieList'

export const PrivateRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/movieList' element={<MovieList/>}  />
        </Routes>
    </div>
  )
}

