const { fontFamily:{ sans } } = require('tailwindcss/defaultTheme'); 

module.exports = {
  content: ['./index.html','./src/**/*.{vue,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', ...sans],
        sati: ['Satisfy', 'cursive']
      },
      animation: {
        'circle-1': 'circle-full 1.5s linear infinite',
        'circle-2': 'circle-full 1.2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite'
      },
      keyframes: {
        'circle-full': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        }
      }
    },
  },
  // < > && || =
  // config daisy
  plugins: [ require('daisyui') ],
  
  // custom theme daisy
  daisyui: {
    themes: [
      {
        light: {
          primary: '#16a34a',
          secondary: '#059669',
          accent: '#65a30d',
          neutral: '#f3f4f6',
          'base-100': '#ffffff',
          info: '#38bdf8',
          success: '#4ade80',
          warning: '#fcd34d',
          error: '#fca5a5',
        }
      }
      // }, "dark"
    ]
    // darkTheme: 'light'
  }
}
