import { ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="corporate-footer">
      <div className="container">
        <div className="footer-main-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo">
              <img src="/images/logo.jpg" alt="BBI Group" className="footer-logo-img" />
              <span className="footer-brand-name">BBI GROUP</span>
            </a>
            <p className="footer-tagline">
              Pioneering infrastructure, energy generation, natural resources, and technological transformation across India.
            </p>
          </div>

          {/* Links Column 1: About Us */}
          <div className="footer-links-col">
            <h4>About Us</h4>
            <ul>
              <li><a href="#about">About BBI Group</a></li>
              <li><a href="#about">Chairman's Office</a></li>
              <li><a href="#about">Board of Directors</a></li>
              <li><a href="#about">Project History & Journey</a></li>
            </ul>
          </div>

          {/* Links Column 2: Businesses */}
          <div className="footer-links-col">
            <h4>Upcoming Verticals</h4>
            <ul>
              <li><a href="#businesses">Infrastructure</a></li>
              <li><a href="#businesses">Information Technology</a></li>
              <li><a href="#businesses">AI & Semiconductors Fab</a></li>
              <li><a href="#businesses">Mines & Minerals</a></li>
              <li><a href="#businesses">Oil & Gas Exploration</a></li>
              <li><a href="#businesses">Energy & Utilities</a></li>
              <li><a href="#businesses">Transport & Logistics</a></li>
            </ul>
          </div>

          {/* Links Column 3: Sustainability & Clearances */}
          <div className="footer-links-col">
            <h4>Clearances & ESG</h4>
            <ul>
              <li><a href="#clearances">Techno-Economic Clearance (CEA)</a></li>
              <li><a href="#clearances">Aviation NOC (275m Chimney)</a></li>
              <li><a href="#clearances">AP Pollution Control Board</a></li>
              <li><a href="#clearances">CRZ & Environmental Approvals</a></li>
              <li><a href="#clearances">Fishermen Co-op Society NOC</a></li>
            </ul>
          </div>

          {/* Links Column 4: Contact & Investors */}
          <div className="footer-links-col">
            <h4>Investors & Contact</h4>
            <ul>
              <li><a href="#project">Project Financials (~₹4,900 Cr)</a></li>
              <li><a href="#project">75:25 Debt-Equity Architecture</a></li>
              <li><a href="#contact">Office & Branch Address</a></li>
              <li><a href="#contact">Direct WhatsApp Desk</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2026 BBI Power Krishnapatnam Company / BBI Group. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <a href="#">Legal Disclaimer</a>
            <span className="dot">•</span>
            <a href="#">Privacy Notice</a>
            <span className="dot">•</span>
            <a href="#">Terms & Conditions</a>
            <span className="dot">•</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
