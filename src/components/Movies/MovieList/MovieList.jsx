import React, { useState } from "react";
import Movie from "../Movie/Movie";
//import Loading from "../Loading/Loading";
//redux
import store from "../../../store";

const MovieList = () => {
  //const [loading, setLoading] = useState()
  const [state, setState] = useState([]);
  store.subscribe(stateChange);

  function stateChange() {
    setState(store.getState().movieSlice.listMovies);
  }

  return (

    <div className="movieList">
      {state.map((data) => (
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

export default MovieList;
