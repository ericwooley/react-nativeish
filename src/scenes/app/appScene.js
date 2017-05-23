import React from 'react'
import { View, Image, Text } from 'react-native'
import { Button } from 'react-native-elements'
import {Scenes, SceneWrapper} from '../'
import styles from './appScene.style'
const logo = require('../../assets/universal-logo.png')
class App extends React.Component {
  render () {
    return (
      <SceneWrapper>
        <View style={styles.container}>
          <Image source={logo} style={{height: 73, width: 246}} />
          <Text>React Native Universal Web</Text>
          <Button className='stars-button' title='Go To Stars' onPress={() => this.props.navigation.navigate(Scenes.Stars)} />
          <Button className='dev-panel-button' title='DevPanel' onPress={() => this.props.navigation.navigate(Scenes.DevPanel)} />
        </View>
      </SceneWrapper>
    )
  }
}

App.propTypes = {
  navigation: React.PropTypes.shape({
    navigate: React.PropTypes.func.isRequired
  })
}
App.navigationOptions = {
  title: 'Welcome'
}
export default App
