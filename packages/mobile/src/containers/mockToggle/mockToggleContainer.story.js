import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../redux/store'
import MockToggle from './mockToggleContainer'

storiesOf('MockToggleContainer', module)
  .add('with mocks disabled', () => {
    const reduxStore = createReduxStore('ToggleMock story store', {devpanel: {mocksEnabled: false}})
    return (
      <Provider store={reduxStore}>
        <MockToggle />
      </Provider>
    )
  })
