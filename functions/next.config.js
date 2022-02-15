const withPlugins = require('next-compose-plugins');
const withTranspiledModules = require('next-transpile-modules');
require('dotenv').config({ path: 'server/.env' });

const isDev = process.env.NODE_ENV === 'development';

const assetPrefix = isDev ? '/skipit-3e5be/us-central1/app' : '';

/**
 *
 * @param {import('webpack').Configuration} config
 * @param {*} param1
 */
const webpack = (config, { isServer, dev }) => {
  if (!(isServer || dev)) {
    config.optimization.splitChunks.cacheGroups.commons.minChunks = 2;
  }

  return config;
};

/**
 * comes from Jenkinsfile config
 */

const buildPluginConfig = {
  assetPrefix,
  useFileSystemPublicRoutes: false,
  webpack,
};

const plugins = [
  { productionBrowserSourceMaps: true },
  buildPluginConfig,
  [withTranspiledModules, {
    // transpile the following node_modules dependencies:
    transpileModules: ['debug'],
  }],
];

module.exports = withPlugins(plugins);
