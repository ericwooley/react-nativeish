import axios from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'
import { createAction } from 'redux-actions'
export const FETCH_STARS = 'saga/FETCH_STARS'
export const FETCH_STARS_SUCCESS = 'saga/FETCH_STARS_SUCCESS'
export const FETCH_STARS_FAILURE = 'saga/FETCH_STARS_FAILURE'

export const actions = {
  FETCH_STARS: createAction(FETCH_STARS),
  FETCH_STARS_SUCCESS: createAction(FETCH_STARS_SUCCESS),
  FETCH_STARS_FAILURE: createAction(FETCH_STARS_FAILURE)
}

export default function * watchStars () {
  yield takeLatest(FETCH_STARS, getStars)
}

export function * getStars (action) {
  try {
      return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
          return console.log(responseJson.movies)
        })
        .catch((error) => {
          console.error(error)
        })

    const repoInfo = yield call(axios.get, 'https://api.github.com/repos/redux-saga/redux-saga')
    yield put(actions.FETCH_STARS_SUCCESS(repoInfo.data.stargazers_count))
  } catch (error) {
    yield put(actions.FETCH_STARS_FAILURE(error))
  }
}
