import webpack from "webpack";

import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildWebpackDevServer } from "./buildWebpackDevServer";


export function buildWebpackConfig(buildOptions: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev} = buildOptions;
  return {
    mode,

    entry: paths.entry,

    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },

    devtool: isDev ? 'inline-source-map' : undefined,

    devServer: buildWebpackDevServer(buildOptions),

    plugins: buildPlugins(buildOptions),

    module: {
      rules: buildLoaders(buildOptions),
    },

    resolve: buildResolvers(),
  };
}