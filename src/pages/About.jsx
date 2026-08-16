import { motion } from 'framer-motion';
import { Users, History, Target } from 'lucide-react';
import './About.css';

export default function About() {
  const directors = [
    { name: "Subrahmanyam Kassetty", role: "Founder & Managing Director", image: "/images/subrahmanyam_new.jpg" },
    { name: "K. V. Mukesh Babu", role: "Director", image: "/images/k_mukesh.png" },
    { name: "K. V. Chaitanya", role: "Director", image: "/images/kv_chaitanya.png" },
    { name: "Sagi Ramesh Babu", role: "Director", image: "/images/sagi_ramesh_babu.jpg" }
  ];

  return (
    <div className="about-page container section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1>About <span className="text-gradient">BBI Power</span></h1>
        <p className="subtitle">Founded on November 7th, 1996, committed to powering India's future.</p>
      </motion.div>

      <div className="grid-2 mt-5">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel info-card"
        >
          <History className="info-icon" />
          <h2>Our History</h2>
          <p>
            BBI Power Krishnapatnam Company was established for the purpose of developing, operating, and maintaining a 2x260 MW Thermal Power Station at Krishnapatnam in the State of Andhra Pradesh, India.
          </p>
          <p>
            The company was awarded the project through an International Competitive Bidding (ICB) process and has successfully obtained key clearances and approvals to establish a robust infrastructure.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel info-card"
        >
          <Target className="info-icon" />
          <h2>Our Mission</h2>
          <p>
            To deliver highly efficient, low-cost electricity to the people of Andhra Pradesh while adhering to the highest environmental and technical standards.
          </p>
          <p>
            We are dedicated to establishing partnerships with major infrastructure groups to implement and run the power plant seamlessly, ensuring a sustainable energy supply for the nation.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="management-section glass-panel mt-5"
      >
        <div className="text-center">
          <Users className="info-icon mx-auto" />
          <h2>Board of Directors</h2>
          <p>Guided by experienced leadership.</p>
        </div>
        
        <div className="grid-2 mt-3">
          {directors.map((director, index) => (
            <div key={index} className="director-card">
              <img src={director.image} alt={director.name} className="director-img" />
              <h3>{director.name}</h3>
              <span className="role">{director.role}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
