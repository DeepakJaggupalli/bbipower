import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Info, X, ExternalLink, Sparkles } from 'lucide-react';
import './About.css';

export default function About() {
  const [selectedDirector, setSelectedDirector] = useState(null);

  const directors = [
    { 
      name: "Subramanyam Kassetty", 
      role: "Managing Director", 
      affiliation: "BBI Power Krishnapatnam Co. Ltd.",
      image: "/images/subrahmanyam_new.jpg",
      resumePdf: "/Subramanyam_Executive_Profile.pdf",
      btnText: "View Resume",
      bio: "Subramanyam Kassetty leads BBI Power Krishnapatnam Co. Ltd. as Managing Director, spearheading the strategic development of India's landmark 2x525 MW Krishnapatnam Thermal Power Project, comprehensive statutory clearances, infrastructure execution, and future clean energy transformation."
    },
    { 
      name: "Kasi Lalith", 
      role: "Director", 
      affiliation: "Founder, Goldman Kasi Group",
      image: "/images/kasi_lalith.jpg", 
      objectPosition: "center 22%",
      resumePdf: "/Kasi_Lalith_Executive_Profile.pdf",
      btnText: "View Profile",
      bio: "Kasi Lalith is the Founder of Goldman Kasi Group, whose vision and entrepreneurial spirit laid the foundation for the company's success. With a passion for excellence and a strong commitment to integrity, he established the organization with the goal of delivering exceptional value and earning lasting customer trust. His dedication to innovation, quality, and responsible business practices continues to inspire the company's culture and strategic direction. Today, his vision remains the driving force behind Goldman Kasi Group's growth, reputation, and commitment to excellence.",
      pillars: [
        "Visionary Entrepreneurship & Group Foundation",
        "Corporate Integrity & Lasting Customer Trust",
        "Commitment to Quality & Operational Excellence",
        "Responsible Business Practices & Long-term Governance"
      ]
    },
    { name: "K. V. Mukesh Babu", role: "Director", affiliation: "BBI Power Board", image: "/images/k_mukesh.png" },
    { name: "K. V. Chaitanya", role: "Director", affiliation: "BBI Power Board", image: "/images/kv_chaitanya.png" },
    { 
      name: "Sagi Ramesh Babu", 
      role: "Director", 
      affiliation: "Director, Goldman Kasi Group",
      image: "/images/sagi_ramesh_babu.jpg",
      resumePdf: "/Sagi_Ramesh_Babu_Executive_Profile.pdf",
      btnText: "View Profile",
      bio: "Sagi Ramesh Babu serves as the Director of Goldman Kasi Group, providing strategic leadership focused on sustainable growth, operational excellence, and long-term value creation. With a commitment to integrity, innovation, and customer-centric values, he has been instrumental in strengthening the organization's reputation and driving its continued success. Under his leadership, Goldman Kasi Group remains dedicated to delivering excellence while building trusted relationships with clients, partners, and stakeholders across the industry.",
      pillars: [
        "Sustainable Growth & Long-term Value Creation",
        "Operational Excellence & Process Optimization",
        "High-Trust Client & Partner Relationship Building",
        "Corporate Governance & Collaborative Industry Leadership"
      ]
    }
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
              {director.affiliation && (
                <span className="director-affiliation">
                  {director.affiliation}
                </span>
              )}
              {director.resumePdf && (
                <div className="director-card-buttons">
                  <a 
                    href={director.resumePdf} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="director-resume-btn"
                  >
                    <FileText size={14} /> {director.btnText || "View Profile"}
                  </a>
                  {director.bio && (
                    <button 
                      type="button" 
                      onClick={() => setSelectedDirector(director)} 
                      className="director-bio-btn"
                    >
                      <Info size={13} /> Read Bio
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Executive Leadership Profile Modal */}
      <AnimatePresence>
        {selectedDirector && (
          <div className="director-modal-backdrop" onClick={() => setSelectedDirector(null)}>
            <motion.div 
              className="director-modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                type="button" 
                className="director-modal-close"
                onClick={() => setSelectedDirector(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="director-modal-header">
                <img 
                  src={selectedDirector.image} 
                  alt={selectedDirector.name} 
                  className="director-modal-avatar"
                  style={selectedDirector.objectPosition ? { objectPosition: selectedDirector.objectPosition } : {}}
                />
                <div className="director-modal-title-area">
                  <span className="director-modal-badge">
                    <Sparkles size={13} /> Executive Profile
                  </span>
                  <h2>{selectedDirector.name}</h2>
                  <div className="director-modal-role">
                    {selectedDirector.role} &bull; <span className="highlight">{selectedDirector.affiliation}</span>
                  </div>
                </div>
              </div>

              <div className="director-modal-body">
                <h4>About {selectedDirector.name}</h4>
                <div className="director-modal-bio-quote">
                  <p>{selectedDirector.bio}</p>
                </div>

                {selectedDirector.pillars && selectedDirector.pillars.length > 0 && (
                  <div className="director-modal-pillars">
                    <h4>Core Strategic Leadership Focus</h4>
                    <div className="pillars-chips">
                      {selectedDirector.pillars.map((pill, i) => (
                        <div key={i} className="pillar-chip">
                          <span className="pillar-dot"></span>
                          <span>{pill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {selectedDirector.resumePdf && (
                <div className="director-modal-footer">
                  <a 
                    href={selectedDirector.resumePdf} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="director-modal-pdf-btn"
                  >
                    <FileText size={16} /> Open Official Profile PDF <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
