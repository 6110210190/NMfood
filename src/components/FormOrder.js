import { Container, Button, Form } from 'react-bootstrap';
import React from 'react';

function FormOrder() {


  return (
    <div>
      <Container style= {{ padding: '3rem'}}>
        <h1>สร้างออเดอร์</h1>
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
        <Button variant="primary" type="submit">
          บันทึก
        </Button>
      </Container>
       
    </div>
  );
}

export default FormOrder;
