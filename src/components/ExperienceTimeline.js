import "./ExperienceTimelineStyle.css";
import React from "react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Community Dreams Foundation",
    date: "Aug 2025 – Present",
    location: "Remote, USA",
    bullets: [
      "Architect and deploy full-stack features using Java Spring Boot microservices and React components, serving 10,000+ active users.",
      "Design and implement RESTful APIs with JWT authentication, rate limiting, and comprehensive error handling for secure workflow management.",
      "Manage AWS cloud infrastructure (EC2, S3, RDS, CloudWatch) ensuring 99.9% uptime and implementing cost optimization strategies.",
      "Implement automated monitoring and alerting systems using CloudWatch, reducing incident response time by 35%.",
      "Lead code reviews and mentor junior developers on Spring Boot best practices and React design patterns.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Ellipse Technologies Pvt. Ltd.",
    date: "Aug 2022 – Jul 2023",
    location: "India",
    bullets: [
      "Developed and deployed enterprise web applications using Spring Boot, React, and PostgreSQL for Fortune 500 clients.",
      "Optimized database queries and implemented indexing strategies, reducing average response times by 20% and improving application throughput.",
      "Built microservices architecture with Apache Kafka for event-driven communication, handling 50,000+ messages per day.",
      "Established CI/CD pipelines using Jenkins, Maven, and Docker, reducing deployment time from 2 hours to 15 minutes (87% improvement).",
      "Implemented comprehensive unit testing with JUnit and Mockito, achieving 85% code coverage.",
    ],
  },
  {
    role: "Associate Software Developer",
    company: "Ellipse Technologies Pvt. Ltd.",
    date: "Aug 2021 – Jul 2022",
    location: "India",
    bullets: [
      "Developed RESTful APIs using Spring Boot and integrated with PostgreSQL databases for enterprise applications.",
      "Collaborated in Agile/Scrum teams, participating in daily standups, sprint planning, and retrospectives to deliver 20+ features.",
      "Fixed critical production bugs and implemented feature enhancements, improving system reliability and user satisfaction.",
      "Wrote comprehensive technical documentation and API specifications using Swagger/OpenAPI standards.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Intellicus Technologies",
    date: "Feb 2021 – Jul 2021",
    location: "India",
    bullets: [
      "Developed responsive web interfaces using HTML5, CSS3, JavaScript, and Bootstrap framework.",
      "Collaborated with backend teams to integrate REST APIs and implement dynamic data visualization features.",
      "Participated in code reviews and implemented feedback to improve code quality and adherence to best practices.",
    ],
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="experience">
      <div className="section-heading">
        <h2>Professional Experience</h2>
        <p>Highlights from recent roles and the impact delivered.</p>
      </div>
      <div className="timeline">
        {experiences.map((item) => (
          <div className="timeline-card" key={`${item.company}-${item.role}`}>
            <div className="timeline-header">
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
              </div>
              <div className="meta">
                <span>{item.date}</span>
                <span>{item.location}</span>
              </div>
            </div>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
