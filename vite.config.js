import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: {
        'index-without-styles': 'src/index.js',
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'prop-types'],
      output: {
        assetFileNames: 'index.css',
      },
    },
  },
});
