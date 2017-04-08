import 'babel-polyfill'
import { configure } from '@kadira/storybook';
// generate required css
try {
  require("font-awesome-webpack")
} catch (e) {
  console.warn('Fonts not loaded')
}




function loadStories() {
 require('../../src/stories')
}

configure(loadStories, module);
