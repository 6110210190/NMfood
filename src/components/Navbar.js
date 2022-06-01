import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';


function App() {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#home">ระบบจัดการออเดอร์</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">ออเดอร์ทั้งหมด</Nav.Link>
            <Nav.Link href="<FromOrder/>">เพิ่มออเดอร์</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    </div>
  );
}

export default App;
