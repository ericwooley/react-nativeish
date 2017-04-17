import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Stars} from '../../containers'
import styles from './<%= camelEntityName %>Scene.style'
import {SceneWrapper} from '../'
class <%= pascalEntityName %>Scene extends React.Component {
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

<%= pascalEntityName %>Scene.propTypes = {
}
<%= pascalEntityName %>Scene.navigationOptions = {
  title: 'Github stars'
}
export default <%= pascalEntityName %>Scene
