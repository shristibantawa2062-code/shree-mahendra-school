import "./Notice.css";

const notices = [
  {
    id: 1,
    title: 'Mid-Term Examination Schedule Published',
    date: '22 June 2026',
    category: 'Academic',
    summary:
      'The detailed timetable for mid-term examinations for Classes 6 to 10 is now available on the school notice board and website.',
  },
  {
    id: 2,
    title: 'Parent-Teacher Meeting on Saturday',
    date: '20 June 2026',
    category: 'General',
    summary:
      'Parents are requested to attend the scheduled meeting to discuss student progress and school activities.',
  },
  {
    id: 3,
    title: 'School Uniform and ID Card Reminder',
    date: '18 June 2026',
    category: 'Administration',
    summary:
      'All students must wear proper uniforms and carry their school ID cards daily.',
  },
];

function NoticePage() {
  return (
    <main className="nc-container">
      <div className="nc-header">
        <div>
          <p className="nc-eyebrow">Notice</p>
          <h1 className="nc-title">Latest Announcements</h1>
        </div>
        <span className="nc-badge">{notices.length} updates</span>
      </div>

      <div className="nc-list">
        {notices.map((notice) => (
          <article key={notice.id} className="nc-card">
            <div className="nc-card-top">
              <div>
                <span className="nc-category">{notice.category}</span>
                <h2 className="nc-card-title">{notice.title}</h2>
              </div>
              <span className="nc-date">{notice.date}</span>
            </div>
            <p className="nc-summary">{notice.summary}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default NoticePage;
