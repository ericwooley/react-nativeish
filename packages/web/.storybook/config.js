import 'babel-polyfill'
import { configure } from '@kadira/storybook';
// generate required css
try {
  require("font-awesome-webpack")
} catch (e) {
  console.warn('Fonts not loaded')
}
import {LinkService, setLinkServiceSingleton} from '../../src/services/linkService/linkService'
setLinkServiceSingleton(new LinkService({openLinkBehavior: (url) => { window.location.href = url }}))



function loadStories() {
 require('../../src/stories')
}

configure(loadStories, module);
