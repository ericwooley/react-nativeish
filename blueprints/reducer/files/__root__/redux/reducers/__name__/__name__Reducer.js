import { createAction, handleActions } from 'redux-actions'
import {FETCH_STARS_SUCCESS} from '../../sagas/stars/starsSaga'
// Name Spaced Action Types
const INCREMENT = '<%= pascalEntityName %>/INCREMENT'
const DECREMENT = '<%= pascalEntityName %>/DECREMENT'
export const actions = {
  INCREMENT,
  DECREMENT,
  FETCH_STARS_SUCCESS
}

// createAction is a lib for creating FSAs
// see https://github.com/acdlite/flux-standard-action, for info in the flux standard action
export const actionCreators = {
  increment: createAction(INCREMENT),
  decrement: createAction(DECREMENT)
}

export const initialState = {
  count: 0
}

export default handleActions({
  [INCREMENT]: (state, action) =>
    ({...state, count: state.count + action.payload}),
  [DECREMENT]: (state, action) =>
    ({...state, count: state.count - action.payload}),
  [FETCH_STARS_SUCCESS]: (state, action) =>
    ({...state, count: action.payload})
}, initialState)
