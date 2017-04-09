import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import {reduxStore} from '../app/appScene'
import {Stars} from '../../containers'
class App extends React.Component {
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

App.propTypes = {
}
App.navigationOptions = {
  title: 'Github stars'
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
