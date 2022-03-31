import React, { useState, Fragment } from "react";
import MovieList from "../Movies/MovieList";
const Search = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    searchTerm: "",
    error: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state.searchTerm === "") {
      return setState({ ...state, error: "Please write a valid text" });
    }
    const API = "http://www.omdbapi.com/?i=tt3896198&apikey=6f329d41";
    const response = await fetch(`${API}&s=${state.searchTerm}`);
    const data = await response.json();

    if (!data.Search) {
      return setState({ ...state, error: "There are no results." });
    }

    return setState({
      data: data.Search,
      searchTerm: "",
      error: "",
    });
  };

  return (
    <Fragment>
    <div className="col-md-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Busqueda"
          onChange={(e) => setState({ ...state, searchTerm: e.target.value })}
          value={state.searchTerm}
          autoFocus
        />
      </form>
        <MovieList className="row" productList={state.data} />
      </div>
      </Fragment>
      

  );
};
export default Search;
