import { StackNavigator } from 'react-navigation'
import SceneConfig from './src/scenes'
import {AppRegistry} from 'react-native'
AppRegistry.registerComponent('reactnativereduxstarterkit', () => StackNavigator(SceneConfig))
