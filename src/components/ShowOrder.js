import { Container } from 'react-bootstrap';
import React from 'react';
import Navbar from '../components/Navbar';
function FormOrder() {


  return (
    <div>
      <Navbar />
      <Container style= {{ padding: '3rem' }}>
        <h1 style={{textAlign: 'center', paddingBottom: '1rem'}}>Order List</h1>
        
      </Container>
       
    </div>
  );
}

export default FormOrder;
