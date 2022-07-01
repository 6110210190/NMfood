import { Container, Button, Form, Modal } from 'react-bootstrap';

import React, { useState } from 'react';
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from '@firebase/firestore';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ButtonGroup from '@mui/material/ButtonGroup';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';

function FormOrder() {

  const orderCollectionRef = collection(db, "order");
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [unit, setUnit] = useState(0);
  const [tel, setTel] = useState('');
  // const [status, setStatus] = useState(false);
  
  const createOrder = async () => {
      await addDoc(orderCollectionRef, {name: name, address: address, unit: unit, tel: tel});
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  function handleShow(){
    setShow(true);  
  }

  return (

    <div>
      <Container style= {{ padding: '3rem' }}>
        <Form.Group className='mb-3'>
          <Form.Control 
            placeholder="Customer Name" 
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control 
            placeholder="Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control 
            placeholder="Unit"
            type='number'
            onChange={(e) => {
              setUnit(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control 
            placeholder="Telephone Number"
            onChange={(e) => {
              setTel(e.target.value);
            }}
          />
        </Form.Group>
        <div style={{float: 'right'}}>
          <Button 
            variant="outline-primary" 
            type="submit" 
            onClick={handleShow}
            style={{marginRight:'10px'}}
          >
                <SaveOutlinedIcon/>
          </Button>
          <Link to='/'>
            <Button 
              variant="outline-primary"
            >
              <CancelPresentationOutlinedIcon/>
            </Button>
          </Link>
        </div>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>Create the order?</Modal.Body>
          <Modal.Footer>
            <Link to='/'>
              <Button 
                variant="secondary" 
                onClick={createOrder}
              >
            
                Submit
              </Button>
            </Link>
            <Link to='/'>
              <Button 
                variant="secondary" 
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Link>
          </Modal.Footer>
      </Modal>
       
    </div>
  );
}

export default FormOrder;
