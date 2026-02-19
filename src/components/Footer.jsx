export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-border py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="font-mono text-sm flex items-center gap-2">
            <span className="text-neon-green font-bold text-lg">&gt;</span>
            <span className="text-gray-400">
              ian<span className="text-neon-green">.</span>murillo
            </span>
            <span className="text-neon-green animate-blink">_</span>
          </div>

          {/* Center — tagline */}
          <div className="text-center space-y-1">
            <p className="font-mono text-xs text-gray-700">
              Built with React + TailwindCSS · Deployed by a QA who tests his own code
            </p>
            <p className="font-mono text-xs text-gray-700">
              © {year} Cliff Ian Murillo · All bugs have been reported and logged
            </p>
          </div>

          {/* Right — links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/ianized07"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-600 hover:text-neon-green transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="#hero"
              className="font-mono text-xs text-gray-600 hover:text-neon-green transition-colors"
            >
              Back to top ↑
            </a>
          </div>
        </div>

        {/* Bottom terminal line */}
        <div className="mt-8 pt-6 border-t border-dark-border/50">
          <p className="font-mono text-[11px] text-gray-800 text-center">
            <span className="text-neon-green/40">$</span> exit 0 &nbsp;·&nbsp;
            Process finished with no errors &nbsp;·&nbsp;
            <span className="text-neon-pink/40">bugs_found: 0</span> &nbsp;·&nbsp;
            <span className="text-neon-cyan/40">tests_passed: all</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
