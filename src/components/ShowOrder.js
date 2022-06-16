
import React, { useState, useEffect } from 'react';
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc, where, query} from '@firebase/firestore';
import { Card, Button, Modal, Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menu from './Menu.js';

function ShowOrder() {

  const [order , setOrder] = useState ([]);
  const orderRef = collection(db, "order");
  const q = query(orderRef, where("status", "==", false));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleDelete = async (id) => {
    const orderDoc = doc(db, "order", id);
    await deleteDoc(orderDoc);
  };

  function handleShow(){
    setShow(true);
  }

  useEffect (() => {
    const getOrder = async() => {
      const data = await getDocs(q);
      setOrder(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getOrder();
  }, []);

  return (
    <div>
      <Menu/>

      <Container style= {{ padding: '3rem' , width:"100%"}}>

        {order.map((order) => {
          const s = order.status;
        let st = '';
         if (s == false){
          st = "not active";
         } else {
          st = "active";
         }
          return (

            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
              <Card style={{ width: '18rem'}}>
                <Card.Body>
                  <Card.Title>{order.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{order.address}</Card.Subtitle>
                  <Card.Text>
                    <b>Unit:</b> {order.unit} <br/>
                    <b>Tel:</b> {order.tel} <br/>
                    <b>Status:</b> {st}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-primary" onClick={handleShow} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                    Order action
                  </Button>
                    {/* onClick={() => {handleDelete(order.id)}} */}
                </Card.Footer>
              </Card>
              <br/>
            </div>

          );

        })}
      </Container>
      
      <Modal show={show} onHide={handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>Notification</Modal.Title>
          </Modal.Header>
          <Modal.Body>What action do you want?</Modal.Body>
          <Modal.Footer>
            <Button variant="outline-primary" onClick={handleClose} disabled>
              Edit order
            </Button> 
            <Button variant="outline-primary" onClick={() => {handleDelete(order.id)}} disabled>
              Delete order
            </Button>
            <Button variant="outline-success" onClick={handleClose} disabled>
              Complete order
            </Button>
          </Modal.Footer>

      </Modal>
    
    </div>

  );

} export default ShowOrder;
