import webpack from "webpack";

import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";


export function buildWebpackConfig(buildOptions: BuildOptions): webpack.Configuration {
  const { mode, paths} = buildOptions;
  return {
    mode,

    entry: paths.entry,

    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },

    plugins: buildPlugins(buildOptions),

    module: {
      rules: buildLoaders(),
    },

    resolve: buildResolvers(),
  };
}