import React from 'react'
import { View } from 'react-native'
import {
  Button
} from 'react-native-elements'
export default function Stars (props) {
  const starCountText = props.starCount < 1 ? 'Get Stars' : props.starCount + ' stars'
  const icon = props.starCount < 1 ? 'star-o' : 'star'
  return (
    <View>
      <Button
        icon={{ name: icon, type: 'font-awesome' }}
        title={starCountText} onPress={props.onPress} />
    </View>
  )
}

Stars.propTypes = {
  starCount: React.PropTypes.number.isRequired,
  onPress: React.PropTypes.func
}
