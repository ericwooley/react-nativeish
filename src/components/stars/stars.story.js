import React from 'react'
import { storiesOf, action } from '@kadira/react-native-storybook'
import Stars from './stars'
storiesOf('Stars', module)
  .add('with positive count', () => (
    <Stars starCount={123} onPress={action('get stars click')} />
  ))
  .add('with negative count', () => (
    <Stars starCount={-1} onPress={action('get stars click')} />
  ))
