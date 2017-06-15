import React from 'react'
import { View } from 'react-native'
import {Stars} from '../../containers'
import styles from './starsScene.style'
import {SceneWrapper} from '../'
class App extends React.Component {
  render () {
    return (
      <SceneWrapper>
        <View style={styles.container}>
          <Stars />
        </View>
      </SceneWrapper>
    )
  }
}

App.propTypes = {
}
App.navigationOptions = {
  title: 'Github stars'
}
export default App
