import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Droplet, Fuel, Activity, ZoomIn, X, Sliders, Layers, FileText, ExternalLink, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import './Project.css';

export default function Project() {
  const [activeSchematicTab, setActiveSchematicTab] = useState('process');
  const [modalImage, setModalImage] = useState(null);
  const [showExactDocModal, setShowExactDocModal] = useState(false);
  const [currentDocSlide, setCurrentDocSlide] = useState(1);

  const highlights = [
    { title: "Capacity", value: "520 MW (2 x 260 MW)", icon: <Activity /> },
    { title: "Project Cost", value: "INR 30,000 million (Approx Rs 4900 Cr)", icon: <Settings /> },
    { title: "Fuel Linkage", value: "Imported Coal (Indonesian company)", icon: <Fuel /> },
    { title: "Water Linkage", value: "Sea Water with Desalination", icon: <Droplet /> }
  ];

  const facilityPhotos = [
    {
      title: "Hyperbolic Cooling Towers",
      subtitle: "520 MW Natural Draft Seawater Cooling",
      image: "/images/power_cooling_towers_wide.jpg"
    },
    {
      title: "Aerial Plant Complex",
      subtitle: "Cooling Towers & Circulating Water Ponds",
      image: "/images/power_cooling_towers_aerial.jpg"
    },
    {
      title: "Isometric Plant Architecture",
      subtitle: "Boiler, Scrubbers & City Grid Connection",
      image: "/images/power_plant_isometric_grid.png"
    },
    {
      title: "Coal-to-Power Design Flow",
      subtitle: "Pulveriser, Boiler, Stack & Substation",
      image: "/images/power_plant_design_schematic.png"
    },
    {
      title: "Turbine Generator Hall",
      subtitle: "Supercritical Multi-Stage Steam Turbines",
      image: "/images/plant_engineering.jpg"
    },
    {
      title: "Seawater Desalination Plant",
      subtitle: "Reverse Osmosis Coastal Water Treatment",
      image: "/images/energy_desalination.jpg"
    }
  ];

  const schematics = [
    {
      id: 'isometric',
      title: 'Isometric Plant & Grid Layout',
      tag: 'Isometric 3D Process Model',
      image: '/images/power_plant_isometric_grid.png',
      caption: 'Full Isometric Flow: Coal Handling to Boiler, Turbines, Scrubber & Grid',
      details: [
        { label: 'Combustion & Boiler Island', text: 'Finely pulverized coal combusts efficiently in the furnace, heating feedwater into supercritical high-pressure steam.' },
        { label: 'Denitrification System (SCR)', text: 'Selective catalytic reduction system neutralizing nitrogen oxides prior to flue gas passage.' },
        { label: 'Dust Collector & Desulphurisation', text: 'High-voltage electrostatic precipitators and limestone scrubbers eliminating particulates and SO2.' },
        { label: 'Steam Turbine & City Grid', text: 'Multi-stage turbine drives the electrical generator, supplying high-voltage power to regional and urban grids.' }
      ]
    },
    {
      id: 'design',
      title: 'Coal-to-Power Design Flow',
      tag: 'Engineering Flow Diagram',
      image: '/images/power_plant_design_schematic.png',
      caption: 'Design of a Coal-Fired Power Plant (World Coal Association)',
      details: [
        { label: 'Coal Supply & Pulveriser Mill', text: 'Automated conveyor feeds raw coal into ball pulverisers, creating fine coal dust for complete combustion.' },
        { label: 'Water Purification & Boiler', text: 'Ultra-pure demineralized feedwater circulates through boiler tubes, producing high-enthalpy steam.' },
        { label: 'Turbine & Condenser Loop', text: 'Expanding steam spins the turbine; exhausted steam condenses back to water via sea-cooling.' },
        { label: 'Substation & Step-Up Transformer', text: 'Substation steps up generation voltage for efficient long-distance transmission over 400KV grid pylons.' }
      ]
    },
    {
      id: 'elevation',
      title: 'Turbine & Cooling Elevation',
      tag: 'Cross-Section Elevation Model',
      image: '/images/power_plant_elevation_model.png',
      caption: 'Power Plant Elevation Cross-Section & Condenser Cooling Loop (CO2CRC)',
      details: [
        { label: 'Furnace & Exhaust Chimney', text: 'Furnace creates thermal energy; flue gases exit through stack with continuous emission monitoring.' },
        { label: 'Turbine-Generator Set', text: 'Enclosed turbine hall houses tandem high-pressure, intermediate-pressure, and low-pressure turbines.' },
        { label: 'Condenser Cooling Water Circuit', text: 'Circulating cooling water carries rejected heat directly to the hyperbolic cooling tower.' },
        { label: 'Hyperbolic Natural-Draft Tower', text: 'Natural draft pulls ambient air upward, discharging only harmless water vapor into the atmosphere.' }
      ]
    },
    {
      id: 'process',
      title: 'Thermodynamic Cycle Model',
      tag: 'Color Process Schematic',
      image: '/images/power_plant_schematic_color.png',
      caption: 'Thermodynamic Process Flow (Plant Scherer Process Model)',
      details: [
        { label: 'Pulverized Coal Combustion', text: 'Finely ground coal fuels the boiler furnace, converting purified water to high-pressure steam.' },
        { label: 'Multi-Stage Steam Turbine', text: 'Supercritical steam drives the high, intermediate, and low-pressure turbine rotors.' },
        { label: 'Generator & 400KV Transformer', text: 'Mechanical power is converted into electricity and stepped up to 400KV for the national grid.' },
        { label: 'Cooling Tower Condensation', text: 'Condenser recirculates warm water to the natural-draft cooling tower with zero groundwater impact.' }
      ]
    },
    {
      id: 'engineering',
      title: 'Flue Gas & Emission Flowchart',
      tag: 'Engineering Flowchart',
      image: '/images/power_plant_engineering_flowchart.png',
      caption: 'Electrostatic Precipitator & SO2 Scrubber System Flowchart (Masters 1998)',
      details: [
        { label: 'Electrostatic Precipitator (ESP)', text: 'High-voltage electric fields capture 99.8%+ of fly-ash particulates prior to chimney discharge.' },
        { label: 'Limestone SO2 Scrubber', text: 'Flue gas desulphurization (FGD) reacts SO2 with limestone slurry to yield eco-neutral synthetic gypsum.' },
        { label: 'Feedwater Heating Cycle', text: 'Multi-stage economizers and reheaters extract waste thermal energy, boosting overall plant efficiency.' },
        { label: 'Closed-Loop Vacuum Filter', text: 'Automated dewatering and sludge management preventing environmental effluent runoff.' }
      ]
    }
  ];

  const currentSchematic = schematics.find(s => s.id === activeSchematicTab) || schematics[0];

  return (
    <div id="project" className="container section">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
        style={{ marginBottom: '4rem' }}
      >
        <div className="section-kicker">Flagship 520 MW Power Generation</div>
        <h1 className="project-title">Project <span className="text-gradient">Highlights & Architecture</span></h1>
        <p className="project-subtitle">Engineering specifications, thermodynamic process models, and facility layouts of the Krishnapatnam Thermal Power Project.</p>
      </motion.div>

      {/* 4 Highlight Stat Cards */}
      <div className="grid-2">
        {highlights.map((item, index) => {
          const isCapacity = item.title === "Capacity";
          if (isCapacity) {
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel stat-highlight-card capacity-stat-card"
                onClick={() => {
                  window.open('/BBI_Power_Krishnapatnam_Brief_Note_Pages_1_12.pdf', '_blank');
                }}
                title="Click to open official 520 MW Brief Note (Exact Document Pages 1–12)"
              >
                <div className="stat-icon-wrapper capacity-icon-glow">
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div className="capacity-header-row">
                    <h3 className="stat-card-title">{item.title}</h3>
                    <span className="capacity-badge-pill">
                      <FileText size={12} /> Exact Document (Pages 1–12) <ExternalLink size={11} />
                    </span>
                  </div>
                  <p className="stat-card-value capacity-value-highlight">{item.value}</p>
                  <div className="capacity-action-row">
                    <a 
                      href="/BBI_Power_Krishnapatnam_Brief_Note_Pages_1_12.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="capacity-open-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={13} /> Open Exact Document (PDF)
                    </a>
                    <button 
                      type="button" 
                      className="capacity-view-slides-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentDocSlide(1);
                        setShowExactDocModal(true);
                      }}
                    >
                      <Eye size={13} /> View Slides (1–12)
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel stat-highlight-card"
            >
              <div className="stat-icon-wrapper">
                {item.icon}
              </div>
              <div>
                <h3 className="stat-card-title">{item.title}</h3>
                <p className="stat-card-value">{item.value}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Technical Architecture Overview */}
      <div className="grid-2 mt-5" style={{ alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel"
          style={{ padding: '3rem' }}
        >
          <h2 style={{ color: 'var(--accent-orange)', marginBottom: '1.5rem' }}>Technical Architecture</h2>
          <p>
            The proposed 2x260 MW coal-based thermal power station incorporates state-of-the-art engineering, procurement, and construction (EPC) standards. 
          </p>
          <p>
            <strong>Land Availability:</strong> 832 Acres of land have been officially earmarked for the BBI Project, complete with designated areas for the power plant, ash pond, jetty location, and switchyard.
          </p>
          <p>
            <strong>Financing:</strong> The estimated completed capital cost is structured through a Debt to Equity ratio of 75:25, demonstrating strong institutional confidence in the project's viability.
          </p>
          <p>
            <strong>Power Evacuation:</strong> Designed to international and Indian standards, the plant will pump power directly into the 400 KV system of AP Transco, which in turn connects to the National Grid.
          </p>
          <p>
            <strong>Fuel Logistics:</strong> Imported coal will be transported on self-discharging bulk carriers fitted with high-speed cranes and clamshell grabs.
          </p>
          <p>
            <strong>Cooling and Water:</strong> The project utilizes a sea water cooling tower system for turbine condensers, minimizing the thermal impact on coastal waters. Sweet water requirements will be met entirely by desalinating sea water.
          </p>
        </motion.div>

        {/* Featured Facility Card with Zoom Modal Trigger */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="facility-featured-frame"
          onClick={() => setModalImage({ url: '/images/power_cooling_towers_wide.jpg', title: '520 MW Hyperbolic Cooling Towers' })}
        >
          <img 
            src="/images/power_cooling_towers_wide.jpg" 
            alt="520 MW Power Plant Cooling Towers" 
            className="facility-featured-img"
          />
          <div className="facility-frame-overlay">
            <span className="facility-frame-badge"><ZoomIn size={16} /> Click to Expand View</span>
            <h3>Krishnapatnam 520 MW Thermal Station</h3>
            <p>Natural draft hyperbolic seawater cooling towers & transmission switchyard.</p>
          </div>
        </motion.div>
      </div>

      {/* NEW SECTION: Engineering Schematics & Thermodynamic Process Viewer */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="schematics-showcase glass-panel mt-5"
      >
        <div className="schematics-header">
          <div>
            <span className="schematics-kicker"><Sliders size={16} /> ENGINEERING & PROCESS DIAGRAMS</span>
            <h2>Plant Operations & Schematics</h2>
            <p>Interactive thermodynamic generation cycle, flue gas scrubbers, and emissions control flowcharts.</p>
          </div>

          <div className="schematics-tab-switch">
            {schematics.map((item) => (
              <button
                key={item.id}
                className={`schematic-tab-btn ${activeSchematicTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveSchematicTab(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="schematic-viewer-grid">
          {/* Schematic Diagram Display Box */}
          <div 
            className="schematic-image-card"
            onClick={() => setModalImage({ url: currentSchematic.image, title: currentSchematic.caption })}
            title="Click to view full-resolution engineering diagram"
          >
            <div className="schematic-zoom-tag">
              <ZoomIn size={16} /> Click for Full Resolution
            </div>
            <img 
              src={currentSchematic.image} 
              alt={currentSchematic.caption} 
              className="schematic-diagram-img"
            />
            <div className="schematic-caption-bar">
              <strong>{currentSchematic.tag}:</strong> {currentSchematic.caption}
            </div>
          </div>

          {/* Technical Process Breakdown */}
          <div className="schematic-info-pane">
            <h3 className="pane-title">{currentSchematic.title}</h3>
            <p className="pane-desc">
              Engineered for maximum thermal efficiency, low fuel heat-rate, and strict compliance with Ministry of Environment and APPCB environmental norms.
            </p>

            <div className="schematic-steps-list">
              {currentSchematic.details.map((detail, idx) => (
                <div key={idx} className="schematic-step-item">
                  <div className="step-num">{idx + 1}</div>
                  <div>
                    <h4 className="step-label">{detail.label}</h4>
                    <p className="step-text">{detail.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* NEW SECTION: Power Plant Facility Visual Gallery */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-5"
      >
        <div className="text-center" style={{ marginBottom: '2.5rem' }}>
          <span className="schematics-kicker"><Layers size={16} /> FACILITY INFRASTRUCTURE</span>
          <h2>Power Generation Infrastructure Gallery</h2>
          <p>Key architectural components and installations of the 520 MW facility.</p>
        </div>

        <div className="facility-gallery-grid">
          {facilityPhotos.map((photo, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -6 }}
              className="facility-gallery-card"
              onClick={() => setModalImage({ url: photo.image, title: photo.title })}
            >
              <div className="gallery-img-container">
                <img src={photo.image} alt={photo.title} />
                <div className="gallery-zoom-indicator">
                  <ZoomIn size={18} />
                </div>
              </div>
              <div className="gallery-card-content">
                <h4>{photo.title}</h4>
                <span>{photo.subtitle}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Full-Screen Lightbox Modal for Schematics and Photos */}
      <AnimatePresence>
        {modalImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-backdrop"
            onClick={() => setModalImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="lightbox-dialog"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lightbox-header">
                <h3>{modalImage.title}</h3>
                <button 
                  onClick={() => setModalImage(null)} 
                  className="lightbox-close-btn"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="lightbox-body">
                <img src={modalImage.url} alt={modalImage.title} className="lightbox-img" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exact Document Slide Modal (Pages 1–12) */}
      <AnimatePresence>
        {showExactDocModal && (
          <div className="exact-doc-modal-backdrop" onClick={() => setShowExactDocModal(false)}>
            <motion.div 
              className="exact-doc-modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="exact-doc-header">
                <div className="exact-doc-brand">
                  <img src="/images/logo.jpg" alt="BBI Logo" className="exact-doc-logo" />
                  <div>
                    <span className="exact-doc-badge">
                      <FileText size={12} /> Exact Presentation Document &bull; Slides 1–12
                    </span>
                    <h3>BBI Power Krishnapatnam Company — 520 MW Brief Note</h3>
                    <p>Direct presentation document exact slide pages</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <a 
                    href="/BBI_Power_Krishnapatnam_Brief_Note_Pages_1_12.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="exact-doc-pdf-btn"
                  >
                    <FileText size={15} /> Open PDF <ExternalLink size={13} />
                  </a>
                  <button 
                    type="button" 
                    className="exact-doc-close-btn"
                    onClick={() => setShowExactDocModal(false)}
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Slide Display Area */}
              <div className="exact-doc-slide-viewport">
                <button 
                  type="button" 
                  className="exact-doc-nav-arrow prev"
                  disabled={currentDocSlide === 1}
                  onClick={() => setCurrentDocSlide(prev => Math.max(1, prev - 1))}
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={28} />
                </button>

                <div className="exact-doc-slide-container">
                  <img 
                    src={`/images/brief_note_slides/slide_${currentDocSlide}.png`} 
                    alt={`Slide ${currentDocSlide} of 12`}
                    className="exact-doc-slide-img" 
                  />
                  <div className="exact-doc-slide-footer-bar">
                    <span>Page {currentDocSlide} of 12 (Slide {currentDocSlide} / 12)</span>
                    <a 
                      href={`/images/brief_note_slides/slide_${currentDocSlide}.png`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="exact-doc-zoom-link"
                    >
                      <ZoomIn size={14} /> Full Resolution
                    </a>
                  </div>
                </div>

                <button 
                  type="button" 
                  className="exact-doc-nav-arrow next"
                  disabled={currentDocSlide === 12}
                  onClick={() => setCurrentDocSlide(prev => Math.min(12, prev + 1))}
                  aria-label="Next slide"
                >
                  <ChevronRight size={28} />
                </button>
              </div>

              {/* Slide Thumbnail / Number Strip */}
              <div className="exact-doc-strip">
                {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    type="button"
                    className={`exact-doc-page-btn ${currentDocSlide === num ? 'active' : ''}`}
                    onClick={() => setCurrentDocSlide(num)}
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
