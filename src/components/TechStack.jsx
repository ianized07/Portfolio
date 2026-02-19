const STACK = [
  { name: 'Python', icon: '🐍', color: '#3776ab', desc: 'Primary automation language' },
  { name: 'Selenium', icon: '🤖', color: '#00b400', desc: 'WebDriver automation' },
  { name: 'pytest', icon: '⚗️', color: '#00e5ff', desc: 'Test framework & runner' },
  { name: 'ChromeDriver', icon: '🌐', color: '#fabb05', desc: 'Browser automation' },
  { name: 'Git', icon: '🔀', color: '#f05032', desc: 'Version control' },
  { name: 'GitHub', icon: '🐙', color: '#e6edf3', desc: 'Repo & CI/CD workflows' },
  { name: 'Jira', icon: '📋', color: '#0052cc', desc: 'Bug & sprint tracking' },
  { name: 'dotenvx', icon: '🔐', color: '#9d4edd', desc: 'Encrypted env secrets' },
  { name: 'HTML / CSS', icon: '🎨', color: '#e34c26', desc: 'UI inspection & testing' },
  { name: 'Linux', icon: '🐧', color: '#00e5ff', desc: 'Development environment' },
  { name: 'VS Code', icon: '💻', color: '#007acc', desc: 'IDE of choice' },
  { name: 'Postman', icon: '📮', color: '#ff6c37', desc: 'API testing & debugging' },
  { name: 'QTP / UFT', icon: '🧪', color: '#0073e6', desc: 'HP Quick Test Professional / Unified Functional Testing' },
  { name: 'Node.js Protractor', icon: '🔬', color: '#e23237', desc: 'E2E testing framework for Angular apps' },
]

const FAMILIAR = ['Playwright', 'Cypress', 'REST APIs', 'SQL', 'JavaScript', 'React', 'WSL2']

export default function TechStack() {
  return (
    <section id="stack" className="py-28 px-6 relative">
      <div className="absolute left-0 top-1/3 w-64 h-64 rounded-full bg-neon-green/4 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16">
          <p className="section-tag mb-3">03 // tech.stack</p>
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black text-white">
              Tools of <span className="text-neon-green">Destruction</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-neon-green/30 to-transparent max-w-xs" />
          </div>
          <p className="font-mono text-xs text-gray-600 mt-3">
            <span className="text-neon-green">$</span> pip list --installed | grep "weapons-of-choice"
          </p>
        </div>

        {/* Main stack grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 reveal">
          {STACK.map(({ name, icon, color, desc }) => (
            <div key={name} className="tech-badge group">
              <span className="text-2xl">{icon}</span>
              <span
                className="font-mono text-xs font-semibold text-center leading-tight transition-all duration-300"
                style={{ color }}
              >
                {name}
              </span>
              <span className="font-mono text-[10px] text-gray-700 text-center leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {desc}
              </span>
            </div>
          ))}
        </div>

        {/* Also familiar with */}
        <div className="reveal mt-10 glass-card p-6">
          <p className="font-mono text-xs text-gray-600 mb-4">
            <span className="text-neon-cyan">$</span> cat also-familiar-with.txt
          </p>
          <div className="flex flex-wrap gap-2">
            {FAMILIAR.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-3 py-1.5 rounded border border-neon-cyan/20 text-neon-cyan/70 hover:border-neon-cyan/60 hover:text-neon-cyan transition-all duration-200 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Endorsed by section */}
        <div className="reveal mt-6 border border-dark-border rounded-lg p-5 bg-dark-card">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 font-mono text-xs text-gray-600">
            <span>✅ <span className="text-gray-400">"Approved by 9 out of 10 developers I mildly annoy."</span></span>
            <span>✅ <span className="text-gray-400">"Endorsed by Jira tickets that still haunt my sleep."</span></span>
          </div>
        </div>
      </div>
    </section>
  )
}
