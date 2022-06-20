import React, { useState } from "react";
import store from "../../store";
import MovieFavorite from "./MovieFavorite";

const FavoriteList = () => {
  /*   const [loading, setLoading] = useState() */
  const [state, setState] = useState([]);
  function stateChange() {
    setState(store.getState().movieSlice.lisvtMoviesFav);
  }
  store.subscribe(stateChange);
  return (
    <div className="moviesFavList">
      {state.map((data) => (
        <MovieFavorite Title={data.Title} Poster={data.Poster} key={data.key} />
      ))}
    </div>
  );
};
export default FavoriteList;
