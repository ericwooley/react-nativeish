import { StackNavigator } from 'react-navigation'
import SceneConfig from './src/scenes'
import {AppRegistry, Linking} from 'react-native'
import {LinkService, setLinkServiceSingleton} from './src/services/linkService/linkService'

// You have to use react native linking service to open urls
setLinkServiceSingleton(new LinkService({openLinkBehavior: (url) => Linking.openURL(url).catch(err => console.error('An error occurred', err))}))
AppRegistry.registerComponent('reactnativereduxstarterkit', () => StackNavigator(SceneConfig))
