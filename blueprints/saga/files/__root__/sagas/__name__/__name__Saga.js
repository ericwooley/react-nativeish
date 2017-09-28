import axios from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import { createAction } from 'redux-actions'

// Saga action strings
export const FETCH_STARS = 'saga/<%= pascalEntityName %>/FETCH_STARS'
export const FETCH_STARS_SUCCESS = 'saga/<%= pascalEntityName %>/FETCH_STARS_SUCCESS'
export const FETCH_STARS_FAILURE = 'saga/<%= pascalEntityName %>/FETCH_STARS_FAILURE'

export const actions = {
  FETCH_STARS: createAction(FETCH_STARS),
  FETCH_STARS_SUCCESS: createAction(FETCH_STARS_SUCCESS),
  FETCH_STARS_FAILURE: createAction(FETCH_STARS_FAILURE)
}

export default function * watch<%= pascalEntityName %> () {
  yield takeLatest(FETCH_STARS, get<%= pascalEntityName %>)
}

export function * get<%= pascalEntityName %> (action) {
  try {
    const repoInfo = yield call(axios.get, 'https://api.github.com/repos/ericwooley/react-native-redux-jest-starter-kit')
    yield put(actions.FETCH_STARS_SUCCESS(repoInfo.data.stargazers_count))
  } catch (error) {
    yield put(actions.FETCH_STARS_FAILURE(error))
  }
}

