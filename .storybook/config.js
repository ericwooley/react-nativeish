import { configure } from '@kadira/storybook'

console.log('using web')
function loadStories () {
  require('../src/stories')
}

configure(loadStories, module)
