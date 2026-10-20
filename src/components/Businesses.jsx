import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import './Businesses.css';

export default function Businesses() {
  const [activeTab, setActiveTab] = useState('verticals');
  const [activeVertical, setActiveVertical] = useState('infra');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const verticals = [
    {
      id: 'infra',
      title: 'Infrastructure',
      badge: 'Upcoming Mega Projects',
      desc: 'Pioneering mega-infrastructure development including smart urban developments, transport corridors, industrial parks, and world-class architectural marvels.',
      thumbnail: '/images/infrastructure.jpg',
      slides: [
        {
          id: 'airports',
          name: 'Airports',
          image: '/images/infra_airport.jpg',
          caption: 'Next-Gen International Airport Hubs & Aerotropolis',
          desc: 'High-capacity international terminal infrastructure engineered for seamless air passenger transit and rapid global air cargo logistics.'
        },
        {
          id: 'datacenter',
          name: 'Data Centers',
          image: '/images/infra_datacenter.jpg',
          caption: 'Hyperscale AI & Cloud Data Campuses',
          desc: 'Pristine Tier-IV green data center facilities with dedicated high-voltage power linkages, advanced liquid cooling, and redundant fiber conduits.'
        },
        {
          id: 'defence',
          name: 'Defence & Aerospace',
          image: '/images/infra_defence.jpg',
          caption: 'Strategic Aerospace & Defence Manufacturing Hubs',
          desc: 'High-tech manufacturing hangars and precision testing facilities supporting satellite systems, avionics, and strategic indigenous engineering.'
        },
        {
          id: 'rail',
          name: 'Road, Metro & Rail',
          image: '/images/infra_metro_rail.jpg',
          caption: 'High-Speed Metro, Rail & Multi-Lane Expressways',
          desc: 'Elevated rapid transit rail corridors, heavy freight links, and multi-tier modern expressway flyovers connecting industrial economic zones.'
        },
        {
          id: 'megastructures',
          name: 'Mega Structures',
          image: '/images/infrastructure.jpg',
          caption: 'Signature Architectural Landmarks & Urban Districts',
          desc: 'World-class modern high-rise engineering, futuristic architectural developments, and comprehensive commercial hubs.'
        }
      ]
    },
    {
      id: 'it',
      title: 'Information Technology',
      badge: 'Upcoming Tech Ventures',
      desc: 'Empowering enterprises through modern digital workspaces, cloud architecture, AI automation, enterprise software systems, and robust cyber-infrastructure.',
      thumbnail: '/images/it_services.jpg',
      slides: [
        {
          id: 'workspaces',
          name: 'Modern Workspaces',
          image: '/images/it_services.jpg',
          caption: 'Next-Gen Digital Delivery & Engineering Workspaces',
          desc: 'State-of-the-art enterprise workspaces engineered for collaborative software development, product incubation, and global digital operations.'
        },
        {
          id: 'ai-automation',
          name: 'AI & Automation',
          image: '/images/it_ai.jpg',
          caption: 'Autonomous Enterprise AI & Neural Operations Centers',
          desc: 'Mission-critical artificial intelligence control rooms, robotic process automation, and real-time big data predictive telemetry.'
        },
        {
          id: 'cloud',
          name: 'Cloud Infrastructure',
          image: '/images/infra_datacenter.jpg',
          caption: 'High-Availability Multi-Cloud & Edge Computing',
          desc: 'Distributed hybrid cloud network backbones providing low-latency compute power and enterprise data resilience.'
        }
      ]
    },
    {
      id: 'mines',
      title: 'Mines & Minerals',
      badge: 'Upcoming Resource Projects',
      desc: 'Securing robust natural resource supply chains with cutting-edge mineral extraction technology, responsible mining practices, and mechanized coal handling.',
      thumbnail: '/images/mines_minerals.jpg',
      slides: [
        {
          id: 'extraction',
          name: 'Mineral Extraction',
          image: '/images/mines_minerals.jpg',
          caption: 'Large-Scale Mechanized Open-Cast Mineral Mining',
          desc: 'Fleet of modern heavy-haul dump trucks and high-capacity hydraulic excavators executing efficient, sustainable mineral extraction.'
        },
        {
          id: 'coal-logistics',
          name: 'Coal Logistics & Silos',
          image: '/images/mines_coal_logistics.jpg',
          caption: 'Mechanized Coal Handling, Storage Silos & Rail Terminals',
          desc: 'Enclosed high-speed conveyor belt networks and automated loading silos moving thousands of metric tons per hour directly to rail corridors.'
        }
      ]
    },
    {
      id: 'oil-gas',
      title: 'Oil & Gas Exploration',
      badge: 'Upcoming Energy Frontiers',
      desc: 'Expanding upstream and midstream energy capabilities with offshore and onshore exploration, modern drilling platforms, and marine supply logistics.',
      thumbnail: '/images/oil_gas.jpg',
      slides: [
        {
          id: 'offshore-drilling',
          name: 'Offshore Rigs',
          image: '/images/oil_gas.jpg',
          caption: 'Deep-Sea Offshore Drilling & Exploration Platforms',
          desc: 'Advanced jack-up and semi-submersible offshore rigs engineered to withstand demanding marine conditions during hydrocarbon discovery.'
        },
        {
          id: 'lng-terminals',
          name: 'LNG Terminals',
          image: '/images/oil_lng_terminal.jpg',
          caption: 'Coastal LNG Storage Spheres & Regasification Terminals',
          desc: 'High-capacity cryogenic spherical gas storage facilities and specialized marine pipeline manifolds ensuring energy security.'
        }
      ]
    },
    {
      id: 'energy',
      title: 'Energy & Utilities',
      badge: 'Flagship Core Project (520 MW)',
      desc: 'Anchored by the flagship 520 MW (2x260 MW) thermal power generation facility in Krishnapatnam, providing reliable baseload power to the national grid.',
      thumbnail: '/images/energy_utilities.jpg',
      slides: [
        {
          id: 'power-plant',
          name: '520 MW Power Plant',
          image: '/images/energy_utilities.jpg',
          caption: 'Krishnapatnam 520 MW Thermal Power Station',
          desc: 'Our flagship 2x260 MW supercritical power plant featuring advanced cooling towers and high-voltage 400KV grid integration.'
        },
        {
          id: 'desalination',
          name: 'Desalination Plant',
          image: '/images/energy_desalination.jpg',
          caption: 'Coastal Seawater Reverse Osmosis Desalination',
          desc: 'Eco-conscious on-site desalination infrastructure providing 100% of industrial and drinking water directly from the Bay of Bengal.'
        },
        {
          id: 'turbine-hall',
          name: 'Turbine Engineering',
          image: '/images/plant_engineering.jpg',
          caption: 'Supercritical Steam Turbine & Generator EPC',
          desc: 'Precision engineered turbine hall featuring high-pressure turbine rotors and electrical generator sets built to global standards.'
        }
      ]
    },
    {
      id: 'logistics',
      title: 'Transport & Logistics',
      badge: 'Upcoming Maritime Projects',
      desc: 'Integrated marine and overland bulk cargo transport, deepwater jetty facilities, and high-speed mechanical conveyors engineered to international standards.',
      thumbnail: '/images/transport_logistics.jpg',
      slides: [
        {
          id: 'deepwater-port',
          name: 'Deepwater Port',
          image: '/images/transport_logistics.jpg',
          caption: 'High-Draft Bulk & Container Maritime Seaport Berths',
          desc: 'State-of-the-art seaport terminal fitted with heavy gantry cranes capable of servicing international Capesize cargo vessels.'
        },
        {
          id: 'conveyors',
          name: 'Conveyor Corridors',
          image: '/images/mines_coal_logistics.jpg',
          caption: 'Automated Bulk Material Handling Systems',
          desc: 'Environmentally enclosed rapid conveyor systems moving bulk fuels and materials with maximum speed and zero ambient loss.'
        },
        {
          id: 'rail-freight',
          name: 'Rail Freight Logistics',
          image: '/images/infra_metro_rail.jpg',
          caption: 'Intermodal Rail-Spur Cargo Distribution',
          desc: 'Seamless rail linkages providing nationwide inland freight movement directly from coastal terminal installations.'
        }
      ]
    }
  ];

  const entities = [
    { name: 'BBI Power Krishnapatnam Company', image: '/images/energy_utilities.jpg', sector: 'Flagship Thermal Power (520 MW)', status: 'Core Flagship' },
    { name: 'BBI Infrastructure Projects Ltd', image: '/images/infrastructure.jpg', sector: 'Mega Infrastructure & Transit', status: 'Upcoming Project' },
    { name: 'BBI Technologies & IT Solutions', image: '/images/it_services.jpg', sector: 'Information Technology & AI', status: 'Upcoming Project' },
    { name: 'BBI Mining & Natural Resources', image: '/images/mines_minerals.jpg', sector: 'Mineral Extraction & Logistics', status: 'Upcoming Project' },
    { name: 'BBI Petroleum & Gas Exploration Ltd', image: '/images/oil_gas.jpg', sector: 'Offshore & LNG Exploration', status: 'Upcoming Project' },
    { name: 'BBI Maritime Ports & Logistics', image: '/images/transport_logistics.jpg', sector: 'Deepwater Ports & Freight', status: 'Upcoming Project' },
    { name: 'BBI Desalination & Utilities Ltd', image: '/images/energy_desalination.jpg', sector: 'Water & Utility Infrastructure', status: 'Upcoming Project' },
    { name: 'BBI Aerospace & Defence Tech', image: '/images/infra_defence.jpg', sector: 'Strategic Technology', status: 'Upcoming Project' }
  ];

  const currentVertical = verticals.find(v => v.id === activeVertical) || verticals[0];
  const slides = currentVertical.slides;
  const currentSlide = slides[activeSlideIndex] || slides[0];

  // Reset active slide index when switching verticals
  const handleVerticalChange = (id) => {
    setActiveVertical(id);
    setActiveSlideIndex(0);
  };

  // Next / Previous slide controls
  const handleNextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Slow Auto-Advance Carousel effect (moves every 5.5 seconds unless paused)
  useEffect(() => {
    if (activeTab !== 'verticals' || isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timerRef.current);
  }, [activeTab, isPaused, slides.length]);

  return (
    <section id="businesses" className="businesses-section">
      <div className="container">
        {/* Header with Title, Tagline and Tabs */}
        <div className="businesses-header">
          <div>
            <div className="upcoming-badge">
              <Sparkles size={16} /> UPCOMING PROJECTS & VENTURES
            </div>
            <h2 className="businesses-title">OUR BUSINESS VERTICALS</h2>
            <p className="businesses-subtitle">
              Alongside our flagship 520 MW Power project, exploring strategic expansion across upcoming national infrastructure, technology, and energy frontiers.
            </p>
          </div>
          <div className="businesses-tabs">
            <button
              className={`tab-btn ${activeTab === 'verticals' ? 'active' : ''}`}
              onClick={() => setActiveTab('verticals')}
            >
              Upcoming Verticals
              {activeTab === 'verticals' && <div className="tab-indicator" />}
            </button>
            <button
              className={`tab-btn ${activeTab === 'entities' ? 'active' : ''}`}
              onClick={() => setActiveTab('entities')}
            >
              Upcoming Ventures
              {activeTab === 'entities' && <div className="tab-indicator" />}
            </button>
          </div>
        </div>

        {/* Tab 1: Verticals & Interactive Slideshow View */}
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
                    onClick={() => handleVerticalChange(item.id)}
                    style={{
                      backgroundImage: isActive
                        ? 'linear-gradient(135deg, #0284c7 0%, #7c3aed 100%)'
                        : `linear-gradient(to top, rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.4)), url(${item.thumbnail})`
                    }}
                  >
                    <div className="vertical-tile-content">
                      <div>
                        <span className="tile-badge">{item.badge}</span>
                        <h4 className="tile-title">{item.title}</h4>
                      </div>
                      <ArrowRight className={`tile-arrow ${isActive ? 'visible' : ''}`} size={20} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Featured Interactive Slideshow */}
            <div 
              className="featured-showcase"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentVertical.id}-${activeSlideIndex}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45 }}
                  className="showcase-card"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(15, 23, 42, 0.94) 0%, rgba(15, 23, 42, 0.45) 45%, rgba(15, 23, 42, 0.2) 100%), url(${currentSlide.image})`
                  }}
                >
                  {/* Top Status & Controls Bar */}
                  <div className="showcase-top-bar">
                    <span className="showcase-status-badge">
                      <span className="pulse-dot"></span> UPCOMING PROJECT: {currentVertical.title}
                    </span>

                    {/* Prev / Next Navigation Arrows */}
                    <div className="slider-arrows">
                      <button 
                        onClick={handlePrevSlide} 
                        className="slider-nav-btn" 
                        aria-label="Previous image"
                        title="Previous Image"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button 
                        onClick={handleNextSlide} 
                        className="slider-nav-btn" 
                        aria-label="Next image"
                        title="Next Image"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Middle / Bottom Details */}
                  <div className="showcase-details">
                    <span className="slide-counter">
                      Photo {activeSlideIndex + 1} of {slides.length} • {currentSlide.name}
                    </span>
                    <h3 className="showcase-heading">{currentSlide.caption}</h3>
                    <p className="showcase-desc">{currentSlide.desc}</p>
                    
                    {/* Interactive Sub-Project Pills (Click to switch directly to that photo!) */}
                    <div className="sub-projects-label">
                      <span>Click to view photos & upcoming project sectors:</span>
                    </div>
                    <div className="showcase-tags">
                      {slides.map((slide, idx) => {
                        const isCurrent = activeSlideIndex === idx;
                        return (
                          <button
                            key={slide.id}
                            type="button"
                            onClick={() => setActiveSlideIndex(idx)}
                            className={`showcase-pill ${isCurrent ? 'active' : ''}`}
                          >
                            {slide.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Tab 2: Group Entities / Upcoming Ventures View */}
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
                  backgroundImage: `linear-gradient(to top, rgba(15, 23, 42, 0.94) 0%, rgba(15, 23, 42, 0.5) 50%, rgba(15, 23, 42, 0.2) 100%), url(${company.image})`
                }}
              >
                <div className="entity-content">
                  <span className={`entity-status-tag ${company.status.includes('Core') ? 'core' : 'upcoming'}`}>
                    {company.status}
                  </span>
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
