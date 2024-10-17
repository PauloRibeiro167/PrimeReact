import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@admin-styles': path.resolve(__dirname, 'src/app/assets/stylesheets/admin'),
      '@public-styles': path.resolve(__dirname, 'src/app/assets/stylesheets/public'),
      '@pwa-styles': path.resolve(__dirname, 'src/app/assets/stylesheets/pwa'),
      '@layouts': path.resolve(__dirname, 'src/app/assets/stylesheets/layouts'),
      '@controllers': path.resolve(__dirname, 'src/app/controllers'),
      '@models': path.resolve(__dirname, 'src/app/models'),
      '@views': path.resolve(__dirname, 'src/app/views'),
      '@helpersAdmin': path.resolve(__dirname, 'src/app/helpers/controllers/admin'),
      '@helpersPublic': path.resolve(__dirname, 'src/app/helpers/controllers/public'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@assets': path.resolve(__dirname, 'src/app/assets'),
      '@pages': path.resolve(__dirname, 'src/app/pages'),
    },
  },
});