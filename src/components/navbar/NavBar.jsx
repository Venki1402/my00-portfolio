import React from "react";
import "./NavBar.css";
import logo from '../../assets/Untitled.svg';
import { Link } from 'react-scroll';

const NavBar = () => {  
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className="logo"/>
        <div className="menu-bar">
            <Link className="menu-bar-item">Home</Link>
            <Link className="menu-bar-item">About</Link>
            <Link className="menu-bar-item">Skills</Link>
            <Link className="menu-bar-item">Projects</Link>
            <Link className="menu-bar-item">Contact Me</Link>
        </div>
    </nav>
  );
}

export default NavBar;