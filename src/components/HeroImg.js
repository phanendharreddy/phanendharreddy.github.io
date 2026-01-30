import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/logo.png";

import { Link } from "react-router-dom"
const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img"
                src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p className="kicker">Full Stack Java Developer | Master's in Information Systems</p>
                <h1>Building high-performance, scalable web applications</h1>
                <p className="subtitle">
                    3+ years of experience delivering enterprise-grade solutions with Java, Spring Boot, and React. Proven track record of optimizing system performance, reducing response times by 20%, and implementing CI/CD pipelines. Currently architecting cloud-native microservices at Community Dreams Foundation.
                </p>
                <div className="hero-tags">
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>React</span>
                    <span>Microservices</span>
                    <span>AWS</span>
                    <span>REST APIs</span>
                    <span>PostgreSQL</span>
                    <span>Docker</span>
                </div>
                <div>
                    <Link to="/projects" className="btn"> Projects </Link>
                    <Link to="/contact" className="btn-light"> Contact </Link>
                </div>
            </div>

        </div>
    )
}
export default HeroImg;