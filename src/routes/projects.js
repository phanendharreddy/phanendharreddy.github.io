import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgSecond from "../components/HeroImgSecond";
import Work from "../components/Work";

const projects = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgSecond heading="Projects" text="Recent work"/>   
      <Work/>
      <Footer />
    </div>
  )
}

export default projects

