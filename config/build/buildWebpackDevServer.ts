import { BuildOptions } from "./types/config";

import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildWebpackDevServer(buildOptions: BuildOptions): DevServerConfiguration {
  return {
    port: buildOptions.port,
    open: true,
  };
};
