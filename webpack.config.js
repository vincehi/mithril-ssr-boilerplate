const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin-alt');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => [
  {
    // Server Config
    // name: 'server',
    entry: {
      server: './server/server-dev.tsx'
    },
    output: {
      path: path.join(__dirname, 'build'),
      publicPath: '/',
      filename: '[name].js',
      chunkFilename: '[name]-bundle.js'
    },
    mode: argv.mode,
    target: 'node',
    node: {
      // Need this when working with express, otherwise the build fails
      __dirname: false, // if you don't put this is, __dirname
      __filename: false // and __filename return blank or /
    },
    externals: [
      nodeExternals()
    ], // Need this to avoid error when working with Express
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: path.resolve(__dirname, 'node_modules'),
          loader: 'babel-loader',
          options: {
            configFile: './.babelrc-server'
          }
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      new WebpackShellPlugin({
        onBuildEnd: ['npm run start']
      }),
      new CircularDependencyPlugin({
        // exclude detection of files based on a RegExp
        exclude: /a\.js|node_modules/,
        // add errors to webpack instead of warnings
        failOnError: true,
        // allow import cycles that include an asyncronous import,
        // e.g. via import(/* webpackMode: "weak" */ './file.js')
        allowAsyncCycles: false,
        // set the current working directory for displaying module paths
        cwd: process.cwd()
      }),
      new webpack.EnvironmentPlugin({
        BROWSER_ENV: false
      })
    ]
  },
  {
    // Client Config
    // name: 'client',
    entry: './app/app.tsx',
    output: {
      path: path.resolve(__dirname, './build/assets'),
      filename: 'js/app.js',
      chunkFilename: 'js/[name]-bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx$/,
          exclude: path.resolve(__dirname, 'node_modules'),
          loader: 'babel-loader',
          options: {
            configFile: './.babelrc-client'
          }
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        BROWSER_ENV: true
      })
    ]
  }
];
