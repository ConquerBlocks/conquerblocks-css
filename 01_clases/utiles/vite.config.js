import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    watch: {
      usePolling: true, // Recomendado para WSL, permite detectar cambios en archivos
    },
  },
});
