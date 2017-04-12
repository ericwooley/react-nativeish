import {getStars, actions} from './starsSaga'
import { call, put } from 'redux-saga/effects'
import axios from 'axios'

it('should call the api', () => {
  const iterator = getStars()
  expect(iterator.next().value).toEqual(call(axios.get, 'https://api.github.com/repos/ericwooley/react-native-redux-jest-starter-kit'))
})

it('should call the api', () => {
  const iterator = getStars()
  iterator.next()
  expect(iterator.next({data: {stargazers_count: 32}}).value).toEqual(put(actions.FETCH_STARS_SUCCESS(32)))
})

it('should handle errors', () => {
  const iterator = getStars()
  iterator.next()
  const error = new Error('test error')
  expect(iterator.throw(error).value).toEqual(put(actions.FETCH_STARS_FAILURE(error)))
})
