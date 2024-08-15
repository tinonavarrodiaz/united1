/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body': '#fff',
        'body-secondary': '#EEEBE6',
        'text': '#545454',
      },
      fontFamily: {
        'body': ['Century Gothic Pro', 'sans-serif'],
        'heading': ['Abril Fatface', 'serif'],
      },
      spacing: {
        'headerr': '11.1458dvw',
        'headerl': '6.875dvw',
      }
    },
  },
  plugins: [],
}
