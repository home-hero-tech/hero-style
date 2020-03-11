import * as reactDom from 'react-dom';
import * as react from 'react';

import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy-glob';
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
      external(),
      babel({
        exclude: 'node_modules/**'
      }),
      postcss({
        modules: true,
        minimize: {
          safe: true
        }
      }),
      resolve(),
      commonjs({
        namedExports: {
          react: Object.keys(react),
          'react-dom': Object.keys(reactDom)
        }
      }),
      terser(),
      copy(
        [
          { files: 'src/styles/**/*.*', dest: 'dist/styles' },
          { files: 'src/assets/**/*.*', dest: 'dist/assets' }
        ],
        {
          verbose: true
        }
      )
    ]
  }
];
