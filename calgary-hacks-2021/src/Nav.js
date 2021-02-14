import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {

    const navStyle = {
        color: 'white'
    };

    return(
        <nav>
            <Link style={navStyle} to="/">
                <h3>Logo</h3>
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to="/profile">
                    <li>Profile</li>
                </Link>
                <Link style={navStyle} to="/chat">    
                   <li>Chat</li>
                </Link>
            </ul>
        </nav>

    );
}

export default Nav;