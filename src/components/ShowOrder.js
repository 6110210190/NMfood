
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { db } from "../firebase";
import { collection, getDocs, orderBy } from '@firebase/firestore';
import { Card, Button, Modal, Container} from 'react-bootstrap';


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

        {order.map((order) => {
          return (
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
              <br/>
              <Card style={{ width: '18rem'}}>
                <Card.Body>
                  <Card.Title>{order.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{order.address}</Card.Subtitle>
                  <Card.Text>
                    <b>จำนวน:</b> {order.unit} ชุด <br/>
                    <b>โทร:</b> {order.tel} <br/>
                    <b>เวลา:</b> {order.date}
                  </Card.Text>
                </Card.Body>
                  <Card.Footer>
                     
                    <Button variant="outline-primary" type="submit"onClick={handleShow} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                      ดำเนินการ
                    </Button>
                  </Card.Footer>
              </Card>
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
              <Button variant="outline-success" onClick={handleClose}>
                ปิดออเดอร์
              </Button>
          </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ShowOrder;
