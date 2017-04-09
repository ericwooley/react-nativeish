import 'babel-polyfill'
import 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'
import SceneConfig from './src/scenes'
require('font-awesome-webpack')

AppRegistry.registerComponent('App', () => StackNavigator(SceneConfig))
AppRegistry.runApplication('App', {rootTag: document.getElementById('react-root')})


