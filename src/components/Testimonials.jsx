import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import UserAvatar from './UserAvatar';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Deepak Acharya',
    review: 'Shree Mahendra Secondary School shaped my character and gave me the confidence to pursue my dreams. The teachers were incredibly supportive.',
  },
  {
    name: 'Sunita Thapa',
    review: 'I am proud to be an alumna of this institution. The foundation I received here helped me excel in my higher studies and career.',
  },
  {
    name: 'Rekha Rai',
    review: 'The values of discipline and excellence instilled in me at this school have been the bedrock of my success. Truly grateful.',
  },
];

export default function Testimonials() {
  return (
    <section className="test-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Our Alumni Say
        </motion.h2>
        <div className="test-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="test-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <FaQuoteLeft className="test-card__icon" />
              <p className="test-card__review">&ldquo;{t.review}&rdquo;</p>
              <div className="test-card__author">
                <div className="test-card__author-avatar">
                  <UserAvatar variant="circular" name={t.name} />
                </div>
                <span>{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}