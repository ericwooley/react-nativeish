import { configure } from '@kadira/storybook';
// generate required css
import fontAwesome from '../../node_modules/react-native-vector-icons/Fonts/FontAwesome.ttf'
const reactNativeVectorIconsRequiredStyles = '@font-face { src:url(' + fontAwesome + ');font-family: FontAwesome; }'

// create stylesheet
const style = document.createElement('style')
style.type = 'text/css'
if (style.styleSheet) {
  style.styleSheet.cssText = reactNativeVectorIconsRequiredStyles
} else {
  style.appendChild(document.createTextNode(reactNativeVectorIconsRequiredStyles))
}

function loadStories() {
 require('../../src/stories')
}

configure(loadStories, module);
