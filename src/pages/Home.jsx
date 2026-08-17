import { motion } from 'framer-motion';
import { ArrowRight, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div id="home" className="home-page">
      <div className="hero-wrapper">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video"
        >
          <source src="https://videos.pexels.com/video-files/35923575/15240393_1080_1920_30fps.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <section className="hero-section container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content text-center"
            style={{ position: 'relative', zIndex: 2 }}
          >
            <Factory size={64} className="hero-icon" />
            <h1 className="hero-title">
              Powering the Future with <br/>
              <span className="text-gradient">BBI Power Krishnapatnam</span>
            </h1>
            <p className="hero-subtitle">
              A state-of-the-art 520 MW Coal-Fired Thermal Power Project located in the Nellore District of Andhra Pradesh, India.
            </p>
            <div className="hero-actions">
              <a href="#project" className="btn">
                Explore Project <ArrowRight size={18} style={{ verticalAlign: 'middle', marginLeft: '8px' }} />
              </a>
              <a href="#about" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
                Learn About Us
              </a>
            </div>
          </motion.div>
        </section>
      </div>

      <section className="features-section section container">
        <div className="grid-3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel feature-card"
          >
            <h3>520 MW Capacity</h3>
            <p>Developing a robust 2x260 MW thermal power generation facility to supply essential electricity to the grid.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel feature-card"
          >
            <h3>Strategic Location</h3>
            <p>Situated on the East coast of India, on the Bay of Bengal, providing excellent access to seawater cooling and port facilities.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-panel feature-card"
          >
            <h3>Experienced Team</h3>
            <p>Led by a highly experienced Board of Directors with decades of combined expertise in infrastructure and power generation.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
