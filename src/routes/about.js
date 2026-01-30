import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgSecond from "../components/HeroImgSecond";
import AboutContent from '../components/AboutContent';
import ProfessionalSummary from '../components/ProfessionalSummary';
import SkillsGrid from "../components/SkillsGrid";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Credentials from "../components/Credentials";
import CTABanner from "../components/CTABanner";
import ResumeFile from "../components/Resume";
const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImgSecond heading="About" text="Full Stack Developer"/>  
      <AboutContent />
      <ProfessionalSummary />
      <SkillsGrid />
      <ExperienceTimeline />
      <Credentials />
      <CTABanner/>
      <ResumeFile/>
      <Footer />
    </div>
  )
}

export default About
 