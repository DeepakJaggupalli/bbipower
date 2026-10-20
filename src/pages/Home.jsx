import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileText, X, ExternalLink, Zap, Building, DollarSign, Calendar, Award } from 'lucide-react';
import './Home.css';

export default function Home() {
  const [showBriefModal, setShowBriefModal] = useState(false);
  const [briefTab, setBriefTab] = useState(0);

  const tabs = [
    { title: "1. Overview & ICB Selection (Slides 1–3)", icon: <Zap size={14} /> },
    { title: "2. Land & Infrastructure (Slides 4–6)", icon: <Building size={14} /> },
    { title: "3. Financial Package & TEC (Slides 6–7)", icon: <DollarSign size={14} /> },
    { title: "4. Historical Timeline 1998–2015 (Slides 8–11)", icon: <Calendar size={14} /> },
    { title: "5. Active Status & Strategic Advantages (Slide 12)", icon: <Award size={14} /> }
  ];

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
            className="glass-panel feature-card"
          >
            <h3>520 MW Capacity</h3>
            <p>Developing a robust 2x260 MW thermal power generation facility to supply essential electricity to the grid.</p>
            <button 
              type="button" 
              className="feature-card-btn"
              onClick={() => {
                setBriefTab(0);
                setShowBriefModal(true);
              }}
            >
              <FileText size={15} /> Read More (Brief Note)
            </button>
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

      {/* Brief Note Dossier Modal (Pages 1 to 12 Extract) */}
      <AnimatePresence>
        {showBriefModal && (
          <div className="brief-modal-backdrop" onClick={() => setShowBriefModal(false)}>
            <motion.div 
              className="brief-modal"
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
                      <FileText size={12} /> Official Project Dossier &bull; Pages 1–12
                    </span>
                    <h2>BBI Power Krishnapatnam Company</h2>
                    <p>520 MW Thermal Power Project Brief Note & Historical Evolution</p>
                  </div>
                </div>
                <button 
                  type="button" 
                  className="brief-modal-close"
                  onClick={() => setShowBriefModal(false)}
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="brief-modal-tabs">
                {tabs.map((tab, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`brief-tab-btn ${briefTab === idx ? 'active' : ''}`}
                    onClick={() => setBriefTab(idx)}
                  >
                    {tab.icon} {tab.title}
                  </button>
                ))}
              </div>

              {/* Modal Body with Tab Contents */}
              <div className="brief-modal-body">
                {briefTab === 0 && (
                  <div className="brief-content-section">
                    <h3 className="brief-section-title">
                      <Zap size={20} style={{ color: 'var(--accent-orange)' }} />
                      Genesis, Sponsors & International Competitive Bidding (Slides 1–3)
                    </h3>
                    
                    <div className="brief-callout">
                      <strong>Executive Genesis (1990–1996):</strong> BBI Power Krishnapatnam Company (BBI Power Inc.), a British Virgin Islands corporation, is currently developing a 520 MW coal-fired thermal power generation facility in Andhra Pradesh, India. The plant is situated on the East Coast of India, on the Bay of Bengal, outside the village of Krishnapatnam. Originally conceived in 1990 by APSEB, the project was offered to international independent developers following the Indian Government's privatization program in 1991.
                    </div>

                    <div className="brief-grid-cards">
                      <div className="brief-metric-card">
                        <div className="metric-label">Selection Process</div>
                        <div className="metric-value">World Bank ICB</div>
                        <div className="metric-desc">Over 20 international companies submitted proposals; shortlisted to 12 in Part A, and narrowed to 4 in Part B evaluated independently by ICICI.</div>
                      </div>
                      <div className="brief-metric-card">
                        <div className="metric-label">IFC Recommendation</div>
                        <div className="metric-value">Two 520 MW Units</div>
                        <div className="metric-desc">The International Finance Corporation (IFC) recommended splitting the original 1020 MW project into two 520 MW facilities to reduce costs and accelerate commissioning.</div>
                      </div>
                      <div className="brief-metric-card">
                        <div className="metric-label">Concession Milestones</div>
                        <div className="metric-value">LOI July 1996</div>
                        <div className="metric-desc">Awarded under International Competitive Bidding with Letter of Intent issued July 1996 by APSEB.</div>
                      </div>
                      <div className="brief-metric-card">
                        <div className="metric-label">Power Purchase Agreement</div>
                        <div className="metric-value">30-Year Active PPA</div>
                        <div className="metric-desc">Initial PPA signed July 9, 1999 with APSEB to purchase all generated electricity for 30 years with variable-rate price structuring.</div>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.7, margin: '0.5rem 0 0 0' }}>
                      <strong>Early Sponsors & Founders:</strong> BBI Power was initially sponsored by Besicorp Group Inc. (Kingston, New York, traded on the American Stock Exchange, founded 1976), alongside international shipping agents managing bulk carriers and fuel transport. The amended PPA accommodates flexible tariff and fuel sourcing adaptations to ensure long-term sustainability.
                    </p>
                  </div>
                )}

                {briefTab === 1 && (
                  <div className="brief-content-section">
                    <h3 className="brief-section-title">
                      <Building size={20} style={{ color: 'var(--accent-blue)' }} />
                      Land Extent, Strategic Location & Civil Infrastructure (Slides 4–6)
                    </h3>

                    <div className="brief-callout">
                      <strong>Maritime Site Coordinates:</strong> The Krishnapatnam "B" Thermal Power Station is situated on the Bay of Bengal coastline, approximately 26 km southeast of Nellore Town in Andhra Pradesh. The parcel is bounded by the Bay of Bengal on the East, the Buckingham Canal on the West, a natural tidal creek on the South, and borders the Krishnapatnam "A" Station on the North.
                    </div>

                    <div className="brief-grid-cards">
                      <div className="brief-metric-card">
                        <div className="metric-label">Total Earmarked Land</div>
                        <div className="metric-value">831.50 Acres</div>
                        <div className="metric-desc">Allocated by the Government of Andhra Pradesh as per G.O. Ms. No. 53 (Dt. 23-01-1993) for power plant, ash pond, and switchyard.</div>
                      </div>
                      <div className="brief-metric-card">
                        <div className="metric-label">Land Valuation</div>
                        <div className="metric-value">₹166.50 Crores</div>
                        <div className="metric-desc">Earmarked at approx. ₹20 Lakhs per acre, with ₹10 Crores registration charges (6%) and ₹150 Crores in site civil engineering works.</div>
                      </div>
                      <div className="brief-metric-card">
                        <div className="metric-label">Buckingham Canal Bridge</div>
                        <div className="metric-value">CDO Approval</div>
                        <div className="metric-desc">Formally cleared by the Central Designs Organization (CDO) of the Irrigation Department (Letter No. CE/CDO/CI/DEEI/03/30-11-1999).</div>
                      </div>
                      <div className="brief-metric-card">
                        <div className="metric-label">High-Tide Line (HTL)</div>
                        <div className="metric-value">NIO Certified</div>
                        <div className="metric-desc">Surveyed and certified by the National Institute of Oceanography (NIO), Goa, establishing clear CRZ compliance boundaries.</div>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.7, margin: '0.5rem 0 0 0' }}>
                      <strong>Enabling Civil Works Executed:</strong> BBI Power built the causeway across the Buckingham Canal and the heavy-duty asphalt approach road leading into the site. This infrastructure facility was immediately put into service for public transport, utilized continuously by the APSRTC to operate buses connecting the local fishing village of Pattapu Palem. Additionally, seawater intake and outfall permits, soil testing, bathymetry, and integrated desalination plant layouts are fully validated.
                    </p>
                  </div>
                )}

                {briefTab === 2 && (
                  <div className="brief-content-section">
                    <h3 className="brief-section-title">
                      <DollarSign size={20} style={{ color: '#10b981' }} />
                      Capital Cost Architecture & Techno-Economic Clearances (Slides 3, 6, 7)
                    </h3>

                    <div className="brief-callout">
                      <strong>Central Electricity Authority (CEA) Concurrence:</strong> The CEA accorded Techno-Economic Clearance (TEC) on June 16, 1998 (Ref. 2/AP/47/96-PAC/6085-6108) for total completed capital expenditure, with clear clauses permitting Foreign Exchange adjustments and actual IDC charges.
                    </div>

                    <div className="brief-grid-cards">
                      <div className="brief-metric-card">
                        <div className="metric-label">Approved TEC Capital Package</div>
                        <div className="metric-value">$355.131M + ₹960.6M</div>
                        <div className="metric-desc">Approved baseline including Interest During Construction (IDC), customs duty, and financing charges.</div>
                      </div>
                      <div className="brief-metric-card">
                        <div className="metric-label">Historical Benchmark (@ ₹35.5/$)</div>
                        <div className="metric-value">₹2,221.22 Crores</div>
                        <div className="metric-desc">Representing ₹4.27 Crores per MW at original exchange parity.</div>
                      </div>
                      <div className="brief-metric-card">
                        <div className="metric-label">Indexed Parity (@ ₹67/$)</div>
                        <div className="metric-value">₹3,900 Crores</div>
                        <div className="metric-desc">Reflecting ₹7.50 Crores per MW (Approx), remaining cost-competitive with state and private benchmarks.</div>
                      </div>
                      <div className="brief-metric-card">
                        <div className="metric-label">Debt Consortium</div>
                        <div className="metric-value">75:25 Debt-Equity</div>
                        <div className="metric-desc">Coordinated with Canara Bank (Bangalore), IDBI, and Indian/Foreign financial institutions.</div>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.7, margin: '0.5rem 0 0 0' }}>
                      <strong>Fuel Sourcing & Lifetime Power Evacuation:</strong> Cleared by the Ministry of Power for the use of imported coal over the full operating life of the plant. Power evacuation connects into AP Transco's 400 KV high-voltage transmission substation connected directly to the Southern Region / National Grid.
                    </p>
                  </div>
                )}

                {briefTab === 3 && (
                  <div className="brief-content-section">
                    <h3 className="brief-section-title">
                      <Calendar size={20} style={{ color: '#8b5cf6' }} />
                      Historical Evolution & Timeline of Government Activities (Slides 8–11)
                    </h3>

                    <div className="brief-timeline">
                      <div className="brief-timeline-card">
                        <div className="card-date">1998 – 2004</div>
                        <div className="card-title">Initial Project Evolution & Consortium Formation</div>
                        <div className="card-body">
                          Mr. Paul B. Pragar met with Mr. A.R. Raju (MD, NCC) to form Joint Venture frameworks; meetings held with Central Electricity Authority (CEA) leadership. PPA assignments discussed with AP Discoms to allocate power as per regional load demand.
                        </div>
                      </div>

                      <div className="brief-timeline-card">
                        <div className="card-date">2005 – 2008</div>
                        <div className="card-title">Site Restoration, Land Payment Notices & US Delegation Deliberations</div>
                        <div className="card-body">
                          Repairs to the Buckingham Canal causeway completed following monsoon flooding. High-level US delegation, including Mr. D. Holliday and Mr. Paul B. Pragar, spent 30 days in India holding meetings with AP Transco, Principal Secretaries, and Hon'ble Chief Minister Dr. Y.S. Rajasekar Reddy, mutually resolving land terms.
                        </div>
                      </div>

                      <div className="brief-timeline-card">
                        <div className="card-date">2009 – 2010</div>
                        <div className="card-title">Administrative Disruption & Acquisition by Sri Kassetty Subramanyam</div>
                        <div className="card-body">
                          Following the untimely death of Dr. Y.S. Rajasekar Reddy, state governance faced prolonged transition under Chief Minister Rosaiah. The US promoters sold out in 2010. Complete company ownership and management was assumed by new Indian leadership under Managing Director <strong>Sri Kassetty Subramanyam</strong>.
                        </div>
                      </div>

                      <div className="brief-timeline-card">
                        <div className="card-date">2013 – 2014</div>
                        <div className="card-title">Fresh Government Appeals & Favorable Legal Validation</div>
                        <div className="card-body">
                          Comprehensive review and representations submitted to Hon'ble Chief Minister Sri N. Kiran Kumar Reddy. Legal opinion sought from the Minister of Laws, who officially rendered a favorable opinion upholding the validity of BBI's rights (Letter No. DD LR No. 012/M (L&C)/10.02.2014).
                        </div>
                      </div>

                      <div className="brief-timeline-card">
                        <div className="card-date">June 2014 – Present</div>
                        <div className="card-title">Government Alignment with Original Allocating Leadership</div>
                        <div className="card-body">
                          Upon formation of the new Andhra Pradesh Government in June 2014, Managing Director Sri K. Subramanyam personally presented all statutory documentation to Hon'ble Chief Minister Sri N. Chandrababu Naidu on 07.07.2014 and 25.08.2014 for expedited implementation.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {briefTab === 4 && (
                  <div className="brief-content-section">
                    <h3 className="brief-section-title">
                      <Award size={20} style={{ color: 'var(--accent-orange)' }} />
                      Strategic Advantage, Active Clearances & Present Project Status (Slide 12)
                    </h3>

                    <div className="brief-callout">
                      <strong>Strategic Political & Legal Alignment:</strong> The highest advantage for BBI Power Krishnapatnam Company is that the project was originally allocated under <strong>Sri N. Chandrababu Naidu</strong> in 1996 under International Competitive Bidding (ICB). The same project for realization is now back with his administration, creating the strongest possible executive alignment.
                    </div>

                    <div className="brief-grid-cards">
                      <div className="brief-metric-card">
                        <div className="metric-label">Statutory Licenses</div>
                        <div className="metric-value">All 32 Active</div>
                        <div className="metric-desc">All primary technical, aviation, defense, and maritime licenses are fully active and in good standing.</div>
                      </div>
                      <div className="brief-metric-card">
                        <div className="metric-label">Power Purchase Agreement</div>
                        <div className="metric-value">Active & Non-Expiring</div>
                        <div className="metric-desc">There is no time-bound expiration in BBI's 30-Year PPA with APSEB/Discoms, and tariff pricing is structured on flexible terms.</div>
                      </div>
                      <div className="brief-metric-card">
                        <div className="metric-label">Environmental Clearance</div>
                        <div className="metric-value">Renewal-Ready</div>
                        <div className="metric-desc">Site-specific environmental clearances proceed through standard administrative renewal immediately upon land physical handover.</div>
                      </div>
                      <div className="brief-metric-card">
                        <div className="metric-label">Executive Leadership</div>
                        <div className="metric-value">Chairman & MD</div>
                        <div className="metric-desc">Steered under Managing Director K. Subramanyam (Direct Office: +91 7661099997).</div>
                      </div>
                    </div>

                    <div style={{ background: '#f1f5f9', borderRadius: '12px', padding: '1.25rem', marginTop: '0.75rem' }}>
                      <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '0.95rem' }}>Corporate Conclusion:</h4>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>
                        Over three decades, substantial financial investments, engineering hours, and legal resources have been expended in establishing this 520 MW power station. Having completed site surveys, soil testing, bridge permissions, CRZ clearances, and cooling water designs, BBI Power remains exceptionally well-positioned to break ground and deliver reliable baseload energy to India's grid.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="brief-modal-footer">
                <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                  Source: <em>NEW BBI COLOUR BRIEF NOTE-May- 2018 (2).pptx</em> &bull; Slides 1 through 12
                </div>
                <a 
                  href="/BBI_Power_Krishnapatnam_Brief_Note.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="brief-pdf-action"
                >
                  <FileText size={16} /> Open Official Brief Note PDF (Pages 1–12) <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
