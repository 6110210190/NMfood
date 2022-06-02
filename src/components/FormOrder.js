import { Container, Button, Form } from 'react-bootstrap';
import React from 'react';
import Navbar from '../components/Navbar';
function FormOrder() {


  return (
    <div>
      <Navbar />
      <Container style= {{ padding: '3rem' }}>
        <h1 style={{textAlign: 'center', paddingBottom: '1rem'}}>สร้างออเดอร์</h1>
        <Form.Group className='mb-3'>
          <Form.Control placeholder="ชื่อลูกค้า"/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control placeholder="ที่อยู่ลูกค้า"/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control placeholder="จำนวนชุด"/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control placeholder="เบอร์โทรลูกค้า"/>
        </Form.Group>
        <Button variant="primary" type="submit" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
          บันทึก
        </Button>
      </Container>
       
    </div>
  );
}

export default FormOrder;
