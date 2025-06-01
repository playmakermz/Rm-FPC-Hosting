import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  base: "/Rm_FPC_Hosting/",
  plugins: [vue()],
  resolve: {
    alias: {
      vue: resolve(__dirname, 'node_modules/vue/dist/vue.esm-bundler.js'),
      '@': resolve(__dirname, 'src') // Jika menggunakan alias '@'
    }
  },
  build: {
    rollupOptions: {
      external: ['vue'] // Pastikan Vue tidak di-bundle ulang
    }
  }
});