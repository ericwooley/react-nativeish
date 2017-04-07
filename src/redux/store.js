import { createStore, combineReducers, applyMiddleware } from 'redux'
import counter from './reducers/counter'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
export function createReduxStore (name) {
  const reducers = combineReducers({counter})
  const middleware = applyMiddleware(sagaMiddleware)
  let store = createStore(reducers, middleware)
  sagaMiddleware.run(rootSaga)
  return store
}
