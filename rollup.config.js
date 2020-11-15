import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const production = false;

export default {
	input: 'js/main.js',
	output: {
		file: 'build/bundle.js',
		format: 'iife',
        sourcemap: true,
        globals: {jquery: 'jQuery', 'popper.js': 'Popper'}
    },
	plugins: [
		resolve(), commonjs()
	]
};