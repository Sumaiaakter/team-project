import React from 'react';
import { Button, Container, FormControl, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="#home/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                        <Nav.Link as={Link} to="cart">Cart</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="register">Register</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="login">Login</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="logout">Logout</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;