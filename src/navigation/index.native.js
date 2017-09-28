import React from 'react'
import {TabNavigator} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import StorybookUI from '../../storybook'
import HomeScreen from '../scenes/HomeScreen/HomeScreen'
import NotificationScreen from '../scenes/NotificationScreen/NotificationScreen'

class MyStorybookScreen extends React.Component {
  render () {
    return (
      <StorybookUI />
    )
  }
}

MyStorybookScreen.navigationOptions = {
  tabBarLabel: 'Storybook',
  tabBarIcon: ({ tintColor }: props.tabBarIcon) => (
    <Ionicons name='ios-book' size={32} color={tintColor} />
  )
}

let scenes = {
  Home: {
    screen: HomeScreen
  },
  Notifications: {
    screen: NotificationScreen
  }
}

if (__DEV__) {
  scenes = {
    ...scenes,
    Storybook: {
      screen: MyStorybookScreen
    }
  }
}

const MyApp = TabNavigator(scenes, {
  tabBarOptions: {
    activeTintColor: '#e91e63'
  }
})

export default MyApp
