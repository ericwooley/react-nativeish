import rootReducer from '../reducers'
import { createStore, combineReducers } from 'redux'

export default initialState => {
  const store = createStore(combineReducers(rootReducer), initialState)
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(combineReducers(nextRootReducer))
    })
  }
  return { store }
}
