import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';



function App() {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#"></Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/ShowOrder"><h3>ออเดอร์ทั้งหมด</h3></Nav.Link>
                <Nav.Link href="/FormOrder"><h3>เพิ่มออเดอร์</h3></Nav.Link>
              </Nav>
            </Container>
        </Navbar>
    </div>
  );
}

export default App;
