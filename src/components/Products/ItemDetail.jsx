import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from 'react-bootstrap/Image';
import { Button } from "react-bootstrap";

const ItemDetail = ({ prdt }) => {
  const { tipo, img, precio } = prdt;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <h1 style={{textAlign: "center", width: "auto'"}}>Detalle del producto:</h1>
          <Offcanvas.Title className="top">{tipo}</Offcanvas.Title>
          <Image src={img} alt={tipo} roundedCircle style={{width: "45%"}}/>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {precio}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default ItemDetail;
