import { useState, useEffect } from "react";
import { X } from "lucide-react";
import "./Gallery.css";

const categories = ["All", "Campus", "Events", "Laboratories"];

const images = [
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
    category: "Campus",
    title: "School Building",
  },
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    category: "Laboratories",
    title: "Computer Lab",
  },
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
    category: "Campus",
    title: "Campus View",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=400&h=300&fit=crop",
    category: "Events",
    title: "Graduation Ceremony",
  },
  {
    src: "https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=400&h=300&fit=crop",
    category: "Events",
    title: "Annual Sports Day",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop",
    category: "Laboratories",
    title: "Science Lab",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
    category: "Campus",
    title: "Library",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    category: "Events",
    title: "Workshop",
  },
];

export default function Gallery() {
  const [activeCat, setActiveCat] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  const filtered = activeCat === "All" ? images : images.filter(i => i.category === activeCat);

  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedImg]);

  return (
    <div className="gallery-page">
      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImg(null)}>
            <X size={24} />
          </button>
          <img src={selectedImg.src} alt={selectedImg.title} onClick={e => e.stopPropagation()} />
        </div>
      )}
      <div className="gallery-breadcrumb">
        Home <span>&gt;&gt;</span> Gallery
      </div>

      <div className="gallery-body">
        <div className="gallery-main">
          <h1>Gallery</h1>
          <p className="gallery-subtitle">Moments captured at Shree Mahendra Secondary School</p>

          <div className="gallery-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`gallery-tab ${activeCat === cat ? "active" : ""}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((img, i) => (
              <div key={i} className="gallery-item" onClick={() => setSelectedImg(img)}>
                <img src={img.src} alt={img.title} />
                <div className="gallery-overlay">
                  <span>{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-sidebar">
          <h3>Categories</h3>
          <ul>
            {categories.filter(c => c !== "All").map(cat => (
              <li key={cat}>
                <button
                  className={`gallery-sidebar-btn ${activeCat === cat ? "active" : ""}`}
                  onClick={() => setActiveCat(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
