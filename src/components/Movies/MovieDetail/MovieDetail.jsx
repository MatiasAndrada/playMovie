import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
/* import { favoriteRegularSVG } from "../../../assets/svg/iconsdetail/favoriteRegular";
import { favoriteSolidSVG } from "../../../assets/svg/iconsdetail/favoriteSolid"; */
//react-redux
import { useDispatch } from "react-redux" 
import store from "../../../store";
import { addFavoriteMovie }  from "../../../store/actions/firestore/addFavoriteMovie";

import DetailIcon from "./Icons/DetailIcon";




const MovieDetail = () => {
  const dispatch = useDispatch()
  const [detail, setDetail] = useState([]);
  const [show, setShow] = useState(false);

  function addFavorite() {
    console.log("btn")
    const Title = detail.Title;
    const Poster = detail.Poster;
    dispatch(addFavoriteMovie(Title, Poster));
  }


    
    function stateChange() {
      const statelistMovie = store.getState().movieSlice.listMovieDetail;
      setDetail(statelistMovie)
      setShow(true)
    }
    store.subscribe(stateChange);


  return (
    <>
      <Modal
        className="modal__container"
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body className="modal__body">
          <img className="body__poster" alt="poster" src={detail.Poster}></img>
          <div className="body__text">
            <h2 className="text__title">{detail.Title}</h2>
            <button className="body__button--favorite" onClick={addFavorite}>
            Anadir a favoritos
            </button>
            <div className="box__description">
              <p className="text__description">{detail.Plot}</p>
            </div>
            <DetailIcon
              Genre={detail.Genre}
              Lenguage={detail.Language}
              Runtime={detail.Runtime}
              Actors={detail.Actors}
              Director={detail.Director}
            />
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
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <h2>Footer</h2>
          <ItemCount />
        </Modal.Footer> */}
      </Modal>
    </>
  );
};
export default MovieDetail;
