const path = require("path");
const Dotenv = require("dotenv-webpack");
const isProd = process.env.NODE_ENV == "development";
module.exports = {
  publicPath: isProd ? "/" : "/recipes/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/styles/abstracts/index.scss";`,
      },
    },
  },
  configureWebpack: {
    plugins: [new Dotenv()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@elements": path.resolve(__dirname, "src/components/elements"),
        "@images": path.resolve(__dirname, "src/assets/images"),
        "@pages": path.resolve(__dirname, "src/components/pages"),
        "@sections": path.resolve(__dirname, "src/components/sections"),
        "@constants": path.resolve(__dirname, "src/constants"),
        "@views": path.resolve(__dirname, "src/views"),
        "@modules": path.resolve(__dirname, "src/store/modules"),
      },
    },
  },
};
