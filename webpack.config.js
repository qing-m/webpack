const path = require("path");
const HtmleWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log("process.env.NODE_ENV=", process.env.NODE_ENV); // 打印环境变量

const config = {
  // 打包环境，默认值为production，其他值为development，none。
  // production 生产模式，打包比较慢，会开启 tree-shaking 和 压缩代码
  // deveplpment 开发模式，打包更加快速，省了代码优化步骤
  // none 不使用任何默认优化选项
  // mode: "development",

  devServer: {
    contentBase: path.resolve(__dirname, "webpack-dist"), // 静态文件目录
    compress: true, //是否启动压缩 gzip
    port: 8080, // 端口号
    // open:true  // 是否自动打开浏览器
  },

  // 入口 打包入口地址
  entry: path.resolve(__dirname, "/src/index.js"),
  // 出口
  output: {
    // 输出文件名
    filename: "index.build.js",
    // 输出文件目录
    path: path.resolve(__dirname, "webpack-dist"),
  },
  module: {
    // webpack 只能理解 JavaScript 和 JSON 文件。loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效 模块，以供应用程序使用，以及被添加到依赖图中。
    // 配置css-loader
    // Loader 的执行顺序是固定从后往前，即按 css-loader --> style-loader 的顺序执行
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i, // 匹配所有的 sass/scss/css 文件
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  // 配置插件
  plugins: [
    // 引入插件
    new HtmleWebpackPlugin({
      template: path.resolve(__dirname, "/src/index.html"),
      filename: "index.html",
    }),

    new MiniCssExtractPlugin({
      // 添加插件
      filename: "[name].[hash:8].css",
    }),
  ],
};

module.exports = (env, argv) => {
  console.log("argv.mode=" + argv.mode); // 打印mode值
  // 这里可以通过不同模式修改config值
  return config;
};
