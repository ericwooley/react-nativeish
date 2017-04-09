import React from 'react'
import { storiesOf } from '@kadira/storybook'
import <%= pascalEntityName %> from './<%= camelEntityName %>Scene'
storiesOf('App Scene', module)
  .add('should Render', () => (
    <<%= pascalEntityName %> />
  ))
