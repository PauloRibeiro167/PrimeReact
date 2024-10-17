import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@admin-styles': path.resolve(__dirname, 'src/assets/stylesheet/admin'),
      '@public-styles': path.resolve(__dirname, 'src/assets/stylesheet/public'),
      '@pwa-styles': path.resolve(__dirname, 'src/app/assets/stylesheets/pwa'),
      '@layouts': path.resolve(__dirname, 'src/app/assets/stylesheet/layouts'),
    },
  },
});