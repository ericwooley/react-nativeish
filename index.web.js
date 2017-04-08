import 'babel-polyfill'
import { AppRegistry } from 'react-native'
import scenes from './src/scenes'
require('font-awesome-webpack')

AppRegistry.registerComponent('App', () => scenes.App)
AppRegistry.runApplication('App', {rootTag: document.getElementById('react-root')})
