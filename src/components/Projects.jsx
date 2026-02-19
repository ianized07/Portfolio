const PROJECTS = [
  {
    id: 'RQA-001',
    name: 'Radiant QA Selenium Suite',
    status: 'PASSING',
    statusColor: '#00ff41',
    description:
      'End-to-end automation framework for the Radiant Delivers Customer Portal. Covers login flows, shipment management, quotation filters, template creation, and activity feeds.',
    stack: ['Python', 'Selenium', 'pytest', 'ChromeDriver', 'dotenvx'],
    metrics: { tests: 47, suites: 6, coverage: '92%', time: '2.8s' },
    highlights: [
      'Session-scoped driver fixtures for fast test execution',
      'Encrypted credential management via dotenvx',
      'HTML test reports with screenshots on failure',
      'Headless Chrome support for CI/CD pipelines',
    ],
    github: 'https://github.com/ianized07',
    color: '#00ff41',
  },
  {
    id: 'RQA-002',
    name: 'CP Login Validation Suite',
    status: 'PASSING',
    statusColor: '#00ff41',
    description:
      'Comprehensive validation suite for the Customer Portal login page. Tests form elements, forgot password flow, error states, password visibility toggle, and successful authentication.',
    stack: ['Python', 'Selenium', 'pytest-check', 'WebDriverWait'],
    metrics: { tests: 12, suites: 1, coverage: '100%', time: '0.9s' },
    highlights: [
      'Soft assertions with pytest-check for full error capture',
      'Forgot password cancellation and re-entry flow',
      'Password visibility toggle verification',
      'Cross-validates UI labels and element IDs',
    ],
    github: 'https://github.com/ianized07',
    color: '#00e5ff',
  },
  {
    id: 'RQA-003',
    name: 'Shipment & Quotation Filter Tests',
    status: 'PASSING',
    statusColor: '#00ff41',
    description:
      'Automated tests for shipment list pagination, filter interactions, and quotation request flows. Validates filter state persistence and correct data rendering.',
    stack: ['Python', 'Selenium', 'pytest', 'Expected Conditions'],
    metrics: { tests: 18, suites: 3, coverage: '88%', time: '4.1s' },
    highlights: [
      'Dynamic wait strategies with WebDriverWait + EC',
      'Filter state persistence across page navigation',
      'Shipment list pagination and row count validation',
      'Quotation form field and dropdown verification',
    ],
    github: 'https://github.com/ianized07',
    color: '#9d4edd',
  },
]

function MetricBadge({ label, value, color }) {
  return (
    <div className="text-center px-3 py-2 border border-dark-border rounded bg-dark">
      <div className="font-mono font-bold text-sm" style={{ color }}>{value}</div>
      <div className="font-mono text-[10px] text-gray-600 mt-0.5">{label}</div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="absolute right-0 bottom-1/3 w-72 h-72 rounded-full bg-neon-purple/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16">
          <p className="section-tag mb-3">04 // projects.log</p>
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black text-white">
              Test Suite <span className="text-neon-green">Portfolio</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-neon-green/30 to-transparent max-w-xs" />
          </div>
          <p className="font-mono text-xs text-gray-600 mt-3">
            <span className="text-neon-green">$</span> pytest --collect-only --quiet
          </p>
        </div>

        <div className="space-y-6">
          {PROJECTS.map((p) => (
            <div key={p.id} className="glass-card glow-box-hover reveal overflow-hidden">
              {/* Card top bar */}
              <div
                className="h-0.5 w-full"
                style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
              />

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">

                  {/* Left content */}
                  <div className="flex-1 space-y-4">
                    {/* Title row */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs text-gray-600 border border-dark-border px-2 py-0.5 rounded">
                        {p.id}
                      </span>
                      <h3 className="font-bold text-lg text-white">{p.name}</h3>
                      <span
                        className="font-mono text-[11px] px-2 py-0.5 rounded border"
                        style={{ color: p.statusColor, borderColor: `${p.statusColor}44`, background: `${p.statusColor}11` }}
                      >
                        ● {p.status}
                      </span>
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">{p.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-1">
                      {p.highlights.map((h) => (
                        <li key={h} className="font-mono text-xs text-gray-500 flex items-start gap-2">
                          <span style={{ color: p.color }} className="mt-0.5 shrink-0">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] px-2 py-0.5 rounded border border-dark-border text-gray-500 hover:text-gray-300 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right — metrics */}
                  <div className="shrink-0 space-y-3">
                    <p className="font-mono text-[10px] text-gray-700 text-center">test metrics</p>
                    <div className="grid grid-cols-2 gap-2 min-w-[180px]">
                      <MetricBadge label="Tests" value={p.metrics.tests} color={p.color} />
                      <MetricBadge label="Suites" value={p.metrics.suites} color={p.color} />
                      <MetricBadge label="Coverage" value={p.metrics.coverage} color={p.color} />
                      <MetricBadge label="Run Time" value={p.metrics.time} color={p.color} />
                    </div>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-neon text-xs w-full justify-center mt-2 block text-center"
                      style={{ borderColor: p.color, color: p.color }}
                    >
                      View on GitHub ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total summary */}
        <div className="reveal mt-8 font-mono text-xs text-gray-600 border border-dark-border rounded p-4 bg-dark-card flex flex-wrap gap-4">
          <span>Test Suites: <span className="text-neon-green">10 passed</span>, 10 total</span>
          <span>Tests: <span className="text-neon-green">77 passed</span>, 77 total</span>
          <span>Coverage: <span className="text-neon-cyan">~93%</span> average</span>
          <span>Status: <span className="text-neon-green">✓ All systems green</span></span>
        </div>
      </div>
    </section>
  )
}
