import 'babel-polyfill'
import 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'
import SceneConfig from 'ishMobile/src/scenes'
import {LinkService, setLinkServiceSingleton} from 'ishMobile/src/services/linkService/linkService'
setLinkServiceSingleton(new LinkService({openLinkBehavior: (url) => { window.location.href = url }}))
require('font-awesome-webpack')

AppRegistry.registerComponent('App', () => StackNavigator(SceneConfig))
AppRegistry.runApplication('App', {rootTag: document.getElementById('react-root')})
