import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileText, X, ExternalLink, ChevronLeft, ChevronRight, Eye, ZoomIn } from 'lucide-react';
import './Home.css';

export default function Home() {
  const [showBriefModal, setShowBriefModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

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
            className="glass-panel feature-card capacity-home-card"
            onClick={() => {
              window.open('/BBI_Power_Krishnapatnam_Brief_Note_Pages_1_12.pdf', '_blank');
            }}
            title="Click to open official 520 MW Brief Note (Exact Document Pages 1–12)"
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h3>520 MW Capacity</h3>
              <ExternalLink size={16} style={{ color: 'var(--accent-orange)' }} />
            </div>
            <p>Developing a robust 2x260 MW thermal power generation facility to supply essential electricity to the grid.</p>
            
            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
              <a 
                href="/BBI_Power_Krishnapatnam_Brief_Note_Pages_1_12.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="feature-card-btn"
                style={{ textDecoration: 'none' }}
                onClick={(e) => e.stopPropagation()}
              >
                <FileText size={15} /> Open Exact Document (Pages 1–12) <ExternalLink size={13} />
              </a>
              <button 
                type="button" 
                className="feature-card-btn btn-secondary-slide"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(1);
                  setShowBriefModal(true);
                }}
              >
                <Eye size={15} /> View Slides (1–12)
              </button>
            </div>
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

      {/* Exact Document Slide Modal (Pages 1 to 12) */}
      <AnimatePresence>
        {showBriefModal && (
          <div className="brief-modal-backdrop" onClick={() => setShowBriefModal(false)}>
            <motion.div 
              className="brief-modal exact-doc-modal-style"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="brief-modal-header">
                <div className="brief-modal-brand">
                  <img src="/images/logo.jpg" alt="BBI Logo" className="brief-modal-logo" />
                  <div>
                    <span className="brief-modal-badge">
                      <FileText size={12} /> Exact Presentation Document &bull; Slides 1–12
                    </span>
                    <h2>BBI Power Krishnapatnam Company</h2>
                    <p>520 MW Thermal Power Project Brief Note (Original Presentation Slides)</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <a 
                    href="/BBI_Power_Krishnapatnam_Brief_Note_Pages_1_12.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="brief-pdf-action"
                    style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
                  >
                    <FileText size={15} /> Open PDF <ExternalLink size={13} />
                  </a>
                  <button 
                    type="button" 
                    className="brief-modal-close"
                    onClick={() => setShowBriefModal(false)}
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Slide Viewport */}
              <div className="home-slide-viewport">
                <button 
                  type="button" 
                  className="home-slide-nav prev"
                  disabled={currentSlide === 1}
                  onClick={() => setCurrentSlide(prev => Math.max(1, prev - 1))}
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={28} />
                </button>

                <div className="home-slide-wrapper">
                  <img 
                    src={`/images/brief_note_slides/slide_${currentSlide}.png`} 
                    alt={`Slide ${currentSlide} of 12`}
                    className="home-slide-image" 
                  />
                  <div className="home-slide-caption">
                    <span>Page {currentSlide} of 12 (Slide {currentSlide} / 12)</span>
                    <a 
                      href={`/images/brief_note_slides/slide_${currentSlide}.png`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="home-slide-zoom"
                    >
                      <ZoomIn size={14} /> Full Resolution
                    </a>
                  </div>
                </div>

                <button 
                  type="button" 
                  className="home-slide-nav next"
                  disabled={currentSlide === 12}
                  onClick={() => setCurrentSlide(prev => Math.min(12, prev + 1))}
                  aria-label="Next slide"
                >
                  <ChevronRight size={28} />
                </button>
              </div>

              {/* Number Strip */}
              <div className="home-slide-strip">
                {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    type="button"
                    className={`home-page-dot ${currentSlide === num ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(num)}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
