
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { db } from "../firebase";
import { collection, getDocs, orderBy } from '@firebase/firestore';
import { Card, Button, Modal, Container } from 'react-bootstrap';


function ShowOrder() {
  const [order , setOrder] = useState ([]);
  const orderCollectionRef = collection(db, "order");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  function handleShow(){
    setShow(true);
  }

  useEffect (() => {
    const getOrder = async() => {
      const data = await getDocs(orderCollectionRef, orderBy("date", "desc"));
      setOrder(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getOrder();
  }, []);
  return (
    <div>
      <Navbar />
      <Container style= {{ padding: '3rem' }}>
        <h1 style={{textAlign: 'center', paddingBottom: '1rem'}}>Order List</h1>
        {order.map((order) => {
          return (
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
              <br/>
              <Card style={{ width: '18rem'}}>
                <Card.Body>
                  <Card.Title>Customer: {order.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{order.address}</Card.Subtitle>
                  <Card.Text>
                    Unit: {order.unit} <br/>
                    tel: {order.tel} 
                  </Card.Text>
                </Card.Body>
                  <Card.Footer>
                    <Button variant="primary" type="submit"onClick={handleShow} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                      complete
                    </Button>
                  </Card.Footer>
              </Card>
            </div>
          );
        })}
      </Container>
      
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Notification</Modal.Title>
          </Modal.Header>
          <Modal.Body><h1></h1>Delete Order Now?</Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
          </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ShowOrder;
