import "../styles/Experience.css";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Front End Web Developer Intern",
    company: "Cognifyz Technologies",
    duration: "Jul 2025 – Aug 2025",
    points: [
      "Developed responsive UI components using React",
      "Optimized performance and improved user experience",
      "Collaborated using Git and version control workflows"
    ]
  },
  {
    role: "Full Stack Web Developer Intern",
    company: "Unified Mentor Pvt Limited",
    duration: "Jan 2025 – Mar 2025",
    points: [
      "Built full-stack applications using MERN stack",
      "Developed REST APIs and MongoDB schemas",
      "Implemented authentication and backend logic"
    ]
  }
];

function Experience() {
  return (
    <section id="experience">
      <h2>Internship Experience</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>{exp.role}</h3>
            <span>{exp.company}</span>
            <p className="duration">{exp.duration}</p>
            <ul>
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;