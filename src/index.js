import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import configureStore from './store/configure-store'

export const { store, history } = configureStore()
const bootstrap = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component history={history} />
    </Provider>,
    document.getElementById('root')
  )
}
bootstrap(App)

if (module.hot) {
  module.hot.accept('./App', () => bootstrap(App))
}

registerServiceWorker()
