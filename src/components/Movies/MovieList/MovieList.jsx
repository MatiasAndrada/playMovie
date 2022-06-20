import React, { useState /* , useEffect */ } from "react";
import Movie from "./Movie/Movie";
//import Loading from "../Loading/Loading";
import MovieDetail from "../MovieDetail/MovieDetail";
//redux
import store from "../../../store";

const MovieList = () => {
  //const [loading, setLoading] = useState()
  const [state, setState] = useState([]);

  function stateChange() {
    setState(store.getState().movieSlice.listMovies);
  }
  store.subscribe(stateChange);
  /* useEffect(() => {
    
  }, [state]) */

  return (
    <div className="movieList">
      <MovieDetail />
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
