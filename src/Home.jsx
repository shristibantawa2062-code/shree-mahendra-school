import { useState, useEffect } from "react";
import "./Home.css";

/* ── Put your actual school photo path here ──
   e.g. import schoolPhoto from "../assets/school.jpg";
   Then replace SCHOOL_PHOTO_URL below with: schoolPhoto          */
const SCHOOL_PHOTO_URL = "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80";
// ↑ Replace with your real image: import school from "./assets/school.jpg"; then use {school}

const STATS = [
  { val: 800, suffix: "+", label: "Students Enrolled",    icon: "mortarboard", iconBg: "#EEF2FF", iconColor: "#1649B0", underline: "#1649B0" },
  { val: 40,  suffix: "+", label: "Dedicated Teachers",   icon: "teacher",     iconBg: "#EDFBF0", iconColor: "#16A34A", underline: "#22C55E" },
  { val: 30,  suffix: "+", label: "Years of Service",     icon: "medal",       iconBg: "#FFF8EC", iconColor: "#D97706", underline: "#F59E0B" },
  { val: 96,  suffix: "%", label: "SEE Pass Rate (2081)", icon: "chart",       iconBg: "#EEF2FF", iconColor: "#2B6FE8", underline: "#2B6FE8" },
];

const WHY = [
  { icon: "mortarboard", color: "#1649B0", bg: "#EEF2FF", title: "Academic Excellence",  desc: "Consistently high SEE results with multiple distinction holders every year." },
  { icon: "beaker",      color: "#0891B2", bg: "#ECFEFF", title: "Science & Lab",        desc: "Well-equipped physics, chemistry and biology labs for hands-on learning." },
  { icon: "computer",    color: "#6D28D9", bg: "#F5F3FF", title: "Computer Education",   desc: "Dedicated computer lab with modern equipment and internet access." },
  { icon: "sports",      color: "#DC2626", bg: "#FEF2F2", title: "Sports & Activities",  desc: "Football, volleyball, athletics and regular inter-school tournaments." },
  { icon: "music",       color: "#D97706", bg: "#FFFBEB", title: "Cultural Programmes",  desc: "Annual cultural events, debate competitions and community celebrations." },
  { icon: "handshake",   color: "#059669", bg: "#ECFDF5", title: "Community School",     desc: "Fully government-supported community school serving Shukrabare and surroundings." },
];

const FACILITIES = [
  { label: "Science Laboratory", emoji: "🔬" },
  { label: "Computer Lab",       emoji: "💻" },
  { label: "Library",            emoji: "📚" },
  { label: "Sports Ground",      emoji: "⚽" },
  { label: "Classrooms",         emoji: "🏫" },
];

const NOTICES_FULL = [
  { text: "Admissions open for 2082 BS — Nursery to Class 10. Contact the school office.",        date: "Jestha 20, 2082" },
  { text: "SEE Preparation extra classes begin Mangsir 1. All Class 10 students must attend.",    date: "Kartik 28, 2081" },
  { text: "Annual Sports Day scheduled for Poush 15, 2081 BS.",                                   date: "Kartik 21, 2081" },
];

/* ── SVG Icons ── */
function Icon({ name, size = 22, color = "currentColor" }) {
  const paths = {
    mortarboard: <><path d="M12 3L2 8l10 5 10-5-10-5z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/><path d="M6 10.5V16c0 2 2.686 3.5 6 3.5s6-1.5 6-3.5v-5.5" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round"/><path d="M20 8v5" stroke={color} strokeWidth="1.6" strokeLinecap="round"/></>,
    teacher:     <><circle cx="9" cy="7" r="3" stroke={color} strokeWidth="1.6" fill="none"/><path d="M3 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round"/><path d="M17 10l2 2 3-3" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>,
    medal:       <><circle cx="12" cy="10" r="5" stroke={color} strokeWidth="1.6" fill="none"/><path d="M8.5 14.5L7 21l5-2 5 2-1.5-6.5" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/></>,
    chart:       <><path d="M3 20h18" stroke={color} strokeWidth="1.6" strokeLinecap="round"/><path d="M7 20V14M11 20V9M15 20V12M19 20V5" stroke={color} strokeWidth="1.6" strokeLinecap="round"/></>,
    beaker:      <><path d="M9 3h6M9 3v6l-5 10a1 1 0 00.9 1.5h14.2a1 1 0 00.9-1.5L15 9V3" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>,
    computer:    <><rect x="2" y="4" width="20" height="13" rx="2" stroke={color} strokeWidth="1.6" fill="none"/><path d="M8 21h8M12 17v4" stroke={color} strokeWidth="1.6" strokeLinecap="round"/></>,
    sports:      <><circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.6" fill="none"/><path d="M12 3c0 4-3 7-3 9s3 5 3 9M3 12h18" stroke={color} strokeWidth="1.3" fill="none"/></>,
    music:       <><path d="M9 19c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM21 17c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" stroke={color} strokeWidth="1.5" fill="none"/><path d="M9 19V5l12-2v14" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>,
    handshake:   <><path d="M6 9H2v10h4V9zM22 9h-4v10h4V9z" stroke={color} strokeWidth="1.5" fill="none" strokeLinejoin="round"/><path d="M6 11l3-2h3l4 2-2 2H9l-3-2z" stroke={color} strokeWidth="1.5" fill="none" strokeLinejoin="round"/></>,
    arrow:       <><path d="M5 12h14M12 5l7 7-7 7" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>,
    bell:        <><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {paths[name]}
    </svg>
  );
}

