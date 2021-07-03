import React from 'react'
import { Card } from 'react-bootstrap'
import StarRating from './StarRating'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MovieCard = ({ film }) => {
    return (
        <div className='individual-card'>
            <Card style={{ width: '20rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Link to={`/description/${film.title}`} >
                        <Button style={{ margin: '5px 0px 5px 0px' }}>Trailer</Button>
                    </Link>
                    <StarRating prop={film.rating} />
                </div>
                <Card.Img variant="top" src={film.posterURL} />
                <Card.Body>
                    <Card.Title>
                        {film.title}
                    </Card.Title>
                    <Card.Text style={{ minHeight: 110, maxHeight: 110, overflowY: 'scroll', height: 150, }}>{film.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
