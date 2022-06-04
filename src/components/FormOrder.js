import { Container, Button, Form, Modal } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import { db } from "../firebase";
import { collection, addDoc } from '@firebase/firestore';
import { Link } from 'react-router-dom';


function FormOrder() {
  const orderCollectionRef = collection(db, "order");

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [unit, setUnit] = useState(0);
  const [tel, setTel] = useState('');
  const d = new Date();
  const date = d.toLocaleString("th-TH", { 
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
 

  const createOrder = async () => {
      await addDoc(orderCollectionRef, {name: name, address: address, unit: unit, tel: tel, date: date})
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  function handleShow(){
    setShow(true);
    createOrder();
    
  }


  return (
    <div>
      <Navbar  />
      <Container style= {{ padding: '3rem' }}>
        <Form.Group className='mb-3'>
          <Form.Control 
            placeholder="ลูกค้า" 
            onChange={(e) => {
            setName(e.target.value);
          }}/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control 
            placeholder="ที่อยู่"
            onChange={(e) => {
              setAddress(e.target.value);
            }}/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control 
            placeholder="จำนวนชุด"
            type='number'
            onChange={(e) => {
            setUnit(e.target.value);
          }}/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control 
            placeholder="เบอร์โทรติดต่อ"
            onChange={(e) => {
            setTel(e.target.value);
          }}/>
        </Form.Group>
        <Button variant="outline-primary" type="submit" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          onClick={handleShow}
         
        >

          สร้างออเดอร์
        </Button>
      </Container>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Notification</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want save order?</Modal.Body>
          <Modal.Footer>
            <Link to='/ShowOrder'>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Link>
          </Modal.Footer>
      </Modal>
       
    </div>
  );
}

export default FormOrder;
