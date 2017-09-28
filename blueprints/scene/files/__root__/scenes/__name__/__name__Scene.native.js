import React from 'react'
import {Button} from 'react-native'
import {props} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

export default class <%= pascalEntityName %>Scene extends React.Component {
  props: {
    navigation: props.navigation
  }
  render () {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title='Go to notifications'
      />
    )
  }
}
<%= pascalEntityName %>Scene.navigationOptions = {
  tabBarLabel: 'Home',
  // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  tabBarIcon: ({ tintColor }: props.tabBarIcon) => (
    <Ionicons name='ios-home' size={32} color={tintColor} />
  )
}
