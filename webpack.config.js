const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = (env) => {
  const mode = env.mode ?? "development";

  let config = {
    mode,
    context: path.resolve(__dirname, "src"),
    entry: "./index.ts",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        typescript: { configFile: path.resolve(__dirname, "./tsconfig.json") },
      }),
      new HtmlWebpackPlugin({ template: "./index.html" }),
    ],
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    target: "web",
  };

  if (mode === "development") {
    config = {
      ...config,
      devtool: "inline-source-map",
      devServer: {
        static: "./dist",
      },
    };

    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
    ];
  } else if (mode === "production") {
    config = {
      ...config,
    };

    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ];
  }

  return config;
};
