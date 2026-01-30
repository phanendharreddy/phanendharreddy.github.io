import "./SkillsGridStyle.css";
import React from "react";

const skills = [
  {
    title: "Backend Development",
    items: [
      "Java (SE/EE)",
      "Spring Boot / Spring MVC",
      "RESTful API Design",
      "Microservices Architecture",
      "Node.js / Express.js",
      "Apache Kafka",
      "Hibernate / JPA",
      "JWT Authentication",
    ],
  },
  {
    title: "Frontend Development",
    items: [
      "React.js / Redux",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5 / CSS3",
      "Bootstrap / Material-UI",
      "Responsive Design",
      "AJAX / Fetch API",
    ],
  },
  {
    title: "Databases & Cloud",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "AWS (EC2, S3, RDS, Lambda)",
      "AWS DynamoDB",
      "CloudWatch",
      "Redis",
      "Database Optimization",
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      "Docker / Docker Compose",
      "Jenkins CI/CD",
      "Maven / Gradle",
      "GitHub Actions",
      "Git / GitHub",
      "JIRA / Confluence",
      "Linux / Bash Scripting",
      "Postman / Swagger",
    ],
  },
  {
    title: "Testing & Quality",
    items: [
      "JUnit / Mockito",
      "Test-Driven Development",
      "Integration Testing",
      "Jest / React Testing Library",
      "Code Coverage Analysis",
      "Performance Testing",
    ],
  },
  {
    title: "Other Technologies",
    items: [
      "Python / TensorFlow",
      "Golang",
      "Agile / Scrum",
      "Data Structures & Algorithms",
      "System Design",
      "API Security",
    ],
  },
];

const SkillsGrid = () => {
  return (
    <section className="skills">
      <div className="section-heading">
        <h2>Technical Skills</h2>
        <p>Core technologies I use to deliver reliable, scalable products.</p>
      </div>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skills-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsGrid;
