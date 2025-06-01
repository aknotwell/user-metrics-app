import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
