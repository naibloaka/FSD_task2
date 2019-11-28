const path = require('path') // подключаемм плагин path
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
 
module.exports = {
    entry: {
        app: './src/index.js' // точка входа 
    },
    output: {
        filename: '[name].js', // файлы выхода [name] подставляет имя точки входа, если много точек входа
        path: path.resolve(__dirname, './dist'), // создаём по path папку 
        publicPath: '/dist' // чето для сервера
    },
    devServer: {
        contentBase: this.devServer,
        overlay: true // показывает ошибки прямо вместе
    },
    module: {       // подключаем модули
        rules: [{   //правила для модулей
            test: /\.js$/,      //для всех js файлов
            loader: 'babel-loader',     //загрузчикам становится этот чел
            exclude: '/node_modules/'   //исключем эту шнягу чтоб не тормозить
        },{   
            test: /\.pug$/,      
            loader: 'pug-loader'         
        },{
            test: /\.css$/,
            use:[
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]


        },{
            test: /\.scss$/,
            use:[
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader:'css-loader',
                    options: {sourceMap: true}
                },{
                    loader:'sass-loader',
                    options: {sourceMap: true}
                }
            ]
            
        },{
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
                }
              }]
          }]
    },


    plugins:[
      new MiniCssExtractPlugin({
          filename: "[name].css"
      }),
        new HtmlWebpackPlugin({
            template: './src/pug/pages/index.pug',
            mode: 'development'
        }),
        new CopyWebpackPlugin([
            { from: './src/fonts',  to: './fonts' }
        ])
    ],
}