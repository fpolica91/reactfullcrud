import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-style">
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/projects' style={{ textDecoration: 'none' }}>Projects</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;