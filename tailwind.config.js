/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#e24a3a',
        customInput: '#faf1e9'
      },
      maxHeight: {
        '696': '696px',
      },
    },
  },
  plugins: [],
}
