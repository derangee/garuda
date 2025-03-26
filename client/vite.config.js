import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://0676-2401-4900-62e2-c8dd-aa13-4ba5-8c2b-74fe.ngrok-free.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false, // Allow self-signed certificates (if needed)
        ws: true, // Enable WebSocket support (if required)
      },
    },
    allowedHosts: "all"
  },
})
