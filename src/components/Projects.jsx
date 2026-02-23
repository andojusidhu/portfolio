import "../styles/Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
    title: "Real-Time MERN Ecommerce Platform",
    desc: "Full-stack eCommerce web application with authentication, admin dashboard, real-time order management, and scalable backend architecture.",
    tech: "MongoDB, Express.js, React.js, Node.js",
    github: "https://github.com/andojusidhu/ecommerce-mern",
    live: ""
  },
  {
    title: "CodeClash – Coding Quiz Platform",
    desc: "Interactive React-based coding quiz application with timer, dynamic questions, and real-time score tracking.",
    tech: "React.js, JavaScript, CSS",
    github: "https://github.com/andojusidhu/Code-clash",
    live: ""
  },
  {
    title: "Study Tracking App",
    desc: "React-based productivity app for managing schedules, exams, notes and PDFs with LocalStorage persistence.",
    tech: "React, JavaScript, CSS",
    github: "https://github.com/andojusidhu/study-tracking-app",
    live: ""
  },
  {
    title: "Treasure Hunt Game",
    desc: "7-level technical game built with complex state logic and progressive difficulty tracking.",
    tech: "React, JavaScript",
    github: "https://github.com/andojusidhu/cresentia",
    live: ""
  },
  {
    title: "Real-Time MERN Chat App",
    desc: "Full-stack real-time chat application using Socket.io for instant messaging.",
    tech: "MongoDB, Express, React, Node.js",
    github: "https://github.com/andojusidhu/Chat-App",
    live: ""
  }
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ y: -8 }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <span>{project.tech}</span>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>

              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;