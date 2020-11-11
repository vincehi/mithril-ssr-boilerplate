const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin-alt');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, argv) => {
  return [
    {
      // Server Config
      // name: 'server',
      entry: {
        server: './src/server/server-dev.tsx',
      },
      output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name]-bundle.js',
      },
      mode: argv.mode,
      optimization: {
         usedExports: true,
      },
      target: 'node',
      node: {
        // Need this when working with express, otherwise the build fails
        __dirname: false, // if you don't put this is, __dirname
        __filename: false, // and __filename return blank or /
      },
      externals: [
        nodeExternals({
          allowlist: ['mithril'], // For resolve alias in target node
        }),
      ], // Need this to avoid error when working with Express
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            loader: 'babel-loader',
            options: {
              configFile: './.babelrc-server',
            },
          },
        ],
      },
      resolve: {
        extensions: ['.mjs', '.tsx', '.ts', '.js'],
        alias: {
          mithril$: path.resolve(__dirname, 'lib/m.js'),
        },
      },
      plugins: [
        new WebpackShellPlugin({
          onBuildEnd: ['npm run start'],
        }),
        // new BundleAnalyzerPlugin({generateStatsFile: true, analyzerMode: false}),
        new CircularDependencyPlugin({
          // exclude detection of files based on a RegExp
          exclude: /a\.js|node_modules/,
          // add errors to webpack instead of warnings
          failOnError: true,
          // allow import cycles that include an asyncronous import,
          // e.g. via import(/* webpackMode: "weak" */ './file.js')
          allowAsyncCycles: false,
          // set the current working directory for displaying module paths
          cwd: process.cwd(),
        }),
        new webpack.EnvironmentPlugin({
          BROWSER_ENV: false,
          DEBUG: argv.mode === 'development',
        }),
      ],
    },
    {
      // Client Config
      // name: 'client',
      entry: './src/client/app.tsx',
      output: {
        path: path.resolve(__dirname, './build/assets'),
        filename: 'js/app.js',
        chunkFilename: 'js/[name]-bundle.js',
      },
      module: {
        rules: [
          {
            test: /\.tsx$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            loader: 'babel-loader',
            options: {
              configFile: './.babelrc-client',
            },
          },
        ],
      },
      resolve: {
        extensions: ['.mjs', '.tsx', '.ts', '.js'],
        alias: {
          mithril$: path.resolve(__dirname, 'lib/m.js'),
        },
      },
      plugins: [
        new webpack.EnvironmentPlugin({
          BROWSER_ENV: true,
          DEBUG: argv.mode === 'development',
        }),
        // new BundleAnalyzerPlugin({generateStatsFile: true, analyzerMode: false}),
      ],
    },
  ]
};
