import React from 'react'
import { Text, View, Button } from 'react-native'

export default function Stars (props) {
  return (
    <View>
      <Text>
        {props.starCount < 0 ? '-' : props.starCount + ''}
      </Text>
      <Button title={'Get Stars'} onPress={props.onPress} />
    </View>
  )
}

Stars.propTypes = {
  starCount: React.PropTypes.number.isRequired,
  onPress: React.PropTypes.func
}
