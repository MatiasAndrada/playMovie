import React, { useState, useEffect } from "react";
//components
import Movie from "./Movie/Movie";
import MovieDetail from "../MovieDetail/MovieDetail";

//redux
import store from "../../../store";
export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    store.subscribe(() => {
      setMovies(store.getState().movieSlice.listMovies);
    });
  }, [movies]);

  return (
    <div className="movieList">
      <MovieDetail />
      {movies.map((data) => (
        <Movie
          key={data.imdbID}
          Title={data.Title}
          Poster={data.Poster}
          Year={data.Year}
          Type={data.Type}
          imdbID={data.imdbID}
        />
      ))}
    </div>
  );
};
