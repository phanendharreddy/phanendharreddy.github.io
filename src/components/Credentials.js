import "./CredentialsStyle.css";
import React from "react";

const Credentials = () => {
  return (
    <section className="credentials">
      <div className="section-heading">
        <h2>Education & Certifications</h2>
        <p>Academic background and recent upskilling.</p>
      </div>
      <div className="credentials-grid">
        <div className="credentials-card">
          <h3>Wilmington University</h3>
          <p className="degree">Master of Science – Information System Technologies</p>
          <p className="year">Graduated: 2025</p>
          <p className="gpa">GPA: 3.83 / 4.0</p>
          <p className="location">Delaware, USA</p>
        </div>
        <div className="credentials-card">
          <h3>JNTU Hyderabad</h3>
          <p className="degree">Bachelor of Technology – Computer Science & Engineering</p>
          <p className="year">Graduated: 2022</p>
          <p className="location">Hyderabad, India</p>
        </div>
        <div className="credentials-card">
          <h3>Professional Certifications</h3>
          <ul>
            <li><strong>Java Build Automation with Maven</strong> – LinkedIn Learning</li>
            <li><strong>Advanced Software Engineering Virtual Experience</strong> – Walmart Global Tech (Forage)</li>
            <li><strong>Introduction to Data Warehousing</strong> – Udemy</li>
            <li><strong>Spring Framework Fundamentals</strong> – Online Course</li>
            <li><strong>AWS Cloud Fundamentals</strong> – Self-Study</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
