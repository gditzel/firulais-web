/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        firulais: {
          primary: '#2b9dee',
          'primary-dark': '#1a7bbf',
          body: '#f5f5f5',
          surface: '#f6f7f8',
          'body-dark': '#0f172a',
          splash: '#f0f9ff',
          bar: '#1e293b',
          'bar-light': '#ffffff',
          'map-popup': '#1e293b',
          'close-text': '#0f172a',
          pets: '#38bdf8',
          muted: '#475569',
          separator: '#f1f5f9',
          'badge-bg': '#d1fae5',
          'badge-fg': '#059669',
          schedule: '#64748b',
        },
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 23, 42, 0.06)',
        card: '0 10px 40px -15px rgba(26, 123, 191, 0.25)',
      },
    },
  },
  plugins: [],
};
