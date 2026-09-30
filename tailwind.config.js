/** @type {import('tailwindcss').Config} */
// Colours are read from the token block in src/index.css, so a theme is a
// change of variables rather than a second set of classes.
const role = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: role('ink-950'),
          900: role('ink-900'),
          800: role('ink-800'),
          700: role('ink-700'),
          600: role('ink-600'),
        },
        bone: {
          50: role('bone-50'),
          100: role('bone-100'),
          300: role('bone-300'),
          500: role('bone-500'),
        },
        signal: {
          400: role('signal-400'),
          500: role('signal-500'),
          600: role('signal-600'),
          900: role('signal-900'),
        },
        'on-signal': role('on-signal'),
      },
      fontFamily: {
        display: ['Big Shoulders Display', 'Big Shoulders Fallback', 'Arial Narrow', 'sans-serif'],
        sans: ['Archivo', 'Archivo Fallback', 'sans-serif'],
        mono: ['Space Mono', 'Space Mono Fallback', 'Menlo', 'monospace'],
      },
      spacing: { header: 'var(--header-height)', thumb: 'var(--thumb-bar-h)' },
      letterSpacing: { label: '0.18em' },
      maxWidth: { shell: '1240px' },
      transitionTimingFunction: { DEFAULT: 'var(--ease-out)', out: 'var(--ease-out)' },
      zIndex: {
        header: 'var(--z-header)',
        menu: 'var(--z-menu)',
        thumb: 'var(--z-thumb)',
      },
    },
  },
  plugins: [],
};
