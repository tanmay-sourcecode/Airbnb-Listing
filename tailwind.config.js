/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        airbnb: {
          red: '#FF385C',
          'red-dark': '#E31C5F',
          'red-light': '#FF5A5F',
          dark: '#222222',
          gray: '#717171',
          'light-gray': '#DDDDDD',
          'bg-gray': '#F7F7F7',
        },
      },
      fontFamily: {
        sans: ['Circular', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'nav': '0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)',
        'search': '0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)',
        'search-hover': '0 6px 20px rgba(0,0,0,0.12)',
        'dropdown': '0 2px 16px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        'pill': '9999px',
        'card': '14px',
      },
      transitionDuration: {
        '200': '200ms',
      },
    },
  },
  plugins: [],
}
