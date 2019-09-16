import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'

export default {
    input: 'src/main.js',
    output: [
        {
            name: 'vueToPDF',
            file: 'lib/main-browser.js',
            format: 'iife'
        },
        {
            name: 'vueToPDF',
            file: 'lib/main.js',
            format: 'es'
        }
    ],
    watch: {
        include: 'src/**'
    },
    plugins: [
        resolve(),
        commonjs({
            'namedExports': {
                './lib/main.js': ['__moduleExports']
            }
        })
    ]
};