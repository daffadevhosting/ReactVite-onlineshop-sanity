// vite.config.js
import reactRefresh from '@vitejs/plugin-react-refresh';
import Pages from 'vite-plugin-pages';

export default {
  plugins: [reactRefresh(), Pages()],
  build: {
        chunkSizeWarningLimit: 4096
  },
  server: {
    port: 1666,
  },
};

