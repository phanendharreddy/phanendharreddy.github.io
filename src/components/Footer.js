import "./FooterStyles.css";
import React from "react";
import { FaHome, FaPhone,FaMailBulk, FaTwitter, FaLinkedin, FaGithub, FaGitlab, FaHackerrank, FaBitbucket, } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left"> 
            <div className="location"> 
            <h4> <FaHome size={20} style={{color:"#fff", marginRight:"2rem" }}/> 
                    Harrison, NJ </h4>
                    </div>
            <div className="phone">
                <h4> <FaPhone size={20} style={{color:"#fff", marginRight:"2rem" }}/> +1 (929) 630-3215 </h4>
            </div>
            <div className="email">
                <h4> <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem" }}/> phanendhar8@gmail.com </h4>
            </div>
            <div className="socials"> 
            
            <a href="https://www.twitter.com/phanendharr_ddy">
            <FaTwitter className="twitter" size={40} style={{color:"#fff", marginRight:"2rem" }}/>
            </a>
            <a href="https://www.linkedin.com/in/phanendharreddy">
            <FaLinkedin className="linkedin" size={40} style={{color:"#fff", marginRight:"2rem" }}/>
            </a>
            <a href="https://www.leetcode.com/phanendhar">
            <SiLeetcode className="leetcode" size={40} style={{color:"#fff", marginRight:"2rem" }}/>
            </a>
            <a href="https://www.codechef.com/users/phanendhar">
            <SiCodechef className="codechef" size={40} style={{color:"#fff", marginRight:"2rem" }}/>
            </a>
            <a href="https://www.hackerrank.com/phanendharreddy2">
            <FaHackerrank className="hackerrank" size={40} style={{color:"#fff", marginRight:"2rem" }}/>
            </a>
            <a href="https://www.github.com/phanendharreddy">
            <FaGithub className="github" size={40} style={{color:"#fff", marginRight:"2rem" }}/>
            </a>
            <a href="https://www.gitlab.com/phanendharreddy">
            <FaGitlab className="gitlab" size={40} style={{color:"#fff", marginRight:"2rem" }}/>
            </a>
            <a href="https://www.hackerrank.com/phanendharreddy2">
            <FaBitbucket className="bitbucket" size={40} style={{color:"#fff", marginRight:"2rem" }}/>
            </a>
            </div>
            </div>
            <div className="right">
            <h4>Let's Build Something Great Together</h4>
            <p>Experienced Full Stack Developer with 3+ years delivering enterprise-grade applications. Specialized in Java, Spring Boot, React, and cloud technologies. Available for freelance projects, full-time opportunities, and technical consulting.</p>
            <p className="footer-cta">
                <a href="mailto:phanendhar8@gmail.com">Start a Conversation →</a>
            </p>
            <p style={{marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8}}>
                © 2026 Phanendhar Reddy Kusuma. All rights reserved.
            </p>
            </div>
        </div>
    </div>
  )
}

export default Footer
