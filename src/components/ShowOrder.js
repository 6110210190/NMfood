
import React, { useState, useEffect } from 'react';
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from '@firebase/firestore';
import { Card, Button, Modal, Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menu from './Menu.js';

function ShowOrder() {
  const [order , setOrder] = useState ([]);
  const orderCollectionRef = collection(db, "order"); 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  function handleShow(){
    setShow(true);
  }

  const handleDelete = async (id) => {
    const orderDoc = doc(db, "order", id);
    await deleteDoc(orderDoc);
  };

  useEffect (() => {
    const getOrder = async() => {
      const data = await getDocs(orderCollectionRef);
      setOrder(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getOrder();
  }, []);
  return (
    <div>
      <Menu/>
      <Container style= {{ padding: '3rem' , width:"100%"}}>

        {order.map((order) => {
          return (
            
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
             
              <Card style={{ width: '18rem'}}>
                <Card.Body>
                  <Card.Title>{order.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{order.address}</Card.Subtitle>
                  <Card.Text>
                    <b>จำนวน:</b> {order.unit} ชุด <br/>
                    <b>โทร:</b> {order.tel} <br/>
                  </Card.Text>
                </Card.Body>
                  <Card.Footer>
                
                    <Button variant="outline-primary" onClick={() => {handleDelete(order.id)}} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                      ดำเนินการ
                    </Button>
                
                  </Card.Footer>
              </Card>
              <br/>
            </div>
          );
        })}
      </Container>
      
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>แจ้งเตือน</Modal.Title>
          </Modal.Header>
          <Modal.Body><h1></h1>ปิดออเดอร์ หรือ แก้ไขออเดอร์</Modal.Body>
          <Modal.Footer>
              <Button variant="outline-primary" onClick={handleClose}>
                แก้ไขออเดอร์
              </Button>
              <Button variant="outline-success" onClick={() => {handleDelete(order.id)}}>
                ปิดออเดอร์
              </Button>
          </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ShowOrder;
