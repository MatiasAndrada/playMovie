import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { addFavouriteMovie } from "../../../store/actions/firestore/addFavouriteMovie";
/* import ItemCount from "../../ItemCount/ItemCount"; */
import store from "../../../store";
import DetailIcon from "./Icons/DetailIcon";
import favoriteIcon from "./Icons/favouriteIcon";


const MovieDetail = () => {
  const [detail, setDetail] = useState([]);
  const [show, setShow] = useState(false);

  function addFavourite(){
    const Title = detail.Title;
    const Poster = detail.Poster;
    addFavouriteMovie(Title, Poster)
  }
  useEffect(() => {
    const update = () => {
      const stateStore = store.getState().movieSlice.listMovieDetail;
      if (stateStore.length !== 0) {
        setDetail(stateStore);
        setShow(true);
      } else {
      }
    };
    store.subscribe(update);
  });

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
            <button className="body__button--favorite" onClick={addFavourite}>
              <favoriteIcon width/>
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
