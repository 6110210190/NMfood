
import React, { useState, useEffect } from 'react';
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc, where, query, onSnapshot} from '@firebase/firestore';
import Menu from './Menu';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

function ShowOrder() {

  const [order , setOrder] = useState ([]);
  const [show, setShow] = useState(false);
  
  useEffect (
    () => 
      onSnapshot(collection(db, "order"), (snapshot) => 
        setOrder(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
      ),
    []
  );
  
  
  // const handleDelete = async (id) => {
  //   const orderDoc = doc(db, "order", id);
  //   await deleteDoc(orderDoc);
  // };

  return (
    <div>
      <Menu/>
        <TableContainer component={Card}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell align='center'>Name</TableCell>
                <TableCell align='center'>Address</TableCell>
                <TableCell align='center'>Unit</TableCell>
                <TableCell align='center'>Tel.</TableCell>
                <TableCell align='center'>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.map((order) => (
                <TableRow
                  key={order.no}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {order.no}
                  </TableCell>
                  <TableCell align='center'>{order.name}</TableCell>
                  <TableCell align='left'>{order.address}</TableCell>
                  <TableCell align='center'>{order.unit}</TableCell>
                  <TableCell align='center'>{order.tel}</TableCell>
                  <TableCell align='center'>
                    <Button variant='outlined'>Submit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
    
    
  );

} export default ShowOrder;
