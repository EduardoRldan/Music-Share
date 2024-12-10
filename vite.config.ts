import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Ajusta si tienes algún API
    },
  },
  optimizeDeps: {
    exclude: ['ionicons', 'ionic-angular'],
  },
});
