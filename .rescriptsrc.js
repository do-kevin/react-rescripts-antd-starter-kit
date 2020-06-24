const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const logConfig = (config) => {
  return config;
};

logConfig.isMiddleware = true;

module.exports = [
  'env',
  {
    webpack: (config) => {
      if (config.mode === 'production') {
        config.plugins = [
          ...config.plugins,
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'analyzed-bundle.html',
          }),
        ];
      }

      config.plugins = [
        ...config.plugins,
        new AntdDayjsWebpackPlugin(),
        new LodashModuleReplacementPlugin({
          shorthands: true,
          collections: true,
          paths: true,
          cloning: true,
        }),
      ];

      config.entry = [...config.entry, 'react-hot-loader/patch', './src'];

      config.resolve.alias = {
        ...config.resolve.alias,
        'react-dom': '@hot-loader/react-dom',
      };

      return config;
    },
  },
  logConfig,
];