import "./CTABannerStyle.css";
import React from "react";
import { Link } from "react-router-dom";
import ResumeFile from "../assets/resume.pdf";

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="cta-content">
        <h2>Ready to work together?</h2>
        <p>Let's discuss how I can contribute to your next project or team</p>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-btn primary">
            Start Conversation
          </Link>
          <a href={ResumeFile} className="cta-btn secondary" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
