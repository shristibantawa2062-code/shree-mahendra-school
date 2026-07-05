import { motion } from 'framer-motion';
import UserAvatar from '../components/UserAvatar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Statistics from '../components/Statistics';
import CTA from '../components/CTA';
import './About.css';

export default function About() {
  return (
    <>
      <Hero
        layout="split"
        title="About Shree Mahendra Secondary School"
        subtitle="Shree Mahendra Secondary School is one of the most respected educational institutions in Nepal, dedicated to providing quality education, developing responsible citizens, and preparing students for future success through academic excellence and a wide range of extracurricular activities."
        buttons={[{ text: 'Learn More', link: '#story' }]}
      />

      {/* Our Story */}
      <section className="story-section" id="story">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h2>
          <div className="story-layout">
            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <UserAvatar variant="rounded" />
            </motion.div>
            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p>
                Established in 2046 BS, Shree Mahendra Secondary School has been a cornerstone
                of quality education in Shukrabare, Haraicha Municipality, for over three
                decades. What began as a small community school has grown into a respected
                institution known for its academic excellence, dedicated teachers, and
                supportive learning environment.
              </p>
              <p>
                Over the years, the school has guided thousands of students toward higher
                education and successful careers in diverse fields. With a strong commitment to
                holistic education, Shree Mahendra Secondary School continues to nurture
                knowledge, character, and confidence, ensuring that every student is prepared
                not only for academic success but also for a meaningful and responsible future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Features />

      <Gallery />

      <Statistics />

      <CTA
        title="Ready to Join Our School?"
        subtitle="Enroll now and give your child the gift of quality education in a nurturing environment."
        buttonText="Learn More"
        buttonLink="/alumni"
      />
    </>
  );
}
