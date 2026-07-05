import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Achievements from './pages/Achievements'
import Alumni from './pages/Alumni'
import Notice from './pages/Notice'
import Download from './pages/Download'
import Events from './pages/Events'
import News from './pages/News'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", margin: 0, padding: 0, background: '#F2F5FC' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/download" element={<Download />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
