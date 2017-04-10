import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'
import <%= pascalEntityName %> from './<%= camelEntityName %>Scene'
storiesOf('App Scene', module)
  .add('should Render', () => (
    <<%= pascalEntityName %> />
  ))
