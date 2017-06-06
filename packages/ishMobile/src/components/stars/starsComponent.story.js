import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions';
import Stars from './starsComponent'
storiesOf('Stars', module)
  .add('with text', () => (
    <Stars onClick={action('clicked')}>
      Hello Button
    </Stars>
  ))
  .add('with some emoji', () => (
    <Stars onClick={action('clicked')}>
      😀 😎 👍 💯
    </Stars>
  ))
  .add('with no onClick', () => (
    <Stars>
      Test
    </Stars>
  ))
