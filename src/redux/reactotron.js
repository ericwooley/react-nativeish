import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'
export default function configureReactotron (Reactotron) {
  Reactotron
  .configure()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect()
  return Reactotron
}
