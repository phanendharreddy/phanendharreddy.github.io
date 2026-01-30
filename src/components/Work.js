import "./ProjectWorkCardStyle.css"
import ProjectWorkCard from "./ProjectWorkCard";
import WorkCardData from "./WorkCardData";

import React from 'react'

const Work = () => {
  return (
    <div>
      <div className="work-container">
        <h1 className="project-heading"> Featured Projects </h1>
        <div className="project-container">
        {WorkCardData.map((val, ind) => {
            return (
            <ProjectWorkCard 
            key={ind} 
            imgsrc={val.imgsrc} 
            title={val.title} 
            text={val.text} 
            tectstack={val.techstack}
            source={val.source} 
            /> 
            );
        })}
        </div>
      </div>
    </div>
  )
}

export default Work   