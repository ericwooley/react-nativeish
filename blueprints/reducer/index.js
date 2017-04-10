var path = require('path')
var chalk = require('chalk')
module.exports = {
  locals: function (options) {
    // Return custom template variables here.
    return {}
  },

  fileMapTokens: function (options) {
    // Return custom tokens to be replaced in your files
    return {
      __token__: function (options) {
        // logic to determine value goes here
        return 'value'
      }
    }
  },

  filesPath: function () {
    // if you want to store generated files in a folder named
    // something other than 'files' you can override this
    return path.join(this.path, 'files')
  },

  // before and after install hooks
  beforeInstall: function (options) {},
  afterInstall: function (options) {
    console.warn(chalk.red('Make sure you add your reducer to the root reducer in src/redux/reducers/index.js'))
  }
}
