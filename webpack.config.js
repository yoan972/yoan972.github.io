const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //not used
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); 
//const CleanWebpackPlugin = require('clean-webpack-plugin');
//const webpack = require('webpack');
//const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
	entry:{
      app:'./src/index.js',
      menu: './src/menu.js'
  },         
	output: {
	filename: '[name].bundle.js',
	path: path.resolve(__dirname, 'dist')
	},
 	module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { importLoaders: 1 } },
      	 	{
		      loader: 'postcss-loader',
		      options: {
			    ident: 'postcss',
			    plugins: (loader) => [
			      require('autoprefixer')({
			      	browsers: ['last 2 versions', 'ie > 8']
			      })
			    ]
			  }
			},
      'sass-loader'
          ]
        },
        {
          test: /\.ejs$/,
          use : ['ejs-loader']
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'file-loader'
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192
              }
            }, 
            {
              loader: 'img-loader',
              options: {
                enabled: !devMode
              }
            }
          ]
        }
      ]
    },
    plugins: [
	    new MiniCssExtractPlugin({
	      // Options similar to the same options in webpackOptions.output
	      // both options are optional
	      filename: 'style.css'
	    }),
      new HtmlWebpackPlugin({
        title : 'Yoan Hillion',
        inject: true,
        filename: 'index.html',
        chunks: ['menu', 'app'],
        template : 'src/index.ejs'
      }),
      new HtmlWebpackPlugin({
        title : 'Yoan Hillion | Contact',
        inject: true,
        filename: 'contact.html',
        chunks: ['menu'],
        template : 'src/contact.ejs'
      }),
      new HtmlWebpackPlugin({
        title : 'Yoan Hillion | About',
        inject: true,
        filename: 'about.html',
        chunks: ['menu'],
        template : 'src/about.ejs'
      }),
      new HtmlWebpackPlugin({
        title : 'Yoan Hillion | Original Foodtruck',
        inject: true,
        filename: 'original-foodtruck.html',
        chunks: ['menu','app'],
        template : 'src/project.ejs'
      }),
      new HtmlWebpackPlugin({
        title : 'Yoan Hillion | Au Regal',
        inject: true,
        filename: 'au-regal.html',
        chunks: ['menu','app'],
        template : 'src/project2.ejs'
      }),
      new HtmlWebpackPlugin({
        title : 'Yoan Hillion | Pendu',
        inject: true,
        filename: 'pendu.html',
        chunks: ['menu','app'],
        template : 'src/project3.ejs'
      })



  	],
  	devtool: "eval-source-map",
  	devServer: {
      contentBase: './dist'
    },
    optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  } 
};