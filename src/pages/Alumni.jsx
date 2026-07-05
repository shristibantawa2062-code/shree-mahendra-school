import { motion } from 'framer-motion';
import { FaCalendarAlt, FaHandshake, FaUsers } from 'react-icons/fa';
import UserAvatar from '../components/UserAvatar';
import Hero from '../components/Hero';
import FeaturedAlumni from '../components/FeaturedAlumni';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import './Alumni.css';

const events = [
  {
    icon: FaCalendarAlt,
    title: 'Annual Alumni Meet',
    date: 'December 2025',
    desc: 'A grand reunion bringing together alumni from all batches for an evening of memories and networking.',
  },
  {
    icon: FaHandshake,
    title: 'Career Seminar',
    date: 'March 2025',
    desc: 'Industry experts and alumni mentors share career guidance and insights with current students.',
  },
  {
    icon: FaUsers,
    title: 'Networking Program',
    date: 'August 2025',
    desc: 'Connect with fellow alumni, build professional relationships, and explore collaboration opportunities.',
  },
];

export default function Alumni() {
  return (
    <>
      <Hero
        layout="default"
        title="Our Alumni"
        subtitle="Celebrating the achievements of our former students who are making a difference in communities around the world. Our alumni embody the values of excellence, integrity, and service."
      />

      <FeaturedAlumni />

      <Testimonials />

      {/* Alumni Events */}
      <section className="events-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Alumni Events
          </motion.h2>
          <div className="events-grid">
            {events.map((event, i) => (
              <motion.div
                key={i}
                className="event-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="event-card__img">
                  <UserAvatar variant="rounded" name={event.title} />
                  <div className="event-card__icon">
                    <event.icon />
                  </div>
                </div>
                <div className="event-card__body">
                  <span className="event-card__date">{event.date}</span>
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Join Our Alumni Network"
        subtitle="Stay connected with your alma mater and fellow alumni. Be part of a growing community of achievers."
        buttonText="Join Now"
        buttonLink="/about"
      />
    </>
  );
}
