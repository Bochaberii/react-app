/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 This is crucial
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // adjust based on your setup
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}