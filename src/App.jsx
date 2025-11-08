import React from "react";
import { motion } from "framer-motion";
import "./App.css";

// Import your images
import mamPhoto from "./assets/mam.jpeg";
import manitejPhoto from "./assets/manitej.jpeg";
import mePhoto from "./assets/me.jpg";
import chanduPhoto from "./assets/chandu.jpeg";
import bhramajPhoto from "./assets/bhramaj.jpeg";

function App() {
  return (
    <div className="app-container">
      {/* Ma’am’s Photo */}
      <motion.img
        src={mamPhoto}
        alt="Mam"
        className="mam-photo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Thank You, Dr K Santhi mam
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        “Ma’am, it’s hard to express how grateful we are to have had you this semester. 
        We’ve learned so many new technologies, and your way of teaching made even the 
        most complex concepts feel simple and easy to understand. At first, we thought 
        Edge Computing would be a tough subject, but you made it enjoyable and engaging. 
        Thank you for always being patient, for correcting our mistakes with care, and for 
        guiding us whenever we needed support. Your motivation and teaching have truly made 
        a difference in our learning journey.”
      </motion.p>

      {/* Signature */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.2 }}
      >
        💐 With love and respect,  
        <br />
        — Your Students
      </motion.h2>

      {/* Student Gallery */}
      <div className="student-gallery">
        <div className="student-card">
          <img src={manitejPhoto} alt="Manitej" className="student-photo" />
          <p className="student-name">Manitej</p>
        </div>

        <div className="student-card">
          <img src={mePhoto} alt="Mohith" className="student-photo" />
          <p className="student-name">Mohith</p>
        </div>

        <div className="student-card">
          <img src={chanduPhoto} alt="Chandu" className="student-photo" />
          <p className="student-name">Chandu</p>
        </div>

        <div className="student-card">
          <img src={bhramajPhoto} alt="Bhramaj" className="student-photo" />
          <p className="student-name">Bhramaj</p>
        </div>
      </div>
    </div>
  );
}

export default App;
