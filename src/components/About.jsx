import "../styles/About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p>
          I am a BTech Computer Science student with hands-on industry experience as
          a Frontend and Full Stack Web Developer. I have worked on multiple real-world 
          projects using the MERN stack and have strong foundations in Java, 
          Data Structures & Algorithms, and database management.
        </p>

        <p>
          I am a Computer Science undergraduate specializing in MERN stack development, 
          with hands-on experience building scalable full-stack applications. I have 
          strong knowledge of MongoDB, Express.js, React.js, and Node.js, along with 
          database management using MySQL and MongoDB.
        </p>

        <p>
          I am actively exploring Artificial Intelligence and Machine Learning to 
          integrate intelligent solutions into modern applications. I use Git and 
          GitHub for version control and collaborative development while continuously 
          improving my problem-solving and system design skills.
        </p>
      </motion.div>
    </section>
  );
}

export default About;