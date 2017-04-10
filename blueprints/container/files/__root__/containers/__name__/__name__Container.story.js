import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../redux/store'
import <%= pascalEntityName %> from './<%= camelEntityName %>Container'

storiesOf('<%= pascalEntityName %>Container', module)
  .add('with 7 stars', () => {
    const reduxStore = createReduxStore('<%= pascalEntityName %> story store', {counter: {count: 7}})
    return (
      <Provider store={reduxStore}>
        <<%= pascalEntityName %> />
      </Provider>
    )
  })
