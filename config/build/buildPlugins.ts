import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";


export function buildPlugins(): webpack.WebpackPluginInstance[] {
  return   [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ 
      template: path.resolve(__dirname, '../../public', 'index.html')
     }),
  ];
}