import React from 'react'
import {  Button, Container, Navbar, Nav} from 'react-bootstrap';


function Menu  () {
  return (
    <div> 
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link href="/FormOrder" ><Button variant="outline-primary" size="lg">เพิ่มออเดอร์</Button></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Menu;