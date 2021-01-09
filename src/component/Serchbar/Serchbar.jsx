import React from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import './Serchbar.css'
import ReactStars from "react-rating-stars-component";
 
export default function Serchbar(props) {
  
 const handlchange =(e)=>{
  props.setSerchinput(e.target.value)

   };
   const ratingChanged = (newRating) => {
    props.setRating(newRating)
  };

    return (
        <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">MicroStory</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline  className="formofserch">
      <FormControl type="text" placeholder="Search" className="mr-sm-2 sercharea"  onChange={handlchange}/>
      <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"/>
    </Form>
  </Navbar>
    );

    
}
