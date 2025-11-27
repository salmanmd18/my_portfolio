/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Sora"', 'system-ui', 'sans-serif'],
        body: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0f172a',
        slate: '#334155',
        accent: '#22c55e',
        accentSoft: '#4ade80',
        midnight: '#05070d',
        card: '#0b0f19',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(34,197,94,0.25)',
        soft: '0 18px 60px rgba(0,0,0,0.08)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
