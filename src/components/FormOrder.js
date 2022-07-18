import { Container, Button, Form, Modal } from 'react-bootstrap';
import '../components/Style.css'
import React, { useState } from 'react';
import { db } from "../firebase";
import { collection, addDoc } from '@firebase/firestore';
import { Link } from 'react-router-dom';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function FormOrder() {

  const orderCollectionRef = collection(db, "order");
  const [name, setName] = useState('');
  const [preAddress, setPreAddress] = useState('');
  const [address, setAddress] = useState('');
  const [unit, setUnit] = useState(0);
  const [tel, setTel] = useState('');
  // const [status, setStatus] = useState(false);
  const [date, setDate] = useState('');
  const createOrder = async () => {
      await addDoc(orderCollectionRef, {name: name, preAddress: preAddress, address: address, unit: unit, date: date, tel: tel});
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  function handleShow(){
    setShow(true);  
  }

  return (

    <div>
     
        <Box
          component="form"
          sx={{
            m: 1
          }}
          
          style={{
            textAlign: 'center',
            paddingTop:'10px',
            border: '1px'
          }}
        >
          <TextField 
            id="outlined-basic" 
            label="ลูกค้า" 
            variant="outlined"
            onChange={(e) => {
              setName(e.target.value);
            }}
            style={{marginBottom:'10px', width:'350px'}}
          /> <br/>
          <FormControl sx={{ minWidth: 120, width: 350, marginBottom: 1 }}>
            <InputLabel id="demo-controlled-open-select-label">บริเวณ</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              value={preAddress}
              label="Age"
              onChange={(e) => {
                setPreAddress(e.target.value);
              }}
            >
              <MenuItem value="">
                <em>- เลือกบริเวณ -</em>
              </MenuItem>
              <MenuItem value="มอ.">มอ.</MenuItem>
              <MenuItem value="รพ.มอ.">รพ.มอ.</MenuItem>
              <MenuItem value="ทุ่งรี">ทุ่งรี</MenuItem>
              <MenuItem value="คอหงส์">คอหงส์</MenuItem>
              <MenuItem value="คอหงส์">คลองเรียน</MenuItem>
            </Select>
          </FormControl> <br/>
          <TextField 
            id="outlined-basic" 
            label="ที่อยู่" 
            variant="outlined" 
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            style={{marginBottom:'10px', width:'350px'}}
          />  <br/>
          <TextField 
            id="outlined-basic" 
            label="จำนวน" 
            variant="outlined"
            onChange={(e) => {
              setUnit(e.target.value);
            }}
            style={{marginBottom:'10px', width:'350px'}}
          /> <br/>
          <TextField
            id="date"
            label="รอบออเดอร์"
            type="date"
            sx={{ width: 350 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            style={{marginBottom:'10px'}}
          /> <br/>
          <TextField 
            id="outlined-basic" 
            label="เบอร์โทร" 
            variant="outlined" 
            onChange={(e) => {
              setTel(e.target.value);
            }}
            style={{marginBottom:'10px', width:'350px'}}
          />
        </Box>
        <div style={{textAlign:'center', marginTop: '10px'}}>
          <Button 
            variant="outline-primary" 
            type="submit" 
            onClick={handleShow}
            style={{marginRight:'10px'}}
          >
                <SaveOutlinedIcon/>
          </Button>
          <Link to='/'>
            <Button 
              variant="outline-primary"
            >
              <CancelPresentationOutlinedIcon/>
            </Button>
          </Link>
        </div>
 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>Create the order?</Modal.Body>
          <Modal.Footer>
            <Link to='/'>
              <Button 
                variant="secondary" 
                onClick={createOrder}
              >
            
                Submit
              </Button>
            </Link>
            <Link to='/'>
              <Button 
                variant="secondary" 
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Link>
          </Modal.Footer>
      </Modal>
       
    </div>
  );
}

export default FormOrder;
