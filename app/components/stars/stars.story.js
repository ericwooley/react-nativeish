import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Stars from './stars'
storiesOf('Stars', module)
  .add('with no onClick', () => (
    <Stars />
  ))
  .add('with count', () => (
    <Stars starCount={12} />
  ))
  .add('with onClick', () => (
    <Stars onClick={action('get stars click')} />
  ))
  .add('with onClick and count', () => (
    <Stars starCount={47} onClick={action('get stars click')} />
  ))
