
import React, { useState, useEffect } from 'react';
import { db } from "../firebase";
import { collection, getDoc, deleteDoc, doc, onSnapshot} from '@firebase/firestore';
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
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ButtonGroup from '@mui/material/ButtonGroup';
import Backdrop from '@mui/material/Backdrop';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


function OrderManagement() {

  //state
  const [order , setOrder] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [unit, setUnit] = useState();
  const [date, setDate] = useState('');
  const [tel, setTel] = useState('');
  const [id, setId] = useState('');
  
  //fatch data on firestore
  useEffect (
    () => 
       onSnapshot(collection(db, "order"), (snapshot) => 
        setOrder(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
      ),
    []
  );

  //function
  const handleDelete = async (id) => {
    const orderDoc = doc(db, "order", id);
    await deleteDoc(orderDoc);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };
  


  const handleToggle = async (id) => {
    setOpen(!open);
    const dbRef = doc(db, "order", id);
    const data = await getDoc(dbRef);
    setName((prevname) => {
      return data.data().name;
    })

    setAddress((prevaddress) => {
      return data.data().address;
    })
    setUnit((prevunit) => {
      return data.data().unit;
    })

    setDate((prevdate) => {
      return data.data().date;
    })

    setTel((prevtel) => {
      return data.data().tel;
    })

    setId((previd) => {
      return id;
    })

    
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
                  <TableCell align='center'><h5><b>พื้นที่</b></h5></TableCell>
                  <TableCell align='center'><h5><b>จำนวน</b></h5></TableCell>
                  <TableCell align='center'>
                    <h5><b>
                      จัดการ
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
                    <TableCell align='center'><h5>{order.preAddress}</h5></TableCell>
                    <TableCell align='center'><h5>{order.unit}</h5></TableCell>
                    <TableCell align='center'>
                    <ButtonGroup size="small" aria-label="small button group">
                      <Button>
                        <MoreHorizIcon color="primary" onClick={() =>  handleToggle(order.id)}/>
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
          >  
            <Card 
              style={{
                width: '300px',
              }}
            >
              <div align='right'> 
                <Button 
                  style={{
                    marginRight:'5px',
                    marginTop:'-5px',
                    marginBottom:'-20px'
                  }}  
                  size='small'  
                  variant='outlined' 
                  onClick={handleClose}
                >
                  <CloseOutlinedIcon/>
                </Button>
              </div>
              <h5 
                style={{
                  marginTop:'-5px',
                  marginBottom:'-5px'
                }} 
                align='center'
              >
                <b>ข้อมูลเพิ่มเติม</b>
              </h5>
              <CardContent 
                style={{
                  marginBottom:'-5px'
                }}
              >
                <h5><b>ลูกค้า:</b> {name}</h5>
                <h5><b>ส่งที่:</b> {address}</h5>
                <h5><b>จำนวน:</b> {unit} ชุด</h5> 
                <h5><b>รอบส่ง:</b> วันที่ {date} </h5> 
                <h5><b>เบอร์โทร:</b> {tel}</h5> 
                <div 
                  align='center'
                >
                  <ButtonGroup 
                    size="small" 
                    aria-label="small button group"
                  >
                    <Button>
                      <CheckOutlinedIcon/>
                    </Button>
                    <Button>
                      <EditOutlinedIcon/>
                    </Button>
                    <Button>
                      <DeleteOutlineOutlinedIcon onClick={() => handleDelete(id)}/>
                    </Button>
                  </ButtonGroup>
                </div>           
              </CardContent>
            </Card>
          </Backdrop>

          
      </div>  
    </div>  
  );

} export default OrderManagement;
