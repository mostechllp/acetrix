/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B2347',
        navy: '#062B61',
        royal: '#0A5CC3',
        sky: '#EAF4FF',
        mist: '#F5FAFF',
        line: '#D8E4F0',
        teal: '#0A8B9A',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(9, 47, 92, 0.10)',
        card: '0 10px 30px rgba(9, 47, 92, 0.07)',
      },
    },
  },
  plugins: [],
}
