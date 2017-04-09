import React from 'react'
import { storiesOf } from '@kadira/storybook'
import App from './appScene'
storiesOf('App Scene', module)
  .add('should Render', () => (
    <App />
  ))
