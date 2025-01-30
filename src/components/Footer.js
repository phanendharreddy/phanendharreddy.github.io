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
                <h4> <FaPhone size={20} style={{color:"#fff", marginRight:"2rem" }}/> +1 (551) 328-1845 </h4>
            </div>
            <div className="email">
                <h4> <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem" }}/> phanendharreddykusuma@gmail.com </h4>
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
            <h4>Personal Note</h4>
            <p> Summary: A Full Stack Developer and aspiring Software Engineer with expertise in Java, Python, React.js, Node.js, and Spring Boot. Currently pursuing a Masters in Information Systems at Wilmington University, I strive to create innovative and scalable solutions in software development. Connect with me on LinkedIn or explore my work on GitHub.</p>
            <br></br> \n
            <p> Objective: I am actively seeking opportunities as a Full Stack Developer or Software Development Engineer to leverage my technical expertise and academic qualifications. With a strong foundation in Java, Python, React.js, Node.js, and Spring Boot, I am eager to contribute to innovative projects and showcase the skills I’ve honed through professional experience and education.
            </p>
            
            </div>
        </div>
    </div>
  )
}

export default Footer
