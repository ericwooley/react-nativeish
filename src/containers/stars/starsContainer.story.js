import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../redux/store'
import Stars from './starsContainer'

storiesOf('StarsContainer', module)
  .add('with text', () => {
    const reduxStore = createReduxStore('Starter Kit', {counter: {count: 7}})
    return (
      <Provider store={reduxStore}>
        <Stars />
      </Provider>
    )
  })
