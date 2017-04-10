import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import MockToggle from './mockToggleComponent'

storiesOf('MockToggle', module)
  .add('mocks enabled', () => (
    <MockToggle mocksEnabled onPress={action('onPress')} />
  ))
  .add('mocks disabled', () => (
    <MockToggle mocksEnabled={false} onPress={action('onPress')} />
  ))
