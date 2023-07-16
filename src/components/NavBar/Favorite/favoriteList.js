
import React from "react";
//redux
import { useSelector } from "react-redux";
import MovieFavorite from "./MovieFavorite";

export const FavoriteList = () => {
  const favoriteList = useSelector((state) => state.favoriteSlice.favorite);

  return (
    <div className="moviesFavList">
      {favoriteList.map((data) => (
        <MovieFavorite
          Title={data.Title}
          Poster={data.Poster} />
      ))
      }


    </div>
  )
}

