/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#0a3a6b',
          200:'#ed1c24'
        },
    },
  }
  },
  plugins: [],
}

