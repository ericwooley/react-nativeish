import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'
import App from './appScene'
storiesOf('App Scene', module)
  .add('should Render', () => (
    <App />
  ))
