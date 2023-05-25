import "./ProjectWorkCardStyle.css"
import React from 'react'
import { NavLink } from "react-router-dom";
const ProjectWorkCard = (props) => {
  return (
    <div>
      <div className="project-card">
            <img src={props.imgsrc} alt="image"/>
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details"> 
            <p>{props.text}</p>
            <h3 className="techstack">Tech Stack : {props.tectstack}</h3>
            <div className="pro-btn">
              <NavLink to={props.source} className="btn">Source</NavLink>
            </div>
            </div>
          </div>
    </div>
  )
}

export default ProjectWorkCard   