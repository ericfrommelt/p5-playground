import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig ({
  root: 'src',
  publicDir: '../static',
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        sketches: resolve(__dirname, 'src/sketches/index.html')
      },
    },
  },
})
  