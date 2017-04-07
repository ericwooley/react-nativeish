import 'babel-polyfill'
import React from 'react'
import { AppRegistry } from 'react-native'
import { App } from './src/scenes'
import Reactotron from 'reactotron-react-js'
import configureReactoron from './src/redux/reactotron'
const reactotron = configureReactoron(Reactotron)
Reactotron.log('hello rendering world')
console.tron = Reactotron
AppRegistry.registerComponent('App', () => () => <App reactotron={reactotron} />)
AppRegistry.runApplication('App', {rootTag: document.getElementById('react-root')})
