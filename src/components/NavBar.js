import React from 'react';
import { Button, Container, FormControl, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="https://cdn.shopify.com/s/files/1/0301/7274/1770/files/Logo_07018bb2-eaf1-4479-a80d-98c3a1c9187b_large.png?v=1610088701" alt="" />
                </Navbar.Brand>
                <InputGroup className="m-3 w-40px">
                    <FormControl
                        placeholder="Product Name"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="dark" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Products</Nav.Link>
                        <Nav.Link href="#link">Cart</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Register</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">About us</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;