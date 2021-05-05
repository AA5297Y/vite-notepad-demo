import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  alias: [
    { find: '@', replacement: resolve(__dirname, 'src') }
  ],
  plugins: [vue()],
  server: {
    port: 80,
    proxy: {
      '/api/': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true
      }
    }
  }
})
