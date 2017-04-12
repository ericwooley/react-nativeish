import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import {reduxStore} from '../app/appScene'
import {MockToggle} from '../../containers'
import styles from './devpanelScene.style'

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
