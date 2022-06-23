import React from 'react'
import {  Button, Container, Navbar, Nav} from 'react-bootstrap';
import Icon from '@mui/material/Icon';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';

function Menu  () {
  return (
    <div> 
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand 
            href="#"
          >
            Order Management
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link 
              href="/FormOrder" 
            >
            <ControlPointOutlinedIcon fontSize="large" color="primary">add_circle</ControlPointOutlinedIcon>
            
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu;