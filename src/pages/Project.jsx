import { motion } from 'framer-motion';
import { Settings, Droplet, Fuel, Activity } from 'lucide-react';

export default function Project() {
  const highlights = [
    { title: "Capacity", value: "520 MW (2 x 260 MW)", icon: <Activity /> },
    { title: "Project Cost", value: "INR 30,000 million (Approx Rs 4900 Cr)", icon: <Settings /> },
    { title: "Fuel Linkage", value: "Imported Coal (Indonesian company)", icon: <Fuel /> },
    { title: "Water Linkage", value: "Sea Water with Desalination", icon: <Droplet /> }
  ];

  return (
    <div id="project" className="container section">
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

      <div className="grid-2" style={{ marginTop: '4rem', alignItems: 'center' }}>
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

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img 
            src="/images/project_1.jpg" 
            alt="Technical Infrastructure" 
            style={{ width: '100%', borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }}
          />
        </motion.div>
      </div>
    </div>
  );
}
