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
            <p>Hi, I'm Phanendhar Reddy Kusuma – A Passionate Full Stack Developer and Aspiring Software Development Engineer!</p>
            <p>With a strong foundation in software engineering, I specialize in building scalable web applications, optimizing backend systems, and creating innovative solutions using cutting-edge technologies. Currently pursuing a Master’s in Information Systems at Wilmington University, I aim to contribute to impactful projects in the tech industry.</p>
            <p>I am a results-driven software engineer with over two years of experience as a Full Stack Developer at Ellipse Technologies. My expertise spans across Java, Python, React.js, Node.js, and Spring Boot. I have successfully developed scalable web applications and RESTful APIs that improved platform performance by 40%. My passion lies in solving complex problems through innovative solutions in areas like blockchain, data science, and AI-driven systems. Outside of work, I enjoy participating in hackathons and exploring emerging technologies.</p>
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
