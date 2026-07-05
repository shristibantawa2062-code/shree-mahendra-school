import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaUserGraduate, FaChalkboardTeacher, FaTrophy, FaUsers } from 'react-icons/fa';
import './Statistics.css';

function AnimatedCount({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref} className="stat-number">{count}{suffix}</span>;
}

const stats = [
  { end: 800, suffix: '+', label: 'Students Enrolled', icon: FaUserGraduate },
  { end: 40, suffix: '+', label: 'Dedicated Teachers', icon: FaChalkboardTeacher },
  { end: 30, suffix: '+', label: 'Years of Excellence', icon: FaTrophy },
  { end: 500, suffix: '+', label: 'Alumni', icon: FaUsers },
];

export default function Statistics() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="stat-icon"><s.icon /></div>
              <AnimatedCount end={s.end} suffix={s.suffix} />
              <p className="stat-label">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}