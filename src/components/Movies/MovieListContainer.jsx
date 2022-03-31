import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import Search from "../NavBar/Search";

const MovieListContainer = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    


  }, []);
  return (
    <div>
     
        <MovieList productList={productList} />
     
    </div>
  );
};

export default MovieListContainer;
