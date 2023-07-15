import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface NavigationBarProps {
    brandName: string
}

const NavigationBar: React.FC<NavigationBarProps> = ({ brandName }) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light" fixed="top">
            <Container>
                <Navbar.Brand href="#home">{brandName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#shoppingCart">Shopping cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar