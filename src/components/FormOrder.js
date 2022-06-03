import { Container, Button, Form, Modal } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import { db } from "../firebase";
import { collection, addDoc } from '@firebase/firestore';
import ShowOrder from './ShowOrder';
import { Link } from 'react-router-dom';


function FormOrder() {
  const orderCollectionRef = collection(db, "order");

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [unit, setUnit] = useState(0);
  const [tel, setTel] = useState('');

  const createOrder = async () => {
      await addDoc(orderCollectionRef, {name: name, address: address, unit: unit, tel: tel})
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  function handleShow(){
    setShow(true);
   createOrder();
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
            type='number'
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
          onClick={handleShow}
         
        >

          Submit
        </Button>
      </Container>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Notification</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want save order?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
      </Modal>
       
    </div>
  );
}

export default FormOrder;
