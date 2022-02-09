import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/docs/1.0/'  // This is whatever your path from the root is
    : '/'
}
