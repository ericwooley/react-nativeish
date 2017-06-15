import React from 'react'
import { View } from 'react-native'
import {MockToggle} from '../../containers'
import styles from './devpanelScene.style'
import {SceneWrapper} from '../'
class DevpanelScene extends React.Component {
  render () {
    return (
      <SceneWrapper>
        <View style={styles.container}>
          <MockToggle />
        </View>
      </SceneWrapper>
    )
  }
}

DevpanelScene.propTypes = {
}
DevpanelScene.navigationOptions = {
  title: 'Dev Panel'
}
export default DevpanelScene
