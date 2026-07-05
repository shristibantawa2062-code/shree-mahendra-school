import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const NOTICES = [
  "Admissions open for 2082 BS — Nursery to Class 10. Contact the school office.",
  "SEE Preparation extra classes begin Mangsir 1. All Class 10 students must attend.",
  "Annual Sports Day scheduled for Poush 15, 2081 BS.",
];

const NAV_LINKS = ["Home", "Courses", "Gallery", "Alumni", "Events", "News"];

function toPath(name) {
  return name === "Home" ? "/" : `/${name.toLowerCase()}`;
}

function Icon({ name, size = 22, color = "currentColor" }) {
  const paths = {
    school:   <><path d="M3 9.5L12 4l9 5.5V20H3V9.5z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/><rect x="9" y="14" width="6" height="6" rx="0.5" stroke={color} strokeWidth="1.6" fill="none"/><path d="M12 4v2M19 9.5V7" stroke={color} strokeWidth="1.6" strokeLinecap="round"/></>,
    map:      <><path d="M12 22s-8-5.5-8-12a8 8 0 0116 0c0 6.5-8 12-8 12z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/><circle cx="12" cy="10" r="2.5" stroke={color} strokeWidth="1.5" fill="none"/></>,
    clock:    <><circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.6" fill="none"/><path d="M12 7v5l3 3" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>,
    phone:    <><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" stroke={color} strokeWidth="1.5" fill="none"/></>,
    bell:     <><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.73 21a2 2 0 01-3.46 0" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>,
    download: <><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 10l5 5 5-5" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15V3" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round"/></>,
    facebook: <><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke={color} strokeWidth="1.5" fill="none" strokeLinejoin="round"/></>,
    youtube:  <><rect x="2" y="5" width="20" height="14" rx="3" stroke={color} strokeWidth="1.5" fill="none"/><path d="M10 9l6 3-6 3V9z" stroke={color} strokeWidth="1.4" fill="none" strokeLinejoin="round"/></>,
    email:    <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke={color} strokeWidth="1.6" fill="none"/><path d="M22 6l-10 7L2 6" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {paths[name]}
    </svg>
  );
}

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [noticeIdx, setNoticeIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setNoticeIdx(i => (i + 1) % NOTICES.length), 4000);
    return () => clearInterval(t);
  }, []);

  function isActive(name) {
    if (name === "Home") return location.pathname === "/";
    return location.pathname === `/${name.toLowerCase()}`;
  }

  return (
    <>
      {/* ── TOP INFO STRIP ── */}
      <div className="top-strip">
        <div className="top-strip-left">
          <span className="top-strip-item">
            <Icon name="map" size={12} color="rgba(255,255,255,0.55)" />
            Shukrabare, Haraicha Municipality, Morang, Koshi Province
          </span>
          <div className="top-strip-divider" />
          <span className="top-strip-item">
            <Icon name="clock" size={12} color="rgba(255,255,255,0.55)" />
            Sun – Fri: 10:00 AM – 4:00 PM
          </span>
          <div className="top-strip-divider" />
          <span className="top-strip-item">
            <Icon name="phone" size={12} color="rgba(255,255,255,0.55)" />
            +977-021-XXXXXX
          </span>
        </div>
        <div className="top-strip-right">
          <div className="top-strip-social"><Icon name="facebook" size={13} color="rgba(255,255,255,0.65)" /></div>
          <div className="top-strip-social"><Icon name="youtube"  size={13} color="rgba(255,255,255,0.65)" /></div>
          <div className="top-strip-social"><Icon name="email"    size={13} color="rgba(255,255,255,0.65)" /></div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <nav className="navbar">
        <div className="nav-brand" onClick={() => navigate("/")}>
          <div className="nav-logo-box">
            <Icon name="school" size={26} color="#fff" />
          </div>
          <div className="nav-brand-text">
            <div className="nav-name">Shree Mahendra Secondary School</div>
            <div className="nav-name-nep">श्री महेन्द्र माध्यमिक विद्यालय</div>
            <div className="nav-sub">Shukrabare, Haraicha, Morang · Est. 2046 BS</div>
          </div>
        </div>

        {/* Hamburger for mobile */}
        <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>

        <div className={`nav-right ${menuOpen ? "open" : ""}`}>
          <div className="nav-links">
            {NAV_LINKS.map(link => (
              <span
                key={link}
                className={`nav-link ${isActive(link) ? "active" : ""}`}
                onClick={() => { navigate(toPath(link)); setMenuOpen(false); }}
              >
                {link}
              </span>
            ))}
          </div>
          <div className="nav-icon-group">
            <span className={`nav-icon-btn ${isActive("Notice") ? "active" : ""}`} onClick={() => { navigate("/notice"); setMenuOpen(false); }} title="Notices">
              <Icon name="bell" size={18} color={isActive("Notice") ? "#1649B0" : "#556080"} />
              <span className="nav-icon-dot" />
            </span>
            <span className={`nav-icon-btn ${isActive("Download") ? "active" : ""}`} onClick={() => { navigate("/download"); setMenuOpen(false); }} title="Downloads">
              <Icon name="download" size={18} color={isActive("Download") ? "#1649B0" : "#556080"} />
            </span>
          </div>
          <button className="nav-contact-btn" onClick={() => { navigate("/contact"); setMenuOpen(false); }}>
            Contact Us
          </button>
        </div>
      </nav>

      {/* ── NOTICE TICKER ── */}
      <div className="ticker">
        <span className="ticker-label" onClick={() => navigate("/notice")}>Notice</span>
        <span className="ticker-text">{NOTICES[noticeIdx]}</span>
        <span className="ticker-link" onClick={() => navigate("/notice")}>View All Notices →</span>
      </div>
    </>
  );
}
