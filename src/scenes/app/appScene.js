import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../redux/store'
import { Button } from 'react-native-elements'
import {Scenes} from '../'
export const reduxStore = createReduxStore('Starter Kit')
class App extends React.Component {
  render () {
    return (
      <Provider store={reduxStore}>
        <View style={styles.container}>
          <Image source={require('../../assets/universal-logo.png')} style={{height: 73, width: 246}} />
          <Text>React Native Universal Web</Text>
          <Button title='Go To Stars' onPress={() => this.props.navigation.navigate(Scenes.Stars)} />
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  logo: {
    alignSelf: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  touchable: {
    backgroundColor: '#CAE6FE'
  }
})
