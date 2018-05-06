const path = require('path');

module.exports = {
    entry: './ClientSide/src/index.js',
    output: {
	filename: 'bundle.js',
	path: path.resolve(__dirname, 'wwwroot')
    }
};
