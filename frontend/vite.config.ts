import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 追加
  server:{
    port: 3000,
    host: '0.0.0.0'
  }
})
