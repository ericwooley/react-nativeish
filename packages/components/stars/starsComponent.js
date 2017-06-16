import React from 'react'
import { View, StyleSheet, Button} from 'react-primitives'
import PropTypes from 'prop-types'
export default function Stars (props) {
  const starCountText = props.starCount < 1 ? 'Get Stars ' : props.starCount + ' stars '
  const icon = props.starCount < 1 ? 'star-o' : 'star'
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        icon={{ name: icon, type: 'font-awesome' }}
        title={"test" + starCountText} onPress={props.onPress} />
    </View>
  )
}

Stars.propTypes = {
  starCount: PropTypes.number,
  onPress: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
