/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#050505', 900: '#0a0a0a', 800: '#141414', 700: '#1f1f1f', 600: '#2b2b2b' },
        bone: { 50: '#f6f5f2', 100: '#e9e7e2', 300: '#b9b6ae', 500: '#85827b' },
      },
      fontFamily: {
        display: ['Big Shoulders Display', 'Big Shoulders Fallback', 'Arial Narrow', 'sans-serif'],
        sans: ['Archivo', 'Archivo Fallback', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'Space Mono Fallback', 'Menlo', 'monospace'],
      },
      letterSpacing: { label: '0.18em' },
      maxWidth: { shell: '1240px' },
    },
  },
  plugins: [],
};
