import rootReducer from '../reducers'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'

export default initialState => {
  const browserHistory = createHistory()
  const middleware = routerMiddleware(browserHistory)
  // Create a history of your choosing (we're using a browser history in this case)

  // Build the middleware for intercepting and dispatching navigation actions
  /* globals window */
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        {
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }
      )
      : compose
  const store = createStore(
    combineReducers({
      ...rootReducer,
      routing: routerReducer
    }),
    composeEnhancers(applyMiddleware(middleware)),
    initialState
  )
  // When we reintroduce sagas https://gist.github.com/markerikson/dc6cee36b5b6f8d718f2e24a249e0491
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(
        combineReducers({
          ...rootReducer,
          routing: routerReducer
        })
      )
    })
  }
  return { store, history: browserHistory }
}
