/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#102A43',
        'primary-hover': '#163D63',
        secondary: '#1F2937',
        card: '#FFFFFF',
        'border-subtle': 'rgba(16, 42, 67, 0.08)',
        heading: '#102A43',
        paragraph: '#475569',
        'accent-blue': '#102A43',
        'brand-green': '#4CAF50',
        
        // Aliases for compatibility
        accent: '#4CAF50',
        cta: '#102A43',
        hover: '#163D63',
        background: '#FFFFFF',
        'light-bg': '#F8FAFC',
        border: 'rgba(16, 42, 67, 0.1)',
        text: '#475569',
        glass: 'rgba(255,255,255,0.8)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
