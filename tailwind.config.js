/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPink: '#ff69b4',
        hotPink: '#ff1493',
        softPink: '#ffb6c1',
        blushPink: '#fff0f5',
        rubyRed: '#ff2d55',
        crimsonRed: '#e60023',
        deepRed: '#d32f2f'
      },
      aspectRatio: {
        '4/3': '4 / 3',
      }
    },
  },
  plugins: [],
}
