import React, { useState, useEffect } from "react";
//component
import Modal from "react-bootstrap/Modal";
import DetailIcon from "./Icons/DetailIcon";
//redux
import store from "../../../store";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../../../store/slices/movie";
import { writeFavoriteMovie } from "../../../store/actions/firestore/writeFavoriteMovie.js";
//firebase
import { fileDownload } from "../../../firebase/fileDowload";
const MovieDetail = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [userMoviesFav, setUserMoviesFav] = useState([]);
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    setDetail(store.getState().movieSlice.listMovieDetail);
    store.subscribe(() => {
      setDetail(store.getState().movieSlice.listMovieDetail);
      if (detail.length !== 0) {
        setShow(true);
      }
      const moviesFav = store.getState().movieSlice.userMoviesFav;
      const arrayMoviesID = [];
      moviesFav.forEach((data) => arrayMoviesID.push(data.movieID));
      setUserMoviesFav(arrayMoviesID);
    });
  }, [detail]);
  if (userMoviesFav.includes(detail.imdbID) === true) {
    setImg("fav-icon", "img/icons/fav-solid.png");
  } else {
    setImg("fav-icon", "img/icons/fav-regular.png");
  }

  function emptyDetailArray() {
    dispatch(setMovieDetail([]));
    setShow(false);
  }
  function addFavorite() {
    const Title = detail.Title;
    const Poster = detail.Poster;
    const key = detail.imdbID;
    writeFavoriteMovie(Title, Poster, key);
  }

  async function setImg(imgID, url) {
    await fileDownload(url)
      .then((res) => {
        const img = document.getElementById(imgID);
        img.src = res;
      })
      .catch((err) => {
        if (err.name !== "TypeError") {
          console.log(err);
        }
      });
  }

  return (
    <>
      <Modal
        className="modal__container"
        s
        size="xl"
        show={show}
        animation={true}
        onHide={() => setShow(false)}
        onExited={() => emptyDetailArray()}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body className="modal__body">
          <img className="body__poster" alt="poster" src={detail.Poster}></img>
          <img
            src=""
            className="favorite__icon"
            onClick={() => addFavorite()}
            id="fav-icon"
            alt="favorite Icon"
          />
          <div className="body__text">
            <div className="box__title">
              <h2 className="text__title">{detail.Title}</h2>
            </div>

            <div className="box__description">
              <p className="text__description">{detail.Plot}</p>
            </div>
            {/* <div className="ec-stars">
            <a data-value="1" title="Votar con 1 estrellas">
              &#9733;
            </a>
            <a data-value="2" title="Votar con 2 estrellas">
              &#9733;
            </a>
            <a data-value="3" title="Votar con 3 estrellas">
              &#9733;
            </a>
            <a data-value="4" title="Votar con 4 estrellas">
              &#9733;
            </a>
            <a data-value="5" title="Votar con 5 estrellas">
              &#9733;
            </a>
          </div> */}
            <DetailIcon
              Genre={detail.Genre}
              Lenguage={detail.Language}
              Runtime={detail.Runtime}
              Actors={detail.Actors}
              Director={detail.Director}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default MovieDetail;
