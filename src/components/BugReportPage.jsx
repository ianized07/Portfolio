import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const FIELD_ROWS = [
  { label: 'Bug ID',       value: 'QA-404',                              color: '#ff006e' },
  { label: 'Title',        value: 'Button Label Contains Critical Typo', color: '#fff' },
  { label: 'Reported By',  value: 'Ian Murillo — QA Sentinel v1.0',      color: '#00e5ff' },
  { label: 'Environment',  value: 'Production (portfolio.exe)',           color: '#888' },
  { label: 'Status',       value: 'WONT FIX — By Design™',               color: '#febc2e' },
  { label: 'Severity',     value: 'CRITICAL (to grammar purists)',        color: '#ff006e' },
  { label: 'Priority',     value: 'P0 — Immediate (you clicked it)',      color: '#ff006e' },
]

export default function BugReportPage() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const [stamp, setStamp]     = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 100)
    const t2 = setTimeout(() => setStamp(true), 1400)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <div className="min-h-screen bg-dark grid-bg flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-neon-pink/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-neon-green/5 blur-3xl pointer-events-none" />

      <div
        className="w-full max-w-2xl transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
      >
        {/* Terminal window */}
        <div className="terminal" style={{ boxShadow: '0 0 40px rgba(255,0,110,0.15)' }}>

          {/* Title bar */}
          <div className="terminal-bar" style={{ borderBottomColor: '#ff006e33' }}>
            <span className="terminal-dot" style={{ background: '#ff5f57' }} />
            <span className="terminal-dot" style={{ background: '#febc2e' }} />
            <span className="terminal-dot" style={{ background: '#28c840' }} />
            <span className="font-mono text-xs ml-3" style={{ color: '#ff006e' }}>
              bug-report-QA-404.log — AUTOMATED DETECTION
            </span>
          </div>

          <div className="terminal-body space-y-0 relative">

            {/* Stamped badge — fades in after delay */}
            <div
              className="absolute top-4 right-4 transition-all duration-500 select-none pointer-events-none"
              style={{
                opacity: stamp ? 1 : 0,
                transform: stamp ? 'rotate(-12deg) scale(1)' : 'rotate(-12deg) scale(1.4)',
              }}
            >
              <div
                className="border-4 rounded px-3 py-1 font-mono font-black text-xs tracking-widest uppercase"
                style={{ borderColor: '#00ff41', color: '#00ff41', textShadow: '0 0 8px #00ff41' }}
              >
                BUG FOUND
              </div>
            </div>

            {/* Header */}
            <div className="pb-3 mb-4" style={{ borderBottom: '1px solid #1e1e1e' }}>
              <p className="font-mono text-xs text-gray-600">
                <span className="text-neon-pink">$</span> defect-tracker --scan --verbose
              </p>
              <p className="font-mono text-xs text-gray-700 mt-1">
                Scanning portfolio for anomalies... <span className="text-neon-pink">DEFECT DETECTED.</span>
              </p>
            </div>

            {/* Field table */}
            <div className="space-y-2 mb-5">
              {FIELD_ROWS.map(({ label, value, color }) => (
                <div key={label} className="flex gap-3 font-mono text-xs">
                  <span className="text-gray-600 shrink-0 w-28">{label}</span>
                  <span className="text-gray-600 shrink-0">:</span>
                  <span style={{ color }}>{value}</span>
                </div>
              ))}
              <div className="flex gap-3 font-mono text-xs">
                <span className="text-gray-600 shrink-0 w-28">Date Filed</span>
                <span className="text-gray-600 shrink-0">:</span>
                <span className="text-gray-400">{today}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-4" style={{ borderTop: '1px solid #1e1e1e' }} />

            {/* Description */}
            <div className="space-y-3 font-mono text-xs">
              <p className="text-neon-cyan">## DESCRIPTION</p>
              <p className="text-gray-400 pl-2">
                A suspicious button labeled{' '}
                <span className="text-neon-pink line-through">"Veiw Projeects"</span>{' '}
                was found on the hero section of this portfolio. The label contains
                two (2) confirmed typos. User clicked it anyway.
                <span className="text-neon-green"> Classic tester behavior.</span>
              </p>

              <p className="text-neon-cyan mt-3">## STEPS TO REPRODUCE</p>
              <div className="text-gray-400 pl-2 space-y-1">
                <p><span className="text-neon-green">1.</span> Open portfolio homepage</p>
                <p><span className="text-neon-green">2.</span> Locate button with suspiciously bad spelling</p>
                <p><span className="text-neon-green">3.</span> Click it with professional curiosity</p>
                <p><span className="text-neon-green">4.</span> Arrive here. You are the bug now.</p>
              </div>

              <p className="text-neon-cyan mt-3">## EXPECTED BEHAVIOR</p>
              <p className="text-gray-400 pl-2">Button is spelled correctly. Projects are displayed.</p>

              <p className="text-neon-cyan mt-3">## ACTUAL BEHAVIOR</p>
              <p className="text-gray-400 pl-2">
                User is redirected to a bug report. No projects exist here.
                Only a QA engineer's sense of humor and mild chaos.
              </p>

              <p className="text-neon-cyan mt-3">## ROOT CAUSE</p>
              <p className="text-gray-400 pl-2">
                Developer introduced typo intentionally. Code review approved it.
                <span className="text-neon-purple"> Unit tests passed.</span>{' '}
                <span className="text-neon-pink">Integrity: questionable.</span>
              </p>
            </div>

            {/* Divider */}
            <div className="my-5" style={{ borderTop: '1px solid #1e1e1e' }} />

            {/* Resolution / Congratulations */}
            <div className="space-y-3">
              <p className="font-mono text-xs text-neon-cyan">## RESOLUTION</p>
              <div
                className="rounded p-4 space-y-2"
                style={{ background: '#0a0a0a', border: '1px solid #00ff4133' }}
              >
                <p className="font-mono text-sm font-bold text-neon-green" style={{ textShadow: '0 0 8px #00ff41' }}>
                  ✅ CONGRATULATIONS — BUG CONFIRMED IN PRODUCTION
                </p>
                <p className="font-mono text-xs text-gray-400">
                  🏆 <span className="text-white font-semibold">Achievement Unlocked:</span>{' '}
                  <span className="text-neon-cyan">"Senior Tester"</span>
                </p>
                <p className="font-mono text-xs text-gray-500">
                  You may now add <span className="text-neon-green">"Found Production Bug"</span> to your résumé.
                  Ian approves this message.
                </p>
              </div>
            </div>

            {/* Reporter note */}
            <div className="mt-6 pl-3" style={{ borderLeft: '2px solid #9d4edd33' }}>
              <p className="font-mono text-xs text-neon-purple italic">
                "Not all bugs are created equal. Some are features.<br />
                This one is both."
              </p>
              <p className="font-mono text-xs text-gray-600 mt-1">
                — Cliff Ian Murillo, QA Engineer &amp; Certified Bug Whisperer
              </p>
            </div>

            {/* Back button */}
            <div className="mt-8 pt-5" style={{ borderTop: '1px solid #1e1e1e' }}>
              <button
                onClick={() => navigate('/')}
                className="btn-neon text-xs"
              >
                ← Back to Portfolio
              </button>
              <span className="font-mono text-xs text-gray-700 ml-4">
                (where the real bugs are hidden)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
