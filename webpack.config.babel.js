import path              from 'path';
import webpack           from 'webpack';

const SRC = path.resolve(`${__dirname}/`)
const DEST = path.resolve(`${__dirname}/`)

const conf = () => {
  return [{
    entry: {
      bundle: `${SRC}/default.js`
    },
    output: {
      path: DEST,
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          loader: 'babel',
          exclude: /node_modules/,
          test: /\.js[x]?$/,
          query: {
            cacheDirectory: true,
            presets: ['es2015']
          }
        }
      ]
    }
  }];

};

export default conf();
