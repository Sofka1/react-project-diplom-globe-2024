// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Изменение настройки загрузчика для изображений
      const fileLoaderRule = webpackConfig.module.rules.find(rule => rule.test && rule.test.test('.png'));
      if (fileLoaderRule) {
        fileLoaderRule.test = /\.(png|jpe?g|gif)$/i;
        fileLoaderRule.use = [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ];
      }
      return webpackConfig;
    },
  },
};
