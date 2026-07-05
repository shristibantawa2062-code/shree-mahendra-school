import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CTA.css';

export default function CTA({ title, subtitle, buttonText, buttonLink }) {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="cta-title">{title}</h2>
          {subtitle && <p className="cta-subtitle">{subtitle}</p>}
          {buttonText && (
            <Link to={buttonLink} className="cta-btn">
              {buttonText}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}