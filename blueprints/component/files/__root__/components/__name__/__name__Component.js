import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
  Button
} from 'react-native-elements'
export default function <%= pascalEntityName %> (props) {
  const starCountText = props.starCount < 1 ? 'Get Stars' : props.starCount + ' stars'
  const icon = props.starCount < 1 ? 'star-o' : 'star'
  return (
    <View style={{styles.container}}>
      <Button
        icon={{ name: icon, type: 'font-awesome' }}
        title={starCountText} onPress={props.onPress} />
    </View>
  )
}

<%= pascalEntityName %>.propTypes = {
  starCount: React.PropTypes.number.isRequired,
  onPress: React.PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
