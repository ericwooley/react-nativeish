import 'babel-polyfill'
import { AppRegistry } from 'react-native'
import scenes from './src/scenes'
// Swap this with different font's if you need them. Defualt is font awesome
import fontAwesome from './node_modules/react-native-vector-icons/Fonts/FontAwesome.ttf'
const reactNativeVectorIconsRequiredStyles = '@font-face { src:url(' + fontAwesome + ');font-family: FontAwesome; }'

// create stylesheet
const style = document.createElement('style')
style.type = 'text/css'
if (style.styleSheet) {
  style.styleSheet.cssText = reactNativeVectorIconsRequiredStyles
} else {
  style.appendChild(document.createTextNode(reactNativeVectorIconsRequiredStyles))
}

// inject stylesheet
document.head.appendChild(style)

AppRegistry.registerComponent('App', () => scenes.App)
AppRegistry.runApplication('App', {rootTag: document.getElementById('react-root')})
