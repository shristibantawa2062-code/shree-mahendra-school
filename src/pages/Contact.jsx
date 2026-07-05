import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import "./Contact.css";

const FAQS = [
  { q: "What are the school hours?", a: "School operates Sunday through Friday, from 10:00 AM to 4:00 PM. Office hours are the same." },
  { q: "How do I apply for admission?", a: "Admissions open each year for Jestha (May/June). Visit the school office during working hours with prior academic records and citizenship documents. Contact the office for specific requirements." },
  { q: "What grades does the school offer?", a: "We offer classes from Nursery through Grade 10 (Secondary), with a focus on SEE preparation in the final year." },
  { q: "Is there a computer lab?", a: "Yes, we have a fully equipped computer lab with modern systems and internet access for all students." },
  { q: "What extracurricular activities are available?", a: "Students can participate in sports (football, volleyball, athletics), cultural programmes, debate competitions, and annual events like Sports Day." },
];

function FAQItem({ faq, open, toggle }) {
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-question" onClick={toggle}>
        <span>{faq.q}</span>
        <ChevronDown size={18} className={`faq-chevron ${open ? "rotated" : ""}`} />
      </button>
      <div className="faq-answer" style={{ maxHeight: open ? "200px" : "0" }}>
        <p>{faq.a}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <div className="contact-page">
      <div className="contact-breadcrumb">
        Home <span>&gt;&gt;</span> Contact
      </div>

      <div className="contact-body">
        <div className="contact-main">
          <h1>Get in Touch</h1>
          <p className="contact-subtitle">We'd love to hear from you. Reach out to us using any of the methods below.</p>

          <div className="contact-info-grid">
            <div className="contact-info-card">
              <MapPin size={24} />
              <h3>Address</h3>
              <p>Shree Mahendra, Nepal</p>
            </div>
            <div className="contact-info-card">
              <Phone size={24} />
              <h3>Phone</h3>
              <p>+977-1-2345678</p>
            </div>
            <div className="contact-info-card">
              <Mail size={24} />
              <h3>Email</h3>
              <p>info@shreemahendra.edu.np</p>
            </div>
            <div className="contact-info-card">
              <Clock size={24} />
              <h3>Office Hours</h3>
              <p>Sun - Fri: 7:00 AM - 4:00 PM</p>
            </div>
          </div>

          <form className="contact-form">
            <h2>Send a Message</h2>
            <div className="form-row">
              <input type="text" placeholder="Your Name" className="form-input" />
              <input type="email" placeholder="Your Email" className="form-input" />
            </div>
            <input type="text" placeholder="Subject" className="form-input" />
            <textarea placeholder="Your Message" className="form-textarea" rows={5}></textarea>
            <button type="submit" className="form-btn">Send Message</button>
          </form>

          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {FAQS.map((faq, i) => (
                <FAQItem
                  key={i}
                  faq={faq}
                  open={openFaq === i}
                  toggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="contact-sidebar">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
