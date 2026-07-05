import "./Download.css";

const downloads = [
  {
    title: 'Admission Form',
    type: 'PDF',
    size: '1.2 MB',
    description: 'Download the student admission application form for new enrollment.',
  },
  {
    title: 'Fee Structure',
    type: 'PDF',
    size: '0.8 MB',
    description: 'View the annual fee details and payment guidelines for all grades.',
  },
  {
    title: 'School Calendar',
    type: 'DOCX',
    size: '1.5 MB',
    description: 'Access the yearly school calendar with holidays and important events.',
  },
  {
    title: 'Student Leave Application',
    type: 'PDF',
    size: '0.6 MB',
    description: 'Download the leave request format for students and guardians.',
  },
];

function DownloadPage() {
  return (
    <main className="dl-container">
      <div className="dl-header">
        <p className="dl-eyebrow">Download</p>
        <h1 className="dl-title">Important Documents</h1>
      </div>

      <div className="dl-grid">
        {downloads.map((item) => (
          <div key={item.title} className="dl-card">
            <div className="dl-card-top">
              <div>
                <h2 className="dl-card-title">{item.title}</h2>
                <p className="dl-desc">{item.description}</p>
              </div>
              <span className="dl-type">{item.type}</span>
            </div>
            <div className="dl-bottom">
              <span className="dl-size">{item.size}</span>
              <button className="dl-btn">Download</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default DownloadPage;
