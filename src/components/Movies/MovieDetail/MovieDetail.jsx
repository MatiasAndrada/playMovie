import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ItemCount from "../../ItemCount/ItemCount";
import store from "../../../store";
import DetailIcon from "./DetailIcon";

const MovieDetail = () => {
  const [detail, setDetail] = useState([]);
  const [show, setShow] = useState(false);
  store.subscribe(stateChange);

  function stateChange() {
    setDetail(store.getState().movieSlice.listMovieDetail);
    setShow(true);
  }

  return (
    <>
      <Modal
        className="modal__container"
        size="xl"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body className="modal__body">
          <img className="body__poster" alt="poster" src={detail.Poster}></img>
          <div className="body__text">
            <h2 className="text__tittle">{detail.Title}</h2>
            <div className="box__description">
              <p className="text__description">{detail.Plot}</p>
            </div>
            <DetailIcon Genre={detail.Genre} Lenguage={detail.Lenguage} Runtime={detail.Runtime} Actors={detail.Actors} Director={detail.Director}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <h2>Footer</h2>
          <ItemCount />
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default MovieDetail;

/*TIEMPO 
  GENERO 
  DIRECTOR 
  ACTORES
  DESCRIPCION - plot
  LENGUAJE
  PAIS 
  PREMIOS*/
