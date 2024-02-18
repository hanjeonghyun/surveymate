import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
<<<<<<< HEAD
        target: 'https://sleigh.college/api',
=======
        target: 'https://sleigh.college',
>>>>>>> d4870eaf0b40fa52dc81d005528ec2806dedab99
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        ws: true
      }
    }
  }
})
