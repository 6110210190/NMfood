import { Container, Button, Form } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import React, { useState, useEffect } from 'react';
import { db } from "../firebase";
import { collection, addDoc } from '@firebase/firestore';

function FormOrder() {
  const orderCollectionRef = collection(db, "order");

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [unit, setUnit] = useState(0);
  const [tel, setTel] = useState('');

  const createOrder = async () => {
      await addDoc(orderCollectionRef, {name: name, address: address, unit: unit, tel: tel})
  }

  return (
    <div>
      <Navbar />
      <Container style= {{ padding: '3rem' }}>
        <h1 style={{textAlign: 'center', paddingBottom: '1rem'}}>Create Order</h1>
        <Form.Group className='mb-3'>
          <Form.Control 
            placeholder="Name" 
            onChange={(e) => {
            setName(e.target.value);
          }}/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control 
            placeholder="Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control 
            placeholder="Unit"
            onChange={(e) => {
            setUnit(e.target.value);
          }}/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control 
            placeholder="Telephone Number"
            onChange={(e) => {
            setTel(e.target.value);
          }}/>
        </Form.Group>
        <Button variant="primary" type="submit" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          onClick={createOrder} Link href="/ShowOrder"
        >
          Submit
        </Button>
      </Container>
       
    </div>
  );
}

export default FormOrder;
