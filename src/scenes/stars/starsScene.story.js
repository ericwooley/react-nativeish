import React from 'react'
import { storiesOf } from '@kadira/storybook'
import StarsScene from './starsScene'
storiesOf('App Scene', module)
  .add('should Render', () => (
    <StarsScene />
  ))
