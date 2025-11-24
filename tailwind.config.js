/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        hub: {
          black: '#000000',
          dark: '#1b1b1b',
          gray: '#2c2c2c',
          text: '#f1f1f1',
          subtext: '#9b9b9b',
          orange: '#ff9900',
          orangeHover: '#e68a00'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-in': 'bounceIn 0.8s ease-out forwards',
        'wave': 'wave 8s ease-in-out infinite',
        'ripple': 'ripple 6s linear infinite',
        'matrix': 'matrix 15s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'morph': 'morph 10s ease-in-out infinite',
        'border-rotate': 'borderRotate 3s linear infinite',
        'particle-move': 'particleMove 20s linear infinite',
        'hexagon-rotate': 'hexagonRotate 40s linear infinite',
      }
    }
  },
  plugins: [],
}
