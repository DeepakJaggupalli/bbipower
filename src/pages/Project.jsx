import { motion } from 'framer-motion';
import { Settings, Droplet, Fuel, Activity } from 'lucide-react';

export default function Project() {
  const highlights = [
    { title: "Capacity", value: "520 MW (2 x 260 MW)", icon: <Activity /> },
    { title: "Project Cost", value: "INR 30,000 million (Approx Rs 4200 Cr)", icon: <Settings /> },
    { title: "Fuel Linkage", value: "Imported Coal (Indonesian company)", icon: <Fuel /> },
    { title: "Water Linkage", value: "Sea Water with Desalination", icon: <Droplet /> }
  ];

  return (
    <div className="container section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
        style={{ marginBottom: '4rem' }}
      >
        <h1>Project <span className="text-gradient">Highlights</span></h1>
        <p>Technical specifications and overview of the 520 MW Thermal Power Project</p>
      </motion.div>

      <div className="grid-2">
        {highlights.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel"
            style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}
          >
            <div style={{ color: 'var(--accent-blue)', padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px' }}>
              {item.icon}
            </div>
            <div>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '1rem' }}>{item.title}</h3>
              <p style={{ margin: 0, color: 'var(--text-primary)', fontWeight: '600', fontSize: '1.2rem' }}>{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel"
        style={{ marginTop: '4rem', padding: '3rem' }}
      >
        <h2 style={{ color: 'var(--accent-orange)', marginBottom: '1.5rem' }}>Detailed Overview</h2>
        <p>
          The proposed 2x260 MW coal-based thermal power station by BBI-Power Krishnapatnam Company is designed to utilize imported fuel. The project incorporates state-of-the-art engineering, procurement, and construction (EPC) standards.
        </p>
        <p>
          <strong>Cooling and Water:</strong> The project proposes to use a sea water cooling tower system to provide circulating water for the turbine condensers. This minimizes the impact on the thermal environment of coastal waters. The sweet water requirements will be met by desalinating the sea water.
        </p>
        <p>
          <strong>Power Evacuation:</strong> Power will be pumped into the 400 KV system of the AP Transco, which in turn is connected to the National Grid, ensuring efficient and widespread distribution of the generated electricity.
        </p>
      </motion.div>
    </div>
  );
}
