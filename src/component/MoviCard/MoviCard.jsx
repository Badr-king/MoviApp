import React from 'react'
import {Card,Button} from 'react-bootstrap'
import './MoviCard.css'
export default function Movicard(props) {
    const {movi}=props
    return (
    <div className="cardfooter">
        <Card style={{ width: '18rem',height:"13rem" }} >
            <Card.Img variant="top" src={movi.posterurl} className="movieimg" />
            <Card.Body  className="body">
                 <Card.Title>{movi.title}</Card.Title>
                 <Card.Text>
                  {movi.description}
                </Card.Text>
                <p className="result">{("⭐").repeat(movi.rate)}</p>
                <Button variant="primary">Trail</Button>
            </Card.Body>
           
        </Card>
    </div>
    )
}
