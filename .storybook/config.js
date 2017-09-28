import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/Button/index.story');
  // You can require as many stories as you need.
}

configure(loadStories, module);
