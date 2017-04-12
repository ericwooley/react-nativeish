import React from 'react'
import { View, Image, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../redux/store'
import { Button } from 'react-native-elements'
import {Scenes} from '../'
import styles from './appScene.style'
export const reduxStore = createReduxStore('Starter Kit')
class App extends React.Component {
  render () {
    return (
      <Provider store={reduxStore}>
        <View style={styles.container}>
          <Image source={require('../../assets/universal-logo.png')} style={{height: 73, width: 246}} />
          <Text>React Native Universal Web</Text>
          <Button className='stars-button' title='Go To Stars' onPress={() => this.props.navigation.navigate(Scenes.Stars)} />
          <Button className='dev-panel-button' title='DevPanel' onPress={() => this.props.navigation.navigate(Scenes.DevPanel)} />
        </View>
      </Provider>
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
