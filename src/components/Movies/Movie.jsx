import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { fetchMovieDetail } from '../../store/actions/fetchMovieDetail';

const Movie = (data) => {
    const dispatch = useDispatch();
    const onClick = (e) =>{
        const id = e.target.value;
        dispatch(fetchMovieDetail(id))

    }
    
    return (
        <Card className='md-2' style={{ width: '18rem'}} >
            <Card.Img variant="top" src={data.Poster} />
            <Card.Body>
                <Card.Title>{data.Title}" " {data.Year}</Card.Title>
                <Card.Text>
                    {data.Type}
                </Card.Text>
                <div className="d-grid gap-2">
                    <Button variant="outline-success" size="sm" value={data.imdbID} onClick={(e) => onClick(e)}>
                        Comprar
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Movie