import "./FooterStyles.css";
import React from "react";
import { FaHome, FaPhone,FaMailBulk, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left"> 
            <div className="location"> 
            <h4> <FaHome size={20} style={{color:"#fff", marginRight:"2rem" }}/> 
                    <p> Hyderabad, India. </p> </h4>
                    </div>
            <div className="phone">
                <h4> <FaPhone size={20} style={{color:"#fff", marginRight:"2rem" }}/> +917729026081 </h4>
            </div>
            <div className="email">
                <h4> <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem" }}/> phanendharreddykusuma@gmail.com </h4>
            </div>
            </div>
            <div className="right">
            <h4>Personal Note</h4>
            <p> A quick summary of mine</p>
            <p> Objectives</p>
            <div className="socials"> 
            <a href="https://www.twitter.com/phanendharr_ddy">
            <FaTwitter className="twitter" size={40} style={{color:"#fff", marginRight:"2rem" }}/>
            </a>
            <a href="https://www.linkedin.com/in/phanendharreddy">
            <FaLinkedin className="linkedin" size={40} style={{color:"#fff", marginRight:"2rem" }}/>
            </a>
            <a href="https://www.github.com/phanendharreddy">
            <FaGithub className="github" size={40} style={{color:"#fff", marginRight:"2rem" }}/>
            </a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
