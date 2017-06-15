import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Devpanel from './devpanelScene'
storiesOf('App Scene', module)
  .add('should Render', () => (
    <Devpanel />
  ))
