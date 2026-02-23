import "../styles/Contact.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_viowcmq",     // replace
        "template_eamz3lt",    // replace
        form.current,
        "AsP5pILLD3tZ5uP1W"      // replace
      )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        alert("Failed to send message.");
        console.log(error);
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Get In Touch</h2>

      <div className="contact-container">

        {/* Contact Info */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Contact Information</h3>

          <p><FaPhone /> 9704733035</p>
          <p><FaEnvelope /> andojusidhuganeshchary@gmail.com</p>

          <div className="social-links">
            <a 
              href="https://github.com/YOUR_USERNAME" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a 
              href="https://www.linkedin.com/in/andoju-sidhu-ganesh-chary-88bb872b5"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </motion.form>

      </div>
    </section>
  );
}

export default Contact;