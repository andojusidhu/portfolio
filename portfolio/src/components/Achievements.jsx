import "../styles/Achievements.css";
import { motion } from "framer-motion";

function Achievements() {
  const achievements = [
    {
      title: "Built 3 Real-World Projects",
      desc: "Designed and developed full-stack and frontend applications including MERN eCommerce, Cresentia Tressure Hunt game , and CodeClash platform."
    },
    {
      title: "Completed Internship Experience",
      desc: "Worked as a Frontend & Full Stack Developer Intern, contributing to real-time web applications and production-ready systems."
    },
    {
      title: "Achieved 94% in Java Programming Nptel Course",
      desc: "Demonstrated strong understanding of Java programming concepts and best practices through rigorous coursework and assessments."
    },
    {
      title: "Active GitHub Contributor",
      desc: "Maintaining clean repositories with proper version control using Git and GitHub."
    }
  ];

  return (
    <section id="achievements">
      <h2>Achievements</h2>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="achievement-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;