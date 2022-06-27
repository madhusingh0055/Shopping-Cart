import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProductCard.css'

const ProductCard = (props) => {
    return (
        <div className='card-list'>
            <Card style={{ width: '16rem' }} className='card'>
                <Card.Img className='card-img'   variant="top" src={props.thumbnail} />
                <Card.Body>
                    <Card.Title className='header'>{props.title}</Card.Title>
                    <Card.Text>
                        <p style={{fontWeight: 'bold'}}>Price:   &nbsp;&nbsp;{props.price}</p>
                        <p>Rating:   &nbsp;&nbsp;{props.rating}</p>
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard;