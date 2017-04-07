import {getStars} from '../stars'
import { call } from 'redux-saga/effects'
import axios from 'axios'

it('should call the api', () => {
  const iterator = getStars()
  expect(iterator.next().value).toEqual(call(axios.get, 'https://api.github.com/repos/redux-saga/redux-saga'))
})
