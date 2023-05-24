import "./ResumeStyle.css";
import React from 'react'
import ResumeFile from "../assets/resume.pdf";
const Resume = () => {
  return (
    <div className="resume">
                <a href={ResumeFile} className= "btnresume"> <p>RESUME</p></a>
            </div>
  )
}

export default Resume