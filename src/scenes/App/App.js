import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../redux/store'
import Stars from '../../containers/stars/starsContainer'

const reduxStore = createReduxStore('Starter Kit')
class App extends React.Component {
  render () {
    return (
      <Provider store={reduxStore}>
        <View style={styles.container}>
          <Image source={require('../../assets/universal-logo.png')} style={{height: 73, width: 246}} />
          <Text>React Native Universal Web</Text>
          <Stars />
        </View>
      </Provider>
    )
  }
}

App.propTypes = {
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
