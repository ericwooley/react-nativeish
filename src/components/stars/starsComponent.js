import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
  Button
} from 'react-native-elements'
import {Link} from '../'
export default function Stars (props) {
  const starCountText = props.starCount < 1 ? 'Get Stars ' : props.starCount + ' stars '
  const icon = props.starCount < 1 ? 'star-o' : 'star'
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        icon={{ name: icon, type: 'font-awesome' }}
        title={starCountText} onPress={props.onPress} />
      <Link
        text='Star us on github! It really helps us out'
        url='https://github.com/ericwooley/react-native-redux-jest-starter-kit' />
    </View>
  )
}

Stars.propTypes = {
  starCount: React.PropTypes.number,
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
