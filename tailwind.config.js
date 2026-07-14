/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1220',
        secondary: '#111827',
        card: '#1E293B',
        'border-subtle': 'rgba(255,255,255,0.08)',
        heading: '#FFFFFF',
        paragraph: '#CBD5E1',
        'accent-blue': '#2563EB',
        'brand-green': '#16A34A',
        
        // Aliases for compatibility
        accent: '#2563EB',
        cta: '#16A34A',
        hover: '#15803d',
        background: '#0B1220',
        border: 'rgba(255,255,255,0.08)',
        text: '#CBD5E1',
        glass: 'rgba(255,255,255,0.05)',
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
