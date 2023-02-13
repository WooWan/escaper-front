/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray200: '#C8CAD4',
        main500: '#EE7330',
      },
      fontSize: {
        h1: ['1.375rem', { fontWeight: 800, lineHeight: '1.875rem', letterSpacing: '-0.8px' }],
        h2: ['1.625rem', { lineHeight: '2rem', fontWeight: 800, letterSpacing: '-1.5px' }],
        h3: ['2.5rem', { lineHeight: '3.5rem', fontWeight: 800, letterSpacing: '2px' }],
        s1: ['0.75rem', { lineHeight: '1.25rem', fontWeight: 700, letterSpacing: '-0.8px' }],
        s2: ['0.875rem', { lineHeight: '1.5rem', fontWeight: 700, letterSpacing: '-0.8px' }],
        s3: ['1rem', { lineHeight: '1.5rem', fontWeight: 700, letterSpacing: '-0.8px' }],
        s4: ['1.125rem', { lineHeight: '1.75rem', fontWeight: 700, letterSpacing: '-1px' }],
        s5: ['1.25rem', { lineHeight: '1.875rem', fontWeight: 700, letterSpacing: '-1px' }],
        b1: ['0.75rem', { lineHeight: '1.25rem', fontWeight: 400, letterSpacing: '-0.8px' }],
        b2: ['0.875rem', { lineHeight: '1.5rem', fontWeight: 400, letterSpacing: '-0.8px' }],
        b3: ['1rem', { lineHeight: '1.75rem', fontWeight: 400, letterSpacing: '-0.8px' }],
        b4: ['1.125rem', { lineHeight: '1.875rem', fontWeight: 400, letterSpacing: '-1px' }],
      },
    },
  },
  plugins: [],
}
