import { Container, Button, Form, Modal } from 'react-bootstrap';

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
  const datestamp = d.toLocaleString( { 
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    });


  const createOrder = async () => {
      await addDoc(orderCollectionRef, {name: name, address: address, unit: unit, tel: tel, datestamp: datestamp});
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
        <div style={{ textAlign: 'center'}}>
        <br/>
          <Button 
          variant="outline-primary" 
          type="submit" 
          style={{display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          onClick={handleShow}
        >
          สร้างออเดอร์
        </Button>
          <br/>
        <Link to='/'>
          <Button 
            style={{textAlign:'centers'}}
            variant="outline-success">
            กลับหน้าหลัก
          </Button>
        </Link>

        </div>
        
      
      </Container>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>แจ้งเตือน</Modal.Title>
          </Modal.Header>
          <Modal.Body>บันทึกออเดอร์หรือไม่?</Modal.Body>
          <Modal.Footer>
            
            <Link to='/'>
              <Button variant="secondary" onClick={createOrder}>
                บันทึก
              </Button>
            </Link>
            <Link to='/'>
              <Button variant="secondary" onClick={handleClose}>
                ยกเลิก
              </Button>
            </Link>
          </Modal.Footer>
      </Modal>
       
    </div>
  );
}

export default FormOrder;
