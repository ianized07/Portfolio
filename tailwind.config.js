/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff41',
        'neon-cyan': '#00e5ff',
        'neon-purple': '#9d4edd',
        'neon-pink': '#ff006e',
        dark: '#050505',
        'dark-card': '#0d0d0d',
        'dark-border': '#1e1e1e',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'bar-fill': 'barFill 1.4s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { textShadow: '0 0 8px #00ff41, 0 0 16px #00ff41' },
          '50%': { textShadow: '0 0 20px #00ff41, 0 0 40px #00ff41, 0 0 60px #00ff41' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        barFill: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--bar-width)' },
        },
      },
    },
  },
  plugins: [],
}
