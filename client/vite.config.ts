import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslint from 'vite-plugin-eslint';

import * as path from 'path';
// https://vitejs.dev/config/
export default defineConfig(() => {

  return {
    // root:'./static'
    plugins: [ 
    vue({
       reactivityTransform: true
    }), 
    eslint(),
    vueJsx() 
    ],
    resolve: {
      alias: [
        { find:'@', replacement: path.resolve(__dirname, 'src')},
        { find:'@composables', replacement: path.resolve(__dirname, 'src/composables')},
        { find:'@extend', replacement: path.resolve(__dirname, 'src/extend')},
        { find:'@components', replacement: path.resolve(__dirname, 'src/components')},
      ]
    }
  };
})
