import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BugReportPage from './components/BugReportPage'

function Portfolio() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-dark text-gray-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  )
}

export default function App() {
  const [scrollPct, setScrollPct]       = useState(0)
  const [cursor, setCursor]             = useState({ x: -300, y: -300 })
  const [cursorVisible, setCursorVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const total = el.scrollHeight - el.clientHeight
      setScrollPct(total > 0 ? (el.scrollTop / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onMove  = (e) => { setCursor({ x: e.clientX, y: e.clientY }); setCursorVisible(true) }
    const onLeave = () => setCursorVisible(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollPct}%` }}
      />

      {/* Cursor glow */}
      <div
        className="cursor-glow"
        style={{
          left: cursor.x,
          top: cursor.y,
          opacity: cursorVisible ? 1 : 0,
        }}
      />

      {/* Back-to-top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className="btn-neon"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 9990,
          width: '2.5rem',
          height: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1rem',
          padding: 0,
          opacity: scrollPct > 15 ? 1 : 0,
          pointerEvents: scrollPct > 15 ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        ↑
      </button>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/bug-report" element={<BugReportPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
