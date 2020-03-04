import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
// import { uglify } from 'rollup-plugin-uglify';

import packageJSON from './package.json';

const input = './src/index.js';

export default [
  // CommonJS
  {
    input,
    output: [
      {
        file: packageJSON.main,
        format: 'cjs'
      },
      {
        file: packageJSON.module,
        format: 'es'
      }
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      postcss({
        modules: true,
        minimize: {
          safe: true
        }
      }),
      external(),
      resolve(),
      commonjs(),
      terser(),
      copy({
        targets: [{ src: 'src/styles/**/*.*', dest: 'dist/styles' }]
      })
    ]
  }
];
