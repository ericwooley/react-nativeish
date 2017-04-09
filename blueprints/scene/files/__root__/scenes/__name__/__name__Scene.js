
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import {reduxStore} from '../app/appScene'
import {Stars} from '../../containers'
class <%= pascalEntityName %>Scene extends React.Component {
  render () {
    return (
      <Provider store={reduxStore}>
        <View style={styles.container}>
          <Stars />
        </View>
      </Provider>
    )
  }
}

<%= pascalEntityName %>Scene.propTypes = {
}
<%= pascalEntityName %>Scene.navigationOptions = {
  title: 'Github stars'
}
export default <%= pascalEntityName %>Scene
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
