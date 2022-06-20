import React from "react";
import { deleteFavoriteMovie } from "../../store/actions/firestore/deleteFavoriteMovie";
import { fileDownload } from "../../firebase/fileDowload";
import xICon from "../../assets/svg/iconsdetail/x.png";
const MovieFavorite = (data) => {
  function deleteMovie(data) {
    deleteFavoriteMovie(data);
  }

  async function setImg(imgID, url) {
    await fileDownload(url)
      .then((res) => {
        const img = document.getElementById(imgID);
        img.src = res;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  setImg("x-icon", "img/icons/x.png");
  return (
    <div className="card">
      <img className="card__img" src={data.Poster} alt="imageCard" />
      <div className="card__box">
        <h3 className="box__text">{data.Title}</h3>
        <img
          onClick={deleteMovie(data.Key)}
          className="box__btn--delete"
          src={xICon}
          id="x-icon"
          alt="delete icon"
        />
      </div>
    </div>
  );
};

export default MovieFavorite;
