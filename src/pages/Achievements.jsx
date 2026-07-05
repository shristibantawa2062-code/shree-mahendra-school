import "./Achievements.css";

const ACHIEVEMENTS = [
  { icon: "award",    iconColor: "#1649B0", iconBg: "#EEF2FF", year: "2081 BS", title: "District-Level SEE Excellence",      desc: "Ranked among top performers in Morang district for SEE 2081, with multiple students scoring GPA 3.95+." },
  { icon: "football", iconColor: "#DC2626", iconBg: "#FEF2F2", year: "2080 BS", title: "Inter-School Football Champions",    desc: "Won the Haraicha Municipality inter-school football championship for the second consecutive year." },
  { icon: "mic",      iconColor: "#7C3AED", iconBg: "#F5F3FF", year: "2081 BS", title: "District Debate Competition Winner", desc: "Students placed first in the Koshi Province district-level Nepali debate competition." },
  { icon: "palette",  iconColor: "#D97706", iconBg: "#FFFBEB", year: "2080 BS", title: "Art & Culture Festival Award",       desc: "Awarded best school at the Morang district cultural festival — dance, drama, and fine arts." },
  { icon: "leaf",     iconColor: "#059669", iconBg: "#ECFDF5", year: "2079 BS", title: "Green School Initiative",            desc: "Recognised by Haraicha Municipality for school garden and environmental awareness campaign." },
  { icon: "book",     iconColor: "#2B6FE8", iconBg: "#EEF2FF", year: "2081 BS", title: "100% Scholarship Placement",        desc: "All scholarship-eligible top students from Class 10 successfully placed in higher education." },
];

const MILESTONES = [
  { year: "2046 BS", text: "School established in Shukrabare as a primary-level community school." },
  { year: "2055 BS", text: "Upgraded to lower secondary level — Classes 1 to 8." },
  { year: "2062 BS", text: "Elevated to full secondary school, adding Classes 9 and 10." },
  { year: "2070 BS", text: "Computer lab inaugurated; science labs expanded." },
  { year: "2078 BS", text: "New classroom block constructed; enrolment crossed 700." },
  { year: "2081 BS", text: "Recognised as a model community school in Haraicha Municipality." },
];

const TOP_STATS = [
  { val: "96%",  label: "SEE Pass Rate (2081)", icon: "graduation" },
  { val: "30+",  label: "Years of Service",     icon: "calendar" },
  { val: "800+", label: "Students Enrolled",    icon: "users" },
  { val: "40+",  label: "Dedicated Teachers",   icon: "teacher" },
];

/* ── SVG Icons ── */
function Icon({ name, size = 22, color = "currentColor" }) {
  const paths = {
    trophy:   <><path d="M8 21h8M12 17v4" stroke={color} strokeWidth="1.6" strokeLinecap="round"/><path d="M5 3h14v8a7 7 0 01-14 0V3z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/><path d="M5 6H2v3a3 3 0 003 3M19 6h3v3a3 3 0 01-3 3" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round"/></>,
    football: <><circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.6" fill="none"/><path d="M12 7l2 4-2 2-2-2 2-4z" stroke={color} strokeWidth="1.3" fill="none" strokeLinejoin="round"/></>,
    mic:      <><rect x="9" y="2" width="6" height="11" rx="3" stroke={color} strokeWidth="1.6" fill="none"/><path d="M5 10a7 7 0 0014 0M12 19v3M8 22h8" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round"/></>,
    palette:  <><path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 1.1 0 2-.9 2-2 0-.53-.2-1.01-.52-1.38-.31-.36-.49-.83-.49-1.62 0-1.1.9-2 2-2h2.36C19.74 15 22 12.74 22 10c0-4.42-4.48-8-10-8z" stroke={color} strokeWidth="1.5" fill="none"/></>,
    leaf:     <><path d="M17 8C8 10 5.9 16.17 3.82 19.34A1 1 0 005 21c7-2 13-7 13-13" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round"/></>,
    book:     <><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke={color} strokeWidth="1.6" fill="none"/></>,
    graduation: <><path d="M12 3l8 4-8 4-8-4 8-4z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/><path d="M5 11v4a2 2 0 001 1.73L12 21l6-4.27A2 2 0 0019 15v-4" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round"/><path d="M12 15v6" stroke={color} strokeWidth="1.6" strokeLinecap="round"/></>,
    calendar: <><rect x="3" y="4" width="18" height="17" rx="2" stroke={color} strokeWidth="1.6" fill="none"/><path d="M16 2v4M8 2v4M3 9h18" stroke={color} strokeWidth="1.6" strokeLinecap="round"/></>,
    users: <><path d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round"/><circle cx="10" cy="7" r="3" stroke={color} strokeWidth="1.6" fill="none"/><path d="M20 21v-1a3 3 0 00-2-2.82" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round"/><path d="M14 4.18a3 3 0 010 5.64" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round"/></>,
    teacher: <><circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.6" fill="none"/><path d="M4 20a8 8 0 0116 0" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round"/><path d="M12 12v8" stroke={color} strokeWidth="1.6" strokeLinecap="round"/></>,
    award: <><path d="M12 15a5 5 0 100-10 5 5 0 000 10z" stroke={color} strokeWidth="1.6" fill="none"/><path d="M8.21 13.21L7 21l5-3 5 3-1.21-7.79" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>,
    medal: <><circle cx="12" cy="8" r="5" stroke={color} strokeWidth="1.6" fill="none"/><path d="M8 2h8" stroke={color} strokeWidth="1.6" strokeLinecap="round"/><path d="M10 14l-2 7 4-2 4 2-2-7" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>,
    ribbon: <><path d="M7 4h10v8l-5 3-5-3V4z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/><path d="M7 4l2 2M17 4l-2 2" stroke={color} strokeWidth="1.6" strokeLinecap="round"/></>,
    trophy2:  <><path d="M8 21h8M12 17v4" stroke={color} strokeWidth="1.6" strokeLinecap="round"/><path d="M5 3h14v8a7 7 0 01-14 0V3z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {paths[name] || paths["trophy"]}
    </svg>
  );
}

