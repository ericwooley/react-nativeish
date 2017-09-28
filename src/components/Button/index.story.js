import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './'
import { Text } from 'react-native'

storiesOf('Button', module)
  .add('with text', () =>
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  )
  .add('with some emoji', () =>
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  )
