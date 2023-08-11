const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const ProgressBarWebpackPlugin = require("progress-bar-webpack-plugin");

const { loaderByName, removeLoaders } = require("@craco/craco");
const CracoLessPlugin = require("craco-less");
const path = require("path");
// 不能用绝对路径
const dotenvCra = require("dotenv-cra");

dotenvCra.config();
const smp = new SpeedMeasurePlugin();
let plugins = [
  {
    plugin: CracoLessPlugin,
    options: {
      lessLoaderOptions: {
        lessOptions: {
          // modifyVars: themes,
          javascriptEnabled: true,
        },
      },
    },
  },
];

module.exports = {
  plugins,
  eslint: {
    enable: true,
    mode: "file",
    configure: (eslintConfig, { env, paths }) => {
      console.log(env, paths, "env, paths");
      /* ... */
      return eslintConfig;
    },
  },
  webpack: smp.wrap({
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.cache.type = "filesystem";

      // 修改build的生成文件名称
      paths.appBuild = "dist";
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "static/js/[name].[contenthash:8].js",
        chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
      };

      // 开发环境下控制台输出结果定位
      if (process.env.NODE_ENV === "development") {
        webpackConfig.mode = "development";
        // addBeforeLoaders(
        //   webpackConfig,
        //   loaderByName("style-loader"),
        //   "thread-loader"
        // );
        // addBeforeLoaders(
        //   webpackConfig,
        //   loaderByName("style-loader"),
        //   "cache-loader"
        // );
      }

      //TODO: 生產環境下去掉注释，但在local环境啟動會有點慢
      if (process.env.NODE_ENV === "production") {
        webpackConfig.resolve.extensions = [
          ".jsx",
          ".js",
          ".scss",
          ".css",
          ".less",
        ];

        webpackConfig.devtool = false;
        webpackConfig.optimization.minimizer = [
          new TerserPlugin({
            parallel: true, //开启并行压缩，可以加快构建速度
          }),
        ];

        // 生产环境移除source-map-loader;
        removeLoaders(webpackConfig, loaderByName("source-map-loader"));

        webpackConfig.optimization.splitChunks = {
          ...webpackConfig.optimization.splitChunks,
          cacheGroups: {
            commons: {
              chunks: "all",
              // 将两个以上的chunk所共享的模块打包至commons组。
              minChunks: 2,
              name: "commons",
              priority: 80,
            },
          },
        };

        webpackConfig.plugins.concat([
          new ParallelUglifyPlugin({
            workerCount: 4, //开启几个子进程去并发的执行压缩。默认是当前运行电脑的cPU核数减去1
            cacheDir: ".cache/",
            uglifyJS: {
              output: {
                // 是否输出可读性较强的代码，即会保留空格和制表符，默认为输出，为了达到更好的压缩效果，可以设置为false
                beautify: false,
                //是否保留代码中的注释，默认为保留，为了达到更好的压缩效果，可以设置为false
                comments: false,
              },
              compress: {
                //是否在UglifyJS删除没有用到的代码时输出警告信息，默认为输出
                warnings: false,
                //是否删除代码中所有的console语句，默认为不删除，开启后，会删除所有的console语句
                drop_console: true,
                //是否内嵌虽然已经定义了，但是只用到一次的变量，比如将 var x = 1; y = x, 转换成 y = 1, 默认为否
                collapse_vars: true,
              },
            },
          }),

          //TODO: 加入打包速度,插件的使用可能会导致增加项目的构建时间和占用内存
          new MiniCssExtractPlugin({
            linkType: "text/css",
            filename: "static/css/[name].[contenthash:8].css",
            chunkFilename: "static/css/[id].[contenthash:8].css",
          }),
          // 为模块提供中间缓存，缓存默认的存放路径是: node_modules/.cache/hard-source。
          new HardSourceWebpackPlugin(),
          new CompressionWebpackPlugin({
            test: /\.(js|ts|jsx|tsx|css|scss|less)$/, //匹配要压缩的文件
            algorithm: "gzip",
          }),
        ]);
      }

      return webpackConfig;
    },
    plugins: [
      new ProgressBarWebpackPlugin({
        format:
          "\x1B[32m[:bar]\x1B[0m \x1B[34m:percent\x1B[0m \x1B[33m进度: :current/:total, 已用时: :elapsed s, 预计剩余时间: :eta s\x1B[0m",
      }),
    ],
  }),
  devServer: {
    open: false,
    port: 8081,
    proxy: {
      "/api": {
        target: process.env.REACT_APP_BASE_TARGET_URL,
		"^/api": ""
        // 加了这个属性，那后端收到的请求头中的host是目标地址 target
      },
    },
  },
};
