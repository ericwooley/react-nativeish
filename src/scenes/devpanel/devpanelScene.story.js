import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'
import Devpanel from './devpanelScene'
storiesOf('App Scene', module)
  .add('should Render', () => (
    <Devpanel />
  ))
