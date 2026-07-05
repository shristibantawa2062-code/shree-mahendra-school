import { useState } from 'react';
import './Events.css';

const EVENTS_DATA = [
  {
    id: 1,
    title: "Admission Open",
    description: "Enrollment is now open for the new academic session of Class XI at Shree Mahendra Secondary School. Students seeking admission in Science and Computer Science streams can submit applications online or visit our administrative office.",
    date: "12",
    month: "May",
    year: "2026",
    time: "09:00 AM - 02:00 PM",
    location: "Administrative Block, Shree Mahendra Secondary School",
    category: "Admissions",
    details: "Applicants must bring their SEE grade sheets, character certificates, and passport-sized photographs. Entrance exams details will be shared upon registration.",
  },
  {
    id: 2,
    title: "Orientation Batch 2083",
    description: "Orientation program for the newly admitted students in Class XI. We welcome students and parents to introduce our dynamic faculty, academic curriculum, and college culture.",
    date: "30",
    month: "May",
    year: "2083",
    time: "08:00 AM - 11:30 AM",
    location: "Main Auditorium, Shree Mahendra Secondary School",
    category: "Admissions",
    details: "Attendance is compulsory for all newly enrolled students. Academic calendar, dress code guidelines, and textbooks lists will be distributed during this session.",
  },
  {
    id: 3,
    title: "New Class Schedule Launch",
    description: "Commencement of regular classes for Class XI and XII. The finalized academic routine and section allocations will be published.",
    date: "15",
    month: "Jun",
    year: "2026",
    time: "06:00 AM - 05:00 PM",
    location: "Science & Commerce Blocks",
    category: "Academic",
    details: "Students are required to attend classes in full uniform. Please check your respective notice boards for classroom details and section allocations.",
  },
  {
    id: 4,
    title: "Hackathon 2026 Celebration",
    description: "Celebrating our first-place victory at the National Hackathon 2026! Shree Mahendra's coding team won a grand cash prize of Rs 3 Lakh.",
    date: "20",
    month: "Jun",
    year: "2026",
    time: "10:00 AM - 04:00 PM",
    location: "Computer Lab & Tech Wing",
    category: "Campus Life",
    details: "Includes project presentations by the winning team, guest speech from tech industry leaders, and an interactive coding workshop for junior students.",
  },
  {
    id: 5,
    title: "Science & Tech Exhibition 2026",
    description: "Annual Science and Technology Exhibition showcasing innovative models, robotics, and creative projects designed by our students.",
    date: "05",
    month: "Jul",
    year: "2026",
    time: "09:00 AM - 03:00 PM",
    location: "College Grounds & Labs",
    category: "Campus Life",
    details: "Open to students from all local schools and parents. Interactive stalls, logic games, and live chemistry experiments will be part of the exhibition.",
  },
  {
    id: 6,
    title: "Parents-Teacher Meeting",
    description: "Interactive session between parents and the faculty to discuss academic progress, behavioral developments, and overall student performance.",
    date: "12",
    month: "Jul",
    year: "2026",
    time: "10:00 AM - 01:00 PM",
    location: "Main Auditorium",
    category: "Academic",
    details: "Progress reports for the first term exams will be distributed. Parents are requested to arrive on time to discuss specific details with subject teachers.",
  }
];

function Events() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedEventId, setExpandedEventId] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  const categories = ["All", "Academic", "Admissions", "Campus Life"];

  const handleToggleExpand = (id) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  const triggerToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleAddToCalendar = (e, title) => {
    e.stopPropagation();
    triggerToast(`"${title}" has been successfully simulated in your calendar!`);
  };

  const filteredEvents = EVENTS_DATA.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryStyles = (category) => {
    switch (category) {
      case "Admissions": return "ev-cat-admissions";
      case "Academic": return "ev-cat-academic";
      case "Campus Life": return "ev-cat-campus";
      default: return "";
    }
  };

  const getAccentClass = (category) => {
    switch (category) {
      case "Admissions": return "ev-accent-admissions";
      case "Academic": return "ev-accent-academic";
      case "Campus Life": return "ev-accent-campus";
      default: return "";
    }
  };

  return (
    <main className="ev">
      {toastMessage && (
        <div className="ev-toast">
          <svg className="ev-toast-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="ev-toast-text">{toastMessage}</span>
        </div>
      )}

      <section className="ev-hero">
        <div className="ev-hero-bg" />
        <div className="ev-hero-content">
          <span className="ev-hero-badge">
            <span className="ev-hero-dot" />
            Campus Events
          </span>
          <h1 className="ev-hero-title">
            Shree Mahendra Secondary School <span className="ev-hero-title-accent">Events & Highlights</span>
          </h1>
          <p className="ev-hero-desc">
            Stay updated with our upcoming academic programs, college schedule launches, admissions events, and student achievements.
          </p>
          <div className="ev-hero-stats">
            <div className="ev-hero-stat">
              <span className="ev-hero-stat-val">{EVENTS_DATA.length}</span>
              <span className="ev-hero-stat-lbl">Scheduled Events</span>
            </div>
            <div className="ev-hero-stat">
              <span className="ev-hero-stat-val">2083</span>
              <span className="ev-hero-stat-lbl">Academic Session</span>
            </div>
          </div>
        </div>
      </section>

      <section className="ev-filter">
        <div className="ev-filter-inner">
          <div className="ev-search">
            <svg className="ev-search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search events by title, stream, or location..."
              className="ev-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="ev-search-clear">
                <svg className="ev-search-clear-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          <div className="ev-categories">
            <span className="ev-categories-lbl">Filters:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`ev-cat-btn ${selectedCategory === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="ev-grid-section">
        {filteredEvents.length === 0 ? (
          <div className="ev-empty">
            <div className="ev-empty-icon-box">
              <svg className="ev-empty-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="ev-empty-title">No Events Found</h3>
            <p className="ev-empty-desc">Try selecting another category or refining your search term.</p>
            <button onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }} className="ev-empty-btn">
              Clear Search & Filters
            </button>
          </div>
        ) : (
          <div className="ev-grid">
            {filteredEvents.map((event) => {
              const isExpanded = expandedEventId === event.id;
              return (
                <article
                  key={event.id}
                  onClick={() => handleToggleExpand(event.id)}
                  className={`ev-card ${isExpanded ? "expanded" : ""} ${getAccentClass(event.category)}`}
                >
                  <div className={`ev-card-accent ${getAccentClass(event.category)}`} />

                  <div className={`ev-card-badge ${getCategoryStyles(event.category)}`}>
                    {event.category}
                  </div>

                  <div className="ev-card-top">
                    <div className="ev-date-badge">
                      <span className="ev-date-num">{event.date}</span>
                      <span className="ev-date-month">{event.month}</span>
                    </div>
                    <div className="ev-card-info">
                      <h3 className="ev-card-title">{event.title}</h3>
                    </div>
                    <div className={`ev-expand-icon ${isExpanded ? "open" : ""}`}>
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <p className="ev-card-desc">{event.description}</p>

                  <div className={`ev-details ${isExpanded ? "open" : ""}`}>
                    <div className="ev-details-inner">
                      <p className="ev-details-head">Event details:</p>
                      <p className="ev-details-text">{event.details}</p>
                      <div className="ev-details-actions">
                        <button onClick={(e) => handleAddToCalendar(e, event.title)} className="ev-cal-btn">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                          </svg>
                          Add to Calendar
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="ev-card-footer">
                    <div className="ev-footer-item">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="ev-footer-item" title={event.location}>
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

export default Events;
