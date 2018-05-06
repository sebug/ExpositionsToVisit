const path = require('path');

module.exports = {
    entry: './ClientSide/src/index.js',
    output: {
	filename: 'bundle.js',
	path: path.resolve(__dirname, 'wwwroot')
    },
    module: {
	rules: [
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
