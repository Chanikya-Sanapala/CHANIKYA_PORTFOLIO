/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Apple-style neutrals
        'apple-dark': '#000000',     // Deep black
        'apple-gray': '#161617',     // Dark gray for cards/nav
        'apple-light': '#F5F5F7',    // Light gray for text/accents
        'apple-blue': '#2997FF',     // System blue
        'apple-text': '#86868b',     // Secondary text
      },
      fontFamily: {
        sans: ['"SF Pro Display"', '"SF Pro Text"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-grad': 'radial-gradient(circle at 50% 50%, #2a2a2a 0%, #000000 100%)',
        'glass': 'linear-gradient(180deg, rgba(22, 22, 23, 0.8) 0%, rgba(22, 22, 23, 0.4) 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  },
  plugins: []
}
