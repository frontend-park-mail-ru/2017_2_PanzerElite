var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: "./public/main.js",
    output: {
        path: __dirname,
        filename: "./public/dist/bundle.js"
    },
    module: {
        loaders: [{
                test: /.js$/,
                loader: "babel-loader",
                query: {
                    "presets": [
                        [
                            "es2015",
                            {
                                "modules": false
                            }
                        ]
                    ]
                }
            },
            {
                // test: /\.css$/,
                // loader: 'style!css!'
                //loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader",
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./public/bundles/bundle.css")
    ]
};