import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = (data) => {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.img} />
                <Card.Body>
                    <Card.Title>{data.tipo}</Card.Title>
                    <Card.Text>
                        {data.precio}
                    </Card.Text>
                    <div className="d-grid gap-2">
                        <Button variant="outline-success" size="sm">
                            Comprar
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        )
    }


export default Item;