function CountUp({ target, suffix = "", duration = 1600 }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let cur = 0;
    const step = target / (duration / 16);
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { setVal(target); clearInterval(t); }
      else setVal(Math.floor(cur));
    }, 16);
    return () => clearInterval(t);
  }, [target, duration]);
  return <>{val}{suffix}</>;
}

export default function Home({ setPage }) {
  return (
    <main>

      {/* ── HERO with school photo ── */}
      <section className="hero">
        <div className="hero-overlay" />

        {/* Real school photo */}
        <img
          src={SCHOOL_PHOTO_URL}
          alt="Shree Mahendra Secondary School building"
          className="hero-photo"
        />

        {/* Text content over the photo */}
        <div className="hero-content">
          <h1 className="hero-title">
            Nurturing Knowledge,<br />
            <span className="hero-title-dim">Building Character.</span>
          </h1>
          <hr className="hero-divider" />
          <p className="hero-desc">
            Shree Mahendra Secondary School, Shukrabare has served the Haraicha Municipality
            community for over three decades — offering quality education from Grade 1 to 10
            with a commitment to academic excellence, discipline, and holistic development.
          </p>
          <div className="hero-btn-row">
            <button className="btn-primary" onClick={() => setPage("Achievements")}>
              View Achievements →
            </button>
            <button className="btn-ghost">About Our School</button>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-wrap">
        <div className="stats-row">
          {STATS.map(st => (
            <div key={st.label} className="stat-card">
              <div className="stat-icon-circle" style={{ background: st.iconBg }}>
                <Icon name={st.icon} size={30} color={st.iconColor} />
              </div>
              <div className="stat-val" style={{ color: "#0A1F44" }}>
                <CountUp target={st.val} /><span style={{ color: "#1649B0", fontWeight: 900 }}>{st.suffix}</span>
              </div>
              <div className="stat-underline" style={{ background: st.underline }} />
              <div className="stat-lbl">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section-white">
        <div className="sec-head">
          <div className="sec-bar" />
          <h2 className="sec-title">Why Choose Our School?</h2>
        </div>
        <p className="sec-sub">A place where every child learns, grows, and shines.</p>
        <div className="why-grid">
          {WHY.map(c => (
            <div key={c.title} className="why-card">
              <div className="why-icon-box" style={{ background: c.bg }}>
                <Icon name={c.icon} size={22} color={c.color} />
              </div>
              <div className="why-title">{c.title}</div>
              <div className="why-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section className="section-off">
        <div className="sec-head">
          <div className="sec-bar" />
          <h2 className="sec-title">Our Facilities</h2>
        </div>
        <p className="sec-sub">Modern infrastructure for quality learning.</p>
        <div className="facilities-row">
          {FACILITIES.map(f => (
            <div key={f.label} className="facility-card">
              <div className="facility-emoji">{f.emoji}</div>
              <div className="facility-label">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRINCIPAL MESSAGE + LATEST NOTICES ── */}
      <section className="section-white two-col-section">
        {/* Principal */}
        <div className="principal-box">
          <div className="principal-avatar">👨‍💼</div>
          <div>
            <p className="principal-quote">
              "At Shree Mahendra Secondary School, we believe that education is not just about academics,
              but about raising responsible citizens with good values and strong character. Together,
              let's build a better tomorrow for our children and our community."
            </p>
            <div className="principal-name">— Mr. Rajan Basnet</div>
            <div className="principal-role">Principal</div>
          </div>
        </div>

        {/* Notices */}
        <div className="notices-box">
          <div className="notices-header">
            <Icon name="bell" size={16} color="#1649B0" />
            <span>Latest Notices</span>
          </div>
          {NOTICES_FULL.map((n, i) => (
            <div key={i} className="notice-item">
              <span className="notice-dot" />
              <div>
                <div className="notice-text">{n.text}</div>
                <div className="notice-date">{n.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <div className="cta-band">
        <div>
          <p className="cta-title">Award-winning school, proud community legacy</p>
          <p className="cta-sub">District and provincial recognition across academics, sports, and culture.</p>
        </div>
        <button className="cta-btn" onClick={() => setPage("Achievements")}>
          View All Achievements →
        </button>
      </div>

    </main>
  );
}