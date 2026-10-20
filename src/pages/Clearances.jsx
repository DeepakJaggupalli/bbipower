import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Search, ShieldCheck, Building2, Award } from 'lucide-react';
import { clearancesData } from '../data/clearancesData';
import './Clearances.css';

export default function Clearances() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Power & Grid Transmission',
    'Environment & Forests',
    'Pollution Control',
    'CRZ & Enabling Works',
    'Aviation & Defense',
    'Government & Statutory Gazette',
    'Local Community & Panchayat'
  ];

  const filteredClearances = useMemo(() => {
    return clearancesData.filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const term = searchTerm.toLowerCase();
      const matchesSearch = 
        item.title.toLowerCase().includes(term) ||
        item.authority.toLowerCase().includes(term) ||
        item.refNo.toLowerCase().includes(term) ||
        item.slNo.includes(term) ||
        item.date.includes(term);
      return matchesCat && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div id="clearances" className="clearances-page container section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
        style={{ marginBottom: '3.5rem' }}
      >
        <span className="section-kicker" style={{ color: 'var(--accent-orange)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.85rem' }}>
          Statutory Approvals & Compliance
        </span>
        <h1 style={{ marginTop: '0.5rem' }}><span className="text-gradient">Permissions & Clearances</span></h1>
        <p style={{ maxWidth: '750px', margin: '0.75rem auto 0 auto', color: 'var(--text-secondary)' }}>
          Comprehensive statutory clearances, NOCs, and environmental permissions officially granted for the 520 MW BBI Power Krishnapatnam Thermal Power Project across Central, State, Maritime, and Local authorities.
        </p>
      </motion.div>

      {/* Key Stats Counter */}
      <div className="clearances-stats-grid">
        <div className="clearance-stat-card">
          <div className="stat-icon-wrap orange">
            <ShieldCheck size={26} />
          </div>
          <div>
            <div className="stat-val">32</div>
            <div className="stat-lbl">Statutory Clearances Granted</div>
          </div>
        </div>
        <div className="clearance-stat-card">
          <div className="stat-icon-wrap green">
            <CheckCircle size={26} />
          </div>
          <div>
            <div className="stat-val">100%</div>
            <div className="stat-lbl">Active & Validated on Record</div>
          </div>
        </div>
        <div className="clearance-stat-card">
          <div className="stat-icon-wrap blue">
            <Building2 size={26} />
          </div>
          <div>
            <div className="stat-val">15+</div>
            <div className="stat-lbl">Central & State Authorities</div>
          </div>
        </div>
        <div className="clearance-stat-card">
          <div className="stat-icon-wrap purple">
            <Award size={26} />
          </div>
          <div>
            <div className="stat-val">Zero</div>
            <div className="stat-lbl">Legal Impediments / Clean Title</div>
          </div>
        </div>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="clearances-controls">
        <div className="clearances-search-wrapper">
          <Search className="search-icon" size={18} />
          <input 
            type="text" 
            placeholder="Search by license name, authority, or reference number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="clearances-search-input"
          />
        </div>

        <div className="clearances-category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`cat-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Full 32 Clearances Table */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel clearances-table-card"
      >
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '60px' }}>Sl No.</th>
                <th>Description of Licensee & Clearance</th>
                <th>Issuing Authority</th>
                <th>Reference Order No.</th>
                <th>Date of Issue</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredClearances.length > 0 ? (
                filteredClearances.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <span className="sl-badge">#{item.slNo}</span>
                    </td>
                    <td>
                      <div className="clearance-title">{item.title}</div>
                      <span className="clearance-cat-tag">{item.category}</span>
                    </td>
                    <td className="authority-cell">{item.authority}</td>
                    <td>
                      <span className="ref-tag">{item.refNo}</span>
                    </td>
                    <td className="date-cell">{item.date}</td>
                    <td>
                      <span className="status-chip">
                        <CheckCircle size={14} /> Active
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="no-results">
                    No clearances found matching "{searchTerm}". Try a different search keyword.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
