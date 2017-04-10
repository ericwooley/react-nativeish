import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'
import Link from './linkComponent'
storiesOf('Link', module)
  .add('with text', () => (
    <Link text='test' />
  ))
  .add('with url', () => (
    <Link url='http://www.test.com' />
  ))
