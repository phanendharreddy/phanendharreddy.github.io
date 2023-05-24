import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgSecond from "../components/HeroImgSecond";
import AboutContent from '../components/AboutContent';
import ResumeFile from "../components/Resume";
const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgSecond heading="About" text="Aspiring SDE"/>  
      <AboutContent />
      <ResumeFile/>
      <Footer />
    </div>
  )
}

export default About
 