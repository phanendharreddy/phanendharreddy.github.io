import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgSecond from "../components/HeroImgSecond";
import Form from "../components/Form";
import ResumeFile from "../components/Resume";
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgSecond heading="Contact" text="Get in touch"/>
      <Form/>
      <ResumeFile/>
      <Footer />
    </div>
  )
}

export default Contact
