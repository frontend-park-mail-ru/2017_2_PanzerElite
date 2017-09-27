module.exports = {
    context: __dirname,
    entry: './public/main.js',
    output: {
        path: __dirname,
        filename: './public/bundles/bundle.js'
    },
    watch: false,
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['babel-preset-env']
            }
        }]
    }
}