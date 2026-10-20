import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import './About.css';

export default function About() {
  const directors = [
    { 
      name: "Subramanyam Kassetty", 
      role: "Managing Director", 
      image: "/images/subrahmanyam_new.jpg",
      resumePdf: "/Subramanyam_Executive_Profile.pdf"
    },
    { name: "Kasi Lalith", role: "Director", image: "/images/kasi_lalith.jpg", objectPosition: "center 22%" },
    { name: "K. V. Mukesh Babu", role: "Director", image: "/images/k_mukesh.png" },
    { name: "K. V. Chaitanya", role: "Director", image: "/images/kv_chaitanya.png" },
    { name: "Sagi Ramesh Babu", role: "Director", image: "/images/sagi_ramesh_babu.jpg" }
  ];

  return (
    <div id="about" className="about-page container section">
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
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img 
            src="/images/logo.jpg" 
            alt="BBI Power Logo" 
            style={{ width: '100%', borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }}
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ color: 'var(--accent-blue)', marginBottom: '1.5rem' }}>Project History</h2>
          <p>
            Located 15 miles from the town of Nellore on the East coast of India, the project was originally conceived in 1990. Following the Indian Government's privatization program, it became the <strong>first competitively bid and awarded project under India's energy reform guidelines.</strong>
          </p>
          <p>
            After an international competitive bidding process, BBI Power signed a Letter of Intent with the Andhra Pradesh State Electricity Board (APSEB) in July 1996. This was followed by a 30-year Initial Power Purchase Agreement.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="management-section glass-panel mt-5"
      >
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--accent-orange)' }}>Board of Directors</h2>
          <p>Guided by experienced leadership.</p>
        </div>
        
        <div className="directors-grid mt-3">
          {directors.map((director, index) => (
            <div key={index} className="director-card">
              <img 
                src={director.image} 
                alt={director.name} 
                className="director-img" 
                style={director.objectPosition ? { objectPosition: director.objectPosition } : {}}
              />
              <h3>{director.name}</h3>
              <span className="role">{director.role}</span>
              {director.resumePdf && (
                <div style={{ marginTop: '0.85rem' }}>
                  <a 
                    href={director.resumePdf} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="director-resume-btn"
                  >
                    <FileText size={14} /> View Resume
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
