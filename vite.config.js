import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative asset paths: the same dist/ works on any static host and inside
  // the Capacitor app bundle (which serves it from capacitor://localhost).
  base: './',
  plugins: [react()],
  server: { host: true },
});
