import "../styles/Skills.css";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPython,
  SiJupyter,
  SiNumpy,
  SiPandas
} from "react-icons/si";

import { TbChartDots } from "react-icons/tb";

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> }
    ]
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> }
    ]
  },
  {
    title: "Programming",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <SiPython /> }
    ]
  },
  {
    title: "Data Science & ML Tools",
    items: [
      { name: "Jupyter", icon: <SiJupyter /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "Matplotlib", icon: <TbChartDots /> }
    ]
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> }
    ]
  }
];

function Skills() {
  return (
    <section id="skills">
      <h2>Technical Skills</h2>

      <div className="skills-container">
        {skills.map((category, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>{category.title}</h3>

            <div className="skill-tags">
              {category.items.map((skill, i) => (
                <span key={i} className="skill-item">
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;