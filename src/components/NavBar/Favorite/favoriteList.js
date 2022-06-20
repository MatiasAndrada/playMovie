import React, { useState } from "react";
import store from "../../../store";
import MovieFavorite from "./MovieFavorite";

export const favoriteList = () => {
  const [state, setState] = useState([]);
  
  function stateChange(){
      setState(store.getState().movieSlice.listMoviesFav)
  }
  store.subscribe(stateChange)
  
    return (
    <div className="moviesFavList">
        {state.map((data) => (
            <MovieFavorite 
            Title={data.Title}
            Poster={data.Poster}/>
        ))
      }


    </div>
  )
}

