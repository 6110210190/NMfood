import React from 'react'
import {  Container, Navbar, Nav} from 'react-bootstrap';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';

function Menu  () {
  return (
    <div> 
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand 
            href="/"
          >
            <h1>Order Management</h1>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link 
              href="/FormOrder" 
            >
              <ControlPointOutlinedIcon fontSize="large" color="primary"/>
            </Nav.Link>
            <Nav.Link href='/SuccessOrder'>
              <SummarizeOutlinedIcon fontSize="large" color="primary"/>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu;