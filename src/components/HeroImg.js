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
                <p> Full Stack Developer </p>
                <div>
                    <Link to="/projects" className= "btn"> Projects </Link>
                    <Link to="/contact" className= "btn-light"> Contact </Link>
                </div>
            </div>

        </div>
    )
}
export default HeroImg;