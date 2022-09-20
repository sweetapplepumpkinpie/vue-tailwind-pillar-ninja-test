/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-scale': 'scale 5s linear infinite',
      },
      keyframes: {
        scale: {
          '0%, 40%, 100%': { transform: 'scale(1, 1)' },
          '20%': { transform: 'scale(1.1, 1.1)' },
        },
      },
    },
  },
  plugins: [],
}
