import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";

//component
import MovieFavorite from "./MovieFavorite";

//redux
import store from "../../store";
import { deleteFavoriteMovie } from "../../store/actions/firestore/deleteFavoriteMovie";

export const FavoriteList = () => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    setFavorites(store.getState().movieSlice.userMoviesFav);
    store.subscribe(() => {
      setFavorites(store.getState().movieSlice.userMoviesFav);
    });
  }, [favorites]);

  function deleteMovie() {
    deleteFavoriteMovie();
  }
  return (
    <div className="moviesFavList">
      
      {favorites.map((data) => (
        <MovieFavorite
          Title={data.movieData.Title}
          Poster={data.movieData.Poster}
          key={data.movieID}
          movieID={data.movieID}
        />
      ))}
      {favorites.length === 0 ? (
        <h4 className="emptyFavText">No favorites</h4>
      ) : (
        <Button onClick={() => deleteMovie()} variant="dark">
          Eliminar
        </Button>
      )}
    </div>
  );
};
