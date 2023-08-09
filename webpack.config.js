const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/change_dom.js',
  output: {
    filename: 'bundled_js_code.js',
    path: path.resolve(__dirname, 'bundle_js_code'),
  },
};
