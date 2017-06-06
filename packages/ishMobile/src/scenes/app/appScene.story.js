import React from 'react'
import { storiesOf } from '@storybook/react-native'
import App from './appScene'
storiesOf('App Scene', module)
  .add('should Render', () => (
    <App />
  ))
