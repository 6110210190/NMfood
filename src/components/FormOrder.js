import { Container, Button, Form } from 'react-bootstrap';
import React from 'react';
import Navbar from '../components/Navbar';
function FormOrder() {


  return (
    <div>
      <Navbar />
      <Container style= {{ padding: '3rem' }}>
        <h1 style={{textAlign: 'center', paddingBottom: '1rem'}}>Create Order</h1>
        <Form.Group className='mb-3'>
          <Form.Control placeholder="Name"/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control placeholder="Address"/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control placeholder="Unit"/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control placeholder="Telephone Number"/>
        </Form.Group>
        <Button variant="primary" type="submit" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
          Submit
        </Button>
      </Container>
       
    </div>
  );
}

export default FormOrder;
