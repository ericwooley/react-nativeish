import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Devpanel from './devpanelScene'
storiesOf('App Scene', module)
  .add('should Render', () => (
    <Devpanel />
  ))
