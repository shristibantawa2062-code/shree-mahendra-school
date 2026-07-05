import { useState } from "react";
import "./Courses.css";

const courses = [
    {
        id: "cs",
        title: "+2 Computer Science",
        faculty: "Science",
        image: "https://itshelp.aurora.edu/hc/article_attachments/34542076965783",
        description: "The +2 Computer Science program emphasizes problem-solving, programming, and IT skills. It prepares students for careers in software development, data analysis, AI and other tech-driven fields.",
        subjects: ["Comp. Nepali", "Comp. English", "Comp. Mathematics", "Physics", "Chemistry", "Computer Science (Instead of Biology)"],
    },
    {
        id: "science",
        title: "+2 Science",
        faculty: "Science",
        image: "https://nepaliprabidhi.com/wp-content/uploads/2026/02/lab-setup-nepal-nepali-prabidhi.jpg",
        description: "The +2 Science program covers Physics, Chemistry, Biology and Mathematics. It prepares students for engineering, medicine and other scientific fields.",
        subjects: ["Comp. Nepali", "Comp. English", "Comp. Mathematics", "Physics", "Chemistry", "Biology (Instead of Computer Science)"],
    },
];

export default function Courses() {
    const [active, setActive] = useState("cs");
    const current = courses.find(c => c.id === active);
    const others = courses.filter(c => c.id !== active);

    return (
        <div className="cp">
            <div className="cp-breadcrumb">
                Home <span>&gt;&gt;</span> Courses <span>&gt;&gt;</span> {current.title}
            </div>

            <div className="cp-body">
                <div className="cp-main">
                    <div className="cp-img-wrap">
                        <img src={current.image} alt={current.title} />
                        <div className="cp-triangle" />
                    </div>
                    <h1>{current.title}</h1>
                    <p><strong>Faculty:</strong> {current.faculty}</p>
                    <p>{current.description}</p>
                    <p><strong>Subjects Offered in Class-XI &amp; XII</strong></p>
                    <ul>
                        {current.subjects.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                </div>

                <div className="cp-sidebar">
                    <h3>Other Courses</h3>
                    {others.map(c => (
                        <div key={c.id} className="cp-card" onClick={() => setActive(c.id)}>
                            <img src={c.image} alt={c.title} />
                            <div>
                                <p><strong>{c.title}</strong></p>
                                <p>{c.description.slice(0, 50)}...</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
