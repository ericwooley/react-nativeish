import React from 'react'
import RootNavigation from './src/navigation'
import { View, StyleSheet } from 'react-native'
import Expo from 'expo'
import { Provider } from 'react-redux'
import configureStore from './src/store/configure-store'
// import StorybookUI from './storybook'
// module.exports = __DEV__ ? StorybookUI : App
const { store } = configureStore()
const styles = StyleSheet.create({
  rootView: {
    paddingTop: Expo.Constants.statusBarHeight,
    flex: 1
  }
})
module.exports = () =>
  <Provider store={store}>
    <View style={styles.rootView}>
      <RootNavigation />
    </View>
  </Provider>
