import { motion } from 'framer-motion';
import UserAvatar from './UserAvatar';
import './FeaturedAlumni.css';

const alumni = [
  {
    name: 'Dr. Ram Sharma',
    profession: 'Cardiologist',
    achievement: 'Pioneered cardiac surgery techniques at Teaching Hospital.',
  },
  {
    name: 'Sita Poudel',
    profession: 'Software Engineer',
    achievement: 'Senior engineer at Google working on AI-driven healthcare.',
  },
  {
    name: 'Krishna Thapa',
    profession: 'Professor',
    achievement: 'Published 50+ research papers in international journals.',
  },
  {
    name: 'Anita Gurung',
    profession: 'Entrepreneur',
    achievement: 'Founded EduTech startup impacting 10,000+ students.',
  },
];

export default function FeaturedAlumni() {
  return (
    <section className="fa-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Alumni
        </motion.h2>
        <div className="fa-grid">
          {alumni.map((a, i) => (
            <motion.div
              key={i}
              className="fa-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="fa-card__photo">
                <UserAvatar variant="circular" name={a.name} />
              </div>
              <h3 className="fa-card__name">{a.name}</h3>
              <p className="fa-card__prof">{a.profession}</p>
              <p className="fa-card__achievement">{a.achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}