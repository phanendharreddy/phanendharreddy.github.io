import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgSecond from "../components/HeroImgSecond";
import AboutContent from '../components/AboutContent';
const about = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgSecond heading="About" text="Aspiring SDE"/>  
      <AboutContent />
      <Footer />
    </div>
  )
}

export default about
