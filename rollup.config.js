import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
import vuePlugin from 'rollup-plugin-vue'
import { terser } from "rollup-plugin-terser";

export default {
    input: 'src/main.js',
    output: {
        name: 'vueToPDF',
        file: 'lib/main.js',
        format: 'umd'
    },
    plugins: [
        resolve(),
        commonjs(),
        vuePlugin(),
        terser()
    ]
};