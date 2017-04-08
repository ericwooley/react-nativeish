var path = require('path')
var fs = require('fs')
var S = require('string')
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
    var nameS = S(options.entity.name)
    // var camelCase = nameS.camelize()
    var pascalCase = nameS.capitalize()
    fs.appendFileSync(path.join(__dirname, '../../src/stories.js'), `import './components/${options.entity.name}/${options.entity.name}Component.story'\n`)
    fs.appendFileSync(path.join(__dirname, '../../src/components/index.js'), `export {default as ${pascalCase}} from './${options.entity.name}/${options.entity.name}Component'\n`)
  }
}
