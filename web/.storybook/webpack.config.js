const path = require('path')
const webpack = require('webpack')

module.exports = function(storybookBaseConfig, configType) {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.loaders = (storybookBaseConfig.module.loaders || []).concat([
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     loaders: [
    //       'react-hot',
    //       'babel-loader?cacheDirectory=true'
    //     ]
    //   },
      {
        // Most react-native libraries include uncompiled ES6 JS.
        test: /\.js$/,
        include: [/node_modules\/react-native-/, /node_modules\/react-native-vector-icons/],
        loader: 'babel-loader',
        query: { cacheDirectory: true }
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
      },
      {
          test: /\.less$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "less-loader" // compiles Less to CSS
          }]
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
  ]);
  // storybookBaseConfig.resolve.extensions = ["", ".web.js", ".js", ""]
  // storybookBaseConfig.resolve.alias = storybookBaseConfig.resolve.alias || {}
  storybookBaseConfig.resolve.alias['react-native'] = 'react-native-web'
  // storybookBaseConfig.resolve.alias['@kadira/react-native-storybook'] = '@kadira/storybook'
  // storybookBaseConfig.resolve.alias['react-navigation'] = 'react-navigation/lib/react-navigation.js'
  storybookBaseConfig.plugins.push(
      new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __DEV__: "true"
    })
  )
  // Return the altered config
  return storybookBaseConfig;
};
