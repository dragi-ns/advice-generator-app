/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'light-cyan': 'hsl(193, 38%, 86%)',
      'neon-green': 'hsl(150, 100%, 66%)',
      blue: {
        100: 'hsl(217, 19%, 38%)',
        500: 'hsl(217, 19%, 24%)',
        900: 'hsl(218, 23%, 16%)',
      },
    },
  },
  plugins: [],
};
