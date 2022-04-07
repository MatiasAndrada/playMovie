import React, { useState } from "react";
import Movie from '../Movies/Movie'
//redux
import store from "../../store";



const MovieList = () => {
  const [state, setState] = useState([]);
  console.log("🦇 ~ file: MovieList.jsx ~ line 10 ~ MovieList ~ state", state)

  store.subscribe(stateChange);

  function stateChange() {
    setState(store.getState()
    .movieSlice
    .list);
  }



  return (
    <div className="row">
      {
        state.map((data) => <Movie key={data.imdbID} Title={data.Title} Poster={data.Poster} Year={data.Year} Type={data.Type}/>)
      }
    </div>
  );
};

export default MovieList;
