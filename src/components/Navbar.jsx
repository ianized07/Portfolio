import { useState, useEffect } from 'react'

const links = [
  { label: '01. about', href: '#about' },
  { label: '02. skills', href: '#skills' },
  { label: '03. stack', href: '#stack' },
  { label: '04. contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false)
  const [menuOpen, setMenuOpen]       = useState(false)
  const [activeSection, setActive]    = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['hero', 'about', 'skills', 'stack', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.35 }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/90 backdrop-blur-md border-b border-dark-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-mono text-sm flex items-center gap-2 group">
          <span className="text-neon-green glow-green font-bold text-lg">&gt;</span>
          <span className="text-gray-300 group-hover:text-white transition-colors">
            ian<span className="text-neon-green">.</span>murillo
          </span>
          <span className="text-neon-green animate-blink">_</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link transition-all duration-200 ${
                activeSection === l.href.slice(1)
                  ? 'text-neon-green'
                  : ''
              }`}
              style={activeSection === l.href.slice(1) ? { textShadow: '0 0 8px #00ff41' } : {}}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/ianized07"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon text-xs py-2 px-4"
          >
            GitHub
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-neon-green transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-neon-green transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-neon-green transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-md border-t border-dark-border px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-base"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/ianized07"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon text-xs py-2 px-4 w-fit"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  )
}
