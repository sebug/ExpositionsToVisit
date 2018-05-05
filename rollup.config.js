import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    input: 'ClientSide/src/main.js',
    output: {
	file: 'wwwroot/bundle.js',
	format: 'iife'
    },
    plugins: [
	nodeResolve(),
	commonjs(),
	babel({
	    exclude: 'node_modules/**'
	})
	]
};
