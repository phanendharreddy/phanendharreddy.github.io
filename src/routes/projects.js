import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgSecond from "../components/HeroImgSecond";
import Work from "../components/Work";
import CTABanner from "../components/CTABanner";
import ResumeFile from "../components/Resume";
const Projects = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgSecond heading="Projects" text="Recent work"/>   
      <Work/>
      <CTABanner/>
      <ResumeFile/>
      <Footer />
    </div>
  )
}

export default Projects

