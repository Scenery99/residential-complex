// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';
// вместо vite-plugin-imagemin — используем unplugin-imagemin
// import viteImagemin from 'unplugin-imagemin/vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    // viteImagemin({
    //   gifsicle: { optimizationLevel: 3 },
    //   mozjpeg: { quality: 75 },
    //   pngquant: { quality: [0.65, 0.8], speed: 4 },
    //   svgo: {
    //     plugins: [
    //       { name: 'removeViewBox', active: false },
    //       { name: 'collapseGroups', active: true },
    //     ],
    //   },
    //   webp: { quality: 75 },
    // }),
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'sass:color';
          @import "@/styles/variables.scss";
        `,
      },
    },
  },
});
