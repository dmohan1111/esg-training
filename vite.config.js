import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/esg-training',
  server: {
    port: 5173,
    proxy: {
      '/api/claude': {
        target: 'https://api.anthropic.com',
        changeOrigin: true,
        secure: true,
        rewrite: path => path.replace(/^\/api\/claude/, '/v1/messages'),
      }
    }
  },
  build: { outDir: 'dist' }
})
