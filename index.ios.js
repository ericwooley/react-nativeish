/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import App from './src/app'
import {AppRegistry} from 'react-native'

const reactNativeReduxStarterKit = () => <App />
AppRegistry.registerComponent('reactNativeReduxStarterKit', () => reactNativeReduxStarterKit)
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('root') })
