import "../styles/Hero.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import sidhu from "../assets/sidhu.jpg";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={sidhu} alt="Sidhu" />
        </motion.div>
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Andoju Sidhu Ganesh Chary</h1>

          <h2>
            <Typewriter
              words={[
                "BTech CSE Student",
                "MERN Stack Developer",
                "Frontend Specialist"
              ]}
              loop
              cursor
            />
          </h2>

          <p>
  Passionate MERN Stack Developer and Computer Science student with practical 
  experience developing real-time web applications, RESTful APIs, and dynamic 
  user interfaces. Adept at writing clean, maintainable code and delivering 
  production-ready solutions with modern development practices.
</p>

          <div className="hero-buttons">
            <button onClick={() => {
                document.getElementById("projects").scrollIntoView({
                behavior: "smooth"
            });
        }}>
  View Projects
</button>
            <button
  className="outline"
  onClick={() => {
    const confirmDownload = window.confirm(
      "Do you want to download my resume?"
    );

    if (confirmDownload) {
      const link = document.createElement("a");
      link.href = "/resume.pdf";  // make sure resume is in public folder
      link.download = "sidhu-resume.pdf";
      link.click();
    }
  }}
>
  Download Resume
</button>
          </div>
        </motion.div>

        

      </div>
    </section>
  );
}

export default Hero;