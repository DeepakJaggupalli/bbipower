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
          {/* Brand & Socials Column */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo">
              <img src="/images/logo.jpg" alt="BBI Group" className="footer-logo-img" />
              <span className="footer-brand-name">BBI GROUP</span>
            </a>
            <p className="footer-tagline">
              Pioneering infrastructure, energy generation, natural resources, and technological transformation across India.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" aria-label="X (Twitter)" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
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
            <h4>Businesses</h4>
            <ul>
              <li><a href="#businesses">Infrastructure</a></li>
              <li><a href="#businesses">Information Technology</a></li>
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
