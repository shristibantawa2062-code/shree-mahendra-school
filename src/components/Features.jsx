import { motion } from 'framer-motion';
import { FaGraduationCap, FaChalkboardTeacher, FaLaptop, FaShieldAlt } from 'react-icons/fa';
import UserAvatar from './UserAvatar';
import './Features.css';

const features = [
  {
    icon: FaGraduationCap,
    title: 'Quality Education',
    desc: 'Comprehensive curriculum focused on academic excellence, critical thinking, and holistic development of every student.',
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Experienced Teachers',
    desc: 'Dedicated and highly qualified faculty committed to nurturing each student\'s unique potential and academic growth.',
  },
  {
    icon: FaLaptop,
    title: 'Modern Classrooms',
    desc: 'Smart classrooms equipped with digital technology to create an interactive and engaging learning environment.',
  },
  {
    icon: FaShieldAlt,
    title: 'Safe Environment',
    desc: 'Secure campus with a nurturing atmosphere that ensures the safety and well-being of all students.',
  },
];

export default function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="feature-card__img">
                <UserAvatar variant="rounded" name={f.title} />
                <div className="feature-card__icon">
                  <f.icon />
                </div>
              </div>
              <div className="feature-card__body">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}