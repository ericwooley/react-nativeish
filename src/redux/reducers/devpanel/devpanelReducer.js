import { createAction, handleActions } from 'redux-actions'

// Name Spaced Action Types
const SET_MOCKS_ENABLED = 'Devpanel/SET_MOCKS_ENABLED'
export const actions = {
  SET_MOCKS_ENABLED
}

// createAction is a lib for creating FSAs
// see https://github.com/acdlite/flux-standard-action, for info in the flux standard action
export const actionCreators = {
  enableMocks: createAction(SET_MOCKS_ENABLED)
}

export const initialState = {
  mocksEnabled: false
}

export default handleActions({
  [SET_MOCKS_ENABLED]: (state, action) =>
    ({...state, mocksEnabled: action.payload})
}, initialState)
