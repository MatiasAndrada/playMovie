import React from "react";
//components
import Movie from "./Movie/Movie";
/* import MovieDetail from "../MovieDetail/MovieDetail"; */
//redux
import { useSelector } from "react-redux";
export const MovieList = () => {
  const movies = useSelector((state) => state.searchMovies)
  return (
    <div className="movieList">
{/*       <MovieDetail /> */}
      {movies.listMovies.map((data) => (
        <Movie
          key={data.id}
          Title={data.title}
          Poster={data.poster_path}
/*           Year={data.year}
          Type={data.Type}
          imdbID={data.imdbID} */
        />
      ))}
    </div>
  );
};
