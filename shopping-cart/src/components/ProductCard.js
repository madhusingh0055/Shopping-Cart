import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import './ProductCard.css';

const ProductCard = (props) => {
    const[value,setValue] = useState(3);

    return (
        <div className='card-list'>
            <Card style={{ width: '16rem' }} className='card'>
                <Card.Img className='card-img' variant="top" src={props.thumbnail} />
                <Card.Body>
                    <Card.Title className='header'>{props.title}</Card.Title>
                    <Card.Text>
                        <p style={{ fontWeight: 'bold' }}>Price:   &nbsp;&nbsp;{props.price}</p>
                        <p>Rating:   &nbsp;&nbsp;{props.rating} <br /><Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }} />

                        </p>
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard;