const path = require('path');

module.exports = {
    entry: {
	app: './ClientSide/src/index.js',
	appRoot: './ClientSide/components/app-root/index.js'
    },
    output: {
	filename: '[name].bundle.js',
	path: path.resolve(__dirname, 'wwwroot')
    },
    module: {
	rules: [
	    {
		test: /\.(html)$/,
		use: {
		    loader: 'html-loader'
		}
	    },
	    {
		test: /\.css$/,
		use: [
		    'style-loader',
		    'css-loader'
		]
	    },
	    {
		test: /\.(png|svg|jpg|gif)$/,
		use: [
		    'file-loader'
		    ]
	    }
	    ]
    }
};
