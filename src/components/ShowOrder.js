
import React, { useState, useEffect } from 'react';
import { db } from "../firebase";
import { collection, getDoc, deleteDoc, doc, where, query, onSnapshot} from '@firebase/firestore';
import Menu from './Menu';
import '../components/Style.css'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ButtonGroup from '@mui/material/ButtonGroup';
import Backdrop from '@mui/material/Backdrop';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';



function ShowOrder() {


  const [order , setOrder] = useState ([]);
  
  
  useEffect (
    () => 
       onSnapshot(collection(db, "order"), (snapshot) => 
        setOrder(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
      ),
    []
  );

  const handleDelete = async (id) => {
    const orderDoc = doc(db, "order", id);
    await deleteDoc(orderDoc);
  };

  const [show, setShow] = useState([]);
  const handleShow = async (id) => {
    const orderDoc = doc(db, "order", id);
    const dataShow = await getDoc(orderDoc);
      
    
  }

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleToggle = (id) => {
    setOpen(!open);
    handleShow(id);
  };

  return (
    <div>
      <Menu/>
      <div>
        <TableContainer component={Paper} sx={{ minWidth: 350, maxWidth: 1000, margin: 'auto', marginTop: 5}}>
            <Table sx={{ minWidth: 350}} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow className='font'>
                  <TableCell align='center'><h5><b>ชื่อ</b></h5></TableCell>
                  <TableCell align='center'><h5><b>จำนวน</b></h5></TableCell>
                  <TableCell align='center'>
                    <h5><b>
                      ดำเนินการ
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
                    <TableCell align='center'><h5>{order.name}</h5></TableCell>
                    <TableCell align='center'><h5>{order.unit}</h5></TableCell>
                    <TableCell align='center'>
                    <ButtonGroup size="small" aria-label="small button group">
                      <Button>
                        <MoreHorizIcon color="primary" onClick={() => handleToggle(order.id)}/>
                      </Button>
                      <Button>
                        <DeleteOutlineOutlinedIcon color="primary" onClick={() => handleDelete(order.id)}/>
                      </Button>
                    </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
         
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <Card style={{width:'300px', height:'300px'}}>
              <CardContent>
                ทดสอบ <br />
          
              </CardContent>
            </Card>
          </Backdrop>
         
      </div>  
    </div>  
  );

} export default ShowOrder;
