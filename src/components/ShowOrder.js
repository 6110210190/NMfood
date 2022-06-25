
import React, { useState, useEffect } from 'react';
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc, where, query, onSnapshot} from '@firebase/firestore';
import Menu from './Menu';
import '../components/Style.css'


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
      <div style={{margin: '10px'}}>
        <TableContainer component={Paper} sx={{ minWidth: 350}}>
            <Table sx={{ minWidth: 350}} size="medium" aria-label="a dense table">
              <TableHead>
                <TableRow className='font'>
                  <TableCell style={{backgroundColor:'red'}} align='center'><h5><b>ชื่อ</b></h5></TableCell>
                  <TableCell style={{backgroundColor:'green'}} align='center'><h5><b>ที่อยู่</b></h5></TableCell>
                  <TableCell style={{backgroundColor:'orange', width:'3px'}} align='center'><h5><b>จำนวน</b></h5></TableCell>
                  <TableCell style={{backgroundColor:'blue'}} align='center'>
                    <h5><b>
                      เพิ่มเติม
                    </b></h5>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.map((order) => (
                  <TableRow
                    key={order.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align='left'><h5>{order.name}</h5></TableCell>
                    <TableCell align='left'><h5>{order.address}</h5></TableCell>
                    <TableCell align='center'><h5>{order.unit}</h5></TableCell>
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
