import { motion } from 'framer-motion';

export default function Gallery() {
  const videos = [
    {
      id: 4,
      title: "Factory Emitting Smoke",
      url: "https://videos.pexels.com/video-files/6522160/6522160-hd_1080_1920_24fps.mp4"
    }
  ];

  return (
    <div id="gallery" className="container section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
        style={{ marginBottom: '4rem' }}
      >
        <h1>Media & <span className="text-gradient">Schematics</span></h1>
        <p>A visual overview of the Krishnapatnam Thermal Power Project</p>
      </motion.div>

      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ color: 'var(--accent-blue)', marginBottom: '2rem' }}>Site Footage</h2>
        <div className="grid-2">
          {videos.map((video) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel"
              style={{ overflow: 'hidden', padding: '1rem' }}
            >
              <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: 'var(--text-secondary)' }}>{video.title}</h3>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                controls
                style={{ width: '100%', borderRadius: '8px', background: '#000', aspectRatio: '16/9', objectFit: 'cover' }}
              >
                <source src={video.url} type="video/mp4" />
              </video>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h2 style={{ color: 'var(--accent-orange)', marginBottom: '2rem' }}>Technical Schematics</h2>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel"
          style={{ padding: '1rem', height: '800px' }}
        >
          <iframe 
            src="/project_document.pdf#page=69&zoom=page-fit" 
            width="100%" 
            height="100%" 
            style={{ border: 'none', borderRadius: '8px' }}
            title="Technical Drawings"
          />
        </motion.div>
      </div>
    </div>
  );
}
