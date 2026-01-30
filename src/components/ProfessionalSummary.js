import "./ProfessionalSummaryStyle.css";
import React from "react";

const ProfessionalSummary = () => {
  return (
    <section className="professional-summary">
      <div className="summary-container">
        <h2>Professional Summary</h2>
        <p className="summary-text">
          Results-driven Full Stack Developer with 3+ years of experience architecting and deploying enterprise-grade web applications. 
          Proven expertise in Java ecosystem (Spring Boot, Hibernate, JPA), modern frontend frameworks (React, Redux), and cloud infrastructure (AWS). 
          Track record of delivering measurable business impact through performance optimization (20% response time reduction), 
          automated CI/CD pipeline implementation (87% deployment time decrease), and scalable microservices architecture supporting 10,000+ concurrent users.
        </p>
        <div className="summary-metrics">
          <div className="metric-card">
            <h3>3+</h3>
            <p>Years of Professional Experience</p>
          </div>
          <div className="metric-card">
            <h3>20+</h3>
            <p>Production Features Delivered</p>
          </div>
          <div className="metric-card">
            <h3>99.9%</h3>
            <p>System Uptime Maintained</p>
          </div>
          <div className="metric-card">
            <h3>50K+</h3>
            <p>Daily Messages Processed</p>
          </div>
        </div>
        <div className="core-competencies">
          <h3>Core Competencies</h3>
          <div className="competencies-grid">
            <div className="competency-item">
              <strong>Backend Engineering:</strong> Enterprise Java development, RESTful API design, microservices architecture, database optimization
            </div>
            <div className="competency-item">
              <strong>Frontend Development:</strong> React ecosystem, responsive design, component architecture, state management
            </div>
            <div className="competency-item">
              <strong>Cloud & DevOps:</strong> AWS services (EC2, S3, RDS, Lambda), CI/CD automation, Docker containerization, monitoring
            </div>
            <div className="competency-item">
              <strong>Software Engineering:</strong> Agile methodologies, test-driven development, code review, technical documentation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
