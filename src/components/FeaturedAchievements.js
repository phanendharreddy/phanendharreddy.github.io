import "./FeaturedAchievementsStyle.css";
import React from "react";
import { Link } from "react-router-dom";

const FeaturedAchievements = () => {
  return (
    <section className="featured-achievements">
      <div className="achievements-container">
        <h2>Why Work With Me</h2>
        <p className="subtitle">Proven expertise in delivering enterprise solutions with measurable impact</p>
        
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">📊</div>
            <h3>Performance Optimization</h3>
            <p>Reduced database query response times by 20% through strategic indexing and query optimization techniques.</p>
            <span className="metric">20% faster</span>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">⚙️</div>
            <h3>CI/CD Automation</h3>
            <p>Designed and implemented automated deployment pipelines, reducing deployment time from 2 hours to 15 minutes.</p>
            <span className="metric">87% reduction</span>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">☁️</div>
            <h3>Cloud Infrastructure</h3>
            <p>Architected and deployed AWS infrastructure supporting 10,000+ concurrent users with 99.9% uptime.</p>
            <span className="metric">99.9% uptime</span>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">🚀</div>
            <h3>Scalable Architecture</h3>
            <p>Built microservices architecture using Apache Kafka handling 50,000+ messages daily with fault tolerance.</p>
            <span className="metric">50K+ messages</span>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">🧪</div>
            <h3>Code Quality</h3>
            <p>Implemented comprehensive testing strategies achieving 85% code coverage and maintaining production reliability.</p>
            <span className="metric">85% coverage</span>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">📚</div>
            <h3>Continuous Learning</h3>
            <p>Master's degree in Information Systems (GPA: 3.83) with active engagement in professional certifications and upskilling.</p>
            <span className="metric">3.83 GPA</span>
          </div>
        </div>

        <div className="cta-section">
          <h3>Ready to collaborate?</h3>
          <p>Let's discuss how I can contribute to your next project</p>
          <Link to="/contact" className="btn-primary">Get In Touch</Link>
          <Link to="/about" className="btn-secondary">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAchievements;
