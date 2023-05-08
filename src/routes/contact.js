import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgSecond from "../components/HeroImgSecond";
import Form from "../components/Form";
const contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgSecond heading="Contact" text="Get in touch"/>
      <Form/>
      <Footer />
    </div>
  )
}

export default contact
