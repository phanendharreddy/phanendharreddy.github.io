import React from 'react'
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Work from "../components/Work";
import FeaturedAchievements from "../components/FeaturedAchievements";
import Footer from "../components/Footer";
import ResumeFile from "../components/Resume";
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg />
      <FeaturedAchievements />
      <Work/>
      <ResumeFile/>
      <Footer />
    </div>
  )
}

export default Home;
