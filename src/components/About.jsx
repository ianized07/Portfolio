const TRAITS = [
  { icon: '🔍', title: 'Pixel-Level Vision', desc: 'Can spot a misaligned button from space. NASA, call me.' },
  { icon: '🐛', title: 'Bug Magnetism', desc: "Bugs just show up when I'm around. It's a gift. It's a curse." },
  { icon: '🧠', title: 'Multitasking Mastery', desc: 'Writing bug reports, sipping coffee, and rethinking life choices all at once.' },
  { icon: '🎤', title: 'Reproduction Specialist', desc: 'Not that kind. I make bugs show up every time. Consistency is key.' },
  { icon: '🧾', title: 'Detailed Bug Reports', desc: "So thorough that your grandma could fix the issue. If she knew JavaScript." },
  { icon: '💣', title: 'Breaks Things Gracefully', desc: "I don't break the app — I expose its true fragile nature." },
  { icon: '⏱️', title: 'Time Traveler', desc: 'Can feel when a sprint is about to go off the rails. Spoiler alert: It\'s now.' },
  { icon: '🎮', title: 'Click Accuracy', desc: 'Clicked more buttons last week than a speedrunner fighting a final boss.' },
  { icon: '🤡', title: 'Sarcastic Comment Ninja', desc: 'Master of adding "as expected?" to screenshots with chaotic neutral energy.' },
  { icon: '📞', title: 'Communication God-Tier', desc: 'Fluent in Cebuano Bisaya, Tagalog, English, and passive-aggressive Jira comments.' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="reveal mb-16">
          <p className="section-tag mb-3">01 // about.me</p>
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black text-white">
              The Double Life of a <span className="text-neon-green">QA Engineer</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-neon-green/30 to-transparent max-w-xs" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — story + terminal */}
          <div className="space-y-6 reveal">
            <div className="terminal glow-box">
              <div className="terminal-bar">
                <span className="terminal-dot" style={{ background: '#ff5f57' }} />
                <span className="terminal-dot" style={{ background: '#febc2e' }} />
                <span className="terminal-dot" style={{ background: '#28c840' }} />
                <span className="font-mono text-xs text-gray-600 ml-3">about-ian.md</span>
              </div>
              <div className="terminal-body text-xs leading-loose">
                <p>
                  <span className="text-neon-green"># 👨‍💻</span>{' '}
                  <span className="text-neon-cyan font-bold">Cliff Ian Murillo</span>
                  <span className="text-gray-500"> — a.k.a.</span>{' '}
                  <span className="text-white">"Ian"</span>
                </p>
                <br />
                <p className="text-gray-400">
                  By day, he isn't just a QA Engineer — he's the{' '}
                  <span className="text-neon-pink">final boss</span> that bugs pray
                  they never meet. Armed with only a keyboard, a test case, and a
                  suspicious squint, he uncovers flaws like{' '}
                  <span className="text-neon-green">Sherlock Holmes in a hoodie</span>.
                </p>
                <br />
                <p className="text-gray-400">
                  But the real plot twist? When the laptop closes, the baby monitor lights up.
                  Ian trades Jira tickets for bottle duty and bug reports for lullabies.
                  Sleep is a myth. Peace is negotiable.
                </p>
                <br />
                <p className="text-neon-cyan text-xs">
                  ## Languages Spoken
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  🇵🇭 Cebuano Bisaya &nbsp;·&nbsp; Tagalog &nbsp;·&nbsp; English<br />
                  🤖 Python &nbsp;·&nbsp; Selenium &nbsp;·&nbsp; passive-aggressive Jira comments
                </p>
                <br />
                <p className="text-neon-purple text-xs italic">
                  "QA isn't just about testing — it's about whispering to software,<br />
                  'I know what you did last deploy.'"
                </p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Role', value: 'QA Engineer' },
                { label: 'Location', value: 'Philippines 🇵🇭' },
                { label: 'Specialty', value: 'Test Automation' },
                { label: 'GitHub', value: '@ianized07' },
              ].map(({ label, value }) => (
                <div key={label} className="glass-card p-3">
                  <p className="font-mono text-xs text-gray-600">{label}</p>
                  <p className="font-mono text-sm text-neon-green mt-1">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — traits grid */}
          <div className="reveal">
            <p className="font-mono text-xs text-gray-600 mb-4">
              <span className="text-neon-green">$</span> cat skills-and-specialties.txt
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TRAITS.map(({ icon, title, desc }) => (
                <div key={title} className="glass-card glow-box-hover p-4 space-y-2">
                  <div className="text-2xl">{icon}</div>
                  <p className="font-mono text-xs text-neon-green font-semibold">{title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
