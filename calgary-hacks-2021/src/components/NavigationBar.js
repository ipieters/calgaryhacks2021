import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import "./NavigationBar.css";

function NavigationBar() {

    return(
        <div>
            <Navbar bg="light" expand="lg" className="justify-content-center">
                <Link to="/">
                    <Navbar.Brand >NewMates</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="justify-content-center"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Navbar className="justify-content-center">
                        <Nav.Link  ><Button variant="flat" size="xxl"><Link className="link-style" to="/dashboard">Dashboard</Link></Button></Nav.Link>
                        <Nav.Link  ><Button variant="flat" size="xxl"><Link className="link-style" to="/profile">Profile</Link></Button></Nav.Link>
                        <Nav.Link  ><Button variant="flat" size="xxl"><Link className="link-style" to="/chat">Chat</Link></Button></Nav.Link>
                    </Navbar>
                </Navbar.Collapse>
            </Navbar>
        </div>
        /*<nav>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <h3>Logo</h3>
                </Link>
                <Link to="/dashboard">
                    Dashboard
                </Link>
                <Link style={navStyle} to="/profile">
                    <li>Profile</li>
                </Link>
                <Link style={navStyle} to="/chat">    
                   <li>Chat</li>
                </Link>
            </ul>
        </nav>*/

    )
}

export default NavigationBar;