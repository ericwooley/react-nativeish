import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import <%= pascalEntityName %> from './<%= camelEntityName %>Component'
storiesOf('components/<%= pascalEntityName %>', module)
  .add('with text', () => (
    <<%= pascalEntityName %> onClick={action('clicked')}>
      Hello Button
    </<%= pascalEntityName %>>
  ))
  .add('with some emoji', () => (
    <<%= pascalEntityName %> onClick={action('clicked')}>
      😀 😎 👍 💯
    </<%= pascalEntityName %>>
  ))
  .add('with no onClick', () => (
    <<%= pascalEntityName %>>
      Test
    </<%= pascalEntityName %>>
  ))
