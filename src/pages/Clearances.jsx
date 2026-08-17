import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function Clearances() {
  const clearances = [
    { title: "Techno-Economic Clearance", authority: "Central Electricity Authority (CEA)", date: "16-6-1998" },
    { title: "NOC for Chimney Height (275m)", authority: "Airport Authority of India", date: "11-8-2000" },
    { title: "Permission for Bridge Construction", authority: "Principal Secretary - Transport Roads & Buildings", date: "9-2-1999" },
    { title: "Revised CFE for Establishment", authority: "AP Pollution Control Board", date: "12-3-1999" },
    { title: "Permission to Import Coal", authority: "GOI - Ministry of Power", date: "1-4-1998" },
    { title: "Environmental Clearance", authority: "Ministry of Environment & Forests", date: "4-3-1997" },
    { title: "CRZ Clearance for Enhanced Capacity", authority: "GOAP - EFS & Technology Dept", date: "15-4-1998" },
    { title: "NOC from Fishermen Co-operative", authority: "Nelatur Village Society", date: "15-9-1999" }
  ];

  return (
    <div id="clearances" className="container section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
        style={{ marginBottom: '4rem' }}
      >
        <h1><span className="text-gradient">Permissions & Clearances</span></h1>
        <p>The project has successfully obtained all major site-specific and statutory clearances.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel"
        style={{ overflowX: 'auto', padding: '1rem 2rem 2rem 2rem' }}
      >
        <table className="data-table">
          <thead>
            <tr>
              <th>Description of License/Clearance</th>
              <th>Issuing Authority</th>
              <th>Date of Issue</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {clearances.map((item, index) => (
              <tr key={index}>
                <td style={{ fontWeight: 500 }}>{item.title}</td>
                <td style={{ color: 'var(--text-secondary)' }}>{item.authority}</td>
                <td>{item.date}</td>
                <td>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.85rem' }}>
                    <CheckCircle size={14} /> Active
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
