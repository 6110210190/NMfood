import { Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { db } from "../firebase";
import { collection, getDocs } from '@firebase/firestore';
import { Card, Button } from 'react-bootstrap';


function ShowOrder() {
  const [order , setOrder] = useState ([]);
  const orderCollectionRef = collection(db, "order");

  useEffect (() => {
    const getOrder = async() => {
      const data = await getDocs(orderCollectionRef);
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
            <div>
              {" "}
              <Card style={{ width: '18rem'}}>
                <Card.Body>
                  <Card.Title>Customer: {order.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{order.address}</Card.Subtitle>
                  <Card.Text>
                    Unit: {order.unit} <br/>
                    tel: {order.tel} 
                  </Card.Text>
                  <Button variant="primary" type="submit" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                    complete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Container>
       
    </div>
  );
}

export default ShowOrder;
