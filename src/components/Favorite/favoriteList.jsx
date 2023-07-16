import React from "react";
import Button from "react-bootstrap/esm/Button";

//component
import MovieFavorite from "./MovieFavorite";

//redux
import { useSelector, useDispatch } from "react-redux";
import { deleteFavoriteMovie } from "../../store/actions/movies/favoritesMovies";

export const FavoriteList = () => {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favoriteMovies);
  console.log(
    "🦇 ~ file: favoriteList.jsx:15 ~ FavoriteList ~ favoriteList:",
    favoriteList
  );

  function deleteMovie() {
    dispatch(deleteFavoriteMovie());
  }
  return (
    <div className="moviesFavList">
      {favoriteList.listMoviesFav.length === 0 ? (
        <h1 className="text-center text-white text-base">
          No hay películas favoritas
        </h1>
      ) : (
        <Button onClick={() => deleteMovie()} variant="dark">
          Eliminar
        </Button>
      )}
      {favoriteList.listMoviesFav.map((data) => (
        <MovieFavorite
          Title={data.movieData.Title}
          Poster={data.movieData.Poster}
          key={data.movieID}
          movieID={data.movieID}
        />
      ))}
    </div>
  );
};
