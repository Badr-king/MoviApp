import React from 'react'
import {Card,Button} from 'react-bootstrap'
 import './MoviCard.css'
import { Link } from 'react-router-dom'
export default function Movicard(props) {
    const {movi}=props
    return (
<Link to={`/movies/${movi.id}`}>
        <Card style={{ width: '18rem',height:"35rem" }} >
            <Card.Img variant="top" src={movi.posterurl} className="movieimg" />
            <Card.Body  className="body">
                 <Card.Title>{movi.title}</Card.Title>
                 <Card.Text>
                  {movi.description}
                </Card.Text>
                <p className="result">{("⭐").repeat(movi.rate)}</p> 
                 
            </Card.Body>
            <Card.Footer>
            
            <Button variant="primary">Trail</Button> 
            </Card.Footer>
           
        </Card>
</Link>
    
    )
}
