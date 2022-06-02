import { Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { db } from "../firebase";
import { collection, getDocs, order } from '@firebase/firestore';



function FormOrder() {

  // const [name, setName] = useState([])
  // const nameCollectionRef = collection(db, "name");
  // useEffect(() => {
  //   const getName = async () => {
  //        const data = await getDocs(nameCollectionRef);
  //        setName(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  //   };
  //   getName();
  // }, [])
  return (
    <div>
      <Navbar />
      <Container style= {{ padding: '3rem' }}>
        <h1 style={{textAlign: 'center', paddingBottom: '1rem'}}>Order List</h1>
        {/* {order.map((order) => {
          return (
            <div>
              {" "}
              name: {order.name}
            </div>
          )
        })} */}
      </Container>
       
    </div>
  );
}

export default FormOrder;
