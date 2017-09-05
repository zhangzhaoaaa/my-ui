const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.conf.js');
const HashMapPlugin = require('../webpack/plugin/hash-map.js');
var Visualizer = require('webpack-visualizer-plugin');
const env = require('./env.config');


function config() {
    return merge(baseWebpackConfig, {
        output: {
            filename: 'js/[name]-[chunkhash:7].js'
        },
        plugins: [
            new webpack.HashedModuleIdsPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'js/vendor-[chunkhash:7].js',
                minChunks: Infinity
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
                }
            }),
            // 压缩 js
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            // 压缩 css
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: { discardComments: { removeAll: true } },
                canPrint: false
            }),
            new Visualizer({
                filename: './statistics.html'
            }),
            // 抽离 css 到单独文件
            new ExtractTextPlugin({
                filename: 'css/[name]-[contenthash:7].css'
            }),
            // 生成 hash map
            new HashMapPlugin({
                path: path.join(__dirname, '../hash-map'), // map 文件夹路径
                rotate: 10 // 保留版本记录数
            })
        ]
    });
}
module.exports = config;
