import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import {reduxStore} from '../app/appScene'
import {Stars} from '../../containers'
import styles from './starsScene.style'
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
