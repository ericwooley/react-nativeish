import React from 'react'
import {
  Button
} from 'react-native-elements'

export default function MockToggle (props) {
  const mockText = props.mocksEnabled ? 'Disable Mocks' : 'Enable Mocks'
  const icon = props.mocksEnabled ? 'check-square' : 'square-o'
  return (
    <Button
      icon={{ name: icon, type: 'font-awesome' }}
      title={mockText} onPress={props.onPress} />
  )
}

MockToggle.propTypes = {
  mocksEnabled: React.PropTypes.bool,
  onPress: React.PropTypes.func
}
