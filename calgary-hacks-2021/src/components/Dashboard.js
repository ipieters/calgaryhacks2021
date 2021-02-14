import React, {useState} from 'react';
import Nav from "./Nav";
import {Card, Button, Alert} from "react-bootstrap"
import {useAuth} from "../contexts/AuthContext"
import{Link, useHistory} from "react-router-dom"

export default function Dashboard() {
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
    	<>
	    	<Card>
	    		<Card.Body>
	    			{error && <Alert variant="danger">{error}</Alert>}
	    		</Card.Body>
	    	</Card>
	        <div className="w-100 text-center mt-2">
	       		<Button variant="link" onClick={handleLogout}>
	       			Logout
	       		</Button>
	     	</div>
	    </>
    )
}