import "../styles/Education.css";
import { motion } from "framer-motion";

function Education() {
  const educationData = [
    {
      institution: "Sri Indu College of Engineering and Technology",
      duration: "2023 - 2027",
      degree: "B.Tech in Computer Science Engineering",
      description:
        "Currently pursuing undergraduate degree with focus on full-stack development, AI/ML, and software engineering principles."
    },
    {
      institution: "SR Junior College",
      duration: "2021 - 2023",
      degree: "Intermediate Education",
      description:
        "Completed higher secondary education with strong foundation in Mathematics and Science."
    },
    {
      institution: "Pudami The Neighbourhood High School",
      duration: "2021",
      degree: "Secondary School Education",
      description:
        "Completed secondary education with academic excellence and strong fundamentals."
    }
  ];

  return (
    <section id="education">
      <h2>Education</h2>

      <div className="education-timeline">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="education-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3>{item.institution}</h3>
            <h4>{item.degree}</h4>
            <span>{item.duration}</span>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;