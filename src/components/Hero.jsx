import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import UserAvatar from './UserAvatar';
import './Hero.css';

export default function Hero({ title, subtitle, buttons, layout = 'default' }) {
  return (
    <section className={`hero hero--${layout}`}>
      <div className="hero__bg" />
      <div className="container hero__inner">
        {layout === 'split' ? (
          <>
            <motion.div
              className="hero__text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h1 className="hero__title">{title}</h1>
              <p className="hero__subtitle">{subtitle}</p>
              {buttons && (
                <div className="hero__buttons">
                  {buttons.map((btn, i) => (
                    <Link key={i} to={btn.link} className="hero__btn">{btn.text}</Link>
                  ))}
                </div>
              )}
            </motion.div>
            <motion.div
              className="hero__image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            >
              <UserAvatar variant="rounded" />
            </motion.div>
          </>
        ) : (
          <motion.div
            className="hero__center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="hero__title">{title}</h1>
            <p className="hero__subtitle">{subtitle}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}