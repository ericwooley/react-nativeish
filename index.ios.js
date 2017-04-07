import React from 'react'
import { App } from './src/scenes'
import {AppRegistry} from 'react-native'
import Reactotron from 'reactotron-react-native'
import configureReactoron from './src/redux/reactotron'
const reactotron = configureReactoron(Reactotron)
const reactNativeReduxStarterKit = () => <App reactotron={reactotron} />
AppRegistry.registerComponent('App', () => reactNativeReduxStarterKit)
