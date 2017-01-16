var path = require('path');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var CopyWebpackPlugin = require('copy-webpack-plugin');
const postcssConfig = require('./postcss.config.js');

var dir_dev = './dev';

//command
//webpack-dev-server --progress --colors --open

module.exports = {
    entry: {
        'index': path.resolve(dir_dev, 'index.js'),
    },
    output: {
        path: './dist',
        filename: './scripts/[name].js',
        // publicPath: '/assets/',
    },
    devServer: {
        inline: true,
        port: 10000,
    },
    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin([{
            from: '*.html',
            context: './dev/',
        },{
            from: './dev/favicon.ico',
        },{
            from: './dev/images',
            to: './images',
        }], {
            ignore: [

            ],

            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            // copyUnmodified: true
        }),
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: [
                'style-loader',
                'css-loader?modules&importLoaders=1',
                'postcss-loader',
            ],
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_module/,
            query: {
                presets: ['es2015']
            },
        }, {
            test: /\.scss$/,
            loaders: [
                'style-loader',
                'css-loader?sourceMap',
                'postcss-loader',
                'sass-loader?sourceMap'
            ],
        }, {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader: 'file-loader?limit=1024&name=font/[name].[ext]',
        }, {
            test: /\.vue$/,
            loader: 'vue',
        }, {
            test: /\.(png|gif)$/,
            loader: "url-loader?mimetype=image/png",
        }],
    },
    vue: {
        loaders: {
            sass: 'style!css!postcss!sass?indentedSyntax',
            scss: 'style!css!postcss!sass',
        },
        postcss: postcssConfig.plugins,
        cssModules: {
            localIdentName: '[path][name]---[local]---[hash:base64:5]',
            camelCase: true,
        },
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.js',
        },
    },
};
