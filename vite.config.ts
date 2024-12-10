import { defineConfig } from 'vite';
import { angular } from '@vitejs/plugin-angular';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [angular()],
  optimizeDeps: {
    exclude: [
      'ion-app_8.entry.js',
      'chunk-2TYK2BCW.js',
      'ion-app_8.entry'
    ]
  }
});
