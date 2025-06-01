import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  servers:{
    proxy:{
      '/users': {
        target: 'http://localhost:3030/api/users',
        changeOrigin: true,
        secure: false,
      }
    }

  }
})
