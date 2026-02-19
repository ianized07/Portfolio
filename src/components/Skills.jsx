import { useEffect, useRef, useState } from 'react'

const SKILL_GROUPS = [
  {
    category: 'QA & Testing',
    color: '#00ff41',
    skills: [
      { name: 'Manual Testing', pct: 95 },
      { name: 'Test Automation', pct: 88 },
      { name: 'Bug Reporting & Tracking', pct: 97 },
      { name: 'Test Case Design', pct: 93 },
      { name: 'Regression Testing', pct: 90 },
    ],
  },
  {
    category: 'Automation & Code',
    color: '#00e5ff',
    skills: [
      { name: 'Python', pct: 82 },
      { name: 'Selenium WebDriver', pct: 88 },
      { name: 'pytest Framework', pct: 85 },
      { name: 'API Testing', pct: 75 },
      { name: 'CI/CD Integration', pct: 70 },
    ],
  },
  {
    category: 'Tools & Process',
    color: '#9d4edd',
    skills: [
      { name: 'Jira / Bug Tracking', pct: 92 },
      { name: 'Git & GitHub', pct: 80 },
      { name: 'Chrome DevTools', pct: 88 },
      { name: 'Agile / Scrum', pct: 85 },
      { name: 'Documentation', pct: 90 },
    ],
  },
]

function SkillBar({ name, pct, color, animate }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="font-mono text-xs text-gray-400">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{pct}%</span>
      </div>
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{
            width: animate ? `${pct}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: `0 0 8px ${color}88`,
            transition: 'width 1.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-28 px-6 relative" ref={ref}>
      {/* Subtle bg accent */}
      <div className="absolute right-0 top-1/2 w-64 h-64 rounded-full bg-neon-cyan/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16">
          <p className="section-tag mb-3">02 // skills.profile</p>
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black text-white">
              Proficiency <span className="text-neon-green">Metrics</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-neon-green/30 to-transparent max-w-xs" />
          </div>
          <p className="font-mono text-xs text-gray-600 mt-3">
            <span className="text-neon-green">$</span> qa-tools --list --show-proficiency
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILL_GROUPS.map(({ category, color, skills }) => (
            <div key={category} className="glass-card p-6 reveal space-y-5">
              {/* Category header */}
              <div className="flex items-center gap-3 pb-4 border-b border-dark-border">
                <div className="w-2 h-2 rounded-full" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
                <h3 className="font-mono text-sm font-semibold text-white">{category}</h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {skills.map((s) => (
                  <SkillBar key={s.name} {...s} color={color} animate={animate} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="reveal mt-10 terminal">
          <div className="terminal-bar">
            <span className="terminal-dot" style={{ background: '#ff5f57' }} />
            <span className="terminal-dot" style={{ background: '#febc2e' }} />
            <span className="terminal-dot" style={{ background: '#28c840' }} />
            <span className="font-mono text-xs text-gray-600 ml-3">skill-summary.log</span>
          </div>
          <div className="terminal-body py-4 flex flex-wrap gap-6 text-xs">
            {[
              { label: 'Total Skills', val: '15+', color: '#00ff41' },
              { label: 'Automation Coverage', val: '88%', color: '#00e5ff' },
              { label: 'Bug Detection Rate', val: '97%', color: '#ff006e' },
              { label: 'Sprints Survived', val: '∞', color: '#9d4edd' },
              { label: 'Dev Complaints Filed', val: '0*', color: '#febc2e' },
            ].map(({ label, val, color }) => (
              <div key={label} className="stat-box flex-1 min-w-[100px]">
                <div className="font-mono font-black text-xl" style={{ color }}>{val}</div>
                <div className="font-mono text-gray-600 text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
          <div className="px-5 pb-3">
            <p className="font-mono text-xs text-gray-600">
              * officially. unofficially: passive-aggressive commit messages don't count.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
