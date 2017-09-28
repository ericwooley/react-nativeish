const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig.resolve = storybookBaseConfig.resolve || {}
  storybookBaseConfig.resolve.extensions = storybookBaseConfig.resolve.extensions || []
  storybookBaseConfig.resolve.extensions.push('.web.js')
  storybookBaseConfig.resolve.alias = storybookBaseConfig.resolve.alias || {}
  storybookBaseConfig.resolve.alias['react-native'] = 'react-native-web'
  console.log('storybookBaseConfig', JSON.stringifystorybookBaseConfig)
  // Return the altered config
  return storybookBaseConfig;
};
