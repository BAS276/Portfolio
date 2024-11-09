import "./navbar.css"
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="header">
            <h1><span>Barfaid</span>.Dev</h1>
            <nav className="navbar"> 
                <ul className="ul">
                <Link className="link"  to="/"><li className="li">Home</li></Link>
                <Link className="link"  to="/About"><li className="li">About</li></Link>
                <Link className="link"  to="/skills"><li className="li">Skills</li></Link>
                <Link className="link"  to="/projects"><li className="li">Projects</li></Link>
                <Link className="link"  to="/contact"><li className="li">Contact</li></Link> 
                    
                    
                    
                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;