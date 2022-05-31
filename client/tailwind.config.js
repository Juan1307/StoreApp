const { fontFamily:{ sans } } = require('tailwindcss/defaultTheme'); 

module.exports = {
  content: ['./index.html','./src/**/*.{vue,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', ...sans]
      }
    },
  },

  // config daisy
  plugins: [ require('daisyui') ],
  
  // custom theme daisy
  daisyui: {
    themes: [{
      light: {
        primary: "#6ee7b7",
        secondary: "#4ade80",
        accent: "#a3e635",
        neutral: "#f3f4f6",
        'base-100': "#ffffff",
        info: "#38bdf8",
        success: "#4ade80",
        warning: "#fcd34d",
        error: "#fca5a5",
      }
    }],
    darkTheme: "light"
  }
}
