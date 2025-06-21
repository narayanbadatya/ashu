import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 🌙 Dark mode support
  theme: {
    extend: {
      fontFamily: {
        hacker: ['"Share Tech Mono"', 'monospace'],
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        smoothFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        blob: 'blob 7s infinite ease-in-out',
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'float-smooth': 'smoothFloat 3s ease-in-out infinite',
      },
      backgroundImage: {
        'skills-gradient':
          'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // 🧩 Optional plugin to hide scrollbars
  ],
};
