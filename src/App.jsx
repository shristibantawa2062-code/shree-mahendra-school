import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Achievements from './pages/Achievements'
import Alumni from './pages/Alumni'
import Footer from './components/Footer'

function App() {
  const [page, setPage] = useState('Home')

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", margin: 0, padding: 0, background: '#F2F5FC' }}>

      <Navbar page={page} setPage={setPage} />

      {page === 'Home'         && <Home         setPage={setPage} />}
      {page === 'About'        && <About                           />}
      {page === 'Achievements' && <Achievements setPage={setPage} />}
      {page === 'Alumni'       && <Alumni                           />}

      <Footer setPage={setPage} />

    </div>
  )
}

export default App