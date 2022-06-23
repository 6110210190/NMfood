
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
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

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
      <div style={{margin: '50px'}}>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell style={{width: '.5cm'}} align='center' ><b>No.</b></TableCell>
                  <TableCell style={{width: '200px'}} align='center'><b>Name</b></TableCell>
                  <TableCell style={{width: '500px'}} align='center'><b>Address</b></TableCell>
                  <TableCell align='center'>
                    <b>
                      Action
                    </b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.map((order) => (
                  <TableRow
                    key={order.no}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align='center' component="th" scope="row">
                      {order.no}
                    </TableCell>
                    <TableCell align='left'>{order.name}</TableCell>
                    <TableCell align='left'>{order.address}</TableCell>
                    <TableCell align='center'>
                      <Button>
                        <VisibilityOutlinedIcon color="primary">
                          {/* see more code */}
                        </VisibilityOutlinedIcon>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </div>  
    </div>  
  );

} export default ShowOrder;
