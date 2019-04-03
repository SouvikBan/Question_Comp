import webpack from 'webpack'
import merge from 'webpack-merge'
import path from 'path'

var commonConfig = {
    output:{
      path: path.resolve(__dirname + '/dist/'),
      filename: 'vue-preview.min.js',
      libraryTarget: 'window',
      library: 'VuePreview'
    },
    plugins:[
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ]
}

export default[

  // for the browser based implementation
  merge(commonConfig,{
      entry: path.resolve(__dirname + '/../src/index.js'),
      output: {
        filename: 'vue-preview.min.js'
      }
  }),

  // for the node based implementation
  merge(commonConfig, {

  })
]