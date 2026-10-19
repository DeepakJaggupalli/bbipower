import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Businesses.css';

export default function Businesses() {
  const [activeTab, setActiveTab] = useState('verticals');
  const [activeVertical, setActiveVertical] = useState('infra');

  const verticals = [
    {
      id: 'infra',
      title: 'Infrastructure',
      desc: 'Pioneering mega-infrastructure development including smart urban developments, transport corridors, industrial parks, and world-class architectural marvels.',
      image: '/images/infrastructure.jpg',
      tags: ['Airports', 'Data Centers', 'Defence & Aerospace', 'Road, Metro & Rail', 'Industrial Parks']
    },
    {
      id: 'it',
      title: 'Information Technology',
      desc: 'Empowering enterprises through modern digital workspaces, cloud architecture, AI automation, enterprise software systems, and robust cyber-infrastructure.',
      image: '/images/it_services.jpg',
      tags: ['Enterprise Software', 'Cloud Computing', 'AI & Automation', 'Modern Workspaces', 'Data Analytics']
    },
    {
      id: 'mines',
      title: 'Mines & Minerals',
      desc: 'Securing robust natural resource supply chains with cutting-edge mineral extraction technology, responsible mining practices, and mechanized coal handling.',
      image: '/images/mines_minerals.jpg',
      tags: ['Coal Logistics', 'Mineral Extraction', 'Resource Processing', 'Sustainable Mining', 'Supply Chains']
    },
    {
      id: 'oil-gas',
      title: 'Oil & Gas Exploration',
      desc: 'Expanding upstream and midstream energy capabilities with offshore and onshore exploration, modern drilling platforms, and marine supply logistics.',
      image: '/images/oil_gas.jpg',
      tags: ['Offshore Drilling', 'Hydrocarbon Exploration', 'Marine Logistics', 'Refining Systems', 'Energy Assets']
    },
    {
      id: 'energy',
      title: 'Energy & Utilities',
      desc: 'Anchored by the flagship 520 MW (2x260 MW) thermal power generation facility in Krishnapatnam, providing reliable baseload power to the national grid.',
      image: '/images/project_1.jpg',
      tags: ['520 MW Power Plant', '400 KV Grid Evacuation', 'Supercritical Boilers', 'Seawater Desalination']
    },
    {
      id: 'logistics',
      title: 'Transport & Logistics',
      desc: 'Integrated marine and overland bulk cargo transport, deepwater jetty facilities, and high-speed mechanical conveyors engineered to international standards.',
      image: '/images/project_2.jpg',
      tags: ['Deepwater Jetties', 'High-Speed Conveyors', 'Bulk Cargo Handling', 'Supply Fleet']
    }
  ];

  const entities = [
    { name: 'BBI Infrastructure Projects Ltd', image: '/images/infrastructure.jpg', sector: 'Mega Infrastructure' },
    { name: 'BBI Technologies & IT Solutions', image: '/images/it_services.jpg', sector: 'Information Technology' },
    { name: 'BBI Mining & Natural Resources', image: '/images/mines_minerals.jpg', sector: 'Mines & Minerals' },
    { name: 'BBI Petroleum & Gas Exploration Ltd', image: '/images/oil_gas.jpg', sector: 'Oil & Gas Exploration' },
    { name: 'BBI Power Krishnapatnam Company', image: '/images/project_1.jpg', sector: 'Thermal Energy (520 MW)' },
    { name: 'BBI Maritime Ports & Logistics', image: '/images/project_2.jpg', sector: 'Ports & Logistics' },
    { name: 'BBI Desalination & Utilities Ltd', image: '/images/hero_bg.jpg', sector: 'Water & Utilities' },
    { name: 'BBI Capital & Energy Ventures', image: '/images/project_3.jpg', sector: 'Strategic Ventures' }
  ];

  const currentVertical = verticals.find(v => v.id === activeVertical) || verticals[0];

  return (
    <section id="businesses" className="businesses-section">
      <div className="container">
        {/* Header with Title and Tabs */}
        <div className="businesses-header">
          <div>
            <h2 className="businesses-title">BUSINESSES</h2>
          </div>
          <div className="businesses-tabs">
            <button
              className={`tab-btn ${activeTab === 'verticals' ? 'active' : ''}`}
              onClick={() => setActiveTab('verticals')}
            >
              Verticals
              {activeTab === 'verticals' && <div className="tab-indicator" />}
            </button>
            <button
              className={`tab-btn ${activeTab === 'entities' ? 'active' : ''}`}
              onClick={() => setActiveTab('entities')}
            >
              Group Entities
              {activeTab === 'entities' && <div className="tab-indicator" />}
            </button>
          </div>
        </div>

        {/* Tab 1: Verticals View */}
        {activeTab === 'verticals' && (
          <div className="verticals-container">
            {/* Left Column: Grid of Vertical Tiles */}
            <div className="verticals-grid">
              {verticals.map((item) => {
                const isActive = activeVertical === item.id;
                return (
                  <div
                    key={item.id}
                    className={`vertical-tile ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveVertical(item.id)}
                    style={{
                      backgroundImage: isActive
                        ? 'linear-gradient(135deg, #0284c7 0%, #7c3aed 100%)'
                        : `linear-gradient(to top, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.35)), url(${item.image})`
                    }}
                  >
                    <div className="vertical-tile-content">
                      <span className="tile-title">{item.title}</span>
                      <ArrowRight className={`tile-arrow ${isActive ? 'visible' : ''}`} size={20} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Featured Showcase View */}
            <div className="featured-showcase">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVertical.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="showcase-card"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.4) 40%, rgba(15, 23, 42, 0.1) 100%), url(${currentVertical.image})`
                  }}
                >
                  <div className="showcase-details">
                    <h3 className="showcase-heading">{currentVertical.title}</h3>
                    <p className="showcase-desc">{currentVertical.desc}</p>
                    
                    {/* Bottom Pill Tags matching Reference */}
                    <div className="showcase-tags">
                      {currentVertical.tags.map((tag, idx) => (
                        <span key={idx} className="showcase-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Tab 2: Group Entities / Listed Companies View */}
        {activeTab === 'entities' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="entities-grid"
          >
            {entities.map((company, idx) => (
              <div
                key={idx}
                className="entity-card"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.45) 50%, rgba(15, 23, 42, 0.15) 100%), url(${company.image})`
                }}
              >
                <div className="entity-content">
                  <span className="entity-sector">{company.sector}</span>
                  <h4 className="entity-name">{company.name}</h4>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
