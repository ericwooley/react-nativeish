import axios from 'axios'
import { takeLatest, call, put } from 'redux-saga/effects'

export const FETCH_STARS = 'saga/FETCH_STARS'
export const FETCH_STARS_SUCCESS = 'saga/FETCH_STARS_SUCCESS'
export const FETCH_STARS_FAILURE = 'saga/FETCH_STARS_FAILURE'
export default function * watchStars () {
  yield takeLatest(FETCH_STARS, getStars)
}

export function * getStars (action) {
  try {
    const repoInfo = yield call(axios.get, 'https://api.github.com/repos/redux-saga/redux-saga')
    console.log(repoInfo)
    yield put({type: FETCH_STARS_SUCCESS, payload: repoInfo.data.stargazers_count})
  } catch (error) {
    console.error('error fetching star count', error)
    yield put({type: FETCH_STARS_FAILURE, error})
  }
}
