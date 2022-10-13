import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img src={logo} width={150} height={50} alt="Volunteer Network Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto gap-2 fw-semibold'>
                            <Nav.Link className='mx-2' as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className='mx-2' as={Link} to="/donation">Donation</Nav.Link>
                            <Nav.Link className='mx-2' as={Link} to="/events">Events</Nav.Link>
                            <Nav.Link className='mx-2' as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link className='mx-2 px-4 btn btn-primary text-light' as={Link} to="/register">Register</Nav.Link>
                            <Nav.Link className='mx-2 px-4 btn btn-dark text-light' as={Link} to="/admin">Admin</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;