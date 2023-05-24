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
            <p>I'm Phanendhar Reddy Kusuma, a Software Development Engineer with a passion for creating real-time, high-scalable applications. I recently graduated with a B.Tech in Computer Science and Engineering from Kommuri Pratap Reddy Institute of Technology in Hyderabad, India.</p>
            <p>During my education, I gained a strong foundation in programming languages such as Java, Python, C, C++, and Rust. Additionally, I have experience in front-end development using HTML, CSS, JavaScript, and React, as well as back-end development with MySQL and Spring. I am proficient in tools like Git, Eclipse, Maven, VS Code, and Microsoft Office.</p>
            <p> I have worked on several projects that demonstrate my technical skills. For instance, I developed a Cyberbullying Detection system using Deep Learning, where I utilized a Character-level Convolutional Neural Network (Char-CNN) model to identify bullying content on social media. I also extended the Lexicon Algorithm for Sarcasm Detection, enhancing its capabilities by adding a sentiment prediction component. </p>
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
