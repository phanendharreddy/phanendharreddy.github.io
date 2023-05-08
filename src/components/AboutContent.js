import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import React from 'react'
import about1 from "../assets/about2.jpg";
import about2 from "../assets/about1.webp";
const AboutContent = () => {
  return (
    <div className="about">  
        <div className="left">
            <h1>About me</h1>
            <p>Description</p>
            <Link to="/contact" >
            <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right"> 
        <div className="img-container">
          <div className="img-stack top">
            <img src={about1} className="about1" alt="true"/>
          </div>
          <div className="img-stack bottom">
            <img src={about2} className="about2" alt="true"/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default AboutContent 
