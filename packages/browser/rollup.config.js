import { RollupOptions } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'
import { terser } from 'rollup-plugin-terser'
import cleanup from 'rollup-plugin-cleanup'

/** @type {RollupOptions | RollupOptions[]} */
const options = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.browser,
      name: 'xunfei',
      format: 'iife'
    },
    {
      file: pkg.browser.replace('.js', '.min.js'),
      format: 'iife',
      name: 'xunfei',
      plugins: [terser()]
    },
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'esm'
    }
  ],
  plugins: [typescript(), cleanup()]
}

export default options
