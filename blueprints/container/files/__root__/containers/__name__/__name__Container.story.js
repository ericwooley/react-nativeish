import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../redux/store'
import <%= pascalEntityName %> from './<%= camelEntityName %>Container'
const reduxStore = createReduxStore('Starter Kit', {})
storiesOf('<%= pascalEntityName %>Container', module)
  .add('with text', () => (
    <Provider store={reduxStore}>
      <<%= pascalEntityName %> />
    </Provider>
  ))
