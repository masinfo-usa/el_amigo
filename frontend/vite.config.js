import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/el_amigo/', // 🔸 important for GitHub Pages
  plugins: [react()],
  server: {
    host: true,
    proxy:{
      "/api":{
        target: "http://localhost:5000"
      }
    }
  }
})
