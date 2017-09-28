import React from 'react'
import {Button} from 'react-native'
import {props} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

export default class NotificationsScreen extends React.Component {
  props: {
    navigation: props.navigation
  }
  render () {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title='Go back home'
      />
    )
  }
}
NotificationsScreen.navigationOptions = {
  tabBarLabel: 'Notifications',
  tabBarIcon: ({ tintColor }: props.tabBarIcon) => (
    <Ionicons name='ios-notifications' size={32} color={tintColor} />
  )
}
