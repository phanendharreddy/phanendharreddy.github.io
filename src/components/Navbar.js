import "./NavbarStyles.css";
import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logoFile from "../assets/logo.png";
const Navbar = () => { 
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [color, setColor] = useState(false);
    const changeColor = () => {
            if(window.scrollY>=100) {
                setColor(true);
            }
            else {
                setColor(false);
            }
    };
    window.addEventListener('scroll', changeColor);
    return (
        <div className={color ? "header header-bg" : "header"}>
        
        <h1 className="name"> <Link to="/"> <img className="logo" src={logoFile} alt="Logo" /> </Link> Phanendhar Reddy Kusuma</h1>
        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="phanendharreddy" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/phanendharreddy?trk=profile-badge">Phanendhar Reddy Kusuma</a></div>
        <ul className={click ? "nav-menu active":"nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            {/* <li>
                <Link to="/blogs">Blogs</Link>
            </li> */}
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{ color: "#fff"} }/>) : 
            ( <FaBars size={20} style={{ color: "#fff"} }/> ) }
        </div>
        </div>
    );
};

export default Navbar;