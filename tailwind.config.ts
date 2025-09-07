import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        brand: {
          yellow: '#FFCC29',
          black: '#0B0B0B',
          off: '#111111'
        }
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      dropShadow: {
        glow: '0 4px 24px rgba(255, 204, 41, 0.35)'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.15)'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
} satisfies Config
