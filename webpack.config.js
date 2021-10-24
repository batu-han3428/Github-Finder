const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    devServer:{
        historyApiFallback:true,
        static:path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: [/\.s[ac]ss$/i,/\.css$/i],
            use: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          }
        ]
      }
}