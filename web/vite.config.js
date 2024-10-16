import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@admin-styles': path.resolve(__dirname, 'src/assets/stylesheet/Admin'),
      '@app-styles': path.resolve(__dirname, 'src/assets/stylesheet/App'),
      '@public-styles': path.resolve(__dirname, 'src/assets/stylesheet/Public'),
    },
  },
});