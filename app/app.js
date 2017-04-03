import React from 'react'
import { Provider } from 'react-redux'
import {createReduxStore} from './redux/store'
import {View, Text} from 'react-native'
export default function App (props) {
  return (
		<Provider store={createReduxStore('Starter Kit')}>
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
