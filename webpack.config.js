const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle_js_code.js',
    path: path.resolve(__dirname, 'bundle_js_code'),
  },
};
