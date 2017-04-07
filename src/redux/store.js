import { createStore, combineReducers, applyMiddleware } from 'redux'
import counter from './reducers/counter'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension'
// create the saga middleware

export function createReduxStore (name) {
  const reducers = combineReducers({counter})
  const sagaMiddleware = createSagaMiddleware()
  const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware))
  let store = createStore(reducers, middleware)
  sagaMiddleware.run(rootSaga)
  return store
}
