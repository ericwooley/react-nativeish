import React from 'react'
import { storiesOf } from '@storybook/react-native'
import StarsScene from './starsScene'
storiesOf('App Scene', module)
  .add('should Render', () => (
    <StarsScene />
  ))
