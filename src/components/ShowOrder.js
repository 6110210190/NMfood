
import React from "react";
import { Container } from "react-bootstrap";
import Navbar from '../components/Navbar';

function ShowOrder() {


  return (
    <div className="App">
      <Navbar/>
       <Container>
         Order List
       </Container>
    </div>
  );
}

export default ShowOrder;
