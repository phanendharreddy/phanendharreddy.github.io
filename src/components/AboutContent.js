import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import React from 'react'

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
        <div className="right"> </div>
    </div>
  )
}

export default AboutContent
