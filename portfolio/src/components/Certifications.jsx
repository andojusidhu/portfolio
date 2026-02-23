import "../styles/Certifications.css";
import { motion } from "framer-motion";

function Certifications() {
  const certifications = [
    {
      title: "Full Stack Web Development Internship",
      issuer: "Unified Mentor Pvt Limited",
      year: "2025"
    },
    {
      title: "Frontend Web Development Internship",
      issuer: "Cognifyz Technologies",
      year: "2025"
    },
    {
      title: "Java Programming Certification",
      issuer: "Nptel / IIT Kharagpur",
      year: "2025"
    },
    {
      title: "Database Management Systems",
      issuer: "Nptel / IIT Kharagpur",
      year: "2025"
    },
    {
      title: "Frontend Web Development",
      issuer: "Reliance Foundation",
      year: "2025"
    },
    {
      title: "React.js Development",
      issuer: "Infoyz SpringBoard",
      year: "2025"
    },
    {
      title: "Resposive Web Design",
      issuer: "freeCodeCamp",
      year: "2025"
    },
    {
      title: "3days SQL Course",
      issuer: "Newton School",
      year: "2025"
    }

  ];

  return (
    <section id="certifications">
      <h2>Certifications</h2>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <span>{cert.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;