import React from 'react'
import { Button } from 'react-native'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

class NotificationsScreen extends React.Component {
  render () {
    return (
      <div>
        hey there!
        <Button
          onPress={() => this.props.history.push('/')}
          title='Go back home'
        />
      </div>
    )
  }
}
NotificationsScreen.propTypes = {
  history: PropTypes.any
}
export default withRouter(NotificationsScreen)
