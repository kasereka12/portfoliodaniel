/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', '"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cyber: {
          bg:      '#030712',
          surface: '#0F172A',
          card:    '#1E293B',
          border:  '#334155',
          cyan:    '#06B6D4',
          'cyan-light': '#22D3EE',
          purple:  '#A855F7',
          'purple-dark': '#7C3AED',
          green:   '#10B981',
        },
      },
      animation: {
        'blink':      'blink 1s step-end infinite',
        'float':      'float 6s ease-in-out infinite',
        'scan-line':  'scanLine 10s linear infinite',
        'glitch-1':   'glitch1 0.4s ease',
        'glitch-2':   'glitch2 0.4s ease',
        'fade-up':    'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        scanLine: {
          '0%':   { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glitch1: {
          '0%':   { clip: 'rect(44px, 999px, 56px, 0)', transform: 'translate(-2px, 0)' },
          '50%':  { clip: 'rect(10px, 999px, 80px, 0)', transform: 'translate(2px, 0)' },
          '100%': { clip: 'rect(44px, 999px, 56px, 0)', transform: 'translate(0)' },
        },
        glitch2: {
          '0%':   { clip: 'rect(80px, 999px, 100px, 0)', transform: 'translate(2px, 0)' },
          '50%':  { clip: 'rect(20px, 999px, 40px, 0)', transform: 'translate(-2px, 0)' },
          '100%': { clip: 'rect(80px, 999px, 100px, 0)', transform: 'translate(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
