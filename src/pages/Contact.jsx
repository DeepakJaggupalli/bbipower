import { motion } from 'framer-motion';
import { Landmark } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <div id="contact" className="contact-wrapper">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="contact-video"
      >
        <source src="https://videos.pexels.com/video-files/6522160/6522160-hd_1080_1920_24fps.mp4" type="video/mp4" />
      </video>
      <div className="contact-overlay"></div>
      
      <div className="container section" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
          style={{ marginBottom: '4rem' }}
        >
          <h1><span className="text-gradient">Contact Details</span></h1>
          <p>Get in touch with BBI Power Krishnapatnam Company.</p>
        </motion.div>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel"
          style={{ padding: '3rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Landmark style={{ color: 'var(--accent-orange)' }} size={32} />
            <h2 style={{ margin: 0 }}>Bank Details</h2>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Bank Name:</strong> 
            <p style={{ margin: '0.25rem 0 0 0', color: 'var(--text-secondary)' }}>ICICI Bank</p>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Account Name:</strong> 
            <p style={{ margin: '0.25rem 0 0 0', color: 'var(--text-secondary)' }}>BBI POWER KRISHNAPATNAM COMPANY</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Account Number:</strong> 
            <p style={{ margin: '0.25rem 0 0 0', color: 'var(--text-secondary)' }}>236605000928</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <strong style={{ color: 'var(--text-primary)' }}>IFSC Code:</strong> 
            <p style={{ margin: '0.25rem 0 0 0', color: 'var(--text-secondary)' }}>ICIC0002366</p>
          </div>

          <div>
            <strong style={{ color: 'var(--text-primary)' }}>Branch Address:</strong> 
            <p style={{ margin: '0.25rem 0 0 0', color: 'var(--text-secondary)' }}>
              Moti Nagar Branch<br />
              Plot No. 109, D.No. 13-1-215,<br />
              Moti Nagar, Hyderabad, Telangana, India - 500018
            </p>
          </div>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-light)' }}>
            <h3 style={{ marginBottom: '1rem' }}>Get in touch with us</h3>
            <a 
              href="https://wa.me/917416966659" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-btn"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                style={{ width: '24px', height: '24px' }}
              />
              Chat with Ramesh Babu
            </a>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
