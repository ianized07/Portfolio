import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const TERMINAL_LINES = [
  { text: '$ qa-runner --suite=all --env=production', delay: 0, color: '#00ff41' },
  { text: '', delay: 400 },
  { text: 'Running test suite: Customer Portal v2.4.1', delay: 600, color: '#888' },
  { text: '─────────────────────────────────────────', delay: 900, color: '#222' },
  { text: '  ✓  login form renders correctly          (24ms)', delay: 1100, color: '#00ff41' },
  { text: '  ✓  valid credentials redirect to dashboard (312ms)', delay: 1400, color: '#00ff41' },
  { text: '  ✓  invalid login shows error message    (89ms)', delay: 1700, color: '#00ff41' },
  { text: '  ✓  shipment list loads and paginates    (156ms)', delay: 2000, color: '#00ff41' },
  { text: '  ✓  filters update shipment results      (203ms)', delay: 2300, color: '#00ff41' },
  { text: '  ✓  template creation validates fields   (178ms)', delay: 2600, color: '#00ff41' },
  { text: '  ✓  quotation flow completes end-to-end  (441ms)', delay: 2900, color: '#00ff41' },
  { text: '', delay: 3200 },
  { text: 'Test Suites:  6 passed, 6 total', delay: 3400, color: '#00e5ff' },
  { text: 'Tests:        47 passed, 47 total', delay: 3600, color: '#00e5ff' },
  { text: 'Snapshots:    0 total', delay: 3800, color: '#888' },
  { text: 'Time:         2.847s', delay: 4000, color: '#888' },
  { text: '', delay: 4200 },
  { text: '✨ All systems operational. Bugs: 0. Dev tears: priceless.', delay: 4400, color: '#9d4edd' },
]

export default function Hero() {
  const navigate = useNavigate()
  const [visibleLines, setVisibleLines] = useState([])
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timers = TERMINAL_LINES.map((line, i) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i])
      }, line.delay + 600)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-green/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-purple/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — intro text */}
          <div className="space-y-6">
            <div className="section-tag animate-fade-up" style={{ animationDelay: '0.1s' }}>
              &gt;&gt; initializing portfolio.exe
            </div>

            <div style={{ animation: 'fadeUp 0.7s ease-out 0.2s forwards', opacity: 0 }}>
              <p className="font-mono text-neon-green text-sm mb-2">Hello, world. I'm</p>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                Cliff Ian
                <br />
                <span className="text-neon-green glow-green animate-glow-pulse">Murillo</span>
              </h1>
            </div>

            <div style={{ animation: 'fadeUp 0.7s ease-out 0.4s forwards', opacity: 0 }}>
              <p className="font-mono text-lg text-neon-cyan">
                QA Engineer
                <span className="text-gray-500 mx-2">/</span>
                Bug Whisperer
                <span className="text-gray-500 mx-2">/</span>
                <span className="text-neon-pink">Code Tormentor</span>
              </p>
            </div>

            <div style={{ animation: 'fadeUp 0.7s ease-out 0.6s forwards', opacity: 0 }}>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md font-mono border-l-2 border-neon-green/30 pl-4">
                "Testing isn't just a job; it's a lifestyle of politely
                saying <span className="text-neon-pink">'this is broken'</span> 43 times a day."
              </p>
            </div>

            {/* Stats row */}
            <div className="flex gap-6 pt-2" style={{ animation: 'fadeUp 0.7s ease-out 0.7s forwards', opacity: 0 }}>
              {[
                { val: '47+', label: 'Tests Written' },
                { val: '0', label: 'Bugs Escaped' },
                { val: '∞', label: 'Coffee Consumed' },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-black text-neon-green glow-green font-mono">{val}</div>
                  <div className="text-xs text-gray-600 font-mono mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-4 pt-2" style={{ animation: 'fadeUp 0.7s ease-out 0.9s forwards', opacity: 0 }}>
              <button
                onClick={() => navigate('/bug-report')}
                className="btn-neon btn-neon-filled text-sm"
                title="View Projects"
              >
                Veiw Projeects
              </button>
              <a
                href="https://github.com/ianized07"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon text-sm"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Right — Terminal window */}
          <div className="terminal glow-box" style={{ animation: 'fadeUp 0.7s ease-out 0.3s forwards', opacity: 0 }}>
            {/* Terminal bar */}
            <div className="terminal-bar">
              <span className="terminal-dot" style={{ background: '#ff5f57' }} />
              <span className="terminal-dot" style={{ background: '#febc2e' }} />
              <span className="terminal-dot" style={{ background: '#28c840' }} />
              <span className="font-mono text-xs text-gray-600 ml-3">qa-runner — bash</span>
            </div>

            {/* Terminal body */}
            <div className="terminal-body min-h-[340px]">
              {TERMINAL_LINES.map((line, i) => (
                <div
                  key={i}
                  className={`transition-opacity duration-300 ${
                    visibleLines.includes(i) ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ color: line.color || '#d4d4d4' }}
                >
                  {line.text || <>&nbsp;</>}
                </div>
              ))}
              {visibleLines.length >= TERMINAL_LINES.length && (
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-neon-green">$</span>
                  <span
                    className="inline-block w-2 h-4 bg-neon-green ml-1"
                    style={{ animation: 'blink 1s step-end infinite' }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-700">
          <span className="font-mono text-xs">scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-neon-green/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
