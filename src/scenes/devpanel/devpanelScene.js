
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import {reduxStore} from '../app/appScene'
import {MockToggle} from '../../containers'
class DevpanelScene extends React.Component {
  render () {
    return (
      <Provider store={reduxStore}>
        <View style={styles.container}>
          <MockToggle />
        </View>
      </Provider>
    )
  }
}

DevpanelScene.propTypes = {
}
DevpanelScene.navigationOptions = {
  title: 'Dev Panel'
}
export default DevpanelScene
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
