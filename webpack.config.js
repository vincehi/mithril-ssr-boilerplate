const path = require('path');
const nodeExternals = require('webpack-node-externals');
var WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = (env, argv) => [
    {
        // Server Config
        // name: 'server',
        entry: {
            server: (argv.mode === 'production') ? './server/server-prod.js' : './server/server-dev.js',
        },
        output: {
            path: path.join(__dirname, 'build'),
            publicPath: '/',
            filename: '[name].js'
        },
        mode: argv.mode,
        target: 'node',
        node: {
            // Need this when working with express, otherwise the build fails
            __dirname: false,   // if you don't put this is, __dirname
            __filename: false,  // and __filename return blank or /
        },
        externals: [
            nodeExternals()
        ], // Need this to avoid error when working with Express
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: path.resolve(__dirname, "node_modules"),
                    use: {
                        loader: "babel-loader",
                        options: {
                            configFile: './.babelrc-server'
                        }
                    }
                }
            ]
        },
        plugins: [
            new WebpackShellPlugin({
                onBuildEnd: ['npm run server']
            })
            // {
            //     apply: (compiler) => {
            //         compiler.hooks.afterEmit.tap('AfterEmitPlugin', async (compilation) => {
            //             // Restart server after webpack build
            //             await require('child_process').spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run',  'server']).stdout.on('data', (data) => {
            //               console.log(`stdout: ${data}`);
            //             });
            //         });
            //     }
            // }
        ]
    },
    {
        // Client Config
        // name: 'client',
        entry: './app/app.js',
        output: {
            path: path.resolve(__dirname, './build/assets'),
            filename: 'js/app.js',
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    configFile: './.babelrc-client'
                }
            }]
        }
    }
];
