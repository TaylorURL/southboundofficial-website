import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { readFileSync } from 'node:fs';

const { version } = JSON.parse(readFileSync('./package.json', 'utf8'));

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2022',
    modulePreload: { polyfill: false },
  },
  define: { __BUILD_VERSION__: JSON.stringify(version) },
  // Mirrors the production headers in vercel.json so a local measurement sees
  // the same caching a visitor gets.
  preview: {
    headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
  },
  resolve: {
    alias: {
      '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/app/components', import.meta.url)),
      '@sections': fileURLToPath(new URL('./src/app/sections', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/app/views', import.meta.url)),
      '@constants': fileURLToPath(new URL('./src/app/constants', import.meta.url)),
    },
  },
});