export default function Achievements() {
  return (
    <main>

      {/* ── ACH HERO ── */}
      <section className="ach-hero">
        <div className="ach-hero-top-rule" />
        <div className="ach-hero-inner">
          <div className="ach-hero-left">
            <div className="ach-eyebrow">
              <Icon name="award" size={14} color="rgba(255,255,255,0.90)" />
              Recognition &amp; Honours
            </div>
            <h1 className="ach-hero-title">Our Achievements</h1>
            <h1 className="ach-hero-title dim">& Milestones.</h1>
            <hr className="ach-divider" />
            <p className="ach-hero-desc">
              Over thirty years, Shree Mahendra Secondary School has earned recognition in academics,
              sports, culture, and community service at local, district, and provincial levels.
            </p>
          </div>
        </div>
      </section>

      {/* ── TOP STATS ── */}
      <section className="ach-stats">
        {TOP_STATS.map(s => (
          <div key={s.label} className="ach-stat">
            <div className="ach-stat-icon">
              <Icon name={s.icon} size={24} color="#1649B0" />
            </div>
            <div className="ach-stat-val">{s.val}</div>
            <div className="ach-stat-lbl">{s.label}</div>
          </div>
        ))}
      </section>

      {/* ── RECENT ACHIEVEMENTS GRID ── */}
      <section className="ach-section">
        <div className="sec-head">
          <div className="sec-bar" />
          <h2 className="sec-title">Recent Achievements</h2>
        </div>
        <p className="sec-sub">Milestones that reflect our commitment to excellence in education and holistic development.</p>
        <div className="ach-grid">
          {ACHIEVEMENTS.map(a => (
            <div key={a.title} className="ach-card">
              <div className="ach-card-top">
                <div className="ach-icon-box" style={{ background: a.iconBg }}>
                  <Icon name={a.icon} size={22} color={a.iconColor} />
                </div>
                <span className="ach-year">{a.year}</span>
              </div>
              <div className="ach-card-title">{a.title}</div>
              <div className="ach-card-desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── JOURNEY / TIMELINE ── */}
      <section className="timeline-section">
        <div className="sec-head" style={{ marginBottom: 6 }}>
          <div className="sec-bar" style={{ background: "#2B6FE8" }} />
          <h2 className="tl-sec-title">Our Journey</h2>
        </div>
        <p className="tl-sec-sub">Key milestones in the growth of our school since founding.</p>

        <div className="timeline">
          {MILESTONES.map((m, i) => (
            <div key={m.year} className="tl-row">
              <div className="tl-year">{m.year}</div>
              <div className="tl-line">
                <div className="tl-dot" />
                {i < MILESTONES.length - 1 && <div className="tl-stem" />}
              </div>
              <div className="tl-text">{m.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AWARDS & RECOGNITION placeholder ── */}
      <section className="awards-section">
        <div className="sec-head">
          <div className="sec-bar" />
          <h2 className="sec-title">Awards &amp; Recognition</h2>
        </div>
        <p className="sec-sub">Certificates, trophies, and recognitions received over the years.</p>
        <div className="awards-placeholder">
          {["medal", "trophy", "award", "medal", "ribbon", "award"].map((iconName, i) => (
            <div key={i} className="award-item">
              <Icon name={iconName} size={28} color="#1649B0" />
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}