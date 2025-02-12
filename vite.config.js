import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', 
  },
  server: {
    host: '0.0.0.0', // Allow access from other devices
    port: 5173,      // Keep the default port
  },
})
