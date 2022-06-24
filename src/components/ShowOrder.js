
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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

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
  
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  
  // const handleDelete = async (id) => {
  //   const orderDoc = doc(db, "order", id);
  //   await deleteDoc(orderDoc);
  // };

  return (
    <div>
      <Menu/>
      <div style={{margin: '30px'}}>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align='center' ><b>No.</b></TableCell>
                  <TableCell align='center'><b>Customer Name</b></TableCell>
                  <TableCell align='center'><b>Customer Address</b></TableCell>
                  <TableCell align='center'>
                    <b>
                      See more
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
                    <TableCell align='center'>{order.name}</TableCell>
                    <TableCell align='center'>{order.address}</TableCell>
                    <TableCell align='center'>
                      <Button>
                        <MoreHorizIcon color="primary" onClick={handleToggle}>
                          {/* see more code */}
                        </MoreHorizIcon>
                      </Button>
                      <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}
                      >
                        {/* <CircularProgress color="inherit" /> */}
                        <Card sx={{ maxWidth: 345 }}>
                          <CardActionArea>
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              Data more
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Data more
                            </Typography>
                          </CardContent>
                          </CardActionArea>
                        </Card>
                      </Backdrop>
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
