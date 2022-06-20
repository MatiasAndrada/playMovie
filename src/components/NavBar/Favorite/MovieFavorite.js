import React from "react";

const MovieFavorite = (data) => {

  return (
    <div className="card">
      <img className="card__img" src={data.Poster} alt="imageCard" />
      <h3 className="card__title">{data.Title}</h3>
    </div>
  );
};

export default MovieFavorite;
