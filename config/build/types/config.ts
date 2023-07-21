export type BuildMode = 'production' | 'development';

export interface BuildPath {
  entry: string;
  build: string;
  thiml: string;
}

export interface BuildOptions {
  mode: BuildMode;
  path: BuildPath;
}