import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Achievements from './Achievements'
import Footer from './Footer'

function App() {
  const [page, setPage] = useState('Home')

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", margin: 0, padding: 0, background: '#F2F5FC' }}>

      <Navbar page={page} setPage={setPage} />

      {page === 'Home'         && <Home         setPage={setPage} />}
      {page === 'Achievements' && <Achievements setPage={setPage} />}

      <Footer setPage={setPage} />

    </div>
  )
}

export default App