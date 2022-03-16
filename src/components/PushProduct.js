import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const PushProduct = (array) =>{
        console.log(array)
        
    
    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= "https://labebidadetusfiestas.com.ar/38326/fernet-branca-750cc.jpg" />
                <Card.Body>
                    <Card.Title>Title card</Card.Title>
                    <Card.Text>
                        precio de card
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

export default PushProduct;