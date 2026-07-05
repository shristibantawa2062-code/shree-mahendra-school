import { useNavigate } from "react-router-dom";
import "./Footer.css";

function Icon({ name, size = 22, color = "currentColor" }) {
  const paths = {
    school:   <><path d="M3 9.5L12 4l9 5.5V20H3V9.5z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/><rect x="9" y="14" width="6" height="6" rx="0.5" stroke={color} strokeWidth="1.6" fill="none"/><path d="M12 4v2M19 9.5V7" stroke={color} strokeWidth="1.6" strokeLinecap="round"/></>,
    map:      <><path d="M12 22s-8-5.5-8-12a8 8 0 0116 0c0 6.5-8 12-8 12z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round"/><circle cx="12" cy="10" r="2.5" stroke={color} strokeWidth="1.5" fill="none"/></>,
    phone:    <><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" stroke={color} strokeWidth="1.5" fill="none"/></>,
    email:    <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke={color} strokeWidth="1.6" fill="none"/><path d="M22 6l-10 7L2 6" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round"/></>,
    clock:    <><circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.6" fill="none"/><path d="M12 7v5l3 3" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>,
    facebook: <><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke={color} strokeWidth="1.5" fill="none" strokeLinejoin="round"/></>,
    youtube:  <><rect x="2" y="5" width="20" height="14" rx="3" stroke={color} strokeWidth="1.5" fill="none"/><path d="M10 9l6 3-6 3V9z" stroke={color} strokeWidth="1.4" fill="none" strokeLinejoin="round"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {paths[name]}
    </svg>
  );
}

const LINK_MAP = {
  "Home": "/",
  "Achievements": "/achievements",
  "About": "/about",
  "Courses": "/courses",
  "Gallery": "/gallery",
  "Alumni": "/alumni",
  "Events": "/events",
  "News": "/news",
  "Contact": "/contact",
  "Notice": "/notice",
  "Download": "/download",
};

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer-main">
      <div className="footer-grid">

        {/* Column 1 — About */}
        <div>
          <div className="footer-logo">
            <div className="footer-logo-box">
              <Icon name="school" size={24} color="#fff" />
            </div>
            <div>
              <div className="footer-school-name">Shree Mahendra<br />Secondary School</div>
              <div className="footer-school-nep">श्री महेन्द्र माध्यमिक विद्यालय</div>
            </div>
          </div>
          <p className="footer-about">
            A government community school serving Shukrabare and Haraicha
            Municipality since 2046 BS, committed to quality education and
            holistic development of every student.
          </p>
          <div className="footer-social-row">
            {[
              { icon: "facebook", label: "Facebook" },
              { icon: "youtube",  label: "YouTube"  },
              { icon: "email",    label: "Email"    },
            ].map(({ icon, label }) => (
              <div key={icon} className="footer-social-btn" title={label}>
                <Icon name={icon} size={14} color="rgba(255,255,255,0.60)" />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <div className="footer-col-title">Quick Links</div>
          <div className="footer-col-bar" />
          {["Home", "Achievements", "About Us", "Courses", "Gallery", "Alumni", "Events", "News", "Contact", "Notice", "Download", "Admissions", "Academics", "Notice Board"].map(link => {
            const displayName = link === "About Us" ? "About" : link;
            const path = LINK_MAP[displayName];
            return (
              <span
                key={link}
                className="footer-link"
                onClick={() => path && navigate(path)}
              >
                › {link}
              </span>
            );
          })}
        </div>

        {/* Column 3 — Academic */}
        <div>
          <div className="footer-col-title">Academic</div>
          <div className="footer-col-bar" />
          {["Grade 1 – 5 (Primary)", "Grade 6 – 8 (Lower Sec.)", "Grade 9 – 10 (Secondary)", "SEE Examination", "Science Stream", "Result & Reports"].map(item => (
            <span key={item} className="footer-link">› {item}</span>
          ))}
        </div>

        {/* Column 4 — Contact */}
        <div>
          <div className="footer-col-title">Contact Us</div>
          <div className="footer-col-bar" />

          <div className="footer-contact-item">
            <div className="footer-contact-icon"><Icon name="map" size={13} color="#2B6FE8" /></div>
            <div>
              <div className="footer-contact-label">Address</div>
              <div className="footer-contact-value">Shukrabare, Haraicha Municipality, Morang, Koshi Province, Nepal</div>
            </div>
          </div>

          <div className="footer-contact-item">
            <div className="footer-contact-icon"><Icon name="phone" size={13} color="#2B6FE8" /></div>
            <div>
              <div className="footer-contact-label">Phone</div>
              <div className="footer-contact-value">+977-021-XXXXXX</div>
            </div>
          </div>

          <div className="footer-contact-item">
            <div className="footer-contact-icon"><Icon name="email" size={13} color="#2B6FE8" /></div>
            <div>
              <div className="footer-contact-label">Email</div>
              <div className="footer-contact-value">info@shreemahendra.edu.np</div>
            </div>
          </div>

          <div className="footer-contact-item">
            <div className="footer-contact-icon"><Icon name="clock" size={13} color="#2B6FE8" /></div>
            <div>
              <div className="footer-contact-label">Office Hours</div>
              <div className="footer-contact-value">Sun – Fri: 10:00 AM – 4:00 PM</div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span className="footer-bottom-text">
          © 2081 BS · Shree Mahendra Secondary School · Shukrabare, Haraicha, Morang · All rights reserved.
        </span>
        <div className="footer-bottom-right">
          <span className="footer-bottom-link">Privacy Policy</span>
          <span className="footer-bottom-link">Terms of Use</span>
          <span className="footer-bottom-link">Sitemap</span>
        </div>
      </div>
    </footer>
  );
}
