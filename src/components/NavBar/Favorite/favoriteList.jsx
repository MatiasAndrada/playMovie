import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFavoriteMovie, getFavoriteMovies } from "../../../store/actions/movies/favoritesMovies";
import MovieFavorite from "./MovieFavorite";

export const FavoriteList = ({ idUser }) => {
  const dispatch = useDispatch();
  const { listMoviesFav, error, loading } = useSelector((state) => state.favoriteMovies);

  useEffect(() => {
    dispatch(getFavoriteMovies(idUser));
  }, [dispatch, idUser]);

  function deleteMovie() {
    dispatch(deleteFavoriteMovie(idUser));
  }

  return (
    <div className="moviesFavList">
      {error && (
        <div className="alert alert-danger text-center mt-4" role="alert">
          {error}
        </div>
      )}

      {loading ? (
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : listMoviesFav.length > 0 ? (
        listMoviesFav.map((movie) => (
          <MovieFavorite
            key={movie.movieID}
            movieID={movie.movieID}
            Title={movie.Title}
            Poster={movie.Poster}
            deleteMovie={deleteMovie}
          />
        ))
      ) : (
        <div className="alert alert-secondary text-center mt-4" role="alert">
          No hay películas agregadas a favoritos
        </div>
      )}
    </div>
  );
};
