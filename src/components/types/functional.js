import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const pushItems = (array) =>{
    for (const p of array) {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {p.img} />
                <Card.Body>
                    <Card.Title>${p.tipo}</Card.Title>
                    <Card.Text>
                        {p.img}
                    </Card.Text>
                    <div className="d-grid gap-2">
                        <Button variant="outline-success" size="lg">
                            {p.precio}
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}
export default pushItems;