import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

const isMinify = process.env.BUILD_MODE === 'minify';

export default {
    input: 'src/index.js',
    output: {
        file: isMinify ? 'dist/js/catalogos.min.js' : 'dist/js/catalogos.js',
        format: 'umd',
        name: 'CatalogoComponent',
    },
    plugins: [
        commonjs(),
        vue({
            css: true,
        }),
        babel({
            runtimeHelpers: true,
            externalHelpers: false,
        }),
        json({
            compact: true
        }),
        (isMinify && terser())
    ],
};