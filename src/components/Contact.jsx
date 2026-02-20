import { useState, useRef, useCallback } from 'react'
import emailjs from '@emailjs/browser'

const LINKS = [
  {
    label: 'GitHub',
    value: 'github.com/ianized07',
    href: 'https://github.com/ianized07',
    icon: '🐙',
    color: '#e6edf3',
  },
  {
    label: 'Email',
    value: 'available on request',
    href: '#',
    icon: '📧',
    color: '#00ff41',
  },
  {
    label: 'Location',
    value: 'Philippines 🇵🇭',
    href: '#',
    icon: '📍',
    color: '#00e5ff',
  },
]

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState('')
  const [form, setForm]           = useState({ name: '', email: '', message: '' })
  const [focused, setFocused]     = useState(null)
  const [copied, setCopied]       = useState('')
  const formRef = useRef(null)

  const copyToClipboard = useCallback((text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key)
      setTimeout(() => setCopied(''), 1800)
    })
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setSubmitted(true)
    } catch (err) {
      setError(`Transmission failed. Exit code: ${err?.status ?? 'unknown'}. Try again.`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute left-1/2 top-1/4 w-72 h-72 rounded-full bg-neon-green/4 blur-3xl pointer-events-none -translate-x-1/2" />

      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16">
          <p className="section-tag mb-3">04 // contact.init()</p>
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black text-white">
              Get In <span className="text-neon-green">Touch</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-neon-green/30 to-transparent max-w-xs" />
          </div>
          <p className="text-gray-500 text-sm mt-3 max-w-lg">
            Whether you have a role, a project, or just want to say your app has no bugs —
            <span className="text-neon-pink font-mono"> bold claim</span>, let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left — contact links */}
          <div className="space-y-6 reveal">
            <div className="terminal">
              <div className="terminal-bar">
                <span className="terminal-dot" style={{ background: '#ff5f57' }} />
                <span className="terminal-dot" style={{ background: '#febc2e' }} />
                <span className="terminal-dot" style={{ background: '#28c840' }} />
                <span className="font-mono text-xs text-gray-600 ml-3">contact-info.sh</span>
              </div>
              <div className="terminal-body text-xs space-y-3">
                <p className="text-gray-600"># Reach me through any of the following:</p>
                {LINKS.map(({ label, value, href, icon, color }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="text-neon-green">$</span>
                    <span className="text-gray-600">{label.toLowerCase()}:</span>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="transition-all duration-200 hover:underline"
                      style={{ color }}
                    >
                      {icon} {value}
                    </a>
                    {href.startsWith('http') && (
                      <button
                        onClick={() => copyToClipboard(href, label)}
                        className="font-mono text-gray-700 hover:text-neon-green transition-colors duration-200 text-xs ml-auto"
                        title="Copy to clipboard"
                      >
                        {copied === label ? '✓ copied' : '⎘'}
                      </button>
                    )}
                  </div>
                ))}
                <br />
                <p className="text-gray-600"># Current status:</p>
                <p>
                  <span className="text-neon-green">●</span>
                  <span className="text-white ml-2">Open to new opportunities</span>
                </p>
                <p>
                  <span className="text-neon-cyan">●</span>
                  <span className="text-gray-400 ml-2">Response time: &lt; 24 hours</span>
                </p>
                <p>
                  <span className="text-neon-purple">●</span>
                  <span className="text-gray-400 ml-2">Available for: Full-time / Contract / Freelance</span>
                </p>
              </div>
            </div>

            {/* Fun availability banner */}
            <div className="glass-card p-4 border-l-2 border-neon-green">
              <p className="font-mono text-xs text-gray-500">
                <span className="text-neon-green font-bold">Note:</span> I respond faster
                than your test suite fails on a Friday deploy.
              </p>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="reveal">
            {submitted ? (
              <div className="terminal h-full flex items-center justify-center">
                <div className="terminal-body text-center py-12 space-y-4">
                  <div className="text-4xl">✅</div>
                  <p className="text-neon-green font-mono font-bold">Message sent successfully.</p>
                  <p className="text-gray-500 text-xs font-mono">Exit code: 0 — no errors detected.</p>
                  <p className="text-gray-600 text-xs font-mono">Expected response time: &lt; 24h</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
                    className="btn-neon text-xs mt-4"
                  >
                    Send another
                  </button>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="terminal">
                <div className="terminal-bar">
                  <span className="terminal-dot" style={{ background: '#ff5f57' }} />
                  <span className="terminal-dot" style={{ background: '#febc2e' }} />
                  <span className="terminal-dot" style={{ background: '#28c840' }} />
                  <span className="font-mono text-xs text-gray-600 ml-3">new-message.form</span>
                </div>
                <div className="terminal-body space-y-5">
                  <p className="text-gray-600 text-xs">
                    <span className="text-neon-green">$</span> compose-message --to ian.murillo
                  </p>

                  {[
                    { id: 'name', label: 'your_name', type: 'text', placeholder: 'e.g. Senior Dev (who loves QA)', required: true, emailjsName: 'from_name' },
                    { id: 'email', label: 'your_email', type: 'email', placeholder: 'no-bugs@company.com', required: true, emailjsName: 'reply_to' },
                  ].map(({ id, label, type, placeholder, required, emailjsName }) => (
                    <div key={id} className="space-y-1.5">
                      <label className="font-mono text-xs text-gray-600">
                        <span className="text-neon-green">&gt;</span> {label}
                        {required && <span className="text-neon-pink ml-1">*</span>}
                      </label>
                      <input
                        type={type}
                        name={emailjsName}
                        required={required}
                        placeholder={placeholder}
                        value={form[id]}
                        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                        onFocus={() => setFocused(id)}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-dark border rounded px-3 py-2.5 font-mono text-xs text-gray-300 outline-none transition-all duration-200 placeholder-gray-700"
                        style={{
                          borderColor: focused === id ? '#00ff41' : '#1e1e1e',
                          boxShadow: focused === id ? '0 0 10px rgba(0,255,65,0.15)' : 'none',
                        }}
                      />
                    </div>
                  ))}

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-gray-600">
                      <span className="text-neon-green">&gt;</span> message
                      <span className="text-neon-pink ml-1">*</span>
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder="Your message here... (bugs not included)"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-dark border rounded px-3 py-2.5 font-mono text-xs text-gray-300 outline-none transition-all duration-200 placeholder-gray-700 resize-none"
                      style={{
                        borderColor: focused === 'message' ? '#00ff41' : '#1e1e1e',
                        boxShadow: focused === 'message' ? '0 0 10px rgba(0,255,65,0.15)' : 'none',
                      }}
                    />
                  </div>

                  {error && (
                    <p className="font-mono text-xs text-neon-pink border border-neon-pink/20 rounded px-3 py-2 bg-neon-pink/5">
                      ✗ {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-neon btn-neon-filled w-full justify-center text-xs py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? '$ sending... --please-wait' : '$ send-message --now'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
