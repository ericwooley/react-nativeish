import { AppRegistry } from 'react-native'
import { getStorybookUI, configure } from '@kadira/react-native-storybook'

// import stories
configure(() => {
  require('../src/stories')
}, module)

const StorybookUI = getStorybookUI({port: 7007, host: 'localhost'})
AppRegistry.registerComponent('reactnativereduxstarterkit', () => StorybookUI)
