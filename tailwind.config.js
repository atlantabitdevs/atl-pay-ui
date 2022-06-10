/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      'sans': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        'term-orange': '#ff9500',
        'term-orange-hover': '#FFB54C',
        'term-orange-disabled': '#B87B26',
        'term-gray': '#828282'
      }
    },
  },
  plugins: [],
}
