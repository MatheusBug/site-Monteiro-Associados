import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Garante caminhos absolutos corretos
  build: {
    outDir: 'dist', // Pasta padrão de saída do Vite
    assetsDir: 'assets',
    sourcemap: false
  }
});
