import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',
  server:{
    port: 3000,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': '/frontend/src',
    },
  },
})
