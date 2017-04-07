import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension'
// create the saga middleware

export function createReduxStore (name) {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware))
  let store = createStore(reducers, middleware)
  sagaMiddleware.run(rootSaga)
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
