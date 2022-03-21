import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PushPrdt = (props) => {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.tipo}</Card.Title>
                    <Card.Text>
                        {props.precio}
                    </Card.Text>
                    <div className="d-grid gap-2">
                        <Button variant="outline-success" size="lg">
                            Comprar
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        )
    }


export default PushPrdt;