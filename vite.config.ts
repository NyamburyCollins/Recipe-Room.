import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'frontend',          
  plugins: [react()],
  build: {
    outDir: '../dist',       
    emptyOutDir: true        
  },
  server: {
    port: 5173,
    open: true
  }
});
