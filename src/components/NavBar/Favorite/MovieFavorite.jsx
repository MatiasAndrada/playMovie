import React from "react";
/* import { deleteFavoriteMovie } from "../../store/actions/firestore/deleteFavoriteMovie";
import xICon from "../../assets/svg/iconsdetail/x.png"; */
const MovieFavorite = (data) => {
 /*  function deleteMovie(movieID) {
    deleteFavoriteMovie(movieID);
  } */
  return (
    <div className="card">
      <img className="card__img" src={`https://image.tmdb.org/t/p/w500/${data.Poster}`} alt="imageCard" />
      <div className="card__box">
        <h3 className="box__text">{data.Title}</h3>
        {/* <img
          onClick={() => deleteMovie(data.movieID)}
          className="box__btn--delete"
          src={xICon}
          id="x-icon"
          alt="delete icon"
        /> */}
      </div>
    </div>
  );
};

export default MovieFavorite;
