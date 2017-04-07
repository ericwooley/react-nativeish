import { combineReducers, applyMiddleware } from 'redux'
import counter from './reducers/counter'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
// create the saga middleware

export function createReduxStore (name, {reactotron}) {
  const reducers = combineReducers({counter})
  const sagaMonitor = reactotron.createSagaMonitor()
  const sagaMiddleware = createSagaMiddleware({sagaMonitor})
  const middleware = applyMiddleware(sagaMiddleware)
  let store = reactotron.createStore(reducers, middleware)
  sagaMiddleware.run(rootSaga)
  return store
}
