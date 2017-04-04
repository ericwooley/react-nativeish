import React from 'react'
import { Provider } from 'react-redux'
import {createReduxStore} from './redux/store'
import {View, Text} from 'react-native'
import { StackNavigator, nav } from 'react-navigation'

const reduxStore = createReduxStore('Starter Kit')

export function App (props) {
  return (
		<Provider store={reduxStore}>
			<View>
				<Text>Test</Text>
				<Text>Test</Text>
				<Text>Test</Text>
				<Text>Test</Text>
				<Text>Test 5</Text>
			</View>
		</Provider>
  )
}
