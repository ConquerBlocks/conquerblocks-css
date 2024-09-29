import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // Añadiendo host:true para poder acceder desde cualquier dispositivo de tu red, como por ejemplo para probar el responsive desde tu teléfono o tu tablet conectado a la misma Wifi/red. By @Eleazar
    watch: {
      usePolling: true, // Recomendado para WSL, permite detectar cambios en archivos
    },
  },
});
