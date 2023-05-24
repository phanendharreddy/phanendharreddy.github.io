import React from 'react'
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Work from "../components/Work";
import ResumeFile from "../components/Resume";
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg />
      <Work/>
      <ResumeFile/>
      <Footer />
    </div>
  )
}

export default Home;
