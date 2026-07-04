import "../styles/Hero.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import sidhu from "../assets/sidhu.jpg";
import resume from "../assets/sidhu-resume.pdf";

function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const downloadResume = () => {
    const confirmDownload = window.confirm(
      "Do you want to download my resume?"
    );

    if (confirmDownload) {
      const link = document.createElement("a");
      link.href = resume;
      link.download = "Andoju-Sidhu-Ganesh-Chary-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        {/* Profile Image */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={sidhu} alt="Sidhu" />
        </motion.div>

        {/* Hero Content */}
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
                "Frontend Specialist",
              ]}
              loop
              cursor
            />
          </h2>

          <p>
            Passionate MERN Stack Developer and Computer Science student with
            practical experience developing real-time web applications,
            RESTful APIs, and dynamic user interfaces. Adept at writing clean,
            maintainable code and delivering production-ready solutions with
            modern development practices.
          </p>

          <div className="hero-buttons">
            <button onClick={scrollToProjects}>
              View Projects
            </button>

            <button
              className="outline"
              onClick={downloadResume}
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