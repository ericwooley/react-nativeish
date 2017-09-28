import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'
import PropTypes from 'prop-types'
// import StorybookUI from '../../storybook'
import asyncComponent from './asyncHOC'

const AsyncHome = asyncComponent(() =>
  import('../scenes/HomeScreen/HomeScreen').then(module => module.default)
)
const AsyncNotification = asyncComponent(() =>
  import('../scenes/NotificationScreen/NotificationScreen').then(
    module => module.default
  )
)

// Create an enhanced history that syncs navigation events with the store
const RootRouter = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route path='/' exact component={AsyncHome} />
        <Route path='/notifications' exact component={AsyncNotification} />
      </div>
    </ConnectedRouter>
  )
}
RootRouter.propTypes = {
  history: PropTypes.any
}
export default RootRouter
