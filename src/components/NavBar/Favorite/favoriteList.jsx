import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFavoriteMovies, getFavoriteMovies } from "../../../store/actions/movies/favoritesMovies";
import MovieFavorite from "./MovieFavorite";
import { FaTrash } from 'react-icons/fa';
export const FavoriteList = ({ idUser }) => {
  const dispatch = useDispatch();
  const { listMoviesFav, error, loading } = useSelector((state) => state.favoriteMovies);
  console.log(listMoviesFav)

  useEffect(() => {
    dispatch(getFavoriteMovies(idUser));
  }, [dispatch, idUser]);

  function deleteMovie() {
    dispatch(deleteFavoriteMovies(idUser));
  }
  /*
    if (error) {
      return (
        <div className="alert alert-danger text-center mt-4" role="alert">
          {error}
        </div>
      );
    }*/

  return (
    <div className="moviesFavList">
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <>
          {listMoviesFav.length > 0 ? (
            <>

              {listMoviesFav.map((movie) => (
                <MovieFavorite
                  key={movie.key}
                  id={movie.key}
                  title={movie.title}
                  poster={movie.poster}
                />
              ))}
              <button
                className="bg-red-500 hover:bg-red-600 text-white mt-4 py-2 px-4 rounded"
                onClick={() => deleteMovie()}
              >
                <FaTrash className="inline-block mr-2" /> Delete all
              </button>

            </>

          ) : (
            <div className="bg-red-200 text-red-800 text-center mt-4 py-2 rounded">
              No movies in favorites
            </div>
          )}
        </>
      )}
    </div>
  );

};

