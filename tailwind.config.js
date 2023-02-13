/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: 'Inter',
        Roboto: 'Roboto',
      },
      animation: {
        pulse: 'pulse 1.5s 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        pulse: {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};