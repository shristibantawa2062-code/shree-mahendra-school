import { motion } from 'framer-motion';
import UserAvatar from './UserAvatar';
import './Gallery.css';

export default function Gallery() {
  const items = Array.from({ length: 6 });

  return (
    <section className="gallery-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          School Gallery
        </motion.h2>
        <div className="gallery-grid">
          {items.map((_, i) => (
            <motion.div
              key={i}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <UserAvatar variant="rounded" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}