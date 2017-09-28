const path = require('path');

module.exports = {
        entry: './src/types/index.ts',
        output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    devtool: 'source-map',
    module: {
        loaders: [
          { test: /\.ts$/, loader: 'ts-loader' }
        ]
      } 
};