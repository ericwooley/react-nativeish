import 'babel-polyfill'
import { AppRegistry } from 'react-native'
import scenes from './src/scenes'
console.log(scenes)
AppRegistry.registerComponent('App', () => scenes.App)
AppRegistry.runApplication('App', {rootTag: document.getElementById('react-root')})
