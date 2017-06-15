import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions';
import MockToggle from './mockToggleComponent'

storiesOf('MockToggle', module)
  .add('mocks enabled', () => (
    <MockToggle mocksEnabled onPress={action('onPress')} />
  ))
  .add('mocks disabled', () => (
    <MockToggle mocksEnabled={false} onPress={action('onPress')} />
  ))
