import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import "./NavigationBar.css";
import {useAuth} from "../contexts/AuthContext";
import logo from "./imgs/logo.png";



function NavigationBar() {
    const [error, setError] = useState("")
	const {currentUser, logout}=useAuth()
	const history = useHistory()

	async function handleLogout() {
		setError("")
		try {
			await logout()
			history.push("/login")
		} catch {
			setError("Failed to logout")
		}
	}

    return(
        <div>
            <Navbar bg="dark" expand="lg" className="justify-content-center">
                <Link to="/">
                    <Navbar.Brand><img src={logo} width="200px" height="100px"/></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="justify-content-center"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Navbar className="justify-content-center">
                        <Nav.Link ><Link className="link-style" to="/dashboard"><Button variant="flat" size="xxl">Dashboard</Button></Link></Nav.Link>
                        <Nav.Link ><Link className="link-style" to="/profile"><Button variant="flat" size="xxl">Profile</Button></Link></Nav.Link>
                        <Nav.Link ><Link className="link-style" to="/chat"><Button variant="flat" size="xxl">Chats</Button></Link></Nav.Link>
                    </Navbar>
                    <Navbar.Brand><Button variant="link" onClick={handleLogout}>Logout</Button></Navbar.Brand>
                </Navbar.Collapse>

            </Navbar>
        </div>

    )
}

export default NavigationBar;