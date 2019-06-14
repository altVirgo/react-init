
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    // console.log(env, argv);
    const devMode = argv.mode !== 'production';
    return {
        entry: [
            "babel-polyfill",
            __dirname + "/src/main.js"
        ],

        output: {
            path: __dirname + "/dist",
            filename: "js/bundle.js",
            chunkFilename: 'js/[name].[chunkhash:5].chunk.js',
            publicPath: '/',
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                '@': path.join(__dirname, '..', "src"),
            }
        },
        devServer: {
            port: 3000,
            historyApiFallback: true
        },
        module: {
            rules: [
                {
                    test: /(\.jsx|\.js)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                }, {
                    test: /\.css$/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader'
                    ]
                }, {
                    test: /\.less$/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader?modules',
                        'postcss-loader',
                        'less-loader',
                    ]
                }, {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                },{
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 100,
                        name: 'css/fonts/[name].[hash:7].[ext]'
                    }
                }
            ]

        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: __dirname + "/src/index.html"
            }),
            new MiniCssExtractPlugin({
                filename: "css/[name].css",
                chunkFilename: "css/[name].css"
            }),
            new BundleAnalyzerPlugin()
        ]
    }
}