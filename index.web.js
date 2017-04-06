import 'babel-polyfill'
import { AppRegistry } from 'react-native'
import App from './src/app'

AppRegistry.registerComponent('App', () => App)
AppRegistry.runApplication('App', {rootTag: document.getElementById('react-root')})
