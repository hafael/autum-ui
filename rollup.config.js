import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

module.exports = {
  input: 'src/js/index.js',
  output: [
    {
      format: 'esm',
      file: 'dist/library.mjs'
    },
    {
      format: 'cjs',
      file: 'dist/library.js'
    }
  ],
  plugins: [
    vue(), 
    peerDepsExternal(),
    postcss(),
    resolve({
      extensions: ['.vue', '.js', '.css']
    }),
    alias({
      entries: [
        { find: '@', replacement: __dirname + '/src/js' }
      ]
    })
  ]
};