// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    root: "src/",
    
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        edit: resolve(__dirname, 'src/edit.html'),
        delete: resolve(__dirname, 'src/delete.html'),
        create: resolve(__dirname, 'src/create.html'),
        about: resolve(__dirname, 'src/about.html')

      },
    },
  },
})