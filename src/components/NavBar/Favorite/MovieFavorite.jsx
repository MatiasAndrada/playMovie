import React from "react";
import { deleteFavoriteMovieById, } from "../../../store/actions/movies/favoritesMovies"
import { useSelector, useDispatch } from "react-redux";
//delete icon react-icon
import { FaTimes } from 'react-icons/fa';

const MovieFavorite = ({ id, title, poster }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user.uid);
  function deleteMovie(id) {
  dispatch(deleteFavoriteMovieById(user, id));
  }

  return (
    <div className="card" id={id}>
      <img className="card__img" src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="imageCard" />
      <h3 className="card__text">{title}</h3>
      <button className="card__btn" onClick={() => deleteMovie(id)} >
        <FaTimes className="btn__icon--size" />
      </button>
    </div>
  );
};

export default MovieFavorite;
