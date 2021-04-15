import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import Logo from '../../Assets/images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar className="main_menu" expand="lg">
                    <div className="container px-lg-0">
                        <Navbar.Brand href="#home"><img src={Logo} alt=""/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Link to="/">Home</Link>
                                <Link to="/story">Our Story</Link>
                                <Link to="/Products">Our Products</Link>
                                <Link to="/News">Latest News</Link>
                                <Link to="/Contact">Contact</Link>
                                <Link to="/error">404 Page</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
        </div>
    );
}

export default Header;

