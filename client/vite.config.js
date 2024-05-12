import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8001/',
          changeOrigin: true,
          secure: false
        }
      }
    },

    define: {
      'process.env': env
    },

    plugins: [react(), eslint()]
  };
});
