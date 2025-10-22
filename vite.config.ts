import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // This proxy configuration is added to bypass CORS issues during development.
  // It forwards requests from '/api' to your n8n webhook server.
  server: {
    proxy: {
      '/api': {
        target: 'https://n8n.srv1072529.hstgr.cloud',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
