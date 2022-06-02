import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';



function App() {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#">Order Management</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/ShowOrder">Order List</Nav.Link>
                <Nav.Link href="/FormOrder">Add Order</Nav.Link>
              </Nav>
            </Container>
        </Navbar>
    </div>
  );
}

export default App;
