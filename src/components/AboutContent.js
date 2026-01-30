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
            <p>Hi, I'm Phanendhar Reddy Kusuma — a full stack developer with 3+ years building enterprise-grade web applications that deliver measurable business impact.</p>
            <p>I specialize in designing and implementing robust backend services with Java and Spring Boot, architecting scalable RESTful APIs, and crafting responsive, intuitive user interfaces with React. My engineering philosophy centers on clean code, test-driven development, and continuous performance optimization.</p>
            <p>Currently at Community Dreams Foundation, I architect full-stack features and manage AWS cloud infrastructure for production deployments. Previously at Ellipse Technologies, I led database optimization initiatives that reduced query response times by 20%, designed microservices architecture for scalability, and established automated CI/CD pipelines using Jenkins and Maven that improved deployment frequency by 40%.</p>
            <p>I hold a Master's degree in Information System Technologies from Wilmington University (GPA: 3.83) and am passionate about leveraging cutting-edge technologies to solve complex business challenges.</p>
            <ul className="about-highlights">
              <li>3+ years delivering production-ready full stack solutions</li>
              <li>Core expertise: Java, Spring Boot, React, Microservices, AWS</li>
              <li>20% performance improvement through database optimization</li>
              <li>40% faster deployment cycles with automated CI/CD</li>
              <li>Master's degree in Information Systems (GPA: 3.83)</li>
            </ul>
            <Link to="/contact" >
            <button className="btn">Get in touch</button>
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
