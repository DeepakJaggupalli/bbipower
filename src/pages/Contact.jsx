import { motion } from 'framer-motion';
import { MapPin, Building, Landmark, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
        style={{ marginBottom: '4rem' }}
      >
        <h1><span className="text-gradient">Contact Details</span></h1>
        <p>Get in touch with BBI Power Krishnapatnam Company.</p>
      </motion.div>

      <div className="grid-2">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel"
          style={{ padding: '3rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Building style={{ color: 'var(--accent-orange)' }} size={32} />
            <h2 style={{ margin: 0 }}>Corporate Office</h2>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
            <Landmark style={{ flexShrink: 0, color: 'var(--accent-blue)' }} />
            <p style={{ margin: 0 }}>
              <strong>CIN:</strong> U40109TG1996ULT025658
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
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
        </motion.div>
      </div>
    </div>
  );
}
