const path = require('path') // подключаемм плагин path
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
 
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
            
        }]
    },


    plugins:[
      new MiniCssExtractPlugin({
          filename: "[name].css"
      }),
        new HtmlWebpackPlugin({
            template: './src/pug/pages/index.pug',
            mode: 'development'
        })
    ],
}