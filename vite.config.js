import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: {
        'index-without-styles': 'src/index.js',
        'react-without-styles': 'src/react.js',
        'vue-without-styles': 'src/vue.js',
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
