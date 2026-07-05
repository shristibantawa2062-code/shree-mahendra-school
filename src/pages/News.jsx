import './News.css';

const news = [
  {
    title: 'Best +2 Award',
    date: 'May 4, 2026',
    text: 'Shree Mahendra Secondary School has been recognized among the Best +2 institutions across Nepal.',
  },
  {
    title: 'Shree Mahendra Secondary School Celebrates Vibrancy',
    date: 'March 18, 2025',
    text: 'Students and staff celebrated Holi with color, music, and community spirit.',
  },
  {
    title: 'Admission Form for Class XI',
    date: 'May 13, 2026',
    text: 'Class XI admission form details are available for the new academic session.',
  },
];

function News() {
  return (
    <main className="nw">
      <div className="nw-container">
        <p className="nw-eyebrow">School Updates</p>
        <h1 className="nw-title">Latest News</h1>
        <p className="nw-subtitle">Recent academic updates and school announcements.</p>

        <div className="nw-grid">
          {news.map((item) => (
            <article className="nw-card" key={item.title}>
              <p className="nw-card-date">{item.date}</p>
              <h2 className="nw-card-title">{item.title}</h2>
              <p className="nw-card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default News;
