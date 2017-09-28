import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, TouchableHighlight, Platform } from 'react-native'

const Highlight = Platform.select({
  android: TouchableHighlight,
  ios: TouchableOpacity
})
const Button = props =>
  <Highlight onPress={props.onPress}>
    {props.children}
  </Highlight>

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func
}
Button.defaultProps = {
  onPress: () => {}
}

export { Button as default }